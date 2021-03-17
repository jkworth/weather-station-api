import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'archive' })
export class Archive {
  @Field(() => Date)
  @PrimaryColumn({ name: 'reported', type: 'timestamp' })
  timestamp: Date;

  @Field()
  @Column({ type: 'float', precision: 5, scale: 2 })
  tempF: number;

  @Field({ nullable: true })
  @Column({ type: 'float', precision: 5, scale: 2, nullable: true })
  feelsF: number;

  @Field()
  @Column({ name: 'windSpeedMPH', type: 'float', precision: 5, scale: 2 })
  windSpeedMph: number;

  @Field({ nullable: true })
  @Column({ name: 'windSpeedMPH_avg', type: 'float', precision: 5, scale: 2, nullable: true })
  windSpeedMphAvg: number;

  @Field(() => Int)
  @Column({ name: 'windDEG', type: 'smallint' })
  windDeg: number;

  @Field(() => Int, { nullable: true })
  @Column({ name: 'windGustMPH', type: 'tinyint', nullable: true })
  windGustMph: number;

  @Field(() => Int, { nullable: true })
  @Column({ name: 'windGustDEG', type: 'smallint', nullable: true })
  windGustDeg: number;

  @Field(() => Int)
  @Column({ type: 'tinyint' })
  relH: number;

  @Field()
  @Column({ name: 'pressureInHg', type: 'float', precision: 4, scale: 2 })
  pressureinHg: number;

  @Field()
  @Column({ name: 'dewptF', type: 'float', precision: 5, scale: 2 })
  dewPointF: number;

  @Field()
  @Column({ name: 'rainin', type: 'float', precision: 5, scale: 2 })
  rainIn: number;

  @Field()
  @Column({ name: 'total_rainin', type: 'float', precision: 5, scale: 2 })
  totalRainIn: number;

  @Field(() => Int, { nullable: true })
  @Column({ name: 'uvindex', type: 'tinyint', nullable: true })
  uvIndex: number;

  @Field(() => Int, { nullable: true })
  @Column({ name: 'light', type: 'mediumint', nullable: true })
  light: number;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'smallint', nullable: true })
  lightSeconds: number;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'smallint', nullable: true })
  lightning: number;
}
