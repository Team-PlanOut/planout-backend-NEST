import {MigrationInterface, QueryRunner} from "typeorm";

export class FriendsMigrations1654161290446 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "friends" (
            
            )`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
