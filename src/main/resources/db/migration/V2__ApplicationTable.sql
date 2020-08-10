CREATE TABLE application(
    customerId UUID NOT NULL PRIMARY KEY,
    customerNationalId varchar(100) NOT NULL UNIQUE,
    transferedMoney int NOT NULL
)