import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerAsyncOptions } from '@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface';
import * as config from 'config';
const mailerConfig = config.get('mailer');

export default {
  useFactory: () => ({
    transport: {
      service: 'gmail',
      auth: {
        user: mailerConfig.email,
        pass: mailerConfig.password,
      },
    },
    template: {
      dir: process.cwd() + '/templates',
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
  }),
} as MailerAsyncOptions;
