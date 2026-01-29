CREATE TABLE movies (
                        id BIGSERIAL PRIMARY KEY,
                        title TEXT NOT NULL,
                        description TEXT NOT NULL,
                        release_date DATE NOT NULL,
                        UNIQUE (title)
);