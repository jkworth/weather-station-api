import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'windspeed' })
export class WindSpeed {
  @Field()
  @PrimaryColumn({ type: 'timestamp' })
  timestamp: Date;

  @Field()
  @Column({ name: 'speedMPH', type: 'float', precision: 5, scale: 2 })
  speed: number;

  @Field({ nullable: true })
  @Column({ name: 'gustMPH', type: 'float', precision: 5, scale: 2, nullable: true })
  gust: number;

  @Field({ nullable: true })
  @Column({ name: 'averageMPH', type: 'float', precision: 5, scale: 2, nullable: true })
  average: number;

  @Field()
  @Column({ type: 'char', length: 1 })
  device: string;

  @Field()
  @Column({ type: 'char', length: 1 })
  source: string;
}
