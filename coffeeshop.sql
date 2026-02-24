-- DROP DATABASE IF EXISTS coffeeshop;
-- CREATE DATABASE coffeeshop;
DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS roles;

DROP TABLE IF EXISTS orders;

DROP TABLE IF EXISTS carts;

DROP TABLE IF EXISTS cart_items;

DROP TABLE IF EXISTS products;

DROP TABLE IF EXISTS product_categories;

DROP TABLE IF EXISTS testimonies;

CREATE TABLE product_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE testimonies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    proffesion VARCHAR(255),
    picture VARCHAR(255),
    review VARCHAR(255),
    rating INT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INT FOREIGN KEY REFERENCES roles(id) NOT NULL,
    cart_id INT FOREIGN KEY REFERENCES carts(id) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE roles(
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    cart_id INT FOREIGN KEY REFERENCES carts(id) NOT NULL,
    total INT NOT NULL,
    status INT NOT NULL,
    fullname VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    delivery VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE carts(
    id SERIAL PRIMARY KEY,
    user_id INT FOREIGN KEY REFERENCES users(id) NOT NULL,
    size VARCHAR(255) NOT NULL,
    hotice VARCHAR(255) NOT NULL,
    quantity VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE cart_items(
    id SERIAL PRIMARY KEY,
    cart_id INT FOREIGN KEY REFERENCES carts(id) NOT NULL,
    product_id INT FOREIGN KEY REFERENCES products(id) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    category_id INT FOREIGN KEY REFERENCES categories(id) NOT NULL,
    favorite_product BOOLEAN NOT NULL,
    name VARCHAR(255) NOT NULL,
    image1 VARCHAR(255) NOT NULL,
    image2 VARCHAR(255) NOT NULL,
    image3 VARCHAR(255) NOT NULL,
    image4 VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    discount FLOAT NOT NULL,
    rating INT NOT NULL,
    review INT NOT NULL,
    stock INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);