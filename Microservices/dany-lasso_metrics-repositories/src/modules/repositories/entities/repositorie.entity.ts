import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Relation,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

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
  @Column({ type: 'timestamp' })
  create_time: Date;

  @ApiProperty()
  @Column({ type: 'char', length: 1 })
  status: string;

  @OneToOne(() => Metric, (metric) => metric.repo)
  metric: Relation<Metric>;

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
