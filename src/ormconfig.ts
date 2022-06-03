import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'planout',
    migrationsRun: true,
    entities: [ 'src/entities/*.ts'],//edit here
    migrations: ['src/migrations/*.ts'],
    synchronize: true, 
}; 