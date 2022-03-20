import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MailerInput } from './dto/input-mailer.input';
import { MailerType } from './entities/mailer.type';
import MailerService from './mailer.service';

@Resolver()
export class MailerResolver {
  constructor(private readonly mailerService: MailerService) {}

  // QUERY
  @Query(() => MailerType, { name: 'sendQuery' })
  async sendEmailQuery() {
    return this.mailerService.sendMailQuery();
  }
  // MUTATION

  @Mutation((returns) => MailerType, { nullable: true })
  async sendEmail(@Args('data') argsEmail: MailerInput): Promise<MailerType> {
    return await this.mailerService.sendMail(argsEmail);
  }
}
