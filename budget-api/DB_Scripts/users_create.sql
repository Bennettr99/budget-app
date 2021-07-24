USE [Finance]
GO

/****** Object:  Table [dimension].[users]    Script Date: 7/24/2021 9:06:57 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

DROP TABLE IF EXISTS [dimension].[users]

CREATE TABLE [dimension].[users](
	[userId] [int] IDENTITY(1,1) NOT NULL,
	[firstName] [varchar](255) NOT NULL,
	[lastName] [varchar](255) NOT NULL,
	[username] [varchar](255) NOT NULL,
	[password] [varchar](255) NOT NULL,
	[isDeleted] [bit] NOT NULL,
	[addedByName] [varchar](255) NOT NULL,
	[addedByDate] [date] NOT NULL,
	[modifiedByName] [varchar](255) NOT NULL,
	[modifiedByDate] [date] NOT NULL,
 CONSTRAINT [PK_userId] PRIMARY KEY CLUSTERED 
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dimension].[users] ADD  DEFAULT ((0)) FOR [isDeleted]
GO

ALTER TABLE [dimension].[users] ADD  DEFAULT (SYSTEM_USER) FOR [addedByName]
GO

ALTER TABLE [dimension].[users] ADD  DEFAULT (getutcdate()) FOR [addedByDate]
GO

ALTER TABLE [dimension].[users] ADD  DEFAULT (SYSTEM_USER) FOR [modifiedByName]
GO

ALTER TABLE [dimension].[users] ADD  DEFAULT (getutcdate()) FOR [modifiedByDate]
GO
