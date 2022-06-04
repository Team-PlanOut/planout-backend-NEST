import {MigrationInterface, QueryRunner} from "typeorm";

export class UsersMigrations1654158970410 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" (
            
        )`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
