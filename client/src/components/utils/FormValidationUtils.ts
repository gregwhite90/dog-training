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
