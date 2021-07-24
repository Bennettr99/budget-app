USE [Finance]
GO

/****** Object:  Table [dimension].[transactions]    Script Date: 7/24/2021 9:05:30 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

DROP TABLE IF EXISTS [dimension].[transactions]

CREATE TABLE [dimension].[transactions](
	[transactionId] [int] IDENTITY(1,1) NOT NULL,
	[userId] [int] NOT NULL,
	[description] [varchar](255) NULL,
	[amount] [decimal](18, 0) NULL,
	[accountType] [int] NOT NULL,
	[transactionDate] [date] NULL,
	[isDeleted] [bit] NOT NULL,
	[addedByName] [varchar](255) NOT NULL,
	[addedByDate] [date] NOT NULL,
	[modifiedByName] [varchar](255) NOT NULL,
	[modifiedByDate] [date] NOT NULL,
 CONSTRAINT [PK_transactionId] PRIMARY KEY CLUSTERED 
(
	[transactionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dimension].[transactions] ADD  DEFAULT ((0)) FOR [isDeleted]
GO

ALTER TABLE [dimension].[transactions] ADD  DEFAULT (SYSTEM_USER) FOR [addedByName]
GO

ALTER TABLE [dimension].[transactions] ADD  DEFAULT (getutcdate()) FOR [addedByDate]
GO

ALTER TABLE [dimension].[transactions] ADD  DEFAULT (SYSTEM_USER) FOR [modifiedByName]
GO

ALTER TABLE [dimension].[transactions] ADD  DEFAULT (getutcdate()) FOR [modifiedByDate]
GO

ALTER TABLE [dimension].[transactions]  WITH CHECK ADD  CONSTRAINT [FK_userId] FOREIGN KEY([userId])
REFERENCES [dimension].[users] ([userId])
GO

ALTER TABLE [dimension].[transactions] CHECK CONSTRAINT [FK_userId]
GO


