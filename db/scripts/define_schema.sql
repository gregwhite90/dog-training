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
       info_url      VARCHAR NOT NULL
);

CREATE TABLE dog_breeds (
       dog_id          SERIAL,
       breed_id        SERIAL,
       CONSTRAINT fkDog
                  FOREIGN KEY(dog_id) REFERENCES dogs(id)
                  ON DELETE CASCADE,
       CONSTRAINT fkBreed
                  FOREIGN KEY(breed_id) REFERENCES breeds(id)
                  ON DELETE CASCADE
);
