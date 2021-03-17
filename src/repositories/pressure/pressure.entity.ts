import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'pressure' })
export class Pressure {
  @Field()
  @PrimaryColumn({ type: 'timestamp' })
  timestamp: Date;

  @Field()
  @Column({ name: 'inhg', type: 'float', precision: 4, scale: 2 })
  inchesOfHg: number;

  @Field()
  @Column({ type: 'char', length: 1 })
  device: string;

  @Field()
  @Column({ type: 'char', length: 1 })
  source: string;
}
