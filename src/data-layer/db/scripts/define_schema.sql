CREATE TABLE dogs (
       id           SERIAL PRIMARY KEY,
       name         VARCHAR NOT NULL,
       picture      VARCHAR
);

CREATE TYPE incentive AS ENUM ('LURE', 'SHAPE');

CREATE TABLE behaviors (
       id                       SERIAL PRIMARY KEY,
       dog_id                   INT NOT NULL,
       name                     VARCHAR NOT NULL,
       explanation              VARCHAR,
       demo_media               VARCHAR,
       incentive_method         incentive,
       incentive_description    VARCHAR,
       incentive_demo_media     VARCHAR,
       verbal_command           VARCHAR,
       hand_signal              VARCHAR,
       hand_demo_media          VARCHAR,
       has_duration             BOOLEAN,
       release_command          VARCHAR,
       CONSTRAINT fk_dog
                  FOREIGN KEY(dog_id) REFERENCES dogs(id)
                  ON DELETE CASCADE,
       CONSTRAINT no_release_without_duration
                  CHECK(has_duration OR (release_command IS NULL))
);


CREATE TYPE frequency AS ENUM ('CONTINUOUS', 'INTERMITTENT');

CREATE TABLE training_stages (
       id                    SERIAL PRIMARY KEY,
       behavior_id           INT NOT NULL,
       seq                   INT NOT NULL,
       incentive             BOOLEAN NOT NULL,
       verbal                BOOLEAN NOT NULL,
       hand                  BOOLEAN NOT NULL,
       reward_frequency      frequency NOT NULL,
       CONSTRAINT fk_behavior
                  FOREIGN KEY(behavior_id) REFERENCES behaviors(id)
                  ON DELETE CASCADE,
       CONSTRAINT unique_seq
                  UNIQUE(behavior_id, seq),
       CONSTRAINT at_least_one_action
                  CHECK (incentive OR verbal OR hand),
       CONSTRAINT nonnegative_seq
                  CHECK (seq >= 0)
);

CREATE TABLE training_sessions (
       id                      SERIAL PRIMARY KEY,
       dog_id                  INT NOT NULL,
       minutes_long            INT,
       start_timestamp         TIMESTAMP WITH TIME ZONE,
       CONSTRAINT fk_dog
                  FOREIGN KEY(dog_id) REFERENCES dogs(id)
                  ON DELETE CASCADE,
       CONSTRAINT nonnegative_minutes
                  CHECK (minutes_long IS NULL OR minutes_long >= 0)
);

CREATE TYPE qualitative_level AS ENUM ('LOW', 'MEDIUM', 'HIGH');

CREATE TABLE training_progress (
       id                      SERIAL PRIMARY KEY,
       training_session_id     INT NOT NULL,
       training_stage_id       INT NOT NULL,
       seq                     INT NOT NULL,
       successes               INT,
       attempts                INT,
       distance                qualitative_level,
       duration                qualitative_level,
       distractions            qualitative_level,
       CONSTRAINT fk_training_session
                  FOREIGN KEY(training_session_id) REFERENCES training_sessions(id)
                  ON DELETE CASCADE,
       CONSTRAINT fk_training_stage
                  FOREIGN KEY(training_stage_id) REFERENCES training_stages(id)
                  ON DELETE CASCADE,
       CONSTRAINT valid_success_rate
                  CHECK (successes IS NULL OR attempts IS NULL OR successes <= attempts),
       CONSTRAINT nonnegative_seq
                  CHECK (seq >= 0),
       CONSTRAINT nonnegative_successes
                  CHECK (successes IS NULL OR successes >= 0),
       CONSTRAINT nonnegative_attempts
                  CHECK (attempts IS NULL OR attempts >= 0)
);

CREATE TYPE user_dog_role AS ENUM ('OWNER', 'TRAINER', 'VIEWER');

CREATE TABLE user_dogs (
       user_id         VARCHAR NOT NULL,
       dog_id          INT NOT NULL,
       user_role       user_dog_role,
       CONSTRAINT fk_dog
                  FOREIGN KEY(dog_id) REFERENCES dogs(id)
                  ON DELETE CASCADE,
       CONSTRAINT one_role
                  UNIQUE(user_id, dog_id)
);

CREATE TYPE user_training_session_role AS ENUM ('MAINTAINER', 'PARTICIPANT');

CREATE TABLE user_training_sessions (
       user_id                      VARCHAR NOT NULL,
       training_session_id          INT NOT NULL,
       user_role                    user_training_session_role NOT NULL,
       CONSTRAINT fk_training_session
                  FOREIGN KEY(training_session_id) REFERENCES training_sessions(id)
                  ON DELETE CASCADE,
       CONSTRAINT session_only_once
                  UNIQUE(user_id, training_session_id)
);

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
