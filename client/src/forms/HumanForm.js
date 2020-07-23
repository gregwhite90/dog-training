import React from 'react';
import { Formik, Field, Form } from 'formik';
import IntroduceHumanMutation from '../relay-mutations/IntroduceHuman';

function HumanForm({relay: { environment }}) {
    return (
        <div>
            <h1>Add a human</h1>
            <Formik
                initialValues={{
                    humanName: '',
                }}
                onSubmit={(values) => IntroduceHumanMutation.commit(
                        environment,
                        values.humanName)}
            >
                <Form>
                    <label htmlFor="humanName">Name</label>
                    <Field id="humanName" name="humanName" />

                    <button type="submit">Add human!</button>
                </Form>
            </Formik>
        </div>
    );
}

export default HumanForm;
