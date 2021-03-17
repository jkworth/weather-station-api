import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'lightningData' })
export class LightningDatum {
  @Field()
  @PrimaryColumn({ length: 1 })
  source: string;

  @Field(() => Int)
  @Column({ name: 'strikecount', type: 'smallint' })
  strikes: number;

  @Field()
  @Column({ type: 'bit' })
  interference: boolean;

  @Field({ nullable: true })
  @Column({ name: 'last_strike_ts', type: 'timestamp', nullable: true })
  lastStrikeTimeStamp: Date;

  @Field(() => Int, { nullable: true })
  @Column({ name: 'last_strike_distance', type: 'tinyint', nullable: true })
  lastStrikeDistance: number;
}
