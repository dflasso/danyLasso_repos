import { MigrationInterface, QueryRunner } from "typeorm";

export class initaltables1661184906932 implements MigrationInterface {
    name = 'initaltables1661184906932'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE "repo_id_repository_seq"`);
        await queryRunner.query(`CREATE TABLE "repo" ("id_repository" INT DEFAULT nextval('"repo_id_repository_seq"') NOT NULL, "name" varchar(50) NOT NULL, "state" char(1) NOT NULL, "create_time" timestamp NOT NULL, "status" char(1) NOT NULL, "createAt" timestamptz NOT NULL DEFAULT current_timestamp(), "updateAt" timestamptz NOT NULL DEFAULT current_timestamp(), CONSTRAINT "PK_a7904527dae09298e858344e12e" PRIMARY KEY ("id_repository"))`);
        await queryRunner.query(`CREATE TABLE "metric" ("id_repository" int8 NOT NULL, "coverage" decimal(5,2) NOT NULL, "bugs" decimal(5,0) NOT NULL, "vulnerabilities" decimal(5,0) NOT NULL, "hotspot" decimal(5,0) NOT NULL, "code_smells" decimal(5,0) NOT NULL, "createAt" timestamptz NOT NULL DEFAULT current_timestamp(), "updateAt" timestamptz NOT NULL DEFAULT current_timestamp(), "repoIdRepository" int8, CONSTRAINT "REL_1abba6aba1b308ea3bbd7409da" UNIQUE ("repoIdRepository"), CONSTRAINT "PK_a3d51eccaae2540f36543d5473b" PRIMARY KEY ("id_repository"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1abba6aba1b308ea3bbd7409da" ON "metric" ("repoIdRepository") `);
        await queryRunner.query(`ALTER TABLE "organization" ADD "createAt" timestamptz NOT NULL DEFAULT current_timestamp()`);
        await queryRunner.query(`ALTER TABLE "organization" ADD "updateAt" timestamptz NOT NULL DEFAULT current_timestamp()`);
        await queryRunner.query(`ALTER TABLE "metric" ADD CONSTRAINT "FK_1abba6aba1b308ea3bbd7409da9" FOREIGN KEY ("repoIdRepository") REFERENCES "repo"("id_repository") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "metric" DROP CONSTRAINT "FK_1abba6aba1b308ea3bbd7409da9"`);
        await queryRunner.query(`ALTER TABLE "organization" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "organization" DROP COLUMN "createAt"`);
        await queryRunner.query(`DROP INDEX "metric"@"IDX_1abba6aba1b308ea3bbd7409da" CASCADE`);
        await queryRunner.query(`DROP TABLE "metric"`);
        await queryRunner.query(`DROP TABLE "repo"`);
        await queryRunner.query(`DROP SEQUENCE "repo_id_repository_seq"`);
    }

}
