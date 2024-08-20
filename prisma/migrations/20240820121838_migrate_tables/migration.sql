BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Passenger] (
    [passenger_id] INT NOT NULL IDENTITY(1,1),
    [fullname] NVARCHAR(1000) NOT NULL,
    [birth_date] DATETIME2 NOT NULL,
    [parent_name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [phone_number] NVARCHAR(1000),
    [cellphone_number] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Passenger_pkey] PRIMARY KEY CLUSTERED ([passenger_id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
