import React from 'react';
import { Formik, Form } from 'formik';
import AddBreedToDogMutation from '../relay-mutations/AddBreedToDog';
import DogSelect from './DogSelect';
import BreedSelect from './BreedSelect';

function BreedsForm({relay: { environment }}) {
    return (
        <div>
            <Formik
                initialValues={{
                    dogId: '', // TODO: update
                    breedId: '',
                }}
                onSubmit={(values) => AddBreedToDogMutation.commit(
                        environment,
                        values.dogId,
                        values.breedId)}
            >
                <Form>
                    <h2>Add a breed to a dog</h2>
                    <label htmlFor="dogId">Dog</label>
                    <DogSelect
                        relay={{environment}}
                        name="dogId"
                        defaultValue=''
                        defaultText="Select a dog"
                    />
                    <label htmlFor="breedId">Breed</label>
                    <BreedSelect
                        relay={{environment}}
                        name="breedId"
                        defaultValue=''
                        defaultText="Select a breed"
                    />

                    <button type="submit">Add!</button>
                </Form>
            </Formik>
        </div>
    );
}

export default BreedsForm;
