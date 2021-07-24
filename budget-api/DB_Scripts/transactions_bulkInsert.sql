USE Finance
GO

BEGIN TRAN IMPORT;

DROP TABLE IF EXISTS TEMP

CREATE TABLE TEMP (
	[TransactionDate] date,
	[Amount] decimal, 
	[Empty] nvarchar(15),
	[Description] nvarchar(256))

BULK INSERT TEMP
--FROM 'D:\Budget\Checking\06.2021.txt'
FROM 'D:\Budget\Savings\06.2021.txt'
WITH (
		 FIELDTERMINATOR=',',   
		 rowterminator='0x0a')

INSERT INTO [dimension].[transactions] ([userId], [description], [amount], [accountType], [transactionDate])
-- SELECT 1, t.Description, t.Amount, 1, t.transactionDate
SELECT 1, t.Description, t.Amount, 2, t.transactionDate
FROM Temp t

DROP TABLE IF EXISTS TEMP

COMMIT TRAN IMPORT;