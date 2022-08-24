import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Relation,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { Tribe } from '../../tribes/entities/tribe.entity';
import { Metric } from '../../metrics/entities/metric.entity';

@Entity()
export class Repo {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id_repository: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @ApiProperty()
  @Column({ type: 'char', length: 1 })
  state: string;

  @ApiProperty()
  @Column({ type: 'char', length: 1 })
  status: string;

  @OneToOne(() => Metric, (metric) => metric.repo)
  metric: Relation<Metric>;

  @ManyToOne(() => Tribe, (tribe) => tribe.repositories)
  tribe: Relation<Tribe>;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  create_time: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
}
