import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm';

import { Organization } from '../../organizations/entities/organization.entity';
import { Repo } from '../../repositories/entities/repositorie.entity';

export class Tribe {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id_tribe: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @ApiProperty()
  @Column({ type: 'int' })
  status: number;

  @OneToMany(() => Repo, (repo) => repo.tribe)
  repositories: Repo[];

  @ManyToOne(() => Organization, (organization) => organization.tribes)
  organization: Relation<Organization>;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
}
