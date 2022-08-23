import { MigrationInterface, QueryRunner } from 'typeorm';

export class scripts1661191759264 implements MigrationInterface {
  name = 'scripts1661191759264';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "organization" ADD "createAt" timestamptz NOT NULL DEFAULT current_timestamp()`,
    );
    await queryRunner.query(
      `ALTER TABLE "organization" ADD "updateAt" timestamptz NOT NULL DEFAULT current_timestamp()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "organization" DROP COLUMN "updateAt"`,
    );
    await queryRunner.query(
      `ALTER TABLE "organization" DROP COLUMN "createAt"`,
    );
  }
}
