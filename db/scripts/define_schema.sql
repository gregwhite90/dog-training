CREATE TABLE humans (
       id           SERIAL PRIMARY KEY,
       name         VARCHAR NOT NULL
);

CREATE TABLE dogs (
       id           SERIAL PRIMARY KEY,
       name         VARCHAR NOT NULL
);

CREATE TABLE breeds (
       id           SERIAL PRIMARY KEY,
       name         VARCHAR NOT NULL,
       infoUrl      VARCHAR NOT NULL
);

CREATE TABLE dogBreeds (
       dogId          SERIAL,
       breedId        SERIAL,
       CONSTRAINT fkDog
                  FOREIGN KEY(dogId) REFERENCES dogs(id)
                  ON DELETE CASCADE,
       CONSTRAINT fkBreed
                  FOREIGN KEY(breedId) REFERENCES breeds(id)
                  ON DELETE CASCADE
);
