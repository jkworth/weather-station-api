import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'temperature' })
export class Temperature {
  @Field()
  @PrimaryColumn({ type: 'timestamp' })
  timestamp: Date;

  @Field()
  @Column({ name: 'tempF', type: 'float', precision: 5, scale: 2 })
  temp: number;

  @Field({ nullable: true })
  @Column({ name: 'heatindex', type: 'float', precision: 5, scale: 2, nullable: true })
  heatIndex: number;

  @Field({ nullable: true })
  @Column({ name: 'feelslike', type: 'float', precision: 5, scale: 2, nullable: true })
  feelsLike: number;

  @Field({ nullable: true })
  @Column({ name: 'windchill', type: 'float', precision: 5, scale: 2, nullable: true })
  windChill: number;

  @Field({ nullable: true })
  @Column({ name: 'dewptf', type: 'float', precision: 5, scale: 2, nullable: true })
  dewPoint: number;

  @Field()
  @Column({ type: 'char', length: 1 })
  device: string;

  @Field()
  @Column({ type: 'char', length: 1 })
  source: string;
}
