import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'dailyrain' })
export class DailyRain {
  @Field()
  @Column({ name: 'dailyrainin', type: 'float', precision: 5, scale: 2 })
  dailyRainIn: number;

  @Field()
  @PrimaryColumn({ type: 'datetime' })
  date: Date;

  @Field({ nullable: true })
  @Column({ name: 'last_update', type: 'timestamp', nullable: true })
  timestamp: Date;

  @Field()
  @Column({ type: 'char', length: 1 })
  device: string;

  @Field()
  @Column({ type: 'char', length: 1 })
  source: string;
}
