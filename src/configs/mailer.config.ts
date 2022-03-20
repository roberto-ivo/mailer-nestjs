import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerAsyncOptions } from '@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface';

export default {
  useFactory: () => ({
    transport: {
      service: 'gmail',
      auth: {
        user: '<your_email>',
        pass: '<your_password>',
      },
    },
    defaults: {
      from: '"No-Reply" <no-reply@<your_name>.com>',
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
