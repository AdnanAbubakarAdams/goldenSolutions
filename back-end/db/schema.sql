DROP DATABASE IF EXISTS goldensolutions_dev;
CREATE DATABASE goldensolutions_dev;

\c goldensolutions_dev;

CREATE TABLE users (
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    dob TEXT NOT NULL,
    address TEXT NOT NULL,
    unit TEXT, 
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    zipcode VARCHAR(5) NOT NULL,
    phonenumber VARCHAR(10) NOT NULL,
    email TEXT NOT NULL,
    user_type TEXT NOT NULL,
    profilephoto TEXT UNIQUE,
    languages TEXT
);

CREATE TABLE requests (
    req_title TEXT,
    req_date TEXT NOT NULL,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    time TEXT,
    image TEXT,
    assigned BOOLEAN DEFAULT false,
    complete BOOLEAN DEFAULT false
);

