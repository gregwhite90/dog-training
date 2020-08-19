CREATE TABLE pending_invitations (
       id                        SERIAL PRIMARY KEY,
       invitee_email             VARCHAR NOT NULL,
       invited_by                VARCHAR NOT NULL,
       dog_id                    INT NOT NULL,
       user_role                 user_dog_role NOT NULL,
       CONSTRAINT fk_dog
                  FOREIGN KEY(dog_id) REFERENCES dogs(id)
                  ON DELETE CASCADE
);
