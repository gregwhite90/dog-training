import React from 'react';
import { Field } from 'formik';

export default function selectRender({
    propName,
    fieldName,
    defaultValue,
    defaultText
}) {
    return ({error, props}) => {
        if (error) {
            return <div>{error.message}</div>;
        } else if (props) {
            return (
                <Field as="select" name={fieldName}>
                    <option value={defaultValue} disabled>{defaultText}</option>
                    {props[propName].edges
                          .map(e => e.node)
                          .map(node => {
                              return (
                                  <option key={node.id} value={node.id}>
                                      {node.name}
                                  </option>
                              );
                          })}
                </Field>
            );
        }
        return <div>Loading</div>;
    }
}
