import { Field, InputType } from '@nestjs/graphql';
import { OperatorBase } from 'src/repositories/common/operator-base';

@InputType()
export class DailyRainWhereArgs {
  @Field(() => OperatorBase, { nullable: true })
  dailyRainIn: number;

  @Field(() => OperatorBase, { nullable: true })
  date: Date;

  @Field(() => OperatorBase, { nullable: true })
  timestamp: Date;

  @Field(() => OperatorBase, { nullable: true })
  device: string;

  @Field(() => OperatorBase, { nullable: true })
  source: string;
}
