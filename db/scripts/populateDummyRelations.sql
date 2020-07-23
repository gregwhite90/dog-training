declare did INT;
declare bid INT;

SELECT id INTO did from dogs WHERE NAME = 'Rookie';
SELECT id INTO bid from breeds WHERE NAME = 'Bernese Mountain Dog';
INSERT INTO dogBreeds (dogId, breedId) VALUES (did, bid);

SELECT id INTO did from dogs where name = 'Paisley';
INSERT INTO dogBreeds (dogId, breedId) VALUES (did, bid);

SELECT id INTO did from dogs WHERE NAME = 'Nala';
SELECT id INTO bid from breeds WHERE NAME = 'Golden Retriever';
INSERT INTO dogBreeds (dogId, breedId) VALUES (did, bid);

SELECT id INTO did from dogs WHERE NAME = 'Twizzler';
SELECT id INTO bid from breeds WHERE NAME = 'Pointer';
INSERT INTO dogBreeds (dogId, breedId) VALUES (did, bid);

SELECT id INTO did from dogs WHERE NAME = 'Twizzler';
SELECT id INTO bid from breeds WHERE NAME = 'Saint Bernard';
INSERT INTO dogBreeds (dogId, breedId) VALUES (did, bid);
