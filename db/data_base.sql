CREATE TABLE users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username varchar(30) NOT NULL,
    email varchar(50) NOT NULL,
    password_hash varchar(255) NOT NULL
);

CREATE TABLE states(
    state_id INT AUTO_INCREMENT PRIMARY KEY,
    state_name varchar(255) NOT NULL
);

CREATE TABLE gym_locations(
    gym_location_id INT AUTO_INCREMENT PRIMARY KEY,
    class_id INT NOT NULL,
    schedule_id INT NOT NULL,
    state_id INT NOT NULL,
    address varchar(255) NOT NULL,
    FOREIGN KEY (class_id) REFERENCES classes(class_id),
    FOREIGN KEY (schedule_id) REFERENCES schedules(schedule_id),
    FOREIGN KEY (state_id) REFERENCES states(state_id)
);

CREATE TABLE members(
    member_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    gym_location_id INT NOT NULL,
    full_name varchar(255) NOT NULL,
    date_of_birth date,
    address varchar(255),
    phone_number varchar(255) NOT NULL,
    membership_start_date varchar(255) NOT NULL,
    membership_end_date varchar(255) NOT NULL,
    subscription_type varchar(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (gym_location_id) REFERENCES gym_locations(gym_location_id)
);

CREATE TABLE schedules(
    schedule_id INT AUTO_INCREMENT PRIMARY KEY,
    day_of_week varchar(255) NOT NULL,
    opening_time time NOT NULL,
    closing_time time NOT NULL, 
);

CREATE TABLE classes(
    class_id INT AUTO_INCREMENT PRIMARY KEY,
    class_name varchar(255) NOT NULL,
    gym_location_id INT NOT NULL,
    description varchar(255),
    date_time datetime NOT NULL,
    duration time NOT NULL,
    trainer_name varchar(255),
    FOREIGN KEY (gym_location_id) REFERENCES gym_locations(gym_location_id)
);

CREATE TABLE feedbacks(
    feedback_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT NOT NULL,
    class_id INT NOT NULL,
    rating INT NOT NULL,
    comment varchar(255),
    feedback_date date NOT NULL, 
    FOREIGN KEY (member_id) REFERENCES members(member_id),
    FOREIGN KEY (class_id) REFERENCES classes(class_id)
);