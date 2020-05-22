import IParseMailTemplateProviderDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateProviderDTO';

interface IMailContact {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplateProviderDTO;
}
