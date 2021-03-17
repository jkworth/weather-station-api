import { Field, InputType } from '@nestjs/graphql';
import { OperatorBase } from 'src/repositories/common/operator-base';

@InputType()
export class LightningDatumWhereArgs {
  @Field(() => OperatorBase, { nullable: true })
  source: string;

  @Field(() => OperatorBase, { nullable: true })
  strikes: number;

  @Field(() => OperatorBase, { nullable: true })
  interference: boolean;

  @Field(() => OperatorBase, { nullable: true })
  lastStrikeTimeStamp: Date;

  @Field(() => OperatorBase, { nullable: true })
  lastStrikeDistance: number;
}
