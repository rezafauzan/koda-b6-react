-- DROP DATABASE IF EXISTS coffeeshop;
-- CREATE DATABASE coffeeshop;

DROP TABLE IF EXISTS cart_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS carts;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS product_images;
DROP TABLE IF EXISTS product_variants;
DROP TABLE IF EXISTS product_portions;
DROP TABLE IF EXISTS product_campaigns;
DROP TABLE IF EXISTS product_discounts;
DROP TABLE IF EXISTS product_reviews;
DROP TABLE IF EXISTS product_categories;
DROP TABLE IF EXISTS user_profiles;
DROP TABLE IF EXISTS user_credentials;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS testimonies;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    role_id INT NOT NULL DEFAULT 2,
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE user_profiles (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);


CREATE TABLE user_credentials (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE roles(
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    category_id INT NOT NULL,
    favorite_product BOOLEAN NOT NULL DEFAULT FALSE,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    campaign_id INT NOT NULL,
    stock INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE product_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE product_images (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    image VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE product_reviews (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    rating INT NOT NULL,
    messages VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE product_variants (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    variant_name VARCHAR(255) NOT NULL,
    additional_price INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE product_portions (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    portion_size VARCHAR(255) NOT NULL,
    additional_price INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE product_discounts (
    id SERIAL PRIMARY KEY,
    discount_rate FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE product_campaigns (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    discount_id FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE carts(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE cart_items(
    id SERIAL PRIMARY KEY,
    cart_id INT NOT NULL,
    product_id INT NOT NULL,
    size VARCHAR(255) NOT NULL,
    hotice VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    cart_id INT NOT NULL,
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


ALTER TABLE users ADD CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id);
ALTER TABLE user_profiles ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE user_credentials ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id);

INSERT INTO roles (role_name) VALUES ('Admin'), ('Member');

INSERT INTO users (role_id, verified) VALUES (1, TRUE), (2, FALSE), (2, TRUE), (2, TRUE), (2, FALSE), (2, TRUE), (2, FALSE), (2, TRUE), (2, TRUE), (2, TRUE);

INSERT INTO user_profiles (user_id, first_name, last_name, address) VALUES
(1,'Reza','Fauzan Adhima','Jl. Terusan Soreang Cipatik No.16 RT:03 RW:01 Kp.Sukarame Desa Parungserab Kecamatan Soreang Kabupaten Bandung Jawa Barat'),
(2,'Someone','<3','Jl. Terusan Soreang Cipatik Desa Parungserab Kecamatan Soreang Kabupaten Bandung Jawa Barat'),
(3,'Orang','Khayalan','Planet Jupiter jl. ber gas'),
(4,'Lumba','Lumba','Jl. Laut aman 1246'),
(5,'Kucing','Putih','Jl. Thamrin 8'),
(6,'Kucing','Putih','Jl. langit'),
(7,'Kucing','Hallo','Jl. usaha'),
(8,'Orang','Asing','Jl. antah berantah wkwk'),
(9,'George','Harris','Jl. Matraman 20'),
(10,'Hannah','Clark','Jl. Melawai 3');