import { Field, InputType } from '@nestjs/graphql';
import { OperatorBase } from 'src/repositories/common/operator-base';

@InputType()
export class TemperatureWhereArgs {
  @Field(() => OperatorBase, { nullable: true })
  timestamp: Date;

  @Field(() => OperatorBase, { nullable: true })
  temp: number;

  @Field(() => OperatorBase, { nullable: true })
  heatIndex: number;

  @Field(() => OperatorBase, { nullable: true })
  feelsLike: number;

  @Field(() => OperatorBase, { nullable: true })
  windChill: number;

  @Field(() => OperatorBase, { nullable: true })
  dewPoint: number;

  @Field(() => OperatorBase, { nullable: true })
  device: string;

  @Field(() => OperatorBase, { nullable: true })
  source: string;
}
