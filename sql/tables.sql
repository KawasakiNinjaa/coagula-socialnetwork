DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS friendships;
DROP TABLE IF EXISTS chatroom;

CREATE TABLE users (
    id SERIAL primary key,
    first VARCHAR(255) not null,
    last VARCHAR(255) not null,
    email VARCHAR (255) not null unique,
    password VARCHAR (255) not null,
    img_url VARCHAR (300),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE friendships (
    id SERIAL primary key,
    receiver INT NOT NULL REFERENCES users(id),
    sender INT NOT NULL REFERENCES users(id),
    accepted BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE chatroom (
    id SERIAL primary key,
    user_id INT NOT NULL REFERENCES users(id),
    comment TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
