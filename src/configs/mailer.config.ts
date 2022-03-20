import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerAsyncOptions } from '@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface';

export default {
  useFactory: () => ({
    transport:
      'smtps://camarao4.0@lapisco.ifce.edu.br:camarao4.0@smtp.gmail.com',
    defaults: {
      from: '"No-Reply" <no-reply@camarao40.com>',
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