import React from 'react';
import { Formik, Field, Form } from 'formik';
import IntroduceHumanMutation from '../relay-mutations/IntroduceHuman';
import HumansRenderer from '../renderers/HumansRenderer';

function HumanForm({relay: { environment }}) {
    return (
        <div>
            <Formik
                initialValues={{
                    humanName: '',
                }}
                onSubmit={(values) => IntroduceHumanMutation.commit(
                        environment,
                        values.humanName)}
            >
                <Form>
                    <p>
                        Humans in the system:
                    </p>
                    <HumansRenderer relay={{environment}} />
                    <h1>Add a human</h1>

                    <label htmlFor="humanName">Name</label>
                    <Field id="humanName" name="humanName" />

                    <button type="submit">Add human!</button>
                </Form>
            </Formik>
        </div>
    );
}

export default HumanForm;
