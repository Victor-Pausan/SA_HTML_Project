INSERT INTO states (state_name) VALUES ('California');
INSERT INTO states (state_name) VALUES ('New York');
INSERT INTO states (state_name) VALUES ('Florida');

INSERT INTO gym_locations (class_id, schedule_id, state_id, address) VALUES (1, 1, 1, '123 Main St, Los Angeles, CA');
INSERT INTO gym_locations (class_id, schedule_id, state_id, address) VALUES (2, 1, 1, '123 Main St, Los Angeles, CA');
INSERT INTO gym_locations (class_id, schedule_id, state_id, address) VALUES (3, 1, 1, '123 Main St, Los Angeles, CA');

INSERT INTO users (username, email, password_hash) VALUES ('john_doe', 'john@example.com', 'hashed_password1');
INSERT INTO users (username, email, password_hash) VALUES ('jane_smith', 'jane@example.com', 'hashed_password2');