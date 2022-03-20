import { ObjectType, Field } from '@nestjs/graphql';
import { ContextMailerType } from './context-mailer.type';

@ObjectType()
export class MailerType {
  @Field()
  readonly to: string;

  @Field()
  readonly from: string;

  @Field()
  readonly subject: string;

  @Field()
  readonly template: string;

  @Field(() => ContextMailerType)
  readonly context: ContextMailerType;
}
