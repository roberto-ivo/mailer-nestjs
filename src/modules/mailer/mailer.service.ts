import { Injectable } from '@nestjs/common';
import { MailerService as MS } from '@nestjs-modules/mailer';
import {
  generateRandomPassword,
  getWelcomeMail,
} from 'src/helpers/email-function';
import { MailerType } from './entities/mailer.type';
import { MailerInput } from './dto/input-mailer.input';

@Injectable()
export default class MailerService {
  constructor(private readonly mailerService: MS) {}

  // async create(createItemDto: ItemInput): Promise<ItemType> {
  //   const createdItem = new this.itemModel(createItemDto);
  //   return await createdItem.save();
  // }

  async sendMailQuery(): Promise<MailerType> {
    const pass = generateRandomPassword();
    const mail = getWelcomeMail('mock', 'roberto', 'fernandes', pass);

    console.log('mail >> ', mail);
    // await this.mailerService.sendMail(mail);
    return mail;
  }

  async sendMail(emailDto: MailerInput): Promise<MailerType> {
    const pass = generateRandomPassword();
    const mail = getWelcomeMail(
      emailDto.email,
      emailDto.first_name,
      emailDto.surname,
      pass,
    );

    console.log('mail >> ', mail);
    // await this.mailerService.sendMail(mail);
    return mail;
  }
}
