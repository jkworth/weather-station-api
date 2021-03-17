import { Field, InputType } from '@nestjs/graphql';
import { OperatorBase } from 'src/repositories/common/operator-base';

@InputType()
export class ArchiveWhereArgs {
  @Field(() => OperatorBase, { nullable: true })
  timestamp?: Date;

  @Field(() => OperatorBase, { nullable: true })
  tempF?: number;

  @Field(() => OperatorBase, { nullable: true })
  feelsF: number;

  @Field(() => OperatorBase, { nullable: true })
  windSpeedMph: number;

  @Field(() => OperatorBase, { nullable: true })
  windSpeedMphAvg: number;

  @Field(() => OperatorBase, { nullable: true })
  windDeg: number;

  @Field(() => OperatorBase, { nullable: true })
  windGustMph: number;

  @Field(() => OperatorBase, { nullable: true })
  windGustDeg: number;

  @Field(() => OperatorBase, { nullable: true })
  relH: number;

  @Field(() => OperatorBase, { nullable: true })
  pressureinHg: number;

  @Field(() => OperatorBase, { nullable: true })
  dewPointF: number;

  @Field(() => OperatorBase, { nullable: true })
  rainIn: number;

  @Field(() => OperatorBase, { nullable: true })
  totalRainIn: number;

  @Field(() => OperatorBase, { nullable: true })
  uvIndex: number;

  @Field(() => OperatorBase, { nullable: true })
  light: number;

  @Field(() => OperatorBase, { nullable: true })
  lightSeconds: number;

  @Field(() => OperatorBase, { nullable: true })
  lightning: number;
}
