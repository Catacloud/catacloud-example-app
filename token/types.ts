export interface TokenDecoded {
  profile: TokenUser;
  access_token: string;
  expires_at: number;
  id_token: string;
  token_type: string;
  scope: string;
}

interface TokenUser {
  id: number;
  family_name: string;
  given_name: string;
  name: string;
  email?: string;
  email_verified?: boolean;
  picture?: Partial<File>;
  type: UserType;
  siteLanguage: SiteLanguage;
  company?: Company[];
  permissions?: string[];
  hash: string;
}
interface Company {
  accountingTemplate: number;
  country: Country;
  currency: string;
  id: number;
  isAgency: false;
  legalEntity: string;
  name: string;
  organizationNumber: string;
  status: string;
  type: string;
  voucherEmail: string;
}

interface Country {
  code: string;
  name: string;
  voucherEmailDomain: string;
}

enum SiteLanguage {
  Norwegian = "nb_NO",
  English = "en_US",
}

enum UserType {
  Admin = "admin",
  User = "user",
  Accountant = "accountant",
}
