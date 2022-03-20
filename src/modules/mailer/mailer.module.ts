import { Module } from '@nestjs/common';
import { MailerResolver } from './mailer.resolver';
import MailerService from './mailer.service';

@Module({
  imports: [],
  providers: [MailerResolver, MailerService],
  exports: [MailerService],
})
export class MailerModule {}
