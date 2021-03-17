import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'access_status' })
export class AccessStatus {
  @Field()
  @PrimaryColumn({ length: 6 })
  battery: string;

  @Field()
  @Column({ name: 'last_update', type: 'timestamp' })
  timestamp: Date;
}
