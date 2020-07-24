import React from 'react';
import { Formik, Form } from 'formik';
import AddBreedToDogMutation from '../../relay/mutations/AddBreedToDog';
import DogSelect from '../../relay/query-renderers/DogSelect';
import BreedSelect from '../../relay/query-renderers/BreedSelect';

function BreedsForm({relay: { environment }}) {
    const dogDefaultValue = '';
    const breedDefaultValue = '';

    return (
        <div>
            <Formik
                initialValues={{
                    dogId: dogDefaultValue,
                    breedId: breedDefaultValue,
                }}
                onSubmit={(values) => {
                        console.log(values);
                        return AddBreedToDogMutation.commit(
                            environment,
                            values.dogId,
                            values.breedId)
                }}
            >
                <Form>
                    <h2>Add a breed to a dog</h2>
                    <label htmlFor="dogId">Dog</label>
                    <DogSelect
                        relay={{environment}}
                        name="dogId"
                        defaultValue={dogDefaultValue}
                        defaultText="Select a dog"
                    />
                    <label htmlFor="breedId">Breed</label>
                    <BreedSelect
                        relay={{environment}}
                        name="breedId"
                        defaultValue={breedDefaultValue}
                        defaultText="Select a breed"
                    />

                    <button type="submit">Add!</button>
                </Form>
            </Formik>
        </div>
    );
}

export default BreedsForm;
