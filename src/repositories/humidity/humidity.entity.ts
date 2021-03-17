import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'humidity' })
export class Humidity {
  @Field(() => Int)
  @Column({ name: 'relH', type: 'tinyint' })
  relative: number;

  @Field()
  @PrimaryColumn({ type: 'timestamp' })
  timestamp: Date;

  @Field()
  @Column({ type: 'char', length: 1 })
  device: string;

  @Field()
  @Column({ type: 'char', length: 1 })
  source: string;
}
