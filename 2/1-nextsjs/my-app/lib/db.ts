import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";

const AppDataSource = new DataSource({
  type: "postgres",
  url: "postgresql://neondb_owner:npg_NJjhZDdAm6U9@ep-hidden-math-ad1pqdzp-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require",
  
  ssl: true,
  synchronize: true,
  dropSchema: false,
  logging: true,
  entities: [User],
  migrations: [],
  subscribers: [],
  
});

const initializeDB = async () => {
  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }
  return dataSource;
};

// Handle Next.js hot reloading to prevent multiple connections
declare global {
  var dataSource: DataSource | undefined;
}

let dataSource: DataSource;

if (process.env.NODE_ENV === 'production') {
  dataSource = AppDataSource;
} else {
  if (!global.dataSource) {
    global.dataSource = AppDataSource;
  }
  dataSource = global.dataSource;
}

export {  initializeDB };
