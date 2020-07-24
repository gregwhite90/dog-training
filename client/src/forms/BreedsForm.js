import React from 'react';
import { Formik, Field, Form } from 'formik';
import AddBreedToDogMutation from '../relay-mutations/AddBreedToDog';
import DogsRenderer from '../renderers/DogsRenderer';
import BreedsRenderer from '../renderers/BreedsRenderer';
import DogDisplay from '../relay-containers/DogDisplay';
import BreedDisplay from '../relay-containers/BreedDisplay';

function dogSelectOptionCallback(dog) {
    return (
        <option key={dog.id} value={dog.id}>
            <DogDisplay dog={dog} />
        </option>
    );
}

function breedSelectOptionCallback(breed) {
    return (
        <option key={breed.id} value={breed.id}>
            <BreedDisplay breed={breed} />
        </option>
    );
}

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
                    <textarea>Add a breed to a dog</textarea>
                    <label htmlFor="dogId">Dog</label>
                    <Field as="select" name="dogId">
                        <option value=''>Select a dog</option>
                        <DogsRenderer relay={{environment}} nodeCallback={dogSelectOptionCallback} />
                    </Field>
                    <label htmlFor="breedId">Breed</label>
                    <Field as="select" name="breedId">
                        <option value=''>Select a breed</option>
                        <BreedsRenderer relay={{environment}} nodeCallback={breedSelectOptionCallback} />
                    </Field>

                    <button type="submit">Add!</button>
                </Form>
            </Formik>
        </div>
    );
}

export default BreedsForm;
