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
                    dog_id: dogDefaultValue,
                    breed_id: breedDefaultValue,
                }}
                onSubmit={(values) => {
                        return AddBreedToDogMutation.commit(
                            environment,
                            values)
                }}
            >
                <Form>
                    <h2>Add a breed to a dog</h2>
                    <label htmlFor="dog_id">Dog</label>
                    <DogSelect
                        relay={{environment}}
                        name="dog_id"
                        defaultValue={dogDefaultValue}
                        defaultText="Select a dog"
                    />
                    <label htmlFor="breed_id">Breed</label>
                    <BreedSelect
                        relay={{environment}}
                        name="breed_id"
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
