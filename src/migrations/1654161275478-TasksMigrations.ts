import {MigrationInterface, QueryRunner} from "typeorm";

export class TasksMigrations1654161275478 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tasks" (
            
            )`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
