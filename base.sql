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

INSERT INTO user_credentials (user_id, email, phone, password) VALUES
(1,'reza.fauzan@example.com','085183356072','someone<3'),
(2,'someone.love@example.com','085183356072','rezaFA<3'),
(3,'orang.khayalan@example.com','081234567892','password123'),
(4,'lumba.lumba@example.com','081234567893','password123'),
(5,'kucing.putih@example.com','081234567894','password123'),
(6,'kucing.langit@example.com','081234567895','password123'),
(7,'kucing.hallo@example.com','081234567896','password123'),
(8,'orang.asing@example.com','081234567897','password123'),
(9,'george.harris@example.com','081234567898','password123'),
(10,'hannah.clark@example.com','081234567899','password123');

INSERT INTO product_categories (name) VALUES  ('fruit'), ('coffee'), ('smoothie'), ('noodle'), ('dessert'),('addon'), ('snack'), ('cake'), ('non-coffee'), ('food');

INSERT INTO products (category_id, favorite_product, name, description, price, campaign_id, stock) VALUES (1, TRUE, 'Hazzelnut Latte','Delicious latte with hazelnut flavor',22000,1,10), (1, TRUE, 'Kopi Liong','Strong black coffee',10000,1,15), (1, TRUE, 'Kopi Kirr','Smooth coffee with chocolate',80000,1,8), (1, TRUE, 'Kopiru Rariru','Sweet coffee drink',5000,1,12), (2, FALSE,'Avocado Juice','Healthy avocado juice',11000,2,16), (2, FALSE,'Mango Smoothie','Fresh mango smoothie',10000,2,14), (2, FALSE,'Classic Hot Chocolate','Rich hot chocolate',7000,2,10), (2, FALSE,'Strawberry Milkshake','Sweet strawberry milkshake',24000,2,18), (3, FALSE,'Chicken Sandwich','Tasty chicken sandwich',32000,3,12), (3, FALSE,'Cheese Croissant','Buttery croissant with cheese',28000,3,18);

INSERT INTO product_images (product_id, image) VALUES
(1,'/assets/img/image27.png'),
(1,'https://placehold.co/1024x1024.png'),
(1, 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'),
(1, 'https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg'),
(2, 'https://images.pexels.com/photos/34088/pexels-photo.jpg'),
(2,'/assets/img/image22.png'),
(2,'https://placehold.co/1024x1024.png'),
(2, 'https://images.pexels.com/photos/coffee-cup-espresso-cappuccino-37347.jpeg'),
(3, 'https://images.pexels.com/photos/935908/pexels-photo-935908.jpeg'),
(3, 'https://images.pexels.com/photos/414895/pexels-photo-414895.jpeg'),
(3,'/assets/img/image30.png'),
(3,'https://placehold.co/1024x1024.png'),
(4,'/assets/img/product2.png'),
(4,'https://placehold.co/1024x1024.png'),
(4, 'https://images.pexels.com/photos/302897/pexels-photo-302897.jpeg'),
(4, 'https://images.pexels.com/photos/374921/pexels-photo-374921.jpeg'),
(5, 'https://images.pexels.com/photos/208450/pexels-photo-208450.jpeg'),
(5, 'https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg'),
(5, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'),
(5, 'https://images.pexels.com/photos/616940/pexels-photo-616940.jpeg'),
(6, 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg'),
(6, 'https://images.pexels.com/photos/1035174/pexels-photo-1035174.jpeg'),
(6, 'https://images.pexels.com/photos/128430/pexels-photo-128430.jpeg'),
(6, 'https://images.pexels.com/photos/458795/pexels-photo-458795.jpeg'),
(7, 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'),
(7, 'https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg'),
(7, 'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg'),
(7, 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg'),
(8, 'https://images.pexels.com/photos/775031/pexels-photo-775031.jpeg'),
(8, 'https://images.pexels.com/photos/1570975/pexels-photo-1570975.jpeg'),
(8, 'https://images.pexels.com/photos/1282231/pexels-photo-1282231.jpeg'),
(8, 'https://images.pexels.com/photos/34173/pexels-photo.jpg'),
(9, 'https://images.pexels.com/photos/327920/pexels-photo-327920.jpeg'),
(9, 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg'),
(9, 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg'),
(9, 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg'),
(10, 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg'),
(10, 'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg'),
(10, 'https://images.pexels.com/photos/270885/pexels-photo-270885.jpeg'),
(10, 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg');

INSERT INTO product_variants (product_id, variant_name, additional_price) VALUES
(1, 'Hot', 0),
(1, 'Ice', 0),
(2, 'Hot', 0),
(2, 'Ice', 0),
(3, 'Hot', 0),
(3, 'Ice', 0),
(4, 'Hot', 0),
(4, 'Ice', 0),
(5, 'No Sugar', 0),
(5, 'Extra Sugar', 2200),
(6, 'No Sugar', 0),
(6, 'Extra Sugar', 2200),
(7, 'regular', 0),
(7, 'Whipped Cream Topping', 3000),
(8, 'regular', 0),
(8, 'Extra Strawberry', 4000),
(9, 'regular', 0),
(9, 'Whole Wheat Bread', 2200),
(10, 'regular', 0);
(10, 'Extra Cheese', 3000);

INSERT INTO product_portions (product_id, portion_size, additional_price) VALUES
(1, 'Small', 0),
(1, 'Medium', 2000),
(1, 'Large', 5000),
(2, 'Small', 0),
(2, 'Medium', 2000),
(2, 'Large', 5000),
(3, 'Regular', 0),
(3, 'Extra Chocolate', 8000),
(5, 'Regular', 0);

INSERT INTO product_reviews (product_id, user_id, rating, messages) VALUES
(1, 1, 5, 'Hazzelnut Latte is creamy and aromatic, really enjoyed it!'),
(2, 2, 4, 'Kopi Liong has a strong flavor, perfect for morning coffee.'),
(3, 3, 3, 'Kopi Kirr is okay, a bit too sweet for my taste.'),
(4, 4, 5, 'Kopiru Rariru is smooth and delightful, my favorite!'),
(5, 5, 4, 'Avocado Juice is fresh and healthy, quite refreshing.'),
(6, 6, 5, 'Mango Smoothie is perfectly sweet and creamy, loved it!'),
(7, 7, 3, 'Classic Hot Chocolate is good but a little too rich.'),
(8, 8, 5, 'Strawberry Milkshake is delicious and refreshing, highly recommend.'),
(9, 9, 4, 'Chicken Sandwich is tasty with fresh ingredients, satisfied.'),
(10, 10, 5, 'Cheese Croissant is buttery and soft, one of the best I had!');