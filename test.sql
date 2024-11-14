SHOW TABLES

SELECT * FROM User

CREATE TABLE DRIVER (
    driver_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    application_status BOOLEAN,
    FOREIGN KEY (user_id) REFERENCES User(id)
);
CREATE TABLE ADMIN (
    admin_id INT,
    PRIMARY KEY (admin_id),
    FOREIGN KEY (admin_id) REFERENCES User(id)
);

CREATE TABLE SPONSOR (
    sponsor_id INT,
    pointConversionRate DECIMAL(10, 2),
    numOfDrivers INT,
    PRIMARY KEY (sponsor_id),
    FOREIGN KEY (sponsor_id) REFERENCES User(id)
);

ALTER TABLE User
ADD COLUMN user_type ENUM('admin', 'driver', 'sponsor', 'sponsor', 'sponsor_org');
