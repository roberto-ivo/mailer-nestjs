import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerAsyncOptions } from '@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface';

export default {
  useFactory: () => ({
    transport:
      'smtps://robertoivo@lapisco.ifce.edu.br:robertoivo@smtp.gmail.com',
    defaults: {
      from: '"No-Reply" <no-reply@robertoivo.com>',
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
