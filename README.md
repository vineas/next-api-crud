# Next.js API Project with Prisma ORM

This guide outlines the steps for setting up a Next.js API project using Prisma ORM and PostgreSQL. Follow the instructions below to get started.

## Prerequisites

- Node.js installed (v14 or higher)
- PostgreSQL database set up locally
- Basic knowledge of Next.js and Prisma

## 1. Create a New Next.js Project

To begin, create a new Next.js project using the following command:

```bash
npx create-next-app@14.0.4
```

## 2. Navigate to the Project Directory
```
cd next-api
```

## 3. Start the Development Server
```
npm run dev
```

## 4. Install postgre and prisma
```
npm install pg pg-hstore prisma --save-dev
```

## 5. Initialize Prisma in the Project
```
npx prisma init
```

## 6. Configure the Database Connection
edit .env
```
DATABASE_URL="postgres://<username>:<password>@localhost:<port>/<database>"
```

## 7. Define Your Prisma Schema
Open the prisma/schema.prisma file and define your data models. For example:
 ```
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
  posts Post[]
}

model Post {
  id     Int     @id @default(autoincrement())
  title  String
  content String
  author  User   @relation(fields: [authorId], references: [id])
  authorId Int
}
```

## 8. Run Database Migrations
```
npx prisma migrate dev --name <migration-name>
```

## 9. Install Prisma Client
```
npm install @prisma/client
```

## 10. Configure Prisma Client
```
mkdir -p prisma/client
```

Inside the client folder, create a file named index.js:
// prisma/client/index.js

```
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
```