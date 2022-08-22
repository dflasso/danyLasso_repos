import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Organization {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id_organization: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 1024 })
  name: string;

  @ApiProperty()
  @Column({ type: 'int' })
  status: number;
}
