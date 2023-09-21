\c goldensolutions_dev;

-- USERS
INSERT INTO users (firstname, lastname, dob, address, unit, city, state, zipcode, phonenumber, email, user_type, profilephoto, languages) VALUES 
('Adnan', 'Abubakar', '1991-07-11', '1440 Shakespear Ave', '6', 'Bronx', 'NY', '10451', '7186402186', 'abubakaradnanadams@pursuit.org', 'Volunteer', 'https://lh3.googleusercontent.com/a/AGNmyxa1RrJI7q94nLMhLdgH6821Ot4Z8ko0mCpvZ7U_=s576', 'Hausa');

-- REQUESTS
INSERT INTO requests (req_title, req_date, description, location, time, image, assigned, complete) VALUES 
('Shopping', '2024-12-25', 'I need help shopping for groceries', 'Food Bazar', '15:00', 'https://www.griswoldhomecare.com/sub/49822/images/Senior-Man-Receiving-Groceries.jpg', 'FALSE', 'FALSE');
