import {MigrationInterface, QueryRunner} from "typeorm";

export class EventsMigrations1654161263732 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "events" (
            
            )`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
