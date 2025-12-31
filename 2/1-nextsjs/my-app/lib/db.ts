import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});

const initializeDB = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
  return AppDataSource;
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

export { dataSource, initializeDB };
