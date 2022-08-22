import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  Relation,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { Repo } from '../../repositories/entities/repositorie.entity';

@Entity()
export class Metric {
  @ApiProperty()
  @PrimaryColumn('int')
  id_repository: number;

  @OneToOne(() => Repo, (repo) => repo.metric, { nullable: true })
  @JoinColumn({ name: 'fk_repo' })
  repo: Relation<Repo>;

  @ApiProperty()
  @Column({ type: 'numeric', precision: 5, scale: 2 })
  coverage: number;

  @ApiProperty()
  @Column({ type: 'numeric', precision: 5, scale: 0 })
  bugs: number;

  @ApiProperty()
  @Column({ type: 'numeric', precision: 5, scale: 0 })
  vulnerabilities: number;

  @ApiProperty()
  @Column({ type: 'numeric', precision: 5, scale: 0 })
  hotspot: number;

  @ApiProperty()
  @Column({ type: 'numeric', precision: 5, scale: 0 })
  code_smells: number;

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
