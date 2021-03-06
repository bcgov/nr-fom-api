import {QueryRunner, Table} from 'typeorm';

export async function createTable(queryRunner: QueryRunner) {
  await queryRunner.createTable(new Table({
    name: 'submission',
    columns: [
      {
        name: 'id',
        type: 'serial',
        isPrimary: true
      },
      {
        name: 'geometry',
        type: 'geometry'
      },
      {
        name: 'project_id',
        type: 'int'
      },
      {
        name: 'submission_type_code',
        type: 'varchar'
      },
      {
        name: 'revision_count',
        type: 'int'
      },
      {
        name: 'create_timestamp',
        type: 'timestamp'
      },
      {
        name: 'create_user',
        type: 'varchar'
      },
      {
        name: 'update_timestamp',
        type: 'timestamp'
      },
      {
        name: 'update_user',
        type: 'varchar'
      }
    ]
  }), true);
}

export async function dropTable(queryRunner: QueryRunner) {
  await queryRunner.dropTable('submission');
}
