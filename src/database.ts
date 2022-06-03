import { createConnection, ConnectionOptions } from "typeorm";
import { typeOrmConfig } from "./ormconfig";

class DatabaseConnectionManager {

  public static async connect() {
    const connection = await createConnection(
      typeOrmConfig as ConnectionOptions
    );

    return connection;
  }
}

export default DatabaseConnectionManager;