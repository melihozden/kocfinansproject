CREATE TABLE customer(
    customerId UUID NOT NULL PRIMARY KEY,
    customerNationalId varchar(100) NOT NULL UNIQUE,
    customerName varchar(100) NOT NULL,
    customerSurname varchar(100) NOT NULL,
    monthlyIncome int NOT NULL,
    customerPhone varchar(100) NOT NULL,
    creditScore int NOT NULL
)