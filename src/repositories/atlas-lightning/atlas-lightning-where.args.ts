import { Field, InputType } from '@nestjs/graphql';
import { OperatorBase } from 'src/repositories/common/operator-base';

@InputType()
export class AtlasLightningWhereArgs {
  @Field(() => OperatorBase, { nullable: true })
  dailyStrikes: number;

  @Field(() => OperatorBase, { nullable: true })
  currentStrikes: number;

  @Field(() => OperatorBase, { nullable: true })
  date: Date;

  @Field(() => OperatorBase, { nullable: true })
  timestamp: Date;
}
