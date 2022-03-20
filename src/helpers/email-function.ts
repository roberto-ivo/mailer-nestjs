import * as config from 'config';
const mailerConfig = config.get('mailer');

export function generateRandomPassword() {
  const random_pass = require('randomstring');
  const password = random_pass.generate({
    length: 6,
    readable: true,
    charset: 'alphanumeric',
    capitalization: 'lowercase',
  }) as string;

  return password;
}

export function getWelcomeMail(
  email: string,
  first_name: string,
  surname: string,
  password: string,
) {
  return {
    to: email,
    from: mailerConfig.email,
    subject: 'Ative a sua conta - PRF 2.0',
    template: 'email-validation',
    context: {
      name: first_name,
      surname: surname,
      password: password,
      email: email,
      /*       img_header: `${http}:${PORT}/header_img`,
      img_facebook: `${http}:${PORT}/icon_facebook`,
      img_instagram: `${http}:${PORT}/icon_instagram`,
      img_whatsapp: `${http}:${PORT}/icon_wpp`, */
    },
  };
}
