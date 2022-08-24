import { MigrationInterface, QueryRunner } from "typeorm";

export class scripts1661361357951 implements MigrationInterface {
    name = 'scripts1661361357951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE "organization_id_organization_seq"`);
        await queryRunner.query(`CREATE TABLE "organization" ("id_organization" INT DEFAULT nextval('"organization_id_organization_seq"') NOT NULL, "name" varchar(50) NOT NULL, "status" int8 NOT NULL, "createAt" timestamptz NOT NULL DEFAULT current_timestamp(), "updateAt" timestamptz NOT NULL DEFAULT current_timestamp(), CONSTRAINT "PK_c1137363ad9deea0a4e9c6ff32b" PRIMARY KEY ("id_organization"))`);
        await queryRunner.query(`CREATE SEQUENCE "tribe_id_tribe_seq"`);
        await queryRunner.query(`CREATE TABLE "tribe" ("id_tribe" INT DEFAULT nextval('"tribe_id_tribe_seq"') NOT NULL, "name" varchar(50) NOT NULL, "status" int8 NOT NULL, "createAt" timestamptz NOT NULL DEFAULT current_timestamp(), "updateAt" timestamptz NOT NULL DEFAULT current_timestamp(), "organizationIdOrganization" int8, CONSTRAINT "PK_c165ed5e52b4e2ff2af9a7d0fb6" PRIMARY KEY ("id_tribe"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ac7b59ee194ac695e5b587ee6b" ON "tribe" ("organizationIdOrganization") `);
        await queryRunner.query(`CREATE SEQUENCE "repo_id_repository_seq"`);
        await queryRunner.query(`CREATE TABLE "repo" ("id_repository" INT DEFAULT nextval('"repo_id_repository_seq"') NOT NULL, "name" varchar(50) NOT NULL, "state" char(1) NOT NULL, "status" char(1) NOT NULL, "create_time" timestamptz NOT NULL DEFAULT current_timestamp(), "updateAt" timestamptz NOT NULL DEFAULT current_timestamp(), "tribeIdTribe" int8, CONSTRAINT "PK_a7904527dae09298e858344e12e" PRIMARY KEY ("id_repository"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4d36c8258dedb75ec9e1ff7c00" ON "repo" ("tribeIdTribe") `);
        await queryRunner.query(`CREATE TABLE "metric" ("id_repository" int8 NOT NULL, "coverage" decimal(5,2) NOT NULL, "bugs" decimal(5,0) NOT NULL, "vulnerabilities" decimal(5,0) NOT NULL, "hotspot" decimal(5,0) NOT NULL, "code_smells" decimal(5,0) NOT NULL, "createAt" timestamptz NOT NULL DEFAULT current_timestamp(), "updateAt" timestamptz NOT NULL DEFAULT current_timestamp(), "fk_repo" int8, CONSTRAINT "REL_0ee17c6434c9a7e7485b14fa25" UNIQUE ("fk_repo"), CONSTRAINT "PK_a3d51eccaae2540f36543d5473b" PRIMARY KEY ("id_repository"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0ee17c6434c9a7e7485b14fa25" ON "metric" ("fk_repo") `);
        await queryRunner.query(`ALTER TABLE "tribe" ADD CONSTRAINT "FK_ac7b59ee194ac695e5b587ee6bf" FOREIGN KEY ("organizationIdOrganization") REFERENCES "organization"("id_organization") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "repo" ADD CONSTRAINT "FK_4d36c8258dedb75ec9e1ff7c00e" FOREIGN KEY ("tribeIdTribe") REFERENCES "tribe"("id_tribe") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "metric" ADD CONSTRAINT "FK_0ee17c6434c9a7e7485b14fa256" FOREIGN KEY ("fk_repo") REFERENCES "repo"("id_repository") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "metric" DROP CONSTRAINT "FK_0ee17c6434c9a7e7485b14fa256"`);
        await queryRunner.query(`ALTER TABLE "repo" DROP CONSTRAINT "FK_4d36c8258dedb75ec9e1ff7c00e"`);
        await queryRunner.query(`ALTER TABLE "tribe" DROP CONSTRAINT "FK_ac7b59ee194ac695e5b587ee6bf"`);
        await queryRunner.query(`DROP INDEX "metric"@"IDX_0ee17c6434c9a7e7485b14fa25" CASCADE`);
        await queryRunner.query(`DROP TABLE "metric"`);
        await queryRunner.query(`DROP INDEX "repo"@"IDX_4d36c8258dedb75ec9e1ff7c00" CASCADE`);
        await queryRunner.query(`DROP TABLE "repo"`);
        await queryRunner.query(`DROP SEQUENCE "repo_id_repository_seq"`);
        await queryRunner.query(`DROP INDEX "tribe"@"IDX_ac7b59ee194ac695e5b587ee6b" CASCADE`);
        await queryRunner.query(`DROP TABLE "tribe"`);
        await queryRunner.query(`DROP SEQUENCE "tribe_id_tribe_seq"`);
        await queryRunner.query(`DROP TABLE "organization"`);
        await queryRunner.query(`DROP SEQUENCE "organization_id_organization_seq"`);
    }

}
