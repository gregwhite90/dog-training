import * as yup from 'yup';

export function nullable_number(
    number_validation: yup.NumberSchema<number | null | undefined>, // generic type specification is for nullable
    invalid_string_message: string,
) {
    return yup.lazy(value => {
        switch (typeof value) {
            case 'number':
                return number_validation;
            default:
                return yup.string()
                    .nullable(true)
                    .oneOf([""], invalid_string_message)
                    .transform((value, originalValue) => {
                        return yup.string().isType(value) && value === "" ? null : value;
                    });
        }
    });
};

export function nullable_string() {
    return yup.string()
        .nullable()
        .transform((value, originalValue) => {
            return value || null;
        });
};

// TODO: figure out how to use enum in generic guard
export function nullable_enum(enum_obj: any) {
    return yup.mixed<string>()
        .oneOf([""].concat(Object.values(enum_obj)))
        .nullable()
        .transform((value, originalValue) => {
            return value || null;
        });
};
