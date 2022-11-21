/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO-8601 encoded UTC date string. */
  GraphQLDate: any;
  /** An ISO-8601 encoded UTC date string. */
  GraphQLDateTime: any;
  GraphQLFileUpload: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

/** An access group for assigning access */
export type AccessGroup = {
  __typename?: 'AccessGroup';
  /** If the group gives all access to functional permissions */
  allScopes?: Maybe<Scalars['Boolean']>;
  /** The time and date the group was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** A description of the access group */
  description?: Maybe<Scalars['String']>;
  /** The id of the access group */
  id?: Maybe<Scalars['Int']>;
  /** The members of this access group */
  members?: Maybe<Array<Maybe<ClientMember>>>;
  /** The name of the access group */
  name?: Maybe<Scalars['String']>;
  /** A list of all the scopes the group gives access to */
  scopes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The time and date the group was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
};

/** Access group data, for creating a new access group */
export type AccessGroupInputCreate = {
  /** If the group gives all access to functional permissions */
  allScopes?: InputMaybe<Scalars['Boolean']>;
  /** A description of the access group */
  description?: InputMaybe<Scalars['String']>;
  /** A list of client member ids to set as members */
  members?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The name of the access group */
  name: Scalars['String'];
  /** A list of all the scopes the group gives access to */
  scopes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Access group data, for updating an access group */
export type AccessGroupInputUpdate = {
  /** If the group gives all access to functional permissions */
  allScopes?: InputMaybe<Scalars['Boolean']>;
  /** A description of the access group */
  description?: InputMaybe<Scalars['String']>;
  /** The id of the access group */
  id: Scalars['Int'];
  /** A list of client member ids to set as members */
  members?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The name of the access group */
  name?: InputMaybe<Scalars['String']>;
  /** A list of all the scopes the group gives access to */
  scopes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Access group member input for adding or removing a member */
export type AccessGroupMemberInput = {
  /** The id of the access group */
  accessGroupId?: InputMaybe<Scalars['Int']>;
  /** The id of the client member */
  clientMemberId?: InputMaybe<Scalars['Int']>;
};

/** Access group query options and filters */
export type AccessGroupOptions = {
  /** Specify the client to get access groups for */
  clientId?: InputMaybe<Scalars['Int']>;
  /** A string you want to search access groups for */
  search?: InputMaybe<Scalars['String']>;
};

/** An account used in accounting */
export type Account = {
  __typename?: 'Account';
  /** If this account can be deleted (only custom accounts) */
  canDelete?: Maybe<Scalars['Boolean']>;
  /** A description of this account */
  description?: Maybe<Scalars['String']>;
  /** The id/number of the account */
  id?: Maybe<Scalars['Int']>;
  /** The name of this account */
  name?: Maybe<Scalars['String']>;
  /** Which VAT code this account is locked to */
  vatCode?: Maybe<Scalars['Int']>;
  /** If this account should be locked to the VAT code */
  vatCodeLocked?: Maybe<Scalars['Boolean']>;
};

/** Account data, for creating a new account */
export type AccountCreateInput = {
  /** A description of this account */
  description?: InputMaybe<Scalars['String']>;
  /** The id/number of the account */
  id: Scalars['Int'];
  /** The name of this account */
  name?: InputMaybe<Scalars['String']>;
  /** Which VAT code to use on this account */
  vatCode: Scalars['Int'];
  /** If this account should be locked to the VAT code */
  vatCodeLocked?: InputMaybe<Scalars['Boolean']>;
};

/** An account group used in accounting */
export type AccountGroup = {
  __typename?: 'AccountGroup';
  /** The groups under this main accounting group */
  groups?: Maybe<Array<Maybe<AccountSubGroup>>>;
  /** The id of the account group */
  id?: Maybe<Scalars['Int']>;
  /** The name of this account group */
  name?: Maybe<Scalars['String']>;
};

/** Account query options and filters */
export type AccountOptions = {
  /** A string you want to search accounts for */
  search?: InputMaybe<Scalars['String']>;
};

/** A report within AccountReports */
export type AccountReport = {
  __typename?: 'AccountReport';
  account?: Maybe<Account>;
  /** The balance on this report */
  balance?: Maybe<Scalars['Float']>;
  periods?: Maybe<Array<Maybe<AccountReportPeriod>>>;
  /** The total amount on this report */
  total?: Maybe<Scalars['Float']>;
};

/** An account report, during a specific period */
export type AccountReportGroup = {
  __typename?: 'AccountReportGroup';
  /** The total balance on this report */
  balance?: Maybe<Scalars['Float']>;
  /** The total change, IB OB */
  change?: Maybe<Scalars['Float']>;
  /** The account group digit */
  digit?: Maybe<Scalars['Int']>;
  /** Any groups within this group */
  groups?: Maybe<Array<Maybe<AccountReportSubGroup>>>;
  ib?: Maybe<Scalars['Float']>;
  /** The name of the account group */
  name?: Maybe<Scalars['String']>;
  ob?: Maybe<Scalars['Float']>;
  /** Totals for all periods */
  periods?: Maybe<Array<Maybe<AccountReportPeriod>>>;
  /** The total amount on this group */
  total?: Maybe<Scalars['Float']>;
};

/** Query options for account reports */
export type AccountReportOptions = {
  /** Optional account to limit the results */
  account?: InputMaybe<Scalars['Int']>;
  /** Limit results to include exact amount in voucher transactions */
  amount?: InputMaybe<Scalars['Float']>;
  /** Limit results to include transaction amounts in this range */
  amountRange?: InputMaybe<Range>;
  /**
   * Optional client id, for getting reports for a specific
   *                   client, only usable by administrators
   */
  clientId?: InputMaybe<Scalars['Int']>;
  /** To include / exclude corrections, defaults to true (include). */
  corrections?: InputMaybe<Scalars['Boolean']>;
  /**
   * Optional list of customer ids, if present, only results
   *                   with these ids will be included
   */
  customers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Optional department id to filter accounting data */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** The period start date to fetch account data */
  from?: InputMaybe<Scalars['GraphQLDate']>;
  /** To only show open posts (on customers / suppliers) */
  openPostings?: InputMaybe<Scalars['Boolean']>;
  /** Optional project id to filter accounting data */
  projectId?: InputMaybe<Scalars['Int']>;
  /** Optional range of accounts to limit the results */
  range?: InputMaybe<Range>;
  /**
   * Optional list of supplier ids, if present, only results
   *                   with these ids will be included
   */
  suppliers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The period end date to fetch account data */
  to?: InputMaybe<Scalars['GraphQLDate']>;
};

/** A period with an AccountReport */
export type AccountReportPeriod = {
  __typename?: 'AccountReportPeriod';
  /** The result of this period */
  amount?: Maybe<Scalars['Float']>;
  /** The balance of this period */
  balance?: Maybe<Scalars['Float']>;
  /** The full date, start of period */
  date?: Maybe<Scalars['GraphQLDate']>;
  /** The month of this period */
  month?: Maybe<Scalars['Int']>;
  /** The year of this period */
  year?: Maybe<Scalars['Int']>;
};

/** A group within an account report */
export type AccountReportSubGroup = {
  __typename?: 'AccountReportSubGroup';
  /** The balance on this group */
  balance?: Maybe<Scalars['Float']>;
  /** The total change, IB OB */
  change?: Maybe<Scalars['Float']>;
  /** The account group digit */
  digit?: Maybe<Scalars['Int']>;
  /** Ingoing balance */
  ib?: Maybe<Scalars['Float']>;
  /** The name of the account group */
  name?: Maybe<Scalars['String']>;
  /** Outgoing balance */
  ob?: Maybe<Scalars['Float']>;
  /** Totals for all periods */
  periods?: Maybe<Array<Maybe<AccountReportPeriod>>>;
  reports?: Maybe<Array<Maybe<AccountReport>>>;
  /** The total amount on this group */
  total?: Maybe<Scalars['Float']>;
};

/** An account sub group used in accounting */
export type AccountSubGroup = {
  __typename?: 'AccountSubGroup';
  /** The accounts under this group */
  accounts?: Maybe<Array<Maybe<Account>>>;
  /** The id of the account sub group */
  id?: Maybe<Scalars['Int']>;
  /** The name of this account sub group */
  name?: Maybe<Scalars['String']>;
};

/** A transaction in a journal, for accounting */
export type AccountTransaction = {
  __typename?: 'AccountTransaction';
  /** The account */
  account?: Maybe<Scalars['Int']>;
  /** Debit/Credit */
  accountType?: Maybe<AccountType>;
  /**
   * The transaction amount, with sign (none for positive number,
   *                     - for negative numbers)
   */
  amount?: Maybe<Scalars['Float']>;
  bankTransactionLock?: Maybe<BankTransactionLock>;
  /** The id of the bank transaction lock if any */
  bankTransactionLockId?: Maybe<Scalars['Int']>;
  /** If this transaction has been reversed/corrected */
  correction?: Maybe<Scalars['Boolean']>;
  /** If The VAT Code is custom this the name of the VAT Code */
  customVatName?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
  /** The transaction description */
  description?: Maybe<Scalars['String']>;
  /** The id of the transaction line */
  id?: Maybe<Scalars['Int']>;
  /** The invoice this transaction belongs to */
  invoiceId?: Maybe<Scalars['Int']>;
  /** The invoice number of the attached invoice */
  invoiceNumber?: Maybe<Scalars['String']>;
  /** The status of the attached invoice */
  invoiceStatus?: Maybe<InvoiceStatus>;
  supplier?: Maybe<Supplier>;
  /** The transaction date */
  transactionDate?: Maybe<Scalars['GraphQLDate']>;
  /** The id of the transaction */
  transactionId?: Maybe<Scalars['Int']>;
  /** The id of the transaction lock if any */
  transactionLockId?: Maybe<Scalars['Int']>;
  /** The VAT code for this transaction */
  vatCode?: Maybe<Scalars['Int']>;
  /** The VAT percent for this transaction */
  vatPercent?: Maybe<Scalars['Float']>;
  /** The voucher this transaction belongs to */
  voucherId?: Maybe<Scalars['Int']>;
  /** The voucher number this transaction belongs to */
  voucherNumber?: Maybe<Scalars['String']>;
  voucherType?: Maybe<VoucherType>;
};

export enum AccountType {
  Credit = 'credit',
  Debit = 'debit'
}

/** Account data, for updating an account */
export type AccountUpdateInput = {
  /** A description of this account */
  description?: InputMaybe<Scalars['String']>;
  /** The id/number of the account */
  id: Scalars['Int'];
  /** The name of this account */
  name?: InputMaybe<Scalars['String']>;
  /** Which VAT code to use on this account */
  vatCode?: InputMaybe<Scalars['Int']>;
  /** If this account should be locked to the VAT code */
  vatCodeLocked?: InputMaybe<Scalars['Boolean']>;
};

/** An accountant  */
export type Accountant = {
  __typename?: 'Accountant';
  /** The email of the accountant */
  email?: Maybe<Scalars['String']>;
  /** The first name of the accountant */
  firstname?: Maybe<Scalars['String']>;
  /** The id of the accountant */
  id?: Maybe<Scalars['Int']>;
  /** The last name of the accountant */
  lastname?: Maybe<Scalars['String']>;
  /** The middle name of the accountant */
  middlename?: Maybe<Scalars['String']>;
  /** The mobile object of the accountant */
  mobile?: Maybe<Phone>;
  /** The full name of the accountant */
  name?: Maybe<Scalars['String']>;
};

/** An accounting firm */
export type AccountingFirm = {
  __typename?: 'AccountingFirm';
  /** The accountants available on this firm */
  accountants?: Maybe<Array<Maybe<Accountant>>>;
  /** The email of the firm */
  email?: Maybe<Scalars['String']>;
  /** The fax object of the firm */
  fax?: Maybe<Phone>;
  /** When the firm was started/founded */
  founded?: Maybe<Scalars['String']>;
  /** The homepage of the firm */
  homepage?: Maybe<Scalars['String']>;
  /** The id of the firm */
  id: Scalars['Int'];
  /** The location object of the firm */
  locationBusiness?: Maybe<Location>;
  /** The location object of the firm */
  locationPost?: Maybe<Location>;
  /** The logo of the firm */
  logo?: Maybe<Scalars['String']>;
  /** The name of the firm */
  name?: Maybe<Scalars['String']>;
  /** The organization number of the firm */
  organizationNumber?: Maybe<Scalars['String']>;
  /** The phone object of the firm */
  phone?: Maybe<Phone>;
};

/** A template used in accounting */
export type AccountingTemplate = {
  __typename?: 'AccountingTemplate';
  /** A description of this template */
  description?: Maybe<Scalars['String']>;
  /** The id of the template */
  id?: Maybe<Scalars['Int']>;
  /** The name of this template */
  name?: Maybe<Scalars['String']>;
};

/** Options when fetching accounting templates */
export type AccountingTemplateOptions = {
  /** Only return results with this country code */
  countryCode?: InputMaybe<Scalars['String']>;
  /**
   * Only return results associated with this kind of legal
   *                     entity
   */
  legalEntity?: InputMaybe<LegalEntity>;
};

/** An accrual object type, used in accounting */
export type Accrual = {
  __typename?: 'Accrual';
  /** Which account the periods should be put into */
  account: Scalars['Int'];
  /** The month to start the period */
  month: Scalars['Int'];
  /** How many periods/months */
  periods: Scalars['Int'];
  /** The year to start the period */
  year: Scalars['Int'];
};

/** An accrual input object type, used in accounting */
export type AccrualInput = {
  /** Which account the periods should be put into */
  account: Scalars['Int'];
  /** The month to start the period */
  month: Scalars['Int'];
  /** How many periods/months */
  periods: Scalars['Int'];
  /** The year to start the period */
  year: Scalars['Int'];
};

/** An Action Log object */
export type ActionLog = {
  __typename?: 'ActionLog';
  action?: Maybe<ActionLogAction>;
  /** What context this entry is about */
  context?: Maybe<ActionLogContext>;
  /** The id of the context */
  contextId?: Maybe<Scalars['Int']>;
  /** When this log entry was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** Any JSON data added to this log entry */
  data?: Maybe<Scalars['JSON']>;
  /** The translated description of the log */
  description?: Maybe<Scalars['String']>;
  /** The id of the actionLog */
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  /** The user id on the log entry */
  userId?: Maybe<Scalars['Int']>;
};

export enum ActionLogAction {
  AddClientMember = 'addClientMember',
  AddProjectMember = 'addProjectMember',
  ApproveBankPayment = 'approveBankPayment',
  ApprovedAttestation = 'approvedAttestation',
  ApprovedTimesheet = 'approvedTimesheet',
  BilledTimesheet = 'billedTimesheet',
  CancelBankPayment = 'cancelBankPayment',
  ClosedBankStatement = 'closedBankStatement',
  CopyFile = 'copyFile',
  CopyFolder = 'copyFolder',
  CreateAccessGroup = 'createAccessGroup',
  CreateAccount = 'createAccount',
  CreateBankAccount = 'createBankAccount',
  CreateBankPayment = 'createBankPayment',
  CreateBankStatement = 'createBankStatement',
  CreateBankTransactionLock = 'createBankTransactionLock',
  CreateClient = 'createClient',
  CreateComment = 'createComment',
  CreateContact = 'createContact',
  CreateCustomer = 'createCustomer',
  CreateDepartment = 'createDepartment',
  CreateFile = 'createFile',
  CreateFolder = 'createFolder',
  CreateInvoice = 'createInvoice',
  CreateInvoicePayment = 'createInvoicePayment',
  CreatePaymentSetting = 'createPaymentSetting',
  CreateProduct = 'createProduct',
  CreateProject = 'createProject',
  CreateSupplier = 'createSupplier',
  CreateTag = 'createTag',
  CreateTask = 'createTask',
  CreateTimesheet = 'createTimesheet',
  CreateTransactionLock = 'createTransactionLock',
  CreateVatReturn = 'createVatReturn',
  CreateVoucher = 'createVoucher',
  DeclinedAttestation = 'declinedAttestation',
  DeleteAccessGroup = 'deleteAccessGroup',
  DeleteAccount = 'deleteAccount',
  DeleteBankAccount = 'deleteBankAccount',
  DeleteBankPayment = 'deleteBankPayment',
  DeleteBankStatement = 'deleteBankStatement',
  DeleteBankTransactionLock = 'deleteBankTransactionLock',
  DeleteComment = 'deleteComment',
  DeleteContact = 'deleteContact',
  DeleteCustomer = 'deleteCustomer',
  DeleteDepartment = 'deleteDepartment',
  DeleteFile = 'deleteFile',
  DeleteFolder = 'deleteFolder',
  DeleteInvoice = 'deleteInvoice',
  DeleteInvoicePayment = 'deleteInvoicePayment',
  DeletePaymentSetting = 'deletePaymentSetting',
  DeleteProduct = 'deleteProduct',
  DeleteSupplier = 'deleteSupplier',
  DeleteTag = 'deleteTag',
  DeleteTask = 'deleteTask',
  DeleteTimesheet = 'deleteTimesheet',
  DeleteTransactionLock = 'deleteTransactionLock',
  DeleteVoucher = 'deleteVoucher',
  EmailVoucher = 'emailVoucher',
  ForwardedAttestation = 'forwardedAttestation',
  LinkBankAccount = 'linkBankAccount',
  OpenedBankStatement = 'openedBankStatement',
  RegisterAdvancedVoucher = 'registerAdvancedVoucher',
  RegisterBankStatement = 'registerBankStatement',
  RegisterCustomerInvoice = 'registerCustomerInvoice',
  RegisterCustomsDeclaration = 'registerCustomsDeclaration',
  RegisterIncome = 'registerIncome',
  RegisterSupplierInvoice = 'registerSupplierInvoice',
  RejectedTimesheet = 'rejectedTimesheet',
  RemoveClientMember = 'removeClientMember',
  RemoveProjectMember = 'removeProjectMember',
  RequestAttestation = 'requestAttestation',
  SaveInvoiceDraft = 'saveInvoiceDraft',
  SubmitVatReturn = 'submitVatReturn',
  UpdateAccessGroup = 'updateAccessGroup',
  UpdateAccount = 'updateAccount',
  UpdateAdvancedVoucher = 'updateAdvancedVoucher',
  UpdateBankAccount = 'updateBankAccount',
  UpdateBankPayment = 'updateBankPayment',
  UpdateBankStatement = 'updateBankStatement',
  UpdateClient = 'updateClient',
  UpdateClientMember = 'updateClientMember',
  UpdateComment = 'updateComment',
  UpdateContact = 'updateContact',
  UpdateCustomer = 'updateCustomer',
  UpdateCustomerInvoice = 'updateCustomerInvoice',
  UpdateCustomsDeclaration = 'updateCustomsDeclaration',
  UpdateDepartment = 'updateDepartment',
  UpdateFile = 'updateFile',
  UpdateFolder = 'updateFolder',
  UpdateInvoice = 'updateInvoice',
  UpdatePaymentSetting = 'updatePaymentSetting',
  UpdateProduct = 'updateProduct',
  UpdateSupplier = 'updateSupplier',
  UpdateSupplierInvoice = 'updateSupplierInvoice',
  UpdateTag = 'updateTag',
  UpdateTask = 'updateTask',
  UpdateTimesheet = 'updateTimesheet',
  UpdateVatReturn = 'updateVatReturn',
  UpdateVoucher = 'updateVoucher',
  UploadFile = 'uploadFile',
  UploadVoucher = 'uploadVoucher'
}

/** Options to use when requesting the log entries */
export type ActionLogByContextOptions = {
  /** Optional, get every log item for a specific context type */
  context: ActionLogContext;
  /** Optional, specify the id of the context */
  contextId: Scalars['Int'];
};

export enum ActionLogContext {
  AccessGroup = 'accessGroup',
  Account = 'account',
  BankAccount = 'bankAccount',
  BankAccountListing = 'bankAccountListing',
  BankPayment = 'bankPayment',
  BankStatement = 'bankStatement',
  BankTransactionLock = 'bankTransactionLock',
  Client = 'client',
  ClientMember = 'clientMember',
  Comment = 'comment',
  Contact = 'contact',
  Customer = 'customer',
  Department = 'department',
  File = 'file',
  Folder = 'folder',
  Invoice = 'invoice',
  Organization = 'organization',
  PaymentSetting = 'paymentSetting',
  Post = 'post',
  Product = 'product',
  Project = 'project',
  ProjectMember = 'projectMember',
  Reaction = 'reaction',
  Supplier = 'supplier',
  Tag = 'tag',
  Task = 'task',
  Timesheet = 'timesheet',
  Transaction = 'transaction',
  TransactionLock = 'transactionLock',
  User = 'user',
  VatReturn = 'vatReturn',
  Voucher = 'voucher'
}

/** Options to use when requesting the log entries */
export type ActionLogOptions = {
  /** Optional limit of log entries */
  limit?: InputMaybe<Scalars['Int']>;
  /** Optional, get every log item from x minutes ago, defaults to 5, max 60 */
  minutes?: InputMaybe<Scalars['Int']>;
};

/** An amount object */
export type Amount = {
  __typename?: 'Amount';
  /** The amount */
  amount?: Maybe<Scalars['Float']>;
  currency?: Maybe<Currency>;
};

/** An amount input object */
export type AmountInput = {
  /** The amount */
  amount: Scalars['Float'];
  currency: CurrencyInput;
};

/** An amount input object for use when creating custom declarations */
export type AmountInputCustomsDeclaration = {
  /** The amount */
  amount: Scalars['Float'];
};

/** A user that has admin rights to application */
export type AppAdmin = {
  __typename?: 'AppAdmin';
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
  user?: Maybe<User>;
};

/** Input for adding or removing application administrator */
export type AppAdminInput = {
  appId: Scalars['String'];
  userId: Scalars['Int'];
};

/** Options for filtering application administrators */
export type AppAdminOptions = {
  appId: Scalars['String'];
};

export enum AppCategory {
  Administration = 'administration',
  Business = 'business',
  Communication = 'communication',
  Community = 'community',
  Education = 'education',
  News = 'news',
  Overview = 'overview',
  Productivity = 'productivity'
}

/** Input for creating an application */
export type AppCreateInput = {
  appColor?: InputMaybe<Scalars['String']>;
  appContent?: InputMaybe<Scalars['String']>;
  appIcon?: InputMaybe<Scalars['GraphQLFileUpload']>;
  appScopes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authMethod?: InputMaybe<AuthMethod>;
  category: AppCategory;
  contactEmail?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  developerId: Scalars['Int'];
  domains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
  namespace: Scalars['String'];
  privacyPolicy?: InputMaybe<Scalars['String']>;
  serviceScopes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  termsOfService?: InputMaybe<Scalars['String']>;
  type: AppType;
  validOAuthRedirectUris?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type AppPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** Filter applications by category */
  category?: InputMaybe<AppCategory>;
  /** A id for the developer organization */
  developerId?: InputMaybe<Scalars['Int']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  /** Find application by namespace */
  namespace?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<AppSortDirection>>;
  /** A string you want to search apps for */
  search?: InputMaybe<Scalars['String']>;
  /** Filter applications by status */
  status?: InputMaybe<AppStatus>;
  /** Filter applications by subscription status */
  subscriptionStatus?: InputMaybe<AppSubscriptionStatus>;
  /** Filter applications by type */
  type?: InputMaybe<AppType>;
  /** Filter applications on verification */
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** How to sort nodes in a query */
export type AppSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: ApplicationOrderByType;
};

export enum AppStatus {
  Development = 'development',
  Live = 'live',
  Testing = 'testing'
}

/** Application subscription object */
export type AppSubscription = {
  __typename?: 'AppSubscription';
  /** The application id the subscription is for */
  appId?: Maybe<Scalars['String']>;
  /** The time and date the subscription was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The id of the subscription */
  id?: Maybe<Scalars['Int']>;
  /** The status of the subscription */
  status?: Maybe<AppSubscriptionStatus>;
  /** The time and date the subscription was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The user id of the user who started the subscription */
  userId?: Maybe<Scalars['Int']>;
};

/** Application subscription input */
export type AppSubscriptionInput = {
  /** Id of the application to add */
  appId: Scalars['String'];
  /** The id of the client to install application to (Admin access only) */
  clientId?: InputMaybe<Scalars['Int']>;
};

export type AppSubscriptionOptions = {
  appId?: InputMaybe<Scalars['String']>;
  clientId?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<AppSubscriptionStatus>;
};

export enum AppSubscriptionStatus {
  Active = 'active',
  Ended = 'ended',
  Pending = 'pending'
}

export enum AppType {
  Integration = 'integration',
  Module = 'module'
}

/** Input for updating an application */
export type AppUpdateInput = {
  appColor?: InputMaybe<Scalars['String']>;
  appContent?: InputMaybe<Scalars['String']>;
  appIcon?: InputMaybe<Scalars['GraphQLFileUpload']>;
  appScopes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authMethod?: InputMaybe<AuthMethod>;
  category?: InputMaybe<AppCategory>;
  contactEmail?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  developerId?: InputMaybe<Scalars['Int']>;
  domains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  namespace?: InputMaybe<Scalars['String']>;
  privacyPolicy?: InputMaybe<Scalars['String']>;
  serviceScopes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<AppStatus>;
  termsOfService?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AppType>;
  validOAuthRedirectUris?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** An application is a module or integration */
export type Application = {
  __typename?: 'Application';
  /** The application theme color */
  appColor?: Maybe<Scalars['String']>;
  /** Application content */
  appContent?: Maybe<Scalars['String']>;
  /** The icon of the application */
  appIcon?: Maybe<File>;
  /** External scopes to manage for application */
  appScopes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Authenticatn method used to connect to identity server */
  authMethod?: Maybe<AuthMethod>;
  /** Application category */
  category?: Maybe<AppCategory>;
  /** Contact e-mail for application support */
  contactEmail?: Maybe<Scalars['String']>;
  /** The time and date the application was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** Description of the application */
  description?: Maybe<Scalars['String']>;
  /** The name of the application developer */
  developer?: Maybe<Scalars['String']>;
  /** The id of the application developer */
  developerId?: Maybe<Scalars['Int']>;
  /** The valid domains to request data from (Only for app admins) */
  domains?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The id of the application */
  id?: Maybe<Scalars['String']>;
  /** Listing index */
  listPriority?: Maybe<Scalars['Int']>;
  /** The name of the application */
  name?: Maybe<Scalars['String']>;
  /** Unique namespace of the application */
  namespace?: Maybe<Scalars['String']>;
  /** URL to privacy policy */
  privacyPolicy?: Maybe<Scalars['String']>;
  /** Screenshots of the application */
  screenshots?: Maybe<Array<Maybe<File>>>;
  /** Scopes the app is allowed to ask for */
  serviceScopes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Application status */
  status?: Maybe<AppStatus>;
  /** The subscription id if any */
  subscriptionId?: Maybe<Scalars['Int']>;
  /** The subscription status if any */
  subscriptionStatus?: Maybe<AppSubscriptionStatus>;
  /** URL to terms of service */
  termsOfService?: Maybe<Scalars['String']>;
  /** Application type */
  type?: Maybe<AppType>;
  /** The time and date the application was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The valid login redirect uris (Only for app admins) */
  validOAuthRedirectUris?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum ApplicationOrderByType {
  Category = 'category',
  CreatedAt = 'createdAt',
  Name = 'name',
  Namespace = 'namespace',
  Status = 'status',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Verified = 'verified'
}

export type ApplicationPaginatedResult = {
  __typename?: 'ApplicationPaginatedResult';
  data?: Maybe<Array<Maybe<Application>>>;
  paging: Paging;
};

/** An attestation request object */
export type Attestation = {
  __typename?: 'Attestation';
  /** The comment/response if any */
  comment?: Maybe<Scalars['String']>;
  /** The date and time the request was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** Id of the attestation request */
  id?: Maybe<Scalars['Int']>;
  /** The user who requested the attestation */
  issuer?: Maybe<User>;
  /** The status of the attestation */
  status?: Maybe<AttestationStatus>;
  /** The date and time the request was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The user requested to attest */
  user?: Maybe<User>;
};

/** Input for approving a requested attestation */
export type AttestationApproveInput = {
  /** An optional comment to the approval */
  comment?: InputMaybe<Scalars['String']>;
  /** Id of the attestation request */
  id: Scalars['Int'];
};

export enum AttestationContext {
  Voucher = 'voucher'
}

/** Number of attestations by status */
export type AttestationCount = {
  __typename?: 'AttestationCount';
  approved: Scalars['Int'];
  declined: Scalars['Int'];
  pending: Scalars['Int'];
};

/** Input for declining a requested attestation */
export type AttestationDeclineInput = {
  /** An optional comment to the decline */
  comment?: InputMaybe<Scalars['String']>;
  /** Id of the attestation request */
  id: Scalars['Int'];
};

/** Input for forwarding a requested attestation */
export type AttestationForwardInput = {
  /** An optional comment to the decline */
  comment?: InputMaybe<Scalars['String']>;
  /** Id of the attestation request */
  id: Scalars['Int'];
  /** The user ids of the people to forward request to */
  userIds: Array<InputMaybe<Scalars['Int']>>;
};

/** Input for requesting attestation */
export type AttestationRequestInput = {
  /** The object type to request attestation for */
  context: AttestationContext;
  /** The id of the object to request attestation for */
  contextId: Scalars['Int'];
  /** The user id of the people to requested attestation from (one or many) */
  userIds: Array<InputMaybe<Scalars['Int']>>;
};

export enum AttestationStatus {
  Approved = 'approved',
  Declined = 'declined',
  Forwarded = 'forwarded',
  Pending = 'pending'
}

export enum AuthMethod {
  ClientSecretBasic = 'client_secret_basic',
  ClientSecretPost = 'client_secret_post',
  None = 'none',
  PrivateKeyJwt = 'private_key_jwt'
}

/** A balance report of the accounts, during a specific period */
export type BalanceSheetReport = {
  __typename?: 'BalanceSheetReport';
  account?: Maybe<Account>;
  /** The change from incoming to outgoing */
  change?: Maybe<Scalars['Float']>;
  /** The account balance at the start of the period */
  incomingBalance?: Maybe<Scalars['Float']>;
  /** The account balance at the end of the period */
  outgoingBalance?: Maybe<Scalars['Float']>;
  /** All the transactions in this calculation */
  transactions?: Maybe<Array<Maybe<AccountTransaction>>>;
};

/** A bank account object */
export type BankAccount = {
  __typename?: 'BankAccount';
  /** The general ledger account */
  account?: Maybe<Account>;
  /** Bank account balance if integration is set up */
  balance?: Maybe<BankAccountBalance>;
  /** The name of the bank */
  bank?: Maybe<Scalars['String']>;
  /** The bank account number */
  bban?: Maybe<Scalars['String']>;
  /** The bank swift code */
  bic?: Maybe<Scalars['String']>;
  /** The country */
  country?: Maybe<Country>;
  /** The currency of the bank account */
  currencyCode?: Maybe<CurrencyCode>;
  /** The account IBAN number */
  iban?: Maybe<Scalars['String']>;
  /** The id of the bank account */
  id?: Maybe<Scalars['Int']>;
  /** Bank account integration object */
  integration?: Maybe<BankAccountIntegration>;
  /** If this bank account is set up with bank integration */
  isIntegrated?: Maybe<Scalars['Boolean']>;
  /** If this bank account is the default invoicing account */
  isInvoiceAccount?: Maybe<Scalars['Boolean']>;
  /** The name of account (from bank) */
  name?: Maybe<Scalars['String']>;
  /**
   * The bank account number
   * @deprecated Switch to bban
   */
  number?: Maybe<Scalars['String']>;
  /** Bank statements for this bank account */
  statements?: Maybe<Array<Maybe<BankStatement>>>;
  /**
   * The bank swift code
   * @deprecated Switch to swift
   */
  swift?: Maybe<Scalars['String']>;
};

/** Balances on the bank account */
export type BankAccountBalance = {
  __typename?: 'BankAccountBalance';
  available?: Maybe<Scalars['Float']>;
  booked?: Maybe<Scalars['Float']>;
};

/** BankAccount input data, for creating a new bankAccount */
export type BankAccountCreateInput = {
  /** The general ledger account id */
  account?: InputMaybe<Scalars['Int']>;
  /** The name of the bank */
  bank?: InputMaybe<Scalars['String']>;
  /** The bank account number */
  bban: Scalars['String'];
  /** The bank bic code */
  bic?: InputMaybe<Scalars['String']>;
  /** The country code for this bank account */
  countryCode: Scalars['String'];
  /** The account IBAN number */
  iban?: InputMaybe<Scalars['String']>;
};

/** Bank account integration object */
export type BankAccountIntegration = {
  __typename?: 'BankAccountIntegration';
  /** Consent object for integration */
  consent?: Maybe<BankConsent>;
  /** Strong Customer Authentication url */
  scaUrl?: Maybe<Scalars['String']>;
};

/** A bank account found in the bank account registry */
export type BankAccountListing = {
  __typename?: 'BankAccountListing';
  /** The name of the bank */
  bank?: Maybe<Scalars['String']>;
  /** The bank account number */
  bban?: Maybe<Scalars['String']>;
  /** The bank bic code */
  bic?: Maybe<Scalars['String']>;
  /** The country the account is in */
  country?: Maybe<Country>;
  /** The account IBAN number */
  iban?: Maybe<Scalars['String']>;
  /** The id of the bank account in the registry */
  id?: Maybe<Scalars['Int']>;
  /** If this is the default account in this context */
  isDefault?: Maybe<Scalars['Boolean']>;
  /** The nickname of the bank account */
  name?: Maybe<Scalars['String']>;
};

export enum BankAccountListingContext {
  Customer = 'customer',
  Supplier = 'supplier',
  User = 'user'
}

/** A bank account input for the bank account registry */
export type BankAccountListingCreateInput = {
  /** The name of the bank */
  bank?: InputMaybe<Scalars['String']>;
  /** The bank account number */
  bban?: InputMaybe<Scalars['String']>;
  /** The bank bic code */
  bic: Scalars['String'];
  /** The context to store the bank account listing */
  context: BankAccountListingContext;
  /** The id of the context to store the bank account listing */
  contextId: Scalars['Int'];
  /** The country the account is in */
  countryCode: Scalars['String'];
  /** The account IBAN number */
  iban?: InputMaybe<Scalars['String']>;
  /** The nickname of the bank account */
  name: Scalars['String'];
};

/** A bank account input for the bank account registry */
export type BankAccountListingInput = {
  /** The name of the bank */
  bank?: InputMaybe<Scalars['String']>;
  /** The bank account number */
  bban?: InputMaybe<Scalars['String']>;
  /** The bank bic code */
  bic: Scalars['String'];
  /** The country the account is in */
  countryCode: Scalars['String'];
  /** The account IBAN number */
  iban?: InputMaybe<Scalars['String']>;
  /** The id of the bank account in the registry */
  id?: InputMaybe<Scalars['Int']>;
  /** The nickname of the bank account */
  name: Scalars['String'];
};

export type BankAccountListingOptions = {
  /** Get account by bban */
  bban?: InputMaybe<Scalars['String']>;
  /** In which context you are fetching bank account listings */
  context?: InputMaybe<BankAccountListingContext>;
  /**
   * The id of the context you are fetching bank account listings for, i.e.
   * customer, supplier, user
   */
  contextId?: InputMaybe<Scalars['Int']>;
};

/** A bank account input for the bank account registry */
export type BankAccountListingUpdateInput = {
  /** The name of the bank */
  bank?: InputMaybe<Scalars['String']>;
  /** The bank account number */
  bban?: InputMaybe<Scalars['String']>;
  /** The bank bic code */
  bic: Scalars['String'];
  /** The country the account is in */
  countryCode: Scalars['String'];
  /** The account IBAN number */
  iban?: InputMaybe<Scalars['String']>;
  /** The id of the bank account in the registry */
  id: Scalars['Int'];
  /** The nickname of the bank account */
  name?: InputMaybe<Scalars['String']>;
};

/** BankAccount input data, for updating a bankAccount */
export type BankAccountUpdateInput = {
  /** The general ledger account id */
  account?: InputMaybe<Scalars['Int']>;
  /** The name of the bank */
  bank?: InputMaybe<Scalars['String']>;
  /** The bank account number */
  bban?: InputMaybe<Scalars['String']>;
  /** The bank bic code */
  bic?: InputMaybe<Scalars['String']>;
  /** The country code for this bank account */
  countryCode?: InputMaybe<Scalars['String']>;
  /** The account IBAN number */
  iban?: InputMaybe<Scalars['String']>;
  /** The id of the bank account */
  id: Scalars['Int'];
  /** If you want to remove the accounting account on this bank account */
  removeAccount?: InputMaybe<Scalars['Boolean']>;
};

/** A bank consent object for open banking integrations */
export type BankConsent = {
  __typename?: 'BankConsent';
  bic?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  expireAt?: Maybe<Scalars['GraphQLDateTime']>;
  id?: Maybe<Scalars['Int']>;
  reason?: Maybe<Scalars['String']>;
  scaUrl?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The user who authorized consent */
  user?: Maybe<User>;
};

/** Options for fetching bank consents */
export type BankConsentOptions = {
  /**
   * Optional client id, for getting data for a specific
   *                     client, only usable by administrators
   */
  clientId?: InputMaybe<Scalars['Int']>;
};

export type BankIntegration = {
  __typename?: 'BankIntegration';
  /** The bank integration provider */
  provider?: Maybe<BankIntegrationProvider>;
  /** The reason for the status if not active */
  reason?: Maybe<Scalars['String']>;
  /** Redirect url for setup if any */
  redirectUrl?: Maybe<Scalars['String']>;
  /** The status of the bank integration */
  status?: Maybe<BankIntegrationStatus>;
  /** The supported currencies by the bank-integration */
  supportedCurrencies?: Maybe<Array<Maybe<CurrencyCode>>>;
};

export enum BankIntegrationProvider {
  Zdata = 'zdata',
  Ztl = 'ztl'
}

export enum BankIntegrationStatus {
  Active = 'active',
  Failed = 'failed',
  Inactive = 'inactive',
  Pending = 'pending'
}

/** A bank payment object */
export type BankPayment = {
  __typename?: 'BankPayment';
  /** Payment amount in bank account base currency */
  amount?: Maybe<Scalars['Float']>;
  /** Bank account for payment */
  bankAccount?: Maybe<BankAccount>;
  /** Payment customer id (KID) for the payment receiver */
  cid?: Maybe<Scalars['String']>;
  /** Commissioned amount for processing payment */
  commissionAmount?: Maybe<Scalars['Float']>;
  /** Currency for commissioned amount */
  commissionCurrency?: Maybe<CurrencyCode>;
  /** When the payment was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** Payment amount in target currency */
  currencyAmount?: Maybe<Scalars['Float']>;
  /** Target currency code */
  currencyCode?: Maybe<CurrencyCode>;
  /** Bank payment due date */
  dueDate?: Maybe<Scalars['GraphQLDate']>;
  /** Exchange rate for payment */
  exchangeRate?: Maybe<Scalars['Float']>;
  /** If the payment has stoped or failed */
  failed?: Maybe<Scalars['Boolean']>;
  /** Id of the bank payment */
  id?: Maybe<Scalars['Int']>;
  invoiceId?: Maybe<Scalars['Int']>;
  invoicePaymentId?: Maybe<Scalars['Int']>;
  /** Payment message if not cid is used */
  message?: Maybe<Scalars['String']>;
  /** External payment ID */
  paymentId?: Maybe<Scalars['String']>;
  /** Reason for creating payment */
  purposeCode?: Maybe<BankPaymentPurposeCode>;
  /** Reason for status, error if failed */
  reason?: Maybe<Scalars['String']>;
  /** Status of the bank payment */
  status?: Maybe<BankPaymentStatus>;
  /** Receiver address (required for international payments) */
  toAddress?: Maybe<Scalars['String']>;
  /** Receiver bank account details */
  toBankAccount?: Maybe<ReceiverBankAccount>;
  /** Receiver id (if any) */
  toId?: Maybe<Scalars['Int']>;
  /** Receiver name (company or person name) */
  toName?: Maybe<Scalars['String']>;
  /** Receiver type (if any) */
  toType?: Maybe<BankPaymentToType>;
  transactionId?: Maybe<Scalars['Int']>;
  /** When the payment was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
  voucherId?: Maybe<Scalars['Int']>;
};

/** A bundle of payments to process */
export type BankPaymentBundle = {
  __typename?: 'BankPaymentBundle';
  /** Error code identifier if error */
  errorCode?: Maybe<Scalars['String']>;
  /** Error message if any */
  errorMessage?: Maybe<Scalars['String']>;
  /** Id for requesting status changes and process status */
  flowId?: Maybe<Scalars['String']>;
  /** The payments in the bundle */
  payments?: Maybe<Array<Maybe<BankPayment>>>;
  /** Status for payment bundle process */
  processStatus?: Maybe<BankPaymentProcessStatus>;
  /** Strong Customer Authentication url to confirm payment order */
  scaUrl?: Maybe<Scalars['String']>;
};

/** A cancellation of a bank payment */
export type BankPaymentCancellation = {
  __typename?: 'BankPaymentCancellation';
  /** Status for payment cancellation process */
  processStatus?: Maybe<PaymentScaStatus>;
  /** Strong Customer Authentication url to confirm payment order */
  scaUrl?: Maybe<Scalars['String']>;
};

/** Input object to create a single payment */
export type BankPaymentCreateInput = {
  /** Id of the bank account to process payment from */
  bankAccountId: Scalars['Int'];
  /** Payment customer id (KID) for the payment receiver */
  cid?: InputMaybe<Scalars['String']>;
  /** The client id to create payment for (only for admins) */
  clientId?: InputMaybe<Scalars['Int']>;
  /** The amount to be payed in target currency */
  currencyAmount: Scalars['Float'];
  /** The target currency of the payment */
  currencyCode: CurrencyCode;
  /** The due date of the payment */
  dueDate: Scalars['GraphQLDate'];
  /** Id of a invoice to link this payment to */
  invoiceId?: InputMaybe<Scalars['Int']>;
  /** Payment message if not cid is used */
  message?: InputMaybe<Scalars['String']>;
  /** Reason for creating payment (defaults to OTHR) */
  purposeCode?: InputMaybe<BankPaymentPurposeCode>;
  /** Receiver address (required for international payments) */
  toAddress?: InputMaybe<Scalars['String']>;
  /** Receiver bank account details */
  toBankAccount: ReceiverBankAccountInput;
  /** Receiver id (if any) */
  toId?: InputMaybe<Scalars['Int']>;
  /** Receiver name (company or person name) */
  toName: Scalars['String'];
  /** Receiver type (if any) */
  toType?: InputMaybe<BankPaymentToType>;
  /** Id of a voucher to link this payment to */
  voucherId?: InputMaybe<Scalars['Int']>;
};

export enum BankPaymentOrderBy {
  Amount = 'amount',
  BankAccountId = 'bankAccountId',
  Created = 'created',
  DueDate = 'dueDate',
  Id = 'id',
  InvoiceId = 'invoiceId',
  InvoicePaymentId = 'invoicePaymentId',
  PaymentId = 'paymentId',
  Status = 'status',
  TransactionId = 'transactionId',
  VoucherId = 'voucherId'
}

export type BankPaymentPaginatedResult = {
  __typename?: 'BankPaymentPaginatedResult';
  data?: Maybe<Array<Maybe<BankPayment>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type BankPaymentPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** Filter by bank account id */
  bankAccountId?: InputMaybe<Scalars['Int']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** Filter by due dates */
  date?: InputMaybe<DateQueryFilter>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BankPaymentSortDirection>>;
  /** Filter by bank payment purpose code */
  purposeCode?: InputMaybe<BankPaymentPurposeCode>;
  /** Filter by free text search */
  search?: InputMaybe<Scalars['String']>;
  /** Filter by bank payment status */
  status?: InputMaybe<BankPaymentStatus>;
};

export enum BankPaymentProcessStatus {
  Active = 'active',
  AuthorizationRequired = 'authorizationRequired',
  Completed = 'completed',
  ValidationError = 'validationError'
}

export enum BankPaymentPurposeCode {
  /** Cash Management Transfer */
  Cash = 'CASH',
  /** Trade Settlement Payment */
  Cort = 'CORT',
  /** Irrevocable Debit Card Payment */
  Idcp = 'IDCP',
  /** Intra Company Payment */
  Intc = 'INTC',
  /** Investment And Securities */
  Invs = 'INVS',
  /** Loan */
  Loan = 'LOAN',
  /** Other (default purpose if not supplied) */
  Othr = 'OTHR',
  /** Pension Payment */
  Pens = 'PENS',
  /** Salary Payment */
  Sala = 'SALA',
  /** Social Security Benefit */
  Ssbe = 'SSBE',
  /** Supplier Payment */
  Supp = 'SUPP',
  /** Tax Payment */
  Taxs = 'TAXS',
  /** Treasury Payment */
  Trea = 'TREA',
  /** Value Added Tax Payment */
  Vatx = 'VATX'
}

/** How to sort nodes in a query */
export type BankPaymentSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: BankPaymentOrderBy;
};

export enum BankPaymentStatus {
  Approved = 'approved',
  Booked = 'booked',
  Canceled = 'canceled',
  Complete = 'complete',
  Pending = 'pending'
}

export enum BankPaymentToType {
  Customer = 'customer',
  Employee = 'employee',
  Supplier = 'supplier'
}

/** Input object to create a single payment */
export type BankPaymentUpdateInput = {
  /** Id of the bank account to process payment from */
  bankAccountId: Scalars['Int'];
  /** Payment customer id (KID) for the payment receiver */
  cid?: InputMaybe<Scalars['String']>;
  /** The client id to create payment for (only for admins) */
  clientId?: InputMaybe<Scalars['Int']>;
  /** The amount to be payed in target currency */
  currencyAmount: Scalars['Float'];
  /** The target currency of the payment */
  currencyCode: CurrencyCode;
  /** The due date of the payment */
  dueDate: Scalars['GraphQLDate'];
  /** Id of the bank payment to update */
  id: Scalars['Int'];
  /** Id of a invoice to link this payment to */
  invoiceId?: InputMaybe<Scalars['Int']>;
  /** Payment message if not cid is used */
  message?: InputMaybe<Scalars['String']>;
  /** Reason for creating payment */
  purposeCode?: InputMaybe<BankPaymentPurposeCode>;
  /** Receiver address (required for international payments) */
  toAddress?: InputMaybe<Scalars['String']>;
  /** Receiver bank account details */
  toBankAccount: ReceiverBankAccountInput;
  /** Receiver id (if any) */
  toId?: InputMaybe<Scalars['Int']>;
  /** Receiver name (company or person name) */
  toName: Scalars['String'];
  /** Receiver type (if any) */
  toType?: InputMaybe<BankPaymentToType>;
  /** Id of a voucher to link this payment to */
  voucherId?: InputMaybe<Scalars['Int']>;
};

/** A Bank Statement object */
export type BankStatement = {
  __typename?: 'BankStatement';
  /** Additional info about this bank statement */
  additionalInfo?: Maybe<Scalars['String']>;
  /** The ID of the bank account */
  bankAccountId?: Maybe<Scalars['Int']>;
  /** The bank transaction locks in bank statement period */
  bankTransactionLocks?: Maybe<Array<Maybe<BankTransactionLock>>>;
  /** When this bank statement was created */
  createdAt?: Maybe<Scalars['GraphQLDate']>;
  /** The bank statement from date */
  fromDate: Scalars['GraphQLDate'];
  /** The ID of the bank account statement */
  id: Scalars['Int'];
  /** If this period is locked or not */
  locked?: Maybe<Scalars['Boolean']>;
  /** The outgoing balance of the bank account after the period */
  outgoingBalance?: Maybe<Scalars['Float']>;
  /** Type of bank statement submission */
  submitType?: Maybe<BankStatementSubmitType>;
  /** The bank statement to date */
  toDate: Scalars['GraphQLDate'];
  /** The bank transactions in bank statement period */
  transactions?: Maybe<Array<Maybe<BankTransaction>>>;
  /** When this bank statement was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDate']>;
  /** The voucher connected to this bank statement if any */
  voucher?: Maybe<Voucher>;
};

/** Bank Statement input data, for creating a new Bank Statement */
export type BankStatementCreateInput = {
  /** Additional info about this period */
  additionalInfo?: InputMaybe<Scalars['String']>;
  /** The bank account id to submit bank statement for */
  bankAccountId: Scalars['Int'];
  /** The bank statement from date */
  fromDate: Scalars['GraphQLDate'];
  /** If this period should now be locked */
  locked?: InputMaybe<Scalars['Boolean']>;
  /** The bank statement to date */
  toDate: Scalars['GraphQLDate'];
};

/** Bank statement input data, for importing statement and transactions */
export type BankStatementImportInput = {
  /** Bank account ID to link transactions to */
  bankAccountId: Scalars['Int'];
  /** Bank transaction export file from bank, txt or csv */
  importFile: Scalars['GraphQLFileUpload'];
  /** Month of the bank statement */
  month: Scalars['Int'];
  /** Year of the bank statements */
  year: Scalars['Int'];
};

/** Query options for bank statements */
export type BankStatementOptions = {
  /** The ID of the bank account to get statements from */
  bankAccountId: Scalars['Int'];
  /**
   * Optional client id, for getting data for a specific
   *                     client, only usable by administrators
   */
  clientId?: InputMaybe<Scalars['Int']>;
  /** The period start date to fetch data */
  from: Scalars['GraphQLDate'];
  /** The period end date to fetch data */
  to: Scalars['GraphQLDate'];
};

export enum BankStatementSubmitType {
  Automatic = 'automatic',
  Manual = 'manual'
}

/** Bank Statement input data, for updating Bank Statement */
export type BankStatementUpdateInput = {
  /** Additional info about this period */
  additionalInfo?: InputMaybe<Scalars['String']>;
  /** The ID of the bank statement you want to update */
  id: Scalars['Int'];
};

/** A bank transaction object */
export type BankTransaction = {
  __typename?: 'BankTransaction';
  amount?: Maybe<Scalars['Float']>;
  archiveReference?: Maybe<Scalars['String']>;
  bankTransactionLock?: Maybe<BankTransactionLock>;
  bankTransactionLockId?: Maybe<Scalars['Int']>;
  bookingDate?: Maybe<Scalars['GraphQLDate']>;
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  creditorData?: Maybe<Scalars['JSON']>;
  currencyAmount?: Maybe<Scalars['Float']>;
  currencyCode?: Maybe<CurrencyCode>;
  debtorData?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  exchangeRate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  otherReference?: Maybe<Scalars['String']>;
  remittanceInformation?: Maybe<Scalars['String']>;
  transactionCode?: Maybe<Scalars['String']>;
  type?: Maybe<AccountType>;
  valueDate?: Maybe<Scalars['GraphQLDate']>;
};

/** A transaction lock object */
export type BankTransactionLock = {
  __typename?: 'BankTransactionLock';
  /** The bank transactions in this bank transaction lock */
  bankTransactions?: Maybe<Array<Maybe<BankTransaction>>>;
  /** The timestamp when the lock was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The id of this transaction lock */
  id?: Maybe<Scalars['Int']>;
  /** The ledger transactions in this bank transaction lock */
  ledgerTransactions?: Maybe<Array<Maybe<AccountTransaction>>>;
  /** The transaction lock date */
  lockDate?: Maybe<Scalars['GraphQLDate']>;
  /** The user that created the transaction lock */
  user?: Maybe<User>;
  /** The user id of the user creating the lock */
  userId?: Maybe<Scalars['Int']>;
};

/** Input for locking bank transactions */
export type BankTransactionLockInput = {
  /** The bank statement id for the locking period */
  bankStatementId: Scalars['Int'];
  /** The bank transaction ids to lock */
  bankTransactionIds: Array<InputMaybe<Scalars['Int']>>;
  /** The transaction line ids to lock */
  transactionLineIds: Array<InputMaybe<Scalars['Int']>>;
};

/** Options for fetching bank transaction locks */
export type BankTransactionLockOptions = {
  /** Filter results on a specific bank statement */
  bankStatementId?: InputMaybe<Scalars['Int']>;
  /** Find bank transaction locks connected to specific bank transactions */
  bankTransactionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Find bank transaction locks connected to specific transaction lines */
  transactionLineIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Filter results on a specific user */
  userId?: InputMaybe<Scalars['Int']>;
};

/** Bank transaction options for filtering what transactions to fetch */
export type BankTransactionOptions = {
  /** Filter bank transactions by bank account id */
  bankAccountId: Scalars['Int'];
  /** Filter bank transactions by bank transaction lock */
  bankTransactionLockId?: InputMaybe<Scalars['Int']>;
  /** The period start date to fetch data */
  from: Scalars['GraphQLDate'];
  /** The period end date to fetch data */
  to: Scalars['GraphQLDate'];
};

/** Input for creating a ledger transaction from bank transaction */
export type BankTransactionPostingInput = {
  /** The id of the bank transactions to post to ledger */
  bankTransactionIds: Array<InputMaybe<Scalars['Int']>>;
  /** The id of the payment setting to use */
  paymentSettingId: Scalars['Int'];
};

/** A billing method, how a client pays for the service */
export enum BillingMethod {
  Card = 'card',
  Invoice = 'invoice'
}

/** Billing plan data */
export type BillingPlan = {
  __typename?: 'BillingPlan';
  /** Fixed agency price for this plan */
  agencyPrice?: Maybe<Scalars['Float']>;
  /** The API base price for this plan */
  apiBasePrice?: Maybe<Scalars['Float']>;
  /** The API requests price for this plan */
  apiRequestPrice?: Maybe<Scalars['Float']>;
  /** The pricing for apps */
  appPricing?: Maybe<Scalars['JSONObject']>;
  /** The bank integration price for this plan */
  bankIntegrationPrice?: Maybe<Scalars['Float']>;
  /** The base monthly price for this plan */
  basePrice?: Maybe<Scalars['Float']>;
  /** The price for activating CID on this plan */
  cidInitialPrice?: Maybe<Scalars['Float']>;
  /** The monthly price for having CID activated */
  cidMonthlyPrice?: Maybe<Scalars['Float']>;
  /** The invoice CID price for this plan */
  cidPrice?: Maybe<Scalars['Float']>;
  /** The country code of the country the price plan is available for */
  country?: Maybe<Scalars['String']>;
  /** The currency the prices are provided in and currency for billing the customers */
  currency?: Maybe<CurrencyCode>;
  /** The price for activating EHF on this plan */
  ehfInitialPrice?: Maybe<Scalars['Float']>;
  /** The monthly price for having EHF activated */
  ehfMonthlyPrice?: Maybe<Scalars['Float']>;
  /** The invoice ehf price for this plan */
  ehfPrice?: Maybe<Scalars['Float']>;
  /** The invoice email price for this plan */
  emailPrice?: Maybe<Scalars['Float']>;
  /** The file price for this plan */
  filesPrice?: Maybe<Scalars['Float']>;
  /** The id of this billing plan */
  id?: Maybe<Scalars['Int']>;
  /** The name of the billing plan */
  name?: Maybe<Scalars['String']>;
  /** The invoice post price for this plan */
  postPrice?: Maybe<Scalars['Float']>;
  /** If this plan is available to everyone */
  public?: Maybe<Scalars['Boolean']>;
  /** The remmitance price for this plan */
  remittancePrice?: Maybe<Scalars['Float']>;
  /** The SMS price for this plan */
  smsPrice?: Maybe<Scalars['Float']>;
  /** The included storage in MB */
  storage?: Maybe<Scalars['Int']>;
  /** The price for a storage pack (200GB) */
  storagePrice?: Maybe<Scalars['Float']>;
  /**
   * The transaction price for this plan, when exceeding
   *                   included transactions
   */
  transactionPrice?: Maybe<Scalars['Float']>;
  /** How many transactions that are included in this plan */
  transactions?: Maybe<Scalars['Int']>;
  /** The price for amount of users on this plan */
  userPrice?: Maybe<Scalars['Float']>;
  /** The VAT Return price for this plan */
  vatReturnPrice?: Maybe<Scalars['Float']>;
};

/** Billing plan input data */
export type BillingPlanCreateInput = {
  /** Fixed agency price for this plan */
  agencyPrice?: InputMaybe<Scalars['Float']>;
  /** The API base price for this plan */
  apiBasePrice?: InputMaybe<Scalars['Float']>;
  /** The API requests price for this plan */
  apiRequestPrice?: InputMaybe<Scalars['Float']>;
  /** The pricing for apps */
  appPricing?: InputMaybe<Scalars['JSONObject']>;
  /** The bank integration price for this plan */
  bankIntegrationPrice?: InputMaybe<Scalars['Float']>;
  /** The base monthly price for this plan */
  basePrice?: InputMaybe<Scalars['Float']>;
  /** The price for activating CID on this plan */
  cidInitialPrice?: InputMaybe<Scalars['Float']>;
  /** The monthly price for having CID activated */
  cidMonthlyPrice?: InputMaybe<Scalars['Float']>;
  /** The invoice CID price for this plan */
  cidPrice?: InputMaybe<Scalars['Float']>;
  /** The country code of the country the price plan is available for */
  country: Scalars['String'];
  /** The currency the prices are provided in and currency for billing the customers */
  currency: CurrencyCode;
  /** The price for activating EHF on this plan */
  ehfInitialPrice?: InputMaybe<Scalars['Float']>;
  /** The monthly price for having EHF activated */
  ehfMonthlyPrice?: InputMaybe<Scalars['Float']>;
  /** The invoice ehf price for this plan */
  ehfPrice?: InputMaybe<Scalars['Float']>;
  /** The invoice email price for this plan */
  emailPrice?: InputMaybe<Scalars['Float']>;
  /** The file price for this plan */
  filesPrice?: InputMaybe<Scalars['Float']>;
  /** The name of the billing plan */
  name: Scalars['String'];
  /** The invoice post price for this plan */
  postPrice?: InputMaybe<Scalars['Float']>;
  /**
   * If this plan should be available to everyone, defaults to
   *                     false
   */
  public?: InputMaybe<Scalars['Boolean']>;
  /** The remmitance price for this plan */
  remittancePrice?: InputMaybe<Scalars['Float']>;
  /** The SMS price for this plan */
  smsPrice?: InputMaybe<Scalars['Float']>;
  /** The included storage in MB */
  storage?: InputMaybe<Scalars['Int']>;
  /** The price for a storage pack (200GB) */
  storagePrice?: InputMaybe<Scalars['Float']>;
  /**
   * The transaction price for this plan, when exceeding
   *                   included transactions
   */
  transactionPrice?: InputMaybe<Scalars['Float']>;
  /** How many transactions that are included in this plan */
  transactions: Scalars['Int'];
  /** The price for amount of users on this plan */
  userPrice?: InputMaybe<Scalars['Float']>;
  /** The VAT Return price for this plan */
  vatReturnPrice?: InputMaybe<Scalars['Float']>;
};

/** Options for getting billing plans */
export type BillingPlanOptions = {
  /** Filter billing plans by country code (Only admin level) */
  country?: InputMaybe<Scalars['String']>;
  /** Filter billing plans by public or not public plans (Only admin level) */
  public?: InputMaybe<Scalars['Boolean']>;
};

/** Billing plan update input data */
export type BillingPlanUpdateInput = {
  /** Fixed agency price for this plan */
  agencyPrice?: InputMaybe<Scalars['Float']>;
  /** The API base price for this plan */
  apiBasePrice?: InputMaybe<Scalars['Float']>;
  /** The API requests price for this plan */
  apiRequestPrice?: InputMaybe<Scalars['Float']>;
  /** The pricing for apps */
  appPricing?: InputMaybe<Scalars['JSONObject']>;
  /** The bank integration price for this plan */
  bankIntegrationPrice?: InputMaybe<Scalars['Float']>;
  /** The base monthly price for this plan */
  basePrice?: InputMaybe<Scalars['Float']>;
  /** The price for activating CID on this plan */
  cidInitialPrice?: InputMaybe<Scalars['Float']>;
  /** The monthly price for having CID activated */
  cidMonthlyPrice?: InputMaybe<Scalars['Float']>;
  /** The invoice CID price for this plan */
  cidPrice?: InputMaybe<Scalars['Float']>;
  /** The country code of the country the price plan is available for */
  country?: InputMaybe<Scalars['String']>;
  /** The currency the prices are provided in and currency for billing the customers */
  currency?: InputMaybe<CurrencyCode>;
  /** The price for activating EHF on this plan */
  ehfInitialPrice?: InputMaybe<Scalars['Float']>;
  /** The monthly price for having EHF activated */
  ehfMonthlyPrice?: InputMaybe<Scalars['Float']>;
  /** The invoice ehf price for this plan */
  ehfPrice?: InputMaybe<Scalars['Float']>;
  /** The invoice email price for this plan */
  emailPrice?: InputMaybe<Scalars['Float']>;
  /** The file price for this plan */
  filesPrice?: InputMaybe<Scalars['Float']>;
  /** The id of the billing plan */
  id: Scalars['Int'];
  /** The name of the billing plan */
  name?: InputMaybe<Scalars['String']>;
  /** The invoice post price for this plan */
  postPrice?: InputMaybe<Scalars['Float']>;
  /** If this plan should be available to everyone */
  public?: InputMaybe<Scalars['Boolean']>;
  /** The remmitance price for this plan */
  remittancePrice?: InputMaybe<Scalars['Float']>;
  /** The SMS price for this plan */
  smsPrice?: InputMaybe<Scalars['Float']>;
  /** The included storage in MB */
  storage?: InputMaybe<Scalars['Int']>;
  /** The price for a storage pack (200GB) */
  storagePrice?: InputMaybe<Scalars['Float']>;
  /**
   * The transaction price for this plan, when exceeding
   *                   included transactions
   */
  transactionPrice?: InputMaybe<Scalars['Float']>;
  /** How many transactions that are included in this plan */
  transactions?: InputMaybe<Scalars['Int']>;
  /** The price for amount of users on this plan */
  userPrice?: InputMaybe<Scalars['Float']>;
  /** The VAT Return price for this plan */
  vatReturnPrice?: InputMaybe<Scalars['Float']>;
};

export enum BillingStatus {
  Canceled = 'canceled',
  Created = 'created',
  Paid = 'paid',
  Pending = 'pending'
}

/** A client, users can be a part of multiple clients */
export type Client = {
  __typename?: 'Client';
  /** If the client is flagged as an accounting firm */
  accountant?: Maybe<Scalars['Boolean']>;
  /** The email of the clients accountant */
  accountantEmail?: Maybe<Scalars['String']>;
  /**
   * The accounting firm for this client
   * @deprecated No longer in use
   */
  accountingFirm?: Maybe<AccountingFirm>;
  /** The earliest date in the accounting data */
  accountingStart?: Maybe<Scalars['GraphQLDate']>;
  /** The id of the template to use for accounting */
  accountingTemplate?: Maybe<Scalars['Int']>;
  /**
   * The company which is assigned to take care of billing
   *                     for this company
   */
  agency?: Maybe<CompanyPublicData>;
  /** Active apps on this client */
  apps?: Maybe<Array<Maybe<Application>>>;
  /** Client bank integration data */
  bankIntegration?: Maybe<BankIntegration>;
  billing?: Maybe<ClientBillingDetails>;
  /** The billing plan this client is subscribed to */
  billingPlan?: Maybe<BillingPlan>;
  billings?: Maybe<Array<Maybe<ClientBilling>>>;
  /** If the client has activated CID or not */
  cid?: Maybe<Scalars['Boolean']>;
  /**
   * If this company has another company taking care of the
   *                     billing. Only workf for companies that are part of an agency
   */
  consolidatedBilling?: Maybe<Scalars['Boolean']>;
  country?: Maybe<Country>;
  /** The date the client was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The default currency for the client */
  currency?: Maybe<Scalars['String']>;
  /** The email of the clients debt collector */
  debtCollectorEmail?: Maybe<Scalars['String']>;
  /** If the client has activated features for departments */
  department?: Maybe<Scalars['Boolean']>;
  /** The clients departments */
  departments?: Maybe<Array<Maybe<Department>>>;
  /** If the client has activated EHF or not */
  ehf?: Maybe<Scalars['Boolean']>;
  /** The email of the client */
  email?: Maybe<Scalars['String']>;
  /** The fax object of the client */
  fax?: Maybe<Phone>;
  /**
   * If the company is registered in the Norwegian
   *                     "Foretaksregisteret"
   */
  foretaksregisteret?: Maybe<Scalars['Boolean']>;
  /** When the client was started/founded */
  founded?: Maybe<Scalars['GraphQLDate']>;
  /** The homepage of the client */
  homepage?: Maybe<Scalars['String']>;
  /** The id of the client */
  id: Scalars['Int'];
  /** The standard invoice bank account for a client */
  invoiceBankAccount?: Maybe<BankAccount>;
  /** The standard invoice fee for companies */
  invoiceFeeCompany?: Maybe<Scalars['Float']>;
  /** The standard invoice fee for private persons */
  invoiceFeePrivate?: Maybe<Scalars['Float']>;
  /** The message appearing on invoices from the client */
  invoiceMessage?: Maybe<Scalars['String']>;
  /** If the client is flagged for being an agency */
  isAgency?: Maybe<Scalars['Boolean']>;
  /** The last time this client had some activity */
  latestActivity?: Maybe<Scalars['GraphQLDateTime']>;
  /** The legal entity type of the company */
  legalEntity?: Maybe<LegalEntity>;
  /** The location object of the client */
  locationBusiness?: Maybe<Location>;
  /** The location object of the client */
  locationPost?: Maybe<Location>;
  /** The client logo */
  logo?: Maybe<File>;
  /** The members of this client */
  members?: Maybe<ClientMemberPaginatedResult>;
  /** The name of the client */
  name: Scalars['String'];
  /** The next customer number for the client */
  nextCustomerNumber?: Maybe<Scalars['Int']>;
  /** The next invoice of the client */
  nextInvoiceNumber?: Maybe<Scalars['Int']>;
  /** The next supplier number for the client */
  nextSupplierNumber?: Maybe<Scalars['Int']>;
  /** The organization number of the client */
  organizationNumber: Scalars['String'];
  /** @deprecated Move to billing */
  payment?: Maybe<ClientPaymentDetails>;
  /**
   * The payment plan this client is subscribed to
   * @deprecated Move to billing plan
   */
  paymentPlan?: Maybe<PaymentPlan>;
  /** @deprecated Move to billing */
  payments?: Maybe<Array<Maybe<ClientPayment>>>;
  /** The phone object of the client */
  phone?: Maybe<Phone>;
  /** If the client has activated the projects module */
  project?: Maybe<Scalars['Boolean']>;
  /** The clients projects */
  projects?: Maybe<ProjectPaginatedResult>;
  /** If the client has completed setup or not */
  setup?: Maybe<Scalars['Boolean']>;
  /** The status of the client */
  status?: Maybe<ClientStatus>;
  /** The storage statistics for this client */
  storage?: Maybe<StorageStatistics>;
  /** Number of activated storage packs */
  storagePacks?: Maybe<Scalars['Int']>;
  /** The suggested next department number for the client */
  suggestedDepartmentNumber?: Maybe<Scalars['String']>;
  /** The suggested next product number for the client */
  suggestedProductNumber?: Maybe<Scalars['String']>;
  /** The suggested next project number for the client */
  suggestedProjectNumber?: Maybe<Scalars['String']>;
  /** If the client has activated the timesheets module */
  timesheet?: Maybe<Scalars['Boolean']>;
  /** The total number of invoices sent/received on this client */
  totalInvoices?: Maybe<Scalars['Int']>;
  /** The total number of posted vouchers */
  totalVouchers?: Maybe<Scalars['Int']>;
  /**
   * The type of the client
   * @deprecated moving to Legal Entity
   */
  type?: Maybe<ClientTypeEnum>;
  /** The date the client was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** If the client is registered for Value Added Tax or not */
  vat?: Maybe<Scalars['Boolean']>;
  /** How many months the client uses in VAT returns */
  vatReturnPeriod?: Maybe<Scalars['Int']>;
  /** If the client has enabled voucher attestation */
  voucherAttestation?: Maybe<Scalars['Boolean']>;
  /** Email for sending vouchers to the voucher inbox */
  voucherEmail?: Maybe<Scalars['String']>;
};


/** A client, users can be a part of multiple clients */
export type ClientBillingArgs = {
  options: ClientBillingDetailsOptions;
};


/** A client, users can be a part of multiple clients */
export type ClientBillingsArgs = {
  options: ClientBillingOptions;
};


/** A client, users can be a part of multiple clients */
export type ClientDepartmentsArgs = {
  options?: InputMaybe<DepartmentOptions>;
};


/** A client, users can be a part of multiple clients */
export type ClientMembersArgs = {
  options?: InputMaybe<ClientMemberPagingOptions>;
};


/** A client, users can be a part of multiple clients */
export type ClientPaymentArgs = {
  options: ClientPaymentDetailsOptions;
};


/** A client, users can be a part of multiple clients */
export type ClientPaymentsArgs = {
  options: ClientPaymentOptions;
};


/** A client, users can be a part of multiple clients */
export type ClientProjectsArgs = {
  options?: InputMaybe<ProjectPagingOptions>;
};

/** Client billing data, for a given period */
export type ClientBilling = {
  __typename?: 'ClientBilling';
  /** When the billing was registered as paid */
  amounts?: Maybe<ClientBillingAmount>;
  /** The status for this billing */
  billingMethod?: Maybe<BillingMethod>;
  /** The id for this billing */
  id?: Maybe<Scalars['Int']>;
  /** The invoice on this billing, if any */
  invoice?: Maybe<Invoice>;
  /** The month for this period */
  month?: Maybe<Scalars['Int']>;
  /** When the billing was registered as paid */
  paidDate?: Maybe<Scalars['GraphQLDate']>;
  /**
   * The status for this billing
   * @deprecated Switch to billingMethod
   */
  paymentMethod?: Maybe<PaymentMethod>;
  /** The status for this billing */
  status?: Maybe<BillingStatus>;
  /** The year */
  year?: Maybe<Scalars['Int']>;
};

/** Details of a client billing */
export type ClientBillingAmount = {
  __typename?: 'ClientBillingAmount';
  items?: Maybe<Array<Maybe<ClientBillingAmountItem>>>;
  /** The total amount to pay */
  total?: Maybe<Scalars['Float']>;
};

/** Detailed information for a ClientBillingAmount item */
export type ClientBillingAmountItem = {
  __typename?: 'ClientBillingAmountItem';
  /** The calculated amount/cost for this item */
  amount?: Maybe<Scalars['Float']>;
  /** The id of the app if type is an app */
  appId?: Maybe<Scalars['String']>;
  /** The name of the app if type is an app */
  appName?: Maybe<Scalars['String']>;
  /** The count for this item */
  count?: Maybe<Scalars['Float']>;
  /** The price for this item */
  price?: Maybe<Scalars['Float']>;
  type?: Maybe<ClientBillingItemType>;
};

/** The basis for what a client will be charged */
export type ClientBillingBasis = {
  __typename?: 'ClientBillingBasis';
  cid?: Maybe<Scalars['Int']>;
  cidFee?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<ClientBillingBasisData>>>;
  debtCollection?: Maybe<Scalars['Int']>;
  ehfFee?: Maybe<Scalars['Int']>;
  invoices?: Maybe<ClientBillingBasisInvoices>;
  month?: Maybe<Scalars['Int']>;
  remittances?: Maybe<Scalars['Int']>;
  /** Total amount of transactions for a given period */
  transactions?: Maybe<Scalars['Int']>;
  vatReturn?: Maybe<Scalars['Int']>;
  vouchers?: Maybe<ClientBillingBasisVouchers>;
  year?: Maybe<Scalars['Int']>;
};

/** An object with client billing data, detailed */
export type ClientBillingBasisData = {
  __typename?: 'ClientBillingBasisData';
  cid?: Maybe<Scalars['Int']>;
  cidFee?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['GraphQLDate']>;
  day?: Maybe<Scalars['Int']>;
  debtCollection?: Maybe<Scalars['Int']>;
  ehfFee?: Maybe<Scalars['Int']>;
  invoices?: Maybe<ClientBillingBasisInvoices>;
  month?: Maybe<Scalars['Int']>;
  remittances?: Maybe<Scalars['Int']>;
  /** Total amount of transactions for a given period */
  transactions?: Maybe<Scalars['Int']>;
  vatReturn?: Maybe<Scalars['Int']>;
  vouchers?: Maybe<ClientBillingBasisVouchers>;
  year?: Maybe<Scalars['Int']>;
};

/** A count of sent invoices in a given period */
export type ClientBillingBasisInvoices = {
  __typename?: 'ClientBillingBasisInvoices';
  /** How many EHF invoices that was sent */
  ehf?: Maybe<Scalars['Int']>;
  /** How many email invoices that was sent */
  email?: Maybe<Scalars['Int']>;
  /** How many invoices that was posted by the system */
  post?: Maybe<Scalars['Int']>;
  /** How many invoices that was printed locally */
  print?: Maybe<Scalars['Int']>;
  /** How many invoices that was sent total */
  total?: Maybe<Scalars['Int']>;
};

/** A count of vouchers included in the billing basis */
export type ClientBillingBasisVouchers = {
  __typename?: 'ClientBillingBasisVouchers';
  /** How many advanced vouchers registered */
  advanced?: Maybe<Scalars['Int']>;
  /** How many bank statement vouchers registered */
  bankStatement?: Maybe<Scalars['Int']>;
  /** How customer invoices registered, sent invoices excluded */
  customerInvoice?: Maybe<Scalars['Int']>;
  /** How many custom declarations registered */
  customsDeclaration?: Maybe<Scalars['Int']>;
  /** How many payment vouchers registered */
  payment?: Maybe<Scalars['Int']>;
  /** How many supplier invoices registered */
  supplierInvoice?: Maybe<Scalars['Int']>;
  /** Total amount of vouchers included in the basis */
  total?: Maybe<Scalars['Int']>;
  /** How many vatReturn vouchers registered */
  vatReturn?: Maybe<Scalars['Int']>;
};

/** Client billing data, for a given period, more detailed */
export type ClientBillingDetails = {
  __typename?: 'ClientBillingDetails';
  basis?: Maybe<ClientBillingBasis>;
  billing?: Maybe<ClientBilling>;
  /** The invoice on this billing, if any */
  invoice?: Maybe<Invoice>;
  /** Only available for single client queries */
  plan?: Maybe<BillingPlan>;
};

/** Options fetching a detailed client billing */
export type ClientBillingDetailsOptions = {
  /** Which month to fetch data for (1 = january, etc) */
  month: Scalars['Int'];
  /** Which year to fetch data for. */
  year: Scalars['Int'];
};

/** Different kind of types we charge for */
export enum ClientBillingItemType {
  AgencyPrice = 'agencyPrice',
  AppBasis = 'appBasis',
  AppUser = 'appUser',
  BankIntegration = 'bankIntegration',
  BasePrice = 'basePrice',
  Cid = 'cid',
  CidFee = 'cidFee',
  CidMonthly = 'cidMonthly',
  DebtCollection = 'debtCollection',
  Ehf = 'ehf',
  EhfFee = 'ehfFee',
  EhfMonthly = 'ehfMonthly',
  Post = 'post',
  Remittance = 'remittance',
  Storage = 'storage',
  SupportAccounting = 'supportAccounting',
  SupportTechnical = 'supportTechnical',
  Transaction = 'transaction',
  Users = 'users',
  VatReturn = 'vatReturn'
}

/** Options fetching billing basis or billings */
export type ClientBillingOptions = {
  /**
   * Which month to fetch data for (1 = january, etc). If "month"
   *                     is provided, you also need to provide the "year"
   */
  month?: InputMaybe<Scalars['Int']>;
  /** Which year to fetch data for. */
  year?: InputMaybe<Scalars['Int']>;
};

/** Input data for starting a billing basis generation process */
export type ClientBillingPeriodDataInput = {
  /** Optional, if you only want to generate basis for a single client */
  clientId?: InputMaybe<Scalars['Int']>;
  /** Which month to generate data for (1 = january, etc) */
  month: Scalars['Int'];
  /** Which year to generate data for */
  year: Scalars['Int'];
};

export type ClientCidContactPersonInput = {
  /** The email of the contact person */
  email: Scalars['String'];
  /** The name of the contact person */
  name: Scalars['String'];
};

/** Input data for activating CID */
export type ClientCidInput = {
  /** Optional bank account, defaults to clients invoice bank account */
  bankAccount?: InputMaybe<Scalars['String']>;
  /** The id of the client, defaults to logged in client */
  clientId?: InputMaybe<Scalars['Int']>;
  contactPerson: ClientCidContactPersonInput;
};

/** Client input data, for creating a new client */
export type ClientCreateInput = {
  /** If the client should be flagged as an accounting firm */
  accountant?: InputMaybe<Scalars['Boolean']>;
  /** The email of the clients accountant */
  accountantEmail?: InputMaybe<Scalars['String']>;
  /** The id of the accounting firm for this client */
  accountingFirmId?: InputMaybe<Scalars['Int']>;
  /** The id of the template to use for accounting */
  accountingTemplate?: InputMaybe<Scalars['Int']>;
  /** The bank account number */
  bankAccountNumber?: InputMaybe<Scalars['String']>;
  /** The payment plan for this client */
  billingPlanId?: InputMaybe<Scalars['Int']>;
  /** The country code of the client */
  countryCode: Scalars['String'];
  /** The default currency for the client */
  currency?: InputMaybe<Scalars['String']>;
  /** The email of the clients debt collector */
  debtCollectorEmail?: InputMaybe<Scalars['String']>;
  /** If the client has activated features for departments */
  department?: InputMaybe<Scalars['Boolean']>;
  /** The email of the client */
  email: Scalars['String'];
  /** The fax object of the client */
  fax?: InputMaybe<PhoneInput>;
  /**
   * If the company is registered in the Norwegian
   *                     "Foretaksregisteret"
   */
  foretaksregisteret?: InputMaybe<Scalars['Boolean']>;
  /** When the client was started/founded */
  founded?: InputMaybe<Scalars['GraphQLDate']>;
  /** The homepage of the client */
  homepage?: InputMaybe<Scalars['String']>;
  /** The standard invoice fee for companies */
  invoiceFeeCompany?: InputMaybe<Scalars['Float']>;
  /** The standard invoice fee for private persons */
  invoiceFeePrivate?: InputMaybe<Scalars['Float']>;
  /** The message appearing on invoices from the client */
  invoiceMessage?: InputMaybe<Scalars['String']>;
  /**
   * If the company is flagged for being an agency (needs special
   *                     permissions)
   */
  isAgency?: InputMaybe<Scalars['Boolean']>;
  /** The legal entity type of the company */
  legalEntity?: InputMaybe<LegalEntity>;
  /** The location object of the client */
  locationBusiness: LocationInput;
  /** The location object of the client */
  locationPost: LocationInput;
  /** The name of the client */
  name: Scalars['String'];
  /** The next invoice number for the client */
  nextInvoiceNumber?: InputMaybe<Scalars['Int']>;
  /** The organization number of the client */
  organizationNumber: Scalars['String'];
  /** The text appearing when sending payment reminders */
  paymentReminderTitle?: InputMaybe<Scalars['String']>;
  /** The phone object of the client */
  phone?: InputMaybe<PhoneInput>;
  /** If the client has activated the projects module */
  project?: InputMaybe<Scalars['Boolean']>;
  /** If the client has completed setup or not */
  setup?: InputMaybe<Scalars['Boolean']>;
  /** Number of activated storage packs */
  storagePacks?: InputMaybe<Scalars['Int']>;
  /** If the client has activated the timesheets module */
  timesheet?: InputMaybe<Scalars['Boolean']>;
  /**
   * Optional user id to accociate with this client, only
   *         available with enhanced permissions
   */
  userId?: InputMaybe<Scalars['Int']>;
  /** If the client is registered for Value Added Tax or not */
  vat?: InputMaybe<Scalars['Boolean']>;
  /** How many months the client uses in VAT returns */
  vatReturnPeriod?: InputMaybe<Scalars['Int']>;
  /** If the client has enabled voucher attestation */
  voucherAttestation?: InputMaybe<Scalars['Boolean']>;
  /** Email for sending vouchers to the voucher inbox */
  voucherEmail?: InputMaybe<Scalars['String']>;
};

/** Input data for activating EHF */
export type ClientEhfInput = {
  /** The id of the client, defaults to logged in client */
  clientId?: InputMaybe<Scalars['Int']>;
  /** The email of the contact person for EHF registration */
  email: Scalars['String'];
  /** The name of the contact person for EHF registration */
  name: Scalars['String'];
  /** The phone number of the contact person for EHF registration */
  phone: Scalars['String'];
};

/** An invitation to a client */
export type ClientInvitation = {
  __typename?: 'ClientInvitation';
  client?: Maybe<InvitationClient>;
  data?: Maybe<ClientInvitationData>;
};

/** An data object with client member properties */
export type ClientInvitationData = {
  __typename?: 'ClientInvitationData';
  /** If the member is flagged to be an accountant or not */
  accountant?: Maybe<Scalars['Boolean']>;
  /** The bank account number of the member */
  bankAccount?: Maybe<Scalars['String']>;
  /** If the member is an employee or not */
  employee?: Maybe<Scalars['Boolean']>;
  /**
   * A unique identifier for this member when associated with a
   *                   client
   */
  id: Scalars['Int'];
  /** The invite email for this member */
  inviteEmail?: Maybe<Scalars['String']>;
  /** The percentage the member is working */
  jobPercentage?: Maybe<Scalars['Float']>;
  /** When the member joined the client */
  joined?: Maybe<Scalars['GraphQLDateTime']>;
  /** The last date the member got payed */
  lastPayroll?: Maybe<Scalars['GraphQLDate']>;
  /** When this member last time had some activity */
  latestActivity?: Maybe<Scalars['GraphQLDateTime']>;
  /** The client member role */
  role: ClientRole;
  /** The fixed annual salary of the member */
  salaryAnnualFixed?: Maybe<Scalars['Float']>;
  /** The currency of the members salary */
  salaryCurrency?: Maybe<Scalars['String']>;
  /** The fixed hourly salary of the member */
  salaryHourlyFixed?: Maybe<Scalars['Float']>;
  /** The fixed monthly salary of the member */
  salaryMonthlyFixed?: Maybe<Scalars['Float']>;
  /** The fixed sale salary of the member */
  salarySaleFixed?: Maybe<Scalars['Float']>;
  salarySalePercent?: Maybe<Scalars['Float']>;
  /** The id of the selected client for this member */
  selected: Scalars['Boolean'];
  /** Which kind of status the member has */
  status?: Maybe<ClientMemberStatus>;
  /** The title of the member */
  title?: Maybe<Scalars['String']>;
};

/** A client member */
export type ClientMember = {
  __typename?: 'ClientMember';
  /** If the member is flagged to be an accountant or not */
  accountant?: Maybe<Scalars['Boolean']>;
  /** The bank account number of the member */
  bankAccount?: Maybe<Scalars['String']>;
  bankAccounts?: Maybe<Array<Maybe<BankAccountListing>>>;
  /** List of department memberships (Requires extra persmissions) */
  departments?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** If the member is an employee or not */
  employee?: Maybe<Scalars['Boolean']>;
  /**
   * A unique identifier for this member when associated with a
   *                   client
   */
  id: Scalars['Int'];
  /** The invite email for this member */
  inviteEmail?: Maybe<Scalars['String']>;
  /** The percentage the member is working */
  jobPercentage?: Maybe<Scalars['Float']>;
  /** When the member joined the client */
  joined?: Maybe<Scalars['GraphQLDateTime']>;
  /** The last date the member got payed */
  lastPayroll?: Maybe<Scalars['GraphQLDate']>;
  /** When this member last time had some activity */
  latestActivity?: Maybe<Scalars['GraphQLDateTime']>;
  /** The client member role */
  role: ClientRole;
  /** The fixed annual salary of the member */
  salaryAnnualFixed?: Maybe<Scalars['Float']>;
  /** The currency of the members salary */
  salaryCurrency?: Maybe<Scalars['String']>;
  /** The fixed hourly salary of the member */
  salaryHourlyFixed?: Maybe<Scalars['Float']>;
  /** The fixed monthly salary of the member */
  salaryMonthlyFixed?: Maybe<Scalars['Float']>;
  /** The fixed sale salary of the member */
  salarySaleFixed?: Maybe<Scalars['Float']>;
  salarySalePercent?: Maybe<Scalars['Float']>;
  /** List of scopes derived from access group memberships (Requires extra persmissions) */
  scopes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The id of the selected client for this member */
  selected: Scalars['Boolean'];
  /** Which kind of status the member has */
  status?: Maybe<ClientMemberStatus>;
  /** The tags on this member */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** The title of the member */
  title?: Maybe<Scalars['String']>;
  /** A user object */
  user?: Maybe<User>;
};

/** Client member input data, for creating/inviting a new member of a client */
export type ClientMemberInputCreate = {
  /** If the member should be flagged to be an accountant or not */
  accountant?: InputMaybe<Scalars['Boolean']>;
  /** The bank account number of the member */
  bankAccount?: InputMaybe<Scalars['String']>;
  /** List of department ids that the user is member of */
  departments?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** If the member is an employee or not */
  employee?: InputMaybe<Scalars['Boolean']>;
  /** The invite email for this member */
  inviteEmail: Scalars['String'];
  /** The percentage the member is working */
  jobPercentage?: InputMaybe<Scalars['Float']>;
  /** The last date the member got payed */
  lastPayroll?: InputMaybe<Scalars['GraphQLDate']>;
  /** The client member role */
  role?: InputMaybe<ClientRole>;
  /** The fixed annual salary of the member */
  salaryAnnualFixed?: InputMaybe<Scalars['Float']>;
  /** The currency of the members salary */
  salaryCurrency?: InputMaybe<Scalars['String']>;
  /** The fixed hourly salary of the member */
  salaryHourlyFixed?: InputMaybe<Scalars['Float']>;
  /** The fixed monthly salary of the member */
  salaryMonthlyFixed?: InputMaybe<Scalars['Float']>;
  /** The fixed sale salary of the member */
  salarySaleFixed?: InputMaybe<Scalars['Float']>;
  salarySalePercent?: InputMaybe<Scalars['Float']>;
  /** The title of the member */
  title?: InputMaybe<Scalars['String']>;
};

/** Client member input data, for creating a new member of a client */
export type ClientMemberInputUpdate = {
  /** If the member should be flagged to be an accountant or not */
  accountant?: InputMaybe<Scalars['Boolean']>;
  /** The bank account number of the member */
  bankAccount?: InputMaybe<Scalars['String']>;
  /** List of department ids that the user is member of */
  departments?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** If the member is an employee or not */
  employee?: InputMaybe<Scalars['Boolean']>;
  /**
   * A unique identifier for this member when associated with a
   *                     client
   */
  id: Scalars['Int'];
  /** The percentage the member is working */
  jobPercentage?: InputMaybe<Scalars['Float']>;
  /** The last date the member got payed */
  lastPayroll?: InputMaybe<Scalars['GraphQLDate']>;
  /** The client member role */
  role?: InputMaybe<ClientRole>;
  /** The fixed annual salary of the member */
  salaryAnnualFixed?: InputMaybe<Scalars['Float']>;
  /** The currency of the members salary */
  salaryCurrency?: InputMaybe<Scalars['String']>;
  /** The fixed hourly salary of the member */
  salaryHourlyFixed?: InputMaybe<Scalars['Float']>;
  /** The fixed monthly salary of the member */
  salaryMonthlyFixed?: InputMaybe<Scalars['Float']>;
  /** The fixed sale salary of the member */
  salarySaleFixed?: InputMaybe<Scalars['Float']>;
  salarySalePercent?: InputMaybe<Scalars['Float']>;
  /** Update the status of the membership */
  status?: InputMaybe<Status>;
  /** The title of the member */
  title?: InputMaybe<Scalars['String']>;
};

export enum ClientMemberOrderByType {
  Id = 'id',
  Joined = 'joined',
  Name = 'name'
}

export type ClientMemberPaginatedResult = {
  __typename?: 'ClientMemberPaginatedResult';
  data?: Maybe<Array<Maybe<ClientMember>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type ClientMemberPagingOptions = {
  /** If true, only return accountant users */
  accountant?: InputMaybe<Scalars['Boolean']>;
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** If true, only return employees */
  employee?: InputMaybe<Scalars['Boolean']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ClientMemberSortDirection>>;
  /** A string you want to search memebers for */
  search?: InputMaybe<Scalars['String']>;
  /** The status of the members you want to get */
  status?: InputMaybe<ClientMemberStatus>;
};

/** How to sort nodes in a query */
export type ClientMemberSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: ClientMemberOrderByType;
};

export enum ClientMemberStatus {
  Active = 'active',
  Inactive = 'inactive',
  Invited = 'invited'
}

export enum ClientOrderByType {
  Agency = 'agency',
  BillingPlan = 'billingPlan',
  Created = 'created',
  Id = 'id',
  LegalEntity = 'legalEntity',
  Name = 'name',
  OrganizationNumber = 'organizationNumber'
}

export type ClientPaginatedResult = {
  __typename?: 'ClientPaginatedResult';
  data?: Maybe<Array<Maybe<Client>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type ClientPagingOptions = {
  /** If set to true, only return clients that can be accountants */
  accountant?: InputMaybe<Scalars['Boolean']>;
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** Only get clients with a specific agency */
  agencyId?: InputMaybe<Scalars['Int']>;
  /**
   * If the company is part of an agency, defaults to show both
   *                     (members and non-members)
   */
  agencyMember?: InputMaybe<Scalars['Boolean']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** Only get the clients on a specific payment plan */
  billingPlanId?: InputMaybe<Scalars['Int']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  /** Which kind of status clients have with the user */
  memberStatus?: InputMaybe<ClientMemberStatus>;
  orderBy?: InputMaybe<Array<ClientSortDirection>>;
  /** A string you want to search clients for */
  search?: InputMaybe<Scalars['String']>;
  /** What kind of status the client has */
  status?: InputMaybe<ClientStatus>;
  /** Only get the clients on a specific user */
  userId?: InputMaybe<Scalars['Int']>;
};

/** Client billing data, for a given period */
export type ClientPayment = {
  __typename?: 'ClientPayment';
  /** When the billing was registered as paid */
  amounts?: Maybe<ClientBillingAmount>;
  /** The status for this billing */
  billingMethod?: Maybe<BillingMethod>;
  /** The id for this billing */
  id?: Maybe<Scalars['Int']>;
  /** The invoice on this billing, if any */
  invoice?: Maybe<Invoice>;
  /** The month for this period */
  month?: Maybe<Scalars['Int']>;
  /** When the billing was registered as paid */
  paidDate?: Maybe<Scalars['GraphQLDate']>;
  /**
   * The status for this billing
   * @deprecated Switch to billingMethod
   */
  paymentMethod?: Maybe<PaymentMethod>;
  /** The status for this billing */
  status?: Maybe<BillingStatus>;
  /** The year */
  year?: Maybe<Scalars['Int']>;
};

/** The basis for what a client will be charged */
export type ClientPaymentBasis = {
  __typename?: 'ClientPaymentBasis';
  cid?: Maybe<Scalars['Int']>;
  cidFee?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<ClientPaymentBasisData>>>;
  debtCollection?: Maybe<Scalars['Int']>;
  ehfFee?: Maybe<Scalars['Int']>;
  invoices?: Maybe<ClientPaymentBasisInvoices>;
  month?: Maybe<Scalars['Int']>;
  remittances?: Maybe<Scalars['Int']>;
  /** Total amount of transactions for a given period */
  transactions?: Maybe<Scalars['Int']>;
  vatReturn?: Maybe<Scalars['Int']>;
  vouchers?: Maybe<ClientPaymentBasisVouchers>;
  year?: Maybe<Scalars['Int']>;
};

/** An object with client billing data, detailed */
export type ClientPaymentBasisData = {
  __typename?: 'ClientPaymentBasisData';
  cid?: Maybe<Scalars['Int']>;
  cidFee?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['GraphQLDate']>;
  day?: Maybe<Scalars['Int']>;
  debtCollection?: Maybe<Scalars['Int']>;
  ehfFee?: Maybe<Scalars['Int']>;
  invoices?: Maybe<ClientPaymentBasisInvoices>;
  month?: Maybe<Scalars['Int']>;
  remittances?: Maybe<Scalars['Int']>;
  /** Total amount of transactions for a given period */
  transactions?: Maybe<Scalars['Int']>;
  vatReturn?: Maybe<Scalars['Int']>;
  vouchers?: Maybe<ClientPaymentBasisVouchers>;
  year?: Maybe<Scalars['Int']>;
};

/** A count of sent invoices in a given period */
export type ClientPaymentBasisInvoices = {
  __typename?: 'ClientPaymentBasisInvoices';
  /** How many EHF invoices that was sent */
  ehf?: Maybe<Scalars['Int']>;
  /** How many email invoices that was sent */
  email?: Maybe<Scalars['Int']>;
  /** How many invoices that was posted by the system */
  post?: Maybe<Scalars['Int']>;
  /** How many invoices that was printed locally */
  print?: Maybe<Scalars['Int']>;
  /** How many invoices that was sent total */
  total?: Maybe<Scalars['Int']>;
};

/** A count of vouchers included in the billing basis */
export type ClientPaymentBasisVouchers = {
  __typename?: 'ClientPaymentBasisVouchers';
  /** How many advanced vouchers registered */
  advanced?: Maybe<Scalars['Int']>;
  /** How many bank statement vouchers registered */
  bankStatement?: Maybe<Scalars['Int']>;
  /** How customer invoices registered, sent invoices excluded */
  customerInvoice?: Maybe<Scalars['Int']>;
  /** How many custom declarations registered */
  customsDeclaration?: Maybe<Scalars['Int']>;
  /** How many payment vouchers registered */
  payment?: Maybe<Scalars['Int']>;
  /** How many supplier invoices registered */
  supplierInvoice?: Maybe<Scalars['Int']>;
  /** Total amount of vouchers included in the basis */
  total?: Maybe<Scalars['Int']>;
  /** How many vatReturn vouchers registered */
  vatReturn?: Maybe<Scalars['Int']>;
};

/** Client billing data, for a given period, more detailed */
export type ClientPaymentDetails = {
  __typename?: 'ClientPaymentDetails';
  basis?: Maybe<ClientPaymentBasis>;
  /** The invoice on this billing, if any */
  invoice?: Maybe<Invoice>;
  /** @deprecated Move to billing */
  payment?: Maybe<ClientPayment>;
  /** Only available for single client queries */
  plan?: Maybe<PaymentPlan>;
};

/** Options fetching a detailed client billing */
export type ClientPaymentDetailsOptions = {
  /** Which month to fetch data for (1 = january, etc) */
  month: Scalars['Int'];
  /** Which year to fetch data for. */
  year: Scalars['Int'];
};

/** Options fetching billing basis or billings */
export type ClientPaymentOptions = {
  /**
   * Which month to fetch data for (1 = january, etc). If "month"
   *                     is provided, you also need to provide the "year"
   */
  month?: InputMaybe<Scalars['Int']>;
  /** Which year to fetch data for. */
  year?: InputMaybe<Scalars['Int']>;
};

export enum ClientRole {
  Accountant = 'accountant',
  Administrator = 'administrator',
  Guest = 'guest',
  Member = 'member'
}

/** How to sort nodes in a query */
export type ClientSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: ClientOrderByType;
};

export enum ClientStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export type ClientSwitch = {
  __typename?: 'ClientSwitch';
  client?: Maybe<Client>;
  /** When the token expires */
  expires: Scalars['Float'];
  /** A JWT access token used to authenticate other requests */
  token: Scalars['String'];
};

export enum ClientTypeEnum {
  Company = 'company',
  Organization = 'organization',
  School = 'school'
}

/** Client input data, for updating a client */
export type ClientUpdateInput = {
  /** If the client should be flagged as an accounting firm */
  accountant?: InputMaybe<Scalars['Boolean']>;
  /** The email of the clients accountant */
  accountantEmail?: InputMaybe<Scalars['String']>;
  /** The id of the accounting firm for this client */
  accountingFirmId?: InputMaybe<Scalars['Int']>;
  /** The id of the template to use for accounting */
  accountingTemplate?: InputMaybe<Scalars['Int']>;
  /** The payment plan for this client */
  billingPlanId?: InputMaybe<Scalars['Int']>;
  /**
   * If this company has another company taking care of the
   *                     billing. Only workf for companies that are part of an agency
   */
  consolidatedBilling?: InputMaybe<Scalars['Boolean']>;
  /** The email of the clients debt collector */
  debtCollectorEmail?: InputMaybe<Scalars['String']>;
  /** If the client has activated features for departments */
  department?: InputMaybe<Scalars['Boolean']>;
  /** The email of the client */
  email?: InputMaybe<Scalars['String']>;
  /** The fax object of the client */
  fax?: InputMaybe<PhoneInput>;
  /**
   * If the company is registered in the Norwegian
   *                     "Foretaksregisteret"
   */
  foretaksregisteret?: InputMaybe<Scalars['Boolean']>;
  /** When the client was started/founded */
  founded?: InputMaybe<Scalars['GraphQLDate']>;
  /** The homepage of the client */
  homepage?: InputMaybe<Scalars['String']>;
  /** The id of the client */
  id: Scalars['Int'];
  /** The standard invoice fee for companies */
  invoiceFeeCompany?: InputMaybe<Scalars['Float']>;
  /** The standard invoice fee for private persons */
  invoiceFeePrivate?: InputMaybe<Scalars['Float']>;
  /** The message appearing on invoices from the client */
  invoiceMessage?: InputMaybe<Scalars['String']>;
  /**
   * If the company is flagged for being an agency (needs special
   *                     permissions)
   */
  isAgency?: InputMaybe<Scalars['Boolean']>;
  /** The legal entity type of the company */
  legalEntity?: InputMaybe<LegalEntity>;
  /** The location object of the client */
  locationBusiness?: InputMaybe<LocationInput>;
  /** The location object of the client */
  locationPost?: InputMaybe<LocationInput>;
  /** A GraphQL upload, add input name="logo" to a file upload */
  logo?: InputMaybe<Array<InputMaybe<Scalars['GraphQLFileUpload']>>>;
  /** The name of the client */
  name?: InputMaybe<Scalars['String']>;
  /** The next invoice number for the client */
  nextInvoiceNumber?: InputMaybe<Scalars['Int']>;
  /** The organization number of the client */
  organizationNumber?: InputMaybe<Scalars['String']>;
  /** The text appearing when sending payment reminders */
  paymentReminderTitle?: InputMaybe<Scalars['String']>;
  /** The phone object of the client */
  phone?: InputMaybe<PhoneInput>;
  /** If the client has activated the projects module */
  project?: InputMaybe<Scalars['Boolean']>;
  /** If the client has completed setup or not */
  setup?: InputMaybe<Scalars['Boolean']>;
  /** The status of the client, only admins can change this */
  status?: InputMaybe<ClientStatus>;
  /** Number of activated storage packs */
  storagePacks?: InputMaybe<Scalars['Int']>;
  /** If the client has activated the timesheets module */
  timesheet?: InputMaybe<Scalars['Boolean']>;
  /** If the client is registered for Value Added Tax or not */
  vat?: InputMaybe<Scalars['Boolean']>;
  /** How many months the client uses in VAT returns */
  vatReturnPeriod?: InputMaybe<Scalars['Int']>;
  /** If the client has enabled voucher attestation */
  voucherAttestation?: InputMaybe<Scalars['Boolean']>;
  /** Email for sending vouchers to the voucher inbox */
  voucherEmail?: InputMaybe<Scalars['String']>;
};

/** A comment */
export type Comment = {
  __typename?: 'Comment';
  /** The user who created this comment */
  author?: Maybe<User>;
  /** The comment body text */
  body?: Maybe<Scalars['String']>;
  /** When the comment was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The id of the comment */
  id?: Maybe<Scalars['Int']>;
  /** When the comment was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
};

export enum CommentContext {
  Customer = 'customer',
  File = 'file',
  Invoice = 'invoice',
  Post = 'post',
  Task = 'task'
}

/** Comment input data, for creating a new comment */
export type CommentCreateInput = {
  /** The comment body text */
  body: Scalars['String'];
  /** In what context you are creating the comment */
  context: CommentContext;
  /** The id of the context you are creating this comment for */
  contextId: Scalars['Int'];
};

export enum CommentOrderBy {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type CommentPaginatedResult = {
  __typename?: 'CommentPaginatedResult';
  data?: Maybe<Array<Maybe<Comment>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type CommentPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CommentSortDirection>>;
  /** A string you want to search comments for */
  search?: InputMaybe<Scalars['String']>;
};

/** How to sort nodes in a query */
export type CommentSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: CommentOrderBy;
};

/** Comment input data, for cupdating a comment */
export type CommentUpdateInput = {
  /** The comment body text */
  body?: InputMaybe<Scalars['String']>;
  /** The id of the comment */
  id: Scalars['Int'];
};

/** Input data for adding a company to an agency */
export type CompanyAddToAgency = {
  /**
   * The id of the agency. Special permissions needed. defaults
   *                     to logged in agency.
   */
  agencyId?: InputMaybe<Scalars['Int']>;
  /** The id of the company you want to remove */
  clientId: Scalars['Int'];
  /**
   * If you want the agency to receive the billing for
   *                     this company, defaults to false.
   */
  consolidatedBilling?: InputMaybe<Scalars['Boolean']>;
};

/** All the non private data available to the public */
export type CompanyPublicData = {
  __typename?: 'CompanyPublicData';
  /** The email of the company */
  email?: Maybe<Scalars['String']>;
  /** The fax object of the company */
  fax?: Maybe<Phone>;
  /** When the company was started/founded */
  founded?: Maybe<Scalars['String']>;
  /** The homepage of the company */
  homepage?: Maybe<Scalars['String']>;
  /** The id of the company */
  id: Scalars['Int'];
  /** The location object of the company */
  locationBusiness?: Maybe<Location>;
  /** The location object of the company */
  locationPost?: Maybe<Location>;
  /** The logo of the company */
  logo?: Maybe<Scalars['String']>;
  /** The name of the fircompanym */
  name?: Maybe<Scalars['String']>;
  /** The organization number of the company */
  organizationNumber?: Maybe<Scalars['String']>;
  /** The phone object of the company */
  phone?: Maybe<Phone>;
};

/** Input data for removing a company from an agency */
export type CompanyRemoveFromAgency = {
  /**
   * The id of the agency. Special permissions needed. defaults
   *                     to logged in agency.
   */
  agencyId?: InputMaybe<Scalars['Int']>;
  /** The id of the company you want to remove */
  clientId: Scalars['Int'];
};

/** Different statistics about a company */
export type CompanyStatistics = {
  __typename?: 'CompanyStatistics';
  balance?: Maybe<StatisticsBalance>;
  incomingInvoices?: Maybe<StatisticsInvoices>;
  invoices?: Maybe<StatisticsInvoiceCounts>;
  outgoingInvoices?: Maybe<StatisticsInvoices>;
  /** The result of the given period */
  result?: Maybe<Scalars['Float']>;
  /** Amount to be payed */
  totalBankPayments?: Maybe<StatisticsBankPayments>;
  /** Total users in a company */
  totalMembers?: Maybe<Scalars['Int']>;
  vouchers?: Maybe<StatisticsVoucherCounts>;
};


/** Different statistics about a company */
export type CompanyStatisticsBalanceArgs = {
  options?: InputMaybe<StatisticsOptions>;
};


/** Different statistics about a company */
export type CompanyStatisticsIncomingInvoicesArgs = {
  options?: InputMaybe<StatisticsOptions>;
};


/** Different statistics about a company */
export type CompanyStatisticsOutgoingInvoicesArgs = {
  options?: InputMaybe<StatisticsOptions>;
};


/** Different statistics about a company */
export type CompanyStatisticsResultArgs = {
  options?: InputMaybe<StatisticsOptions>;
};

/** A contact, contacts on customers and suppliers */
export type Contact = {
  __typename?: 'Contact';
  /** The date the contact was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The emails of the contact */
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The first name of the contact */
  firstname?: Maybe<Scalars['String']>;
  /** The id of the contact */
  id?: Maybe<Scalars['Int']>;
  /** The last name of the contact */
  lastname?: Maybe<Scalars['String']>;
  /** The middle name of the contact */
  middlename?: Maybe<Scalars['String']>;
  /** The full name of the contact */
  name?: Maybe<Scalars['String']>;
  /** Notes stored on the contact */
  notes?: Maybe<Scalars['String']>;
  /** The phone objects of the contact */
  phones?: Maybe<Array<Maybe<Phone>>>;
  /** The title of the contact */
  title?: Maybe<Scalars['String']>;
};

export enum ContactContext {
  Customer = 'customer',
  Supplier = 'supplier'
}

/** Contact input data, for creating a new contact */
export type ContactCreateInput = {
  /** The context to create a connected contact */
  context?: InputMaybe<ContactContext>;
  /** The id of the context (customer, supplier etc) */
  contextId?: InputMaybe<Scalars['Int']>;
  /** The emails of the contact */
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The first name of the contact */
  firstname: Scalars['String'];
  /** The (optional) id of the contact (for connecting contexts) */
  id?: InputMaybe<Scalars['Int']>;
  /** The last name of the contact */
  lastname?: InputMaybe<Scalars['String']>;
  /** The middle name of the contact */
  middlename?: InputMaybe<Scalars['String']>;
  /** Notes stored on the contact */
  notes?: InputMaybe<Scalars['String']>;
  /** The phone objects of the contact */
  phones?: InputMaybe<Array<InputMaybe<PhoneInput>>>;
  /** The title of the contact */
  title?: InputMaybe<Scalars['String']>;
};

/** Contact query options and filters */
export type ContactOptions = {
  /** A string you want to search contacts for */
  search?: InputMaybe<Scalars['String']>;
};

export enum ContactOrderByType {
  Created = 'created',
  Id = 'id',
  Name = 'name'
}

export type ContactPaginatedResult = {
  __typename?: 'ContactPaginatedResult';
  data?: Maybe<Array<Maybe<Contact>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type ContactPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** In which context you are fetching contacts */
  context?: InputMaybe<ContactContext>;
  /**
   * The id of the context you are fetching contacts for, i.e.
   *                     customer, supplier
   */
  contextId?: InputMaybe<Scalars['Int']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ContactSortDirection>>;
  /** A string you want to search customers for */
  search?: InputMaybe<Scalars['String']>;
};

/** How to sort nodes in a query */
export type ContactSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: ContactOrderByType;
};

/** Contact input data, for updating a contact */
export type ContactUpdateInput = {
  /** The emails of the contact */
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The first name of the contact */
  firstname?: InputMaybe<Scalars['String']>;
  /** The id of the contact */
  id: Scalars['Int'];
  /** The last name of the contact */
  lastname?: InputMaybe<Scalars['String']>;
  /** The middle name of the contact */
  middlename?: InputMaybe<Scalars['String']>;
  /** Notes stored on the contact */
  notes?: InputMaybe<Scalars['String']>;
  /** The phone objects of the contact */
  phones?: InputMaybe<Array<InputMaybe<PhoneInput>>>;
  /** The title of the contact */
  title?: InputMaybe<Scalars['String']>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  /** The latitude of the coordinate object */
  lat: Scalars['Float'];
  /** The longitude of the coordinate object */
  lon: Scalars['Float'];
};

export type CoordinatesInput = {
  /** The latitude of the coordinate object */
  lat: Scalars['Float'];
  /** The longitude of the coordinate object */
  lon: Scalars['Float'];
};

export type Country = {
  __typename?: 'Country';
  /** The country code of the location */
  code?: Maybe<Scalars['String']>;
  /** The country name of the location */
  name?: Maybe<Scalars['String']>;
};

export type CountryInput = {
  /** The country code of the location */
  code: Scalars['String'];
  /** The country name of the location */
  name?: InputMaybe<Scalars['String']>;
};

/** A currency object */
export type Currency = {
  __typename?: 'Currency';
  /** The amount */
  amount?: Maybe<Scalars['Float']>;
  code?: Maybe<CurrencyCode>;
  /** The exchange rate */
  exchangeRate?: Maybe<Scalars['Float']>;
};

export enum CurrencyCode {
  /** United Arab Emirates Dirham */
  Aed = 'AED',
  /** Afghan Afghani */
  Afn = 'AFN',
  /** Albanian Lek */
  All = 'ALL',
  /** Armenian Dram */
  Amd = 'AMD',
  /** Netherlands Antillean Guilder */
  Ang = 'ANG',
  /** Angolan Kwanza */
  Aoa = 'AOA',
  /** Argentine Peso */
  Ars = 'ARS',
  /** Australian Dollar */
  Aud = 'AUD',
  /** Aruban Florin */
  Awg = 'AWG',
  /** Azerbaijani Manat */
  Azn = 'AZN',
  /** Bosnia-Herzegovina Convertible Mark */
  Bam = 'BAM',
  /** Barbadian Dollar */
  Bbd = 'BBD',
  /** Bangladeshi Taka */
  Bdt = 'BDT',
  /** Bulgarian Lev */
  Bgn = 'BGN',
  /** Bahraini Dinar */
  Bhd = 'BHD',
  /** Burundian Franc */
  Bif = 'BIF',
  /** Bermudan Dollar */
  Bmd = 'BMD',
  /** Brunei Dollar */
  Bnd = 'BND',
  /** Bolivian Boliviano */
  Bob = 'BOB',
  /** Brazilian Real */
  Brl = 'BRL',
  /** Bahamian Dollar */
  Bsd = 'BSD',
  /** Bitcoin */
  Btc = 'BTC',
  /** Bhutanese Ngultrum */
  Btn = 'BTN',
  /** Botswanan Pula */
  Bwp = 'BWP',
  /** New Belarusian Ruble */
  Byn = 'BYN',
  /** Belarusian Ruble */
  Byr = 'BYR',
  /** Belize Dollar */
  Bzd = 'BZD',
  /** Canadian Dollar */
  Cad = 'CAD',
  /** Congolese Franc */
  Cdf = 'CDF',
  /** Swiss Franc */
  Chf = 'CHF',
  /** Chilean Unit of Account (UF) */
  Clf = 'CLF',
  /** Chilean Peso */
  Clp = 'CLP',
  /** Chinese Yuan */
  Cny = 'CNY',
  /** Colombian Peso */
  Cop = 'COP',
  /** Costa Rican Colón */
  Crc = 'CRC',
  /** Cuban Convertible Peso */
  Cuc = 'CUC',
  /** Cuban Peso */
  Cup = 'CUP',
  /** Cape Verdean Escudo */
  Cve = 'CVE',
  /** Czech Republic Koruna */
  Czk = 'CZK',
  /** Djiboutian Franc */
  Djf = 'DJF',
  /** Danish Krone */
  Dkk = 'DKK',
  /** Dominican Peso */
  Dop = 'DOP',
  /** Algerian Dinar */
  Dzd = 'DZD',
  /** Egyptian Pound */
  Egp = 'EGP',
  /** Eritrean Nakfa */
  Ern = 'ERN',
  /** Ethiopian Birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fijian Dollar */
  Fjd = 'FJD',
  /** Falkland Islands Pound */
  Fkp = 'FKP',
  /** British Pound Sterling */
  Gbp = 'GBP',
  /** Georgian Lari */
  Gel = 'GEL',
  /** Guernsey Pound */
  Ggp = 'GGP',
  /** Ghanaian Cedi */
  Ghs = 'GHS',
  /** Gibraltar Pound */
  Gip = 'GIP',
  /** Gambian Dalasi */
  Gmd = 'GMD',
  /** Guinean Franc */
  Gnf = 'GNF',
  /** Guatemalan Quetzal */
  Gtq = 'GTQ',
  /** Guyanaese Dollar */
  Gyd = 'GYD',
  /** Hong Kong Dollar */
  Hkd = 'HKD',
  /** Honduran Lempira */
  Hnl = 'HNL',
  /** Croatian Kuna */
  Hrk = 'HRK',
  /** Haitian Gourde */
  Htg = 'HTG',
  /** Hungarian Forint */
  Huf = 'HUF',
  /** Indonesian Rupiah */
  Idr = 'IDR',
  /** Israeli New Sheqel */
  Ils = 'ILS',
  /** Manx pound */
  Imp = 'IMP',
  /** Indian Rupee */
  Inr = 'INR',
  /** Iraqi Dinar */
  Iqd = 'IQD',
  /** Iranian Rial */
  Irr = 'IRR',
  /** Icelandic Króna */
  Isk = 'ISK',
  /** Jersey Pound */
  Jep = 'JEP',
  /** Jamaican Dollar */
  Jmd = 'JMD',
  /** Jordanian Dinar */
  Jod = 'JOD',
  /** Japanese Yen */
  Jpy = 'JPY',
  /** Kenyan Shilling */
  Kes = 'KES',
  /** Kyrgystani Som */
  Kgs = 'KGS',
  /** Cambodian Riel */
  Khr = 'KHR',
  /** Comorian Franc */
  Kmf = 'KMF',
  /** North Korean Won */
  Kpw = 'KPW',
  /** South Korean Won */
  Krw = 'KRW',
  /** Kuwaiti Dinar */
  Kwd = 'KWD',
  /** Cayman Islands Dollar */
  Kyd = 'KYD',
  /** Kazakhstani Tenge */
  Kzt = 'KZT',
  /** Laotian Kip */
  Lak = 'LAK',
  /** Lebanese Pound */
  Lbp = 'LBP',
  /** Sri Lankan Rupee */
  Lkr = 'LKR',
  /** Liberian Dollar */
  Lrd = 'LRD',
  /** Lesotho Loti */
  Lsl = 'LSL',
  /** Lithuanian Litas */
  Ltl = 'LTL',
  /** Latvian Lats */
  Lvl = 'LVL',
  /** Libyan Dinar */
  Lyd = 'LYD',
  /** Moroccan Dirham */
  Mad = 'MAD',
  /** Moldovan Leu */
  Mdl = 'MDL',
  /** Malagasy Ariary */
  Mga = 'MGA',
  /** Macedonian Denar */
  Mkd = 'MKD',
  /** Myanma Kyat */
  Mmk = 'MMK',
  /** Mongolian Tugrik */
  Mnt = 'MNT',
  /** Macanese Pataca */
  Mop = 'MOP',
  /** Mauritanian Ouguiya */
  Mro = 'MRO',
  /** Mauritian Rupee */
  Mur = 'MUR',
  /** Maldivian Rufiyaa */
  Mvr = 'MVR',
  /** Malawian Kwacha */
  Mwk = 'MWK',
  /** Mexican Peso */
  Mxn = 'MXN',
  /** Malaysian Ringgit */
  Myr = 'MYR',
  /** Mozambican Metical */
  Mzn = 'MZN',
  /** Namibian Dollar */
  Nad = 'NAD',
  /** Nigerian Naira */
  Ngn = 'NGN',
  /** Nicaraguan Córdoba */
  Nio = 'NIO',
  /** Norwegian Krone */
  Nok = 'NOK',
  /** Nepalese Rupee */
  Npr = 'NPR',
  /** New Zealand Dollar */
  Nzd = 'NZD',
  /** Omani Rial */
  Omr = 'OMR',
  /** Panamanian Balboa */
  Pab = 'PAB',
  /** Peruvian Nuevo Sol */
  Pen = 'PEN',
  /** Papua New Guinean Kina */
  Pgk = 'PGK',
  /** Philippine Peso */
  Php = 'PHP',
  /** Pakistani Rupee */
  Pkr = 'PKR',
  /** Polish Zloty */
  Pln = 'PLN',
  /** Paraguayan Guarani */
  Pyg = 'PYG',
  /** Qatari Rial */
  Qar = 'QAR',
  /** Romanian Leu */
  Ron = 'RON',
  /** Serbian Dinar */
  Rsd = 'RSD',
  /** Russian Ruble */
  Rub = 'RUB',
  /** Rwandan Franc */
  Rwf = 'RWF',
  /** Saudi Riyal */
  Sar = 'SAR',
  /** Solomon Islands Dollar */
  Sbd = 'SBD',
  /** Seychellois Rupee */
  Scr = 'SCR',
  /** Sudanese Pound */
  Sdg = 'SDG',
  /** Swedish Krona */
  Sek = 'SEK',
  /** Singapore Dollar */
  Sgd = 'SGD',
  /** Saint Helena Pound */
  Shp = 'SHP',
  /** Sierra Leonean Leone */
  Sll = 'SLL',
  /** Somali Shilling */
  Sos = 'SOS',
  /** Surinamese Dollar */
  Srd = 'SRD',
  /** São Tomé and Príncipe Dobra */
  Std = 'STD',
  /** Salvadoran Colón */
  Svc = 'SVC',
  /** Syrian Pound */
  Syp = 'SYP',
  /** Swazi Lilangeni */
  Szl = 'SZL',
  /** Thai Baht */
  Thb = 'THB',
  /** Tajikistani Somoni */
  Tjs = 'TJS',
  /** Turkmenistani Manat */
  Tmt = 'TMT',
  /** Tunisian Dinar */
  Tnd = 'TND',
  /** Tongan Paʻanga */
  Top = 'TOP',
  /** Turkish Lira */
  Try = 'TRY',
  /** Trinidad and Tobago Dollar */
  Ttd = 'TTD',
  /** New Taiwan Dollar */
  Twd = 'TWD',
  /** Tanzanian Shilling */
  Tzs = 'TZS',
  /** Ukrainian Hryvnia */
  Uah = 'UAH',
  /** Ugandan Shilling */
  Ugx = 'UGX',
  /** United States Dollar */
  Usd = 'USD',
  /** Uruguayan Peso */
  Uyu = 'UYU',
  /** Uzbekistan Som */
  Uzs = 'UZS',
  /** Venezuelan Bolívar Fuerte */
  Vef = 'VEF',
  /** Vietnamese Dong */
  Vnd = 'VND',
  /** Vanuatu Vatu */
  Vuv = 'VUV',
  /** Samoan Tala */
  Wst = 'WST',
  /** CFA Franc BEAC */
  Xaf = 'XAF',
  /** Silver (troy ounce) */
  Xag = 'XAG',
  /** Gold (troy ounce) */
  Xau = 'XAU',
  /** East Caribbean Dollar */
  Xcd = 'XCD',
  /** Special Drawing Rights */
  Xdr = 'XDR',
  /** CFA Franc BCEAO */
  Xof = 'XOF',
  /** CFP Franc */
  Xpf = 'XPF',
  /** Yemeni Rial */
  Yer = 'YER',
  /** South African Rand */
  Zar = 'ZAR',
  /** Zambian Kwacha (pre-2013) */
  Zmk = 'ZMK',
  /** Zambian Kwacha */
  Zmw = 'ZMW',
  /** Zimbabwean Dollar */
  Zwl = 'ZWL'
}

/** A currency input object */
export type CurrencyInput = {
  /** The transaction amount in the company's default currency */
  amount?: InputMaybe<Scalars['Float']>;
  code: CurrencyCode;
};

/** Cursors to help with pagination */
export type Cursors = {
  __typename?: 'Cursors';
  /** The last cursor in the result */
  after?: Maybe<Scalars['String']>;
  /** The first cursor in the result */
  before?: Maybe<Scalars['String']>;
};

export type CustomVatCode = {
  __typename?: 'CustomVatCode';
  /** baseRate of the vat code */
  baseRate?: Maybe<Scalars['Float']>;
  /** Reference code table */
  code?: Maybe<Scalars['Int']>;
  /** Country of the vat code */
  country?: Maybe<Scalars['String']>;
  /** Custom code of the vat code */
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  /** Name of the vat code */
  name?: Maybe<Scalars['String']>;
  /** Present of the vat code */
  percent?: Maybe<Scalars['Float']>;
  /** Vat code */
  vatCode?: Maybe<VatCode>;
};

export type CustomVatCodeCreate = {
  /** baseRate of the vat code */
  baseRate: Scalars['Float'];
  /** Reference code table */
  code: Scalars['Int'];
  description?: InputMaybe<Scalars['String']>;
  /** Name of the vat code */
  name: Scalars['String'];
};

/** VatCode query options and filters */
export type CustomVatCodeOptions = {
  /** The date where this percent is valid from, inclusive */
  date?: InputMaybe<Scalars['GraphQLDate']>;
  /** A string you want to search vat codes for */
  search?: InputMaybe<Scalars['String']>;
  /** Only return certain VAT code types */
  types?: InputMaybe<Array<InputMaybe<VatCodeType>>>;
};

export type CustomVatCodeUpdate = {
  /** baseRate of the vat code */
  baseRate?: InputMaybe<Scalars['Float']>;
  /** Reference code table */
  code?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** Name of the vat code */
  name?: InputMaybe<Scalars['String']>;
};

/** A customer, users can be a part of multiple customers */
export type Customer = {
  __typename?: 'Customer';
  /** The account manager for this customer */
  accountManager?: Maybe<User>;
  bankAccounts?: Maybe<Array<Maybe<BankAccountListing>>>;
  /** The contacts on this customer */
  contacts?: Maybe<Array<Maybe<Contact>>>;
  country?: Maybe<Country>;
  /** The date the customer was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The customer number */
  customerNumber?: Maybe<Scalars['Int']>;
  deliveryMethods?: Maybe<Array<Maybe<DeliveryMethods>>>;
  /** Discount in percent */
  discountPercent?: Maybe<Scalars['Float']>;
  /** The number of days the customer have to pay invoices */
  dueDays?: Maybe<Scalars['Int']>;
  /** The email of the customer */
  email?: Maybe<Scalars['String']>;
  /** The fax object of the customer */
  fax?: Maybe<Phone>;
  /** When the customer was started/founded */
  founded?: Maybe<Scalars['GraphQLDate']>;
  /** The homepage of the customer */
  homepage?: Maybe<Scalars['String']>;
  /** The id of the customer */
  id?: Maybe<Scalars['Int']>;
  /** Preferred invoicing currency code */
  invoiceCurrency?: Maybe<CurrencyCode>;
  /** Preferred invoice delivery method */
  invoiceDeliveryMethod?: Maybe<DeliveryMethods>;
  /** Preferred invoice email address */
  invoiceEmail?: Maybe<Scalars['String']>;
  /** Preferred invoicing language */
  invoiceLanguage?: Maybe<SiteLanguage>;
  /** The invoices on this customer */
  invoices?: Maybe<InvoicePaginatedResult>;
  /** The location object of the customer */
  locationBusiness?: Maybe<Location>;
  /** The location object of the customer */
  locationPost?: Maybe<Location>;
  /** The logo of the customer */
  logo?: Maybe<Scalars['String']>;
  /** The mobile phone object of the customer */
  mobile?: Maybe<Phone>;
  /** The name of the customer */
  name?: Maybe<Scalars['String']>;
  /** Notes about the customer, if any */
  notes?: Maybe<Scalars['String']>;
  /** The organization number of the customer */
  organizationNumber?: Maybe<Scalars['String']>;
  /** The phone object of the customer */
  phone?: Maybe<Phone>;
  /** The posts on this customer */
  posts?: Maybe<PostPaginatedResult>;
  /** The projects related to this customer */
  projects?: Maybe<ProjectPaginatedResult>;
  /** The tags on this customer */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** The tasks belonging to this customer */
  tasks?: Maybe<TaskPaginatedResult>;
  /** What kind of customer this is */
  type?: Maybe<CustomerType>;
  /** The date the customer was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** If the customer is registered for Value Added Tax or not */
  vat?: Maybe<Scalars['Boolean']>;
};


/** A customer, users can be a part of multiple customers */
export type CustomerContactsArgs = {
  options?: InputMaybe<ContactOptions>;
};


/** A customer, users can be a part of multiple customers */
export type CustomerInvoicesArgs = {
  options?: InputMaybe<InvoicePagingOptions>;
};


/** A customer, users can be a part of multiple customers */
export type CustomerPostsArgs = {
  options?: InputMaybe<PostPagingOptions>;
};


/** A customer, users can be a part of multiple customers */
export type CustomerProjectsArgs = {
  options?: InputMaybe<ProjectPagingOptions>;
};


/** A customer, users can be a part of multiple customers */
export type CustomerTasksArgs = {
  options?: InputMaybe<TaskPagingOptions>;
};

/** Customer input data, for creating a new customer */
export type CustomerCreateInput = {
  /**
   * The id of the user which is acting as this customer's
   *                     account manager
   */
  accountManagerId?: InputMaybe<Scalars['Int']>;
  /** A list of bank accounts for payments to this supplier */
  bankAccounts?: InputMaybe<Array<InputMaybe<BankAccountListingInput>>>;
  contacts?: InputMaybe<Array<InputMaybe<ContactCreateInput>>>;
  /** The country code of the customer */
  countryCode?: InputMaybe<Scalars['String']>;
  /** The customer number, leave blank to create this customer as a lead */
  customerNumber?: InputMaybe<Scalars['Int']>;
  /** Discount in percent */
  discountPercent?: InputMaybe<Scalars['Float']>;
  /** The number of days the customer have to pay invoices */
  dueDays: Scalars['Int'];
  /** The email of the customer */
  email?: InputMaybe<Scalars['String']>;
  /** The fax object of the customer */
  fax?: InputMaybe<PhoneInput>;
  /** When the customer was started/founded */
  founded?: InputMaybe<Scalars['GraphQLDate']>;
  /** The homepage of the customer */
  homepage?: InputMaybe<Scalars['String']>;
  /** Preferred invoicing currency code */
  invoiceCurrency?: InputMaybe<CurrencyCode>;
  /** Preferred invoice delivery method */
  invoiceDeliveryMethod?: InputMaybe<DeliveryMethods>;
  /** Preferred invoice email address */
  invoiceEmail?: InputMaybe<Scalars['String']>;
  /** Preferred invoicing language */
  invoiceLanguage?: InputMaybe<SiteLanguage>;
  /** The location object of the customer */
  locationBusiness?: InputMaybe<LocationInput>;
  /** The location object of the customer */
  locationPost?: InputMaybe<LocationInput>;
  /** The logo of the customer */
  logo?: InputMaybe<Scalars['String']>;
  /** The mobile phone object of the customer */
  mobile?: InputMaybe<PhoneInput>;
  /** The name of the customer */
  name: Scalars['String'];
  /** Notes about the customer, if any */
  notes?: InputMaybe<Scalars['String']>;
  /** The organization number of the customer */
  organizationNumber?: InputMaybe<Scalars['String']>;
  /** The phone object of the customer */
  phone?: InputMaybe<PhoneInput>;
  /** What kind of customer this is */
  type?: InputMaybe<CustomerType>;
  /** If the customer is registered for Value Added Tax or not */
  vat?: InputMaybe<Scalars['Boolean']>;
};

/** The customer ledger during a specific period */
export type CustomerLedgerReport = {
  __typename?: 'CustomerLedgerReport';
  /** The change from incoming to outgoing */
  change?: Maybe<Scalars['Float']>;
  customer?: Maybe<Customer>;
  /** The account balance at the start of the period */
  incomingBalance?: Maybe<Scalars['Float']>;
  /** The account balance at the end of the period */
  outgoingBalance?: Maybe<Scalars['Float']>;
  /** All the transactions in this calculation */
  transactions?: Maybe<Array<Maybe<AccountTransaction>>>;
};

/** Query options for customer ledger reports */
export type CustomerLedgerReportOptions = {
  /** Limit results to include exact amount in voucher transactions */
  amount?: InputMaybe<Scalars['Float']>;
  /** Limit results to include transaction amounts in this range */
  amountRange?: InputMaybe<Range>;
  /**
   * Optional client id, for getting reports for a specific
   *                   client, only usable by administrators
   */
  clientId?: InputMaybe<Scalars['Int']>;
  /** To include / exclude corrections, defaults to true (include). */
  corrections?: InputMaybe<Scalars['Boolean']>;
  /**
   * Optional list of customer ids, if present, only results
   *                     with these ids will be included
   */
  customers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Optional department id to filter accounting data */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** The period start date to fetch account data */
  from?: InputMaybe<Scalars['GraphQLDate']>;
  /** To only show open posts (on customers / suppliers) */
  openPostings?: InputMaybe<Scalars['Boolean']>;
  /** Optional project id to filter accounting data */
  projectId?: InputMaybe<Scalars['Int']>;
  /** The period end date to fetch account data */
  to?: InputMaybe<Scalars['GraphQLDate']>;
};

export enum CustomerOrderByType {
  Created = 'created',
  CustomerNumber = 'customerNumber',
  Id = 'id',
  Name = 'name'
}

export type CustomerPaginatedResult = {
  __typename?: 'CustomerPaginatedResult';
  data?: Maybe<Array<Maybe<Customer>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type CustomerPagingOptions = {
  /** Only show results for a specific account manager */
  accountManager?: InputMaybe<Scalars['Int']>;
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** Also includes customers that are leads only */
  includeLeads?: InputMaybe<Scalars['Boolean']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CustomerSortDirection>>;
  /** A string you want to search customers for */
  search?: InputMaybe<Scalars['String']>;
};

/** How to sort nodes in a query */
export type CustomerSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: CustomerOrderByType;
};

export enum CustomerType {
  Company = 'company',
  Private = 'private'
}

/** Customer input data, for updating a customer */
export type CustomerUpdateInput = {
  /**
   * The id of the user which is acting as this customer's
   *                     account manager
   */
  accountManagerId?: InputMaybe<Scalars['Int']>;
  /** The country code of the customer */
  countryCode?: InputMaybe<Scalars['String']>;
  /** The customer number */
  customerNumber?: InputMaybe<Scalars['Int']>;
  /** Discount in percent */
  discountPercent?: InputMaybe<Scalars['Float']>;
  /** The number of days the customer have to pay invoices */
  dueDays?: InputMaybe<Scalars['Int']>;
  /** The email of the customer */
  email?: InputMaybe<Scalars['String']>;
  /** The fax object of the customer */
  fax?: InputMaybe<PhoneInput>;
  /** When the customer was started/founded */
  founded?: InputMaybe<Scalars['GraphQLDate']>;
  /** The homepage of the customer */
  homepage?: InputMaybe<Scalars['String']>;
  /** The id of the customer */
  id: Scalars['Int'];
  /** Preferred invoicing currency code */
  invoiceCurrency?: InputMaybe<CurrencyCode>;
  /** Preferred invoice delivery method */
  invoiceDeliveryMethod?: InputMaybe<DeliveryMethods>;
  /** Preferred invoice email address */
  invoiceEmail?: InputMaybe<Scalars['String']>;
  /** Preferred invoicing language */
  invoiceLanguage?: InputMaybe<SiteLanguage>;
  /** The location object of the customer */
  locationBusiness?: InputMaybe<LocationInput>;
  /** The location object of the customer */
  locationPost?: InputMaybe<LocationInput>;
  /** The logo of the customer */
  logo?: InputMaybe<Scalars['String']>;
  /** The mobile phone object of the customer */
  mobile?: InputMaybe<PhoneInput>;
  /** The name of the customer */
  name?: InputMaybe<Scalars['String']>;
  /** Notes about the customer, if any */
  notes?: InputMaybe<Scalars['String']>;
  /** The organization number of the customer */
  organizationNumber?: InputMaybe<Scalars['String']>;
  /** The phone object of the customer */
  phone?: InputMaybe<PhoneInput>;
  /** What kind of customer this is */
  type?: InputMaybe<CustomerType>;
  /** If the customer is registered for Value Added Tax or not */
  vat?: InputMaybe<Scalars['Boolean']>;
};

/** A date filter object */
export type DateQueryFilter = {
  /** The from date, inclusive */
  from?: InputMaybe<Scalars['GraphQLDate']>;
  /** The to date, inclusive */
  to?: InputMaybe<Scalars['GraphQLDate']>;
};

export enum DeliveryMethods {
  Ehf = 'ehf',
  Email = 'email',
  Post = 'post',
  Print = 'print'
}

/** A department is used to devide parts of accounting data. */
export type Department = {
  __typename?: 'Department';
  /** If the department is active or not */
  active?: Maybe<Scalars['Boolean']>;
  /** The date the department was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The code or number of the department */
  departmentCode?: Maybe<Scalars['String']>;
  /** The leader for this department */
  departmentLeader?: Maybe<User>;
  /** The description of the department */
  description?: Maybe<Scalars['String']>;
  /** The id of the department */
  id?: Maybe<Scalars['Int']>;
  /** The members of this department */
  members?: Maybe<Array<Maybe<ClientMember>>>;
  /** The name of the department */
  name?: Maybe<Scalars['String']>;
};

/** Department input data, for creating a new department */
export type DepartmentCreateInput = {
  /** The department code or number */
  departmentCode?: InputMaybe<Scalars['String']>;
  /** The id of the user which is acting as this department's leader */
  departmentLeaderId?: InputMaybe<Scalars['Int']>;
  /** Optional description of the department */
  description?: InputMaybe<Scalars['String']>;
  /** A list of client member ids to set as members */
  members?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The name of the department */
  name: Scalars['String'];
};

/** Departments query options and filters */
export type DepartmentOptions = {
  /** Client id to fetch departments for a specific client (Admin only) */
  clientId?: InputMaybe<Scalars['Int']>;
  /** Only show results for a specific department leader */
  departmentLeader?: InputMaybe<Scalars['Int']>;
  /** A string you want to search departments for */
  search?: InputMaybe<Scalars['String']>;
};

/** Department input data, for updating a department */
export type DepartmentUpdateInput = {
  /** The department code or number */
  departmentCode?: InputMaybe<Scalars['String']>;
  /** The id of the user which is acting as this department's leader */
  departmentLeaderId?: InputMaybe<Scalars['Int']>;
  /** Optional description of the department */
  description?: InputMaybe<Scalars['String']>;
  /** The id of the department */
  id: Scalars['Int'];
  /** A list of client member ids to set as members */
  members?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The name of the department */
  name: Scalars['String'];
};

/** Different types of employment statuses */
export enum EmploymentStatus {
  Apprenticeship = 'apprenticeship',
  Consultant = 'consultant',
  Freelance = 'freelance',
  FullTime = 'fullTime',
  Internship = 'internship',
  PartTime = 'partTime',
  Seasonal = 'seasonal',
  SelfEmployed = 'selfEmployed'
}

/** An exchange rate object */
export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  /** The currency code */
  code?: Maybe<Scalars['String']>;
  /** The rate for this currency */
  rate?: Maybe<Scalars['Float']>;
};

/** An export object */
export type Export = {
  __typename?: 'Export';
  /** Url to download the export */
  file?: Maybe<Scalars['String']>;
};

export enum ExportEncoding {
  Iso = 'iso',
  Mac = 'mac',
  Utf8 = 'utf8'
}

export enum ExportFormat {
  Csv = 'csv',
  Pdf = 'pdf',
  Sheet = 'sheet',
  /** (only automatic vat return) */
  Xml = 'xml'
}

/** Options for exporting data */
export type ExportOptions = {
  /** Optional account to limit the results */
  account?: InputMaybe<Scalars['Int']>;
  /** Limit results to include exact amount in voucher transactions */
  amount?: InputMaybe<Scalars['Float']>;
  /** Limit results to include transaction amounts in this range */
  amountRange?: InputMaybe<Range>;
  /**
   * Optional client id, for getting reports for a specific
   *                   client, only usable by administrators
   */
  clientId?: InputMaybe<Scalars['Int']>;
  /**
   * If you want to include/exclude corrections. Defaults to
   *                     "false" (not including corrections)
   */
  corrections?: InputMaybe<Scalars['Boolean']>;
  /**
   * Optional list of customer ids, if present, only results
   *                   with these ids will be included
   */
  customers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /**
   * If decimals will be shown, defaults to true for ledger and
   *                     balance queries, false for result report
   */
  decimals?: InputMaybe<Scalars['Boolean']>;
  /** Optional department id to filter accounting data */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** This option only applies to CSV exports. Defaults to UTF-8 */
  encoding?: InputMaybe<ExportEncoding>;
  format: ExportFormat;
  /** The period start date to fetch account data */
  from?: InputMaybe<Scalars['GraphQLDate']>;
  /** To only show open posts (on customers / suppliers) */
  openPostings?: InputMaybe<Scalars['Boolean']>;
  /** Optional project id to filter accounting data */
  projectId?: InputMaybe<Scalars['Int']>;
  /** Optional range of accounts to limit the results */
  range?: InputMaybe<Range>;
  /**
   * Optional list of supplier ids, if present, only results
   *                   with these ids will be included
   */
  suppliers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The period end date to fetch account data */
  to?: InputMaybe<Scalars['GraphQLDate']>;
};

/** Options for exporting vouchers */
export type ExportVouchersOptions = {
  /** The period start date to fetch vouchers */
  from?: InputMaybe<Scalars['GraphQLDate']>;
  /** The period end date to fetch vouchers */
  to?: InputMaybe<Scalars['GraphQLDate']>;
};

/** A file object */
export type File = {
  __typename?: 'File';
  /** When the file was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The file extension */
  ext?: Maybe<Scalars['String']>;
  /** If the file is a featured file (main file of voucher etc.) */
  featured?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for this file */
  id?: Maybe<Scalars['Int']>;
  /** The mime type of the file */
  mimetype?: Maybe<Scalars['String']>;
  /** The name of this file */
  name?: Maybe<Scalars['String']>;
  /** The original file name */
  originalName?: Maybe<Scalars['String']>;
  /** The number of pages if PDF */
  pages?: Maybe<Scalars['Int']>;
  /** The size of the file, in bytes */
  size?: Maybe<Scalars['Int']>;
  /** The tags on this file */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** The thumbnail for this file */
  thumb?: Maybe<FileThumb>;
  /** The url of the file */
  url?: Maybe<Scalars['String']>;
};

export enum FileContext {
  /** Customer object that can have files */
  Customer = 'customer',
  /** Department object that can have files */
  Department = 'department',
  /** Project object that can have files */
  Project = 'project',
  /** Supplier object that can have files */
  Supplier = 'supplier',
  /** Task object that can have files */
  Task = 'task',
  /** User object that can have files */
  User = 'user',
  /** Voucher object that can have file */
  Voucher = 'voucher'
}

export type FileMergeInput = {
  files: Array<InputMaybe<Scalars['Int']>>;
  name: Scalars['String'];
};

export enum FileOrderBy {
  Context = 'context',
  ContextId = 'contextId',
  Created = 'created',
  Featured = 'featured',
  Id = 'id',
  Name = 'name'
}

export type FilePaginatedResult = {
  __typename?: 'FilePaginatedResult';
  data?: Maybe<Array<Maybe<File>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type FilePagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** In which context you are fetching files */
  context?: InputMaybe<FileContext>;
  /**
   * The id of the context you are fetching files for, i.e.
   *                     customer, project, supplier, task, user
   */
  contextId?: InputMaybe<Scalars['Int']>;
  /** The id of the parent folder you want the files to */
  folderId?: InputMaybe<Scalars['Int']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FileSortDirection>>;
  /** A string you want to search files for */
  search?: InputMaybe<Scalars['String']>;
};

/** How to sort nodes in a query */
export type FileSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: FileOrderBy;
};

export enum FileStorageContext {
  /** Customer object that can have files */
  Customer = 'customer',
  /** Department object that can have files */
  Department = 'department',
  /** User object that can have files */
  File = 'file',
  /** Project object that can have files */
  Project = 'project',
  /** Supplier object that can have files */
  Supplier = 'supplier',
  /** Task object that can have files */
  Task = 'task',
  /** User object that can have files */
  User = 'user',
  /** Voucher object that can have file */
  Voucher = 'voucher'
}

/** A file thumb object */
export type FileThumb = {
  __typename?: 'FileThumb';
  /** When the file was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The file extension */
  ext?: Maybe<Scalars['String']>;
  /** If the file is a featured file (main file of voucher etc.) */
  featured?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for this file */
  id?: Maybe<Scalars['Int']>;
  /** The mime type of the file */
  mimetype?: Maybe<Scalars['String']>;
  /** The name of this file */
  name?: Maybe<Scalars['String']>;
  /** The original file name */
  originalName?: Maybe<Scalars['String']>;
  /** The number of pages if PDF */
  pages?: Maybe<Scalars['Int']>;
  /** The size of the file, in bytes */
  size?: Maybe<Scalars['Int']>;
  /** The url of the file */
  url?: Maybe<Scalars['String']>;
};

/** File input data, for updating file */
export type FileUpdateInput = {
  /** The context of file storage */
  context?: InputMaybe<FileContext>;
  /** The id of the context object */
  contextId?: InputMaybe<Scalars['Int']>;
  /** The id of the folder to store the files in (optional) */
  folderId?: InputMaybe<Scalars['Int']>;
  /** A unique identifier for this file */
  id: Scalars['Int'];
  /** The name of this file */
  name?: InputMaybe<Scalars['String']>;
};

/** File input data, for uploading files */
export type FileUpload = {
  /** The context of file storage */
  context: FileContext;
  /** The id of the context object */
  contextId: Scalars['Int'];
  /** A file, pdf, image etc */
  files: Array<InputMaybe<Scalars['GraphQLFileUpload']>>;
  /** The id of the folder to store the files in (optional) */
  folderId?: InputMaybe<Scalars['Int']>;
};

/** An object with info about the file being uploaded */
export type FileUploadProgress = {
  __typename?: 'FileUploadProgress';
  /** The name of the file being uploaded */
  filename?: Maybe<Scalars['String']>;
  /** The unique identifier of the file */
  id?: Maybe<Scalars['String']>;
  /** The size uploaded so far, in bytes */
  size?: Maybe<Scalars['Int']>;
};

/** A folder object */
export type Folder = {
  __typename?: 'Folder';
  /** When the folder was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The url of the file */
  files?: Maybe<FilePaginatedResult>;
  /** Subfolders of this folder */
  folders?: Maybe<Array<Maybe<Folder>>>;
  /** A unique identifier for this folder */
  id?: Maybe<Scalars['Int']>;
  /** The name of this folder */
  name?: Maybe<Scalars['String']>;
  /** The tags on this folder */
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export enum FolderContext {
  /** Customer object that can have folder */
  Customer = 'customer',
  /** Department object that can have folder */
  Department = 'department',
  /** Project object that can have folder */
  Project = 'project',
  /** Supplier object that can have folder */
  Supplier = 'supplier',
  /** User object that can have folder */
  User = 'user'
}

export type FolderCreateInput = {
  /** In which context you are creating the folder */
  context: FolderContext;
  /**
   * The id of the context you are creating folder for, i.e.
   *                     customer, project, supplier, user
   */
  contextId: Scalars['Int'];
  /** The id of the parent folder you want to create the folder in */
  folderId?: InputMaybe<Scalars['Int']>;
  /** The name of the folder */
  name: Scalars['String'];
};

export enum FolderOrderBy {
  Created = 'created',
  Id = 'id',
  Name = 'name'
}

export type FolderPaginatedResult = {
  __typename?: 'FolderPaginatedResult';
  data?: Maybe<Array<Maybe<Folder>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type FolderPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** In which context you are fetching folders */
  context?: InputMaybe<FolderContext>;
  /**
   * The id of the context you are fetching folders for, i.e.
   *                     customer, project, supplier, task, user
   */
  contextId?: InputMaybe<Scalars['Int']>;
  /** The id of the parent folder you want the folders to */
  folderId?: InputMaybe<Scalars['Int']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FolderSortDirection>>;
  /** A string you want to search folders for */
  search?: InputMaybe<Scalars['String']>;
};

/** How to sort nodes in a query */
export type FolderSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: FolderOrderBy;
};

export type FolderUpdateInput = {
  /** In which context you are moving the folder to */
  context?: InputMaybe<FolderContext>;
  /**
   * The id of the context you are moving the folder to, i.e.
   *                     customer, project, supplier, user
   */
  contextId?: InputMaybe<Scalars['Int']>;
  /** The id of the parent folder you want to move the folder to */
  folderId?: InputMaybe<Scalars['Int']>;
  /** The id of the folder to update */
  id: Scalars['Int'];
  /** The name of the folder */
  name?: InputMaybe<Scalars['String']>;
};

export enum ImportEncoding {
  Iso = 'iso',
  Mac = 'mac',
  Utf8 = 'utf8'
}

export type ImportSaft = {
  __typename?: 'ImportSaft';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** Import saft file and proses it */
export type ImportSaftGql = {
  /** .xml file */
  importFile: Scalars['GraphQLFileUpload'];
};

/** Import voucher input data */
export type ImportVoucher = {
  /**
   * If set to true, transactions will be created automatically.
   *                     Defaults to false.
   */
  createTransactions?: InputMaybe<Scalars['Boolean']>;
  /** The charset the import files */
  encoding?: InputMaybe<ImportEncoding>;
  /** .csv files */
  files: Array<InputMaybe<Scalars['GraphQLFileUpload']>>;
  /** The type of the import */
  type: ImportVoucherType;
};

export enum ImportVoucherType {
  Gbat10 = 'gbat10'
}

export type InvitationClient = {
  __typename?: 'InvitationClient';
  /** The id of the client */
  id: Scalars['Int'];
  /** The name of the client */
  name: Scalars['String'];
};

export enum InvitationResponse {
  Accept = 'accept',
  Reject = 'reject'
}

export type Invitations = {
  __typename?: 'Invitations';
  /** The client invitations on this user */
  clients?: Maybe<Array<Maybe<ClientInvitation>>>;
};

/** An invoice */
export type Invoice = {
  __typename?: 'Invoice';
  /** The approved payments amount on the invoice */
  approvedPaymentAmount?: Maybe<Scalars['Float']>;
  /** Any attachments included with the invoice */
  attachments?: Maybe<Array<Maybe<File>>>;
  /** Attestations counts by status */
  attestations?: Maybe<AttestationCount>;
  /** The total amount of charges on the invoice */
  chargesAmount?: Maybe<Scalars['Float']>;
  /** The customer identification number */
  cid?: Maybe<Scalars['String']>;
  /** The date the invoice was created */
  createdDate?: Maybe<Scalars['GraphQLDate']>;
  /** What currency the invoice should be paid in */
  currency?: Maybe<Currency>;
  /**
   * Updated customer data, it may differ from what is on
   *                     the actual invoice, usually just used when listing multiple
   *                     invoices.
   */
  customer?: Maybe<Customer>;
  data?: Maybe<InvoiceData>;
  /** The invoice deb collection date */
  debtCollectionDate?: Maybe<Scalars['GraphQLDate']>;
  /** The date the product/service will be delivered */
  deliveryDate?: Maybe<Scalars['GraphQLDate']>;
  /** The invoice delivery method */
  deliveryMethod?: Maybe<InvoiceDeliveryMethod>;
  /** The department this invoice belongs to */
  department?: Maybe<Department>;
  /** The description of the invoice */
  description?: Maybe<Scalars['String']>;
  /** When the invoice is due */
  dueDate?: Maybe<Scalars['GraphQLDate']>;
  /** The fee on the invoice, if any */
  fee?: Maybe<Scalars['Float']>;
  /** The file associated with this invoice */
  file?: Maybe<File>;
  /** The total amount on the invoice, charges included */
  grossAmount?: Maybe<Scalars['Float']>;
  /** The total gross amount on the invoice, without charges */
  grossAmountWithoutCharges?: Maybe<Scalars['Float']>;
  /** The id of the invoice */
  id?: Maybe<Scalars['Int']>;
  interest?: Maybe<InvoiceInterest>;
  /** The invoice basis attached to this invoice (if any) */
  invoiceBasis?: Maybe<InvoiceBasis>;
  /** The date the invoice was invoiced */
  invoiceDate?: Maybe<Scalars['GraphQLDate']>;
  /** The number of the invoice */
  invoiceNumber?: Maybe<Scalars['String']>;
  /** The language for invoice template */
  language?: Maybe<SiteLanguage>;
  /** The invoice lines on this invoice */
  lines?: Maybe<Array<Maybe<InvoiceLine>>>;
  /** The total net amount on the invoice */
  netAmount?: Maybe<Scalars['Float']>;
  /** The note on the invoice */
  note?: Maybe<Scalars['String']>;
  /** Order reference on the invoice */
  orderReference?: Maybe<Scalars['String']>;
  /** Our reference on the invoice */
  ourReference?: Maybe<Scalars['String']>;
  /** When the invoice was paid */
  paidDate?: Maybe<Scalars['GraphQLDate']>;
  /** The payed amount on the invoice */
  payedAmount?: Maybe<Scalars['Float']>;
  /** The payments on this invoice */
  payments?: Maybe<Array<Maybe<InvoicePayment>>>;
  /** The pending payments amount on the invoice */
  pendingPaymentAmount?: Maybe<Scalars['Float']>;
  /** The project this invoice belongs to */
  project?: Maybe<Project>;
  /** The invoice reminder date */
  reminderDate?: Maybe<Scalars['GraphQLDate']>;
  /** The residual amount on the invoice */
  residualAmount?: Maybe<Scalars['Float']>;
  /** The status of the invoice */
  status?: Maybe<InvoiceStatus>;
  /**
   * Updated supplier data, it may differ from what is on
   *                     the actual invoice, usually just used when listing multiple
   *                     invoices.
   */
  supplier?: Maybe<Supplier>;
  /** The voucher this invoice is connected to (if any) */
  voucher?: Maybe<Voucher>;
  /** The id of connected voucher (if any) */
  voucherId?: Maybe<Scalars['Int']>;
  /** The voucher number of connected voucher (if any) */
  voucherNumber?: Maybe<Scalars['String']>;
  /** The status of connected voucher (if any) */
  voucherStatus?: Maybe<VoucherStatus>;
  /** Your reference on the invoice */
  yourReference?: Maybe<Scalars['String']>;
};

export type InvoiceBasis = {
  __typename?: 'InvoiceBasis';
  /** The ledger account if specified */
  account?: Maybe<Scalars['Int']>;
  /** If the invoice basis has been billed to the customer */
  billed?: Maybe<Scalars['Boolean']>;
  /** The date the invoice basis was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The customer the invoice basis is for */
  customer?: Maybe<Customer>;
  /** The department the invoice basis is for */
  department?: Maybe<Department>;
  /** The discount percentage of the invoice basis */
  discountPercent?: Maybe<Scalars['Float']>;
  /** The date and time the basis (timesheet date or invoice date) */
  entryDate?: Maybe<Scalars['GraphQLDateTime']>;
  /** The id of the invoice basis line */
  id?: Maybe<Scalars['Int']>;
  /** The net price if specified different than product */
  netPrice?: Maybe<Scalars['Float']>;
  /** An optional text for invoice basis */
  note?: Maybe<Scalars['String']>;
  /** The product of the invoice basis */
  product?: Maybe<Product>;
  /** The project the invoice basis is for */
  project?: Maybe<Project>;
  /** The invoice basis product quantity */
  quantity?: Maybe<Scalars['Float']>;
  /** The invoice basis type */
  type?: Maybe<InvoiceBasisType>;
  /** The user connected to this invoice basis if any */
  user?: Maybe<User>;
  /** The vat code of the invoice basis */
  vatCode?: Maybe<Scalars['Int']>;
};

/** Input for creating a manual invoice basis entry */
export type InvoiceBasisCreateInput = {
  /** The id of the customer to invoice */
  customerId: Scalars['Int'];
  /**
   * If the invoice basis belongs to a department, you need to specify
   *                     the id of the department here
   */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** A discount, in percent */
  discountPercent?: InputMaybe<Scalars['Float']>;
  /** The net price on this invoice invoice basis */
  netPrice: Scalars['Float'];
  /** A note for this invoice basis */
  note?: InputMaybe<Scalars['String']>;
  /** The id of the product on this invoice basis */
  productId: Scalars['Int'];
  /**
   * If the invoice basis belongs to a project, you need to specify
   *                     the id of the project here
   */
  projectId?: InputMaybe<Scalars['Int']>;
  /** The quantity of the product on this invoice basis */
  quantity: Scalars['Float'];
  /** The unit code for the product on this invoice basis */
  unitCode: UnitCode;
  /**
   * If you want a user to be "credited" for this invoice basis, you
   *                     need to specify the id of the user here
   */
  userId?: InputMaybe<Scalars['Int']>;
};

export enum InvoiceBasisOrderBy {
  CreatedDate = 'createdDate',
  Customer = 'customer',
  EntryDate = 'entryDate',
  Id = 'id',
  Project = 'project',
  User = 'user'
}

export type InvoiceBasisPaginatedResult = {
  __typename?: 'InvoiceBasisPaginatedResult';
  data?: Maybe<Array<Maybe<InvoiceBasis>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type InvoiceBasisPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** Only return invoice basis marked as billed or not marked as billed */
  billed?: InputMaybe<Scalars['Boolean']>;
  /** Only return invoice basis with a certain customer */
  customerId?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<DateQueryFilter>;
  /** Only return invoice basis with a certain department */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InvoiceBasisSortDirection>>;
  /** Only return invoice basis with a certain project */
  projectId?: InputMaybe<Scalars['Int']>;
  /** A string you want to search invoice basis for */
  search?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<InvoiceBasisType>;
};

/** How to sort nodes in a query */
export type InvoiceBasisSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: InvoiceBasisOrderBy;
};

export enum InvoiceBasisType {
  Hours = 'hours'
}

/** Input for updating a manual invoice basis entry */
export type InvoiceBasisUpdateInput = {
  /** The id of the customer to invoice */
  customerId?: InputMaybe<Scalars['Int']>;
  /**
   * If the invoice basis belongs to a department, you need to specify
   *                     the id of the department here
   */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** A discount, in percent */
  discountPercent?: InputMaybe<Scalars['Float']>;
  /** The id of invoice basis to edit */
  id: Scalars['Int'];
  /** The net price on this invoice invoice basis */
  netPrice?: InputMaybe<Scalars['Float']>;
  /** A note for this invoice basis */
  note?: InputMaybe<Scalars['String']>;
  /** The id of the product on this invoice basis */
  productId?: InputMaybe<Scalars['Int']>;
  /**
   * If the invoice basis belongs to a project, you need to specify
   *                     the id of the project here
   */
  projectId?: InputMaybe<Scalars['Int']>;
  /** The quantity of the product on this invoice basis */
  quantity?: InputMaybe<Scalars['Float']>;
  /** The unit code for the product on this invoice basis */
  unitCode?: InputMaybe<UnitCode>;
  /**
   * If you want a user to be "credited" for this invoice basis, you
   *                     need to specify the id of the user here
   */
  userId?: InputMaybe<Scalars['Int']>;
};

/** Invoice input data, for creating a new invoice */
export type InvoiceCreateInput = {
  /**
   * Any attachments to be attached to the email when sending
   *                     the invoice, pdf, image etc
   */
  attachments?: InputMaybe<Array<InputMaybe<Scalars['GraphQLFileUpload']>>>;
  /** The currency on the invoice */
  currency: CurrencyInput;
  /** The id of the customer this invoice is for */
  customerId: Scalars['Int'];
  /** The invoice deb collection date */
  debtCollectionDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The date the product/service will be delivered */
  deliveryDate?: InputMaybe<Scalars['GraphQLDate']>;
  /**
   * Optional, use when you want to override the customer email.
   *                     If provided, and the customer does not have an email
   *                     registered, the customer will be updated with this email.
   */
  deliveryEmail?: InputMaybe<Scalars['String']>;
  /** The invoice delivery method */
  deliveryMethod: InvoiceDeliveryMethod;
  /** The if of the department this invoice is from */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** The description of the invoice */
  description?: InputMaybe<Scalars['String']>;
  /** When the invoice is due, defaults to the client's due date */
  dueDate?: InputMaybe<Scalars['GraphQLDate']>;
  /**
   * If you are creating an invoice from a saved draft, include
   *                     this id to remove your draft.
   */
  id?: InputMaybe<Scalars['Int']>;
  /** The ids of invoice basis used in this invoice */
  invoiceBasis?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The date the invoice was created, defaults to current date */
  invoiceDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The language for invoice template */
  language?: InputMaybe<SiteLanguage>;
  /** The invoice lines on this invoice */
  lines: Array<InputMaybe<InvoiceLineCreateInput>>;
  /** The note on the invoice */
  note?: InputMaybe<Scalars['String']>;
  /** Order reference on the invoice */
  orderReference?: InputMaybe<Scalars['String']>;
  /** Our reference on the invoice */
  ourReference?: InputMaybe<Scalars['String']>;
  /** When the invoice was paid */
  paidDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The id of the project this invoice is for */
  projectId?: InputMaybe<Scalars['Int']>;
  /** The invoice reminder date */
  reminderDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** Your reference on the invoice */
  yourReference?: InputMaybe<Scalars['String']>;
};

/** Input data for creating an invoice credit note */
export type InvoiceCreditNoteInput = {
  /**
   * Optional, use when you want to override the customer email.
   *                     If provided, and the customer does not have an email
   *                     registered, the customer will be updated with this email.
   */
  deliveryEmail?: InputMaybe<Scalars['String']>;
  deliveryMethod: InvoiceDeliveryMethod;
  /** The date for this credit note, defaults to current date */
  invoiceDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The invoice to create a reminder on */
  invoiceId: Scalars['Int'];
};

/** Invoice data */
export type InvoiceData = {
  __typename?: 'InvoiceData';
  /** The sender of this invoice */
  client?: Maybe<Client>;
  /** The customer on this invoice, if any */
  customer?: Maybe<Customer>;
  /** The supplier on this invoice, if any */
  supplier?: Maybe<Supplier>;
};

/** Input data for creating an invoice debt collection */
export type InvoiceDebtCollectionInput = {
  /** The invoice to create a debt collection on */
  invoiceId: Scalars['Int'];
};

export enum InvoiceDeliveryMethod {
  Ehf = 'ehf',
  Email = 'email',
  None = 'none',
  Post = 'post',
  Print = 'print'
}

/** Invoice input data, for creating and updating invoice drafts */
export type InvoiceDraftInput = {
  /** The currency on the invoice */
  currency?: InputMaybe<CurrencyInput>;
  /** The id of the customer this invoice is for */
  customerId?: InputMaybe<Scalars['Int']>;
  /** The invoice deb collection date */
  debtCollectionDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The date the product/service will be delivered */
  deliveryDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The invoice delivery method */
  deliveryMethod?: InputMaybe<InvoiceDeliveryMethod>;
  /** The if of the department this invoice is from */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** The description of the invoice */
  description?: InputMaybe<Scalars['String']>;
  /** When the invoice is due */
  dueDate?: InputMaybe<Scalars['GraphQLDate']>;
  /**
   * The id of the draft you want to update, leaving this
   *                     out will create a new draft
   */
  id?: InputMaybe<Scalars['Int']>;
  /** The ids of invoice basis used in this invoice */
  invoiceBasis?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The date the invoice was created */
  invoiceDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The language for invoice template */
  language?: InputMaybe<SiteLanguage>;
  /** The invoice lines on this invoice */
  lines?: InputMaybe<Array<InputMaybe<InvoiceLineCreateInput>>>;
  /** The note on the invoice */
  note?: InputMaybe<Scalars['String']>;
  /** Order reference on the invoice */
  orderReference?: InputMaybe<Scalars['String']>;
  /** Our reference on the invoice */
  ourReference?: InputMaybe<Scalars['String']>;
  /** When the invoice was paid */
  paidDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The id of the project this invoice is for */
  projectId?: InputMaybe<Scalars['Int']>;
  /** The invoice reminder date */
  reminderDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The status of the invoice */
  status?: InputMaybe<InvoiceStatus>;
  /** Your reference on the invoice */
  yourReference?: InputMaybe<Scalars['String']>;
};

/** Object containing invoice interest info */
export type InvoiceInterest = {
  __typename?: 'InvoiceInterest';
  /** The interest amount */
  amount?: Maybe<Scalars['Float']>;
  /** The calculation of the interest, an object with dates, percents, and amounts */
  calculation?: Maybe<Scalars['JSON']>;
};

/** A line on an invoice */
export type InvoiceLine = {
  __typename?: 'InvoiceLine';
  /** Which account the line belongs to (see accounting) */
  account?: Maybe<Account>;
  /** When this line was first created */
  createdAt?: Maybe<Scalars['String']>;
  /** The department this line belongs to, if any */
  department?: Maybe<Project>;
  /** A description of this line */
  description?: Maybe<Scalars['String']>;
  /** A discount, in percent */
  discountPercent?: Maybe<Scalars['Float']>;
  /** The id of the invoice line */
  id?: Maybe<Scalars['Int']>;
  /** The id of the invoice this line belongs to */
  invoiceId?: Maybe<Scalars['Int']>;
  /** The order of the line */
  lineNumber?: Maybe<Scalars['Int']>;
  /** The net price on this invoice line */
  netPrice?: Maybe<Scalars['Float']>;
  /** A note for this line */
  note?: Maybe<Scalars['String']>;
  /** The product this line belongs to, if any */
  product?: Maybe<Product>;
  /** The id of the product on this line */
  productId?: Maybe<Scalars['Int']>;
  /** The number of the product on this line */
  productNumber?: Maybe<Scalars['String']>;
  /** The project this line belongs to, if any */
  project?: Maybe<Project>;
  /** The quantity of the product on this line */
  quantity?: Maybe<Scalars['Float']>;
  /** The unit code for the product on this line */
  unitCode?: Maybe<UnitCode>;
  /** The user credited this line, if any */
  user?: Maybe<User>;
  vat?: Maybe<VatCode>;
};

/** Invoice line input data, for creating a new invoice line */
export type InvoiceLineCreateInput = {
  /** Which account the line belongs to (see accounting) */
  account?: InputMaybe<Scalars['Int']>;
  /**
   * If the line belongs to a department, you need to specify
   *                     the id of the department here
   */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** A discount, in percent */
  discountPercent?: InputMaybe<Scalars['Float']>;
  /** The order of the line */
  lineNumber: Scalars['Int'];
  /** The net price on this invoice line */
  netPrice: Scalars['Float'];
  /** A note for this line */
  note?: InputMaybe<Scalars['String']>;
  /** The id of the product on this line */
  productId: Scalars['Int'];
  /**
   * If the line belongs to a project, you need to specify
   *                     the id of the project here
   */
  projectId?: InputMaybe<Scalars['Int']>;
  /** The quantity of the product on this line */
  quantity: Scalars['Float'];
  /** The unit code for the product on this line */
  unitCode: UnitCode;
  /**
   * If you want a user to be "credited" for this line, you
   *                     need to specify the id of the user here
   */
  userId?: InputMaybe<Scalars['Int']>;
};

export enum InvoiceOrderBy {
  CreatedDate = 'createdDate',
  DeliveryMethod = 'deliveryMethod',
  DueDate = 'dueDate',
  Id = 'id',
  InvoiceDate = 'invoiceDate',
  InvoiceNumber = 'invoiceNumber',
  PaidDate = 'paidDate',
  Status = 'status',
  VoucherNumber = 'voucherNumber'
}

export type InvoicePaginatedResult = {
  __typename?: 'InvoicePaginatedResult';
  data?: Maybe<Array<Maybe<Invoice>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type InvoicePagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /**
   * Limit results to include invoices with this exact amount.
   *                     Searches in both net and gross amount.
   */
  amount?: InputMaybe<Scalars['Float']>;
  /**
   * Limit results to include invoices with this range in total
   *                     amounts. Searches in both net and gross amount.
   */
  amountRange?: InputMaybe<Range>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** Only return invoices with a certain customer */
  customerId?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<DateQueryFilter>;
  /** Only return invoices with a certain department */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InvoiceSortDirection>>;
  /** Only return invoices with a certain project */
  projectId?: InputMaybe<Scalars['Int']>;
  /** A string you want to search invoices for */
  search?: InputMaybe<Scalars['String']>;
  /** Only return invoices with a certain statuses */
  status?: InputMaybe<Array<InputMaybe<InvoiceStatus>>>;
  /** Only return invoices with a certain supplier */
  supplierId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<InvoiceType>;
};

/** A payment on an invoice */
export type InvoicePayment = {
  __typename?: 'InvoicePayment';
  /** The amount on this payment */
  amount?: Maybe<Scalars['Float']>;
  /** The date the payment was made */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The description of the transaction if available */
  description?: Maybe<Scalars['String']>;
  /** The id of the payment */
  id?: Maybe<Scalars['Int']>;
  /** The date the payment was made */
  paymentDate?: Maybe<Scalars['GraphQLDate']>;
  /** The transaction the payment is connected to if any */
  transactionId?: Maybe<Scalars['Int']>;
  /** The transaction lock connected to this payment if any */
  transactionLockId?: Maybe<Scalars['Int']>;
  /** The user who registered this payment */
  user?: Maybe<User>;
};

/** Invoice payment data, for making a new payment on an invoice */
export type InvoicePaymentCreateInput = {
  /**
   * The amount to be paid, if left blank, this will use the
   *                     invoice residual amount.
   */
  amount?: InputMaybe<Scalars['Float']>;
  /** Amount in opposite currency */
  currencyAmount?: InputMaybe<Scalars['Float']>;
  /** If provided, fee will be posted to the ledger */
  fee?: InputMaybe<Scalars['Boolean']>;
  /** If provided, interest will be posted to the ledger */
  interest?: InputMaybe<Scalars['Boolean']>;
  /** The id of the invoice this payment is for */
  invoiceId: Scalars['Int'];
  /** Payment date */
  paymentDate: Scalars['GraphQLDate'];
  /** An id of the payment setting you want to use for this payment */
  paymentSettingId: Scalars['Int'];
};

/** A CID/OCR payment log entry */
export type InvoicePaymentOcrLog = {
  __typename?: 'InvoicePaymentOCRLog';
  /** Nets payment agreement id or payment archive ref */
  agreementId?: Maybe<Scalars['String']>;
  /** The amount on this payment */
  amount?: Maybe<Scalars['Float']>;
  /** The payment senders bank account */
  bankAccount?: Maybe<Scalars['String']>;
  /** The CID number of payment */
  cid?: Maybe<Scalars['String']>;
  /** The date the payment was made */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** Error if matching failed */
  error?: Maybe<Scalars['String']>;
  /** Form number if available */
  formNumber?: Maybe<Scalars['String']>;
  /** The id of the log entry */
  id?: Maybe<Scalars['Int']>;
  /** The invoice this payment is registered on */
  invoice?: Maybe<Invoice>;
  /** Other raw CID/OCR data */
  ocrData?: Maybe<Scalars['JSONObject']>;
  /** The date the payment was made */
  paymentDate?: Maybe<Scalars['GraphQLDate']>;
  /** The status of the payment */
  status?: Maybe<OcrStatus>;
};

/** Invoice preview input data */
export type InvoicePreviewInput = {
  /** The currency on the invoice */
  currency?: InputMaybe<CurrencyInput>;
  /** The id of the customer this invoice is for */
  customerId?: InputMaybe<Scalars['Int']>;
  /** The invoice deb collection date */
  debtCollectionDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The date the product/service will be delivered */
  deliveryDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The invoice delivery method */
  deliveryMethod?: InputMaybe<InvoiceDeliveryMethod>;
  /** The if of the department this invoice is from */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** The description of the invoice */
  description?: InputMaybe<Scalars['String']>;
  /** When the invoice is due */
  dueDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The ids of invoice basis used in this invoice */
  invoiceBasis?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The date the invoice was created */
  invoiceDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The language for invoice template */
  language?: InputMaybe<SiteLanguage>;
  /** The invoice lines on this invoice */
  lines?: InputMaybe<Array<InputMaybe<InvoiceLineCreateInput>>>;
  /** The note on the invoice */
  note?: InputMaybe<Scalars['String']>;
  /** Order reference on the invoice */
  orderReference?: InputMaybe<Scalars['String']>;
  /** Our reference on the invoice */
  ourReference?: InputMaybe<Scalars['String']>;
  /** When the invoice was paid */
  paidDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The id of the project this invoice is for */
  projectId?: InputMaybe<Scalars['Int']>;
  /** The invoice reminder date */
  reminderDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The status of the invoice */
  status?: InputMaybe<InvoiceStatus>;
  /** Your reference on the invoice */
  yourReference?: InputMaybe<Scalars['String']>;
};

/** Input data for creating an invoice reminder */
export type InvoiceReminderInput = {
  /**
   * Optional, use when you want to override the customer email.
   *                     If provided, and the customer does not have an email
   *                     registered, the customer will be updated with this email.
   */
  deliveryEmail?: InputMaybe<Scalars['String']>;
  deliveryMethod: InvoiceDeliveryMethod;
  /** The fee amount, if any */
  fee?: InputMaybe<Scalars['Float']>;
  /** To add late payment interest to the reminder */
  interest?: InputMaybe<Scalars['Boolean']>;
  /** The invoice to create a reminder on */
  invoiceId: Scalars['Int'];
};

/** How to sort nodes in a query */
export type InvoiceSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: InvoiceOrderBy;
};

export enum InvoiceStatus {
  DebtCollection = 'debtCollection',
  Draft = 'draft',
  Open = 'open',
  Paid = 'paid',
  Reminder = 'reminder'
}

export enum InvoiceType {
  Incoming = 'incoming',
  Outgoing = 'outgoing'
}

/** Invoice input data, for updating a invoice */
export type InvoiceUpdateInput = {
  /** The id of the invoice */
  invoiceId: Scalars['Int'];
  /** The status of the invoice */
  status?: InputMaybe<InvoiceStatus>;
};

/** The ledger during a specific period */
export type LedgerReport = {
  __typename?: 'LedgerReport';
  account?: Maybe<Account>;
  /** The change from incoming to outgoing */
  change?: Maybe<Scalars['Float']>;
  /** The account balance at the start of the period */
  incomingBalance?: Maybe<Scalars['Float']>;
  /** The account balance at the end of the period */
  outgoingBalance?: Maybe<Scalars['Float']>;
  /** All the transactions in this calculation */
  transactions?: Maybe<Array<Maybe<AccountTransaction>>>;
};

export enum LegalEntity {
  /** Annen juridisk person */
  NoAnna = 'NO_ANNA',
  /** Ansvarlig selskap med solidarisk ansvar */
  NoAns = 'NO_ANS',
  /** Aksjeselskap */
  NoAs = 'NO_AS',
  /** Allmennaksjeselskap */
  NoAsa = 'NO_ASA',
  /** Borettslag */
  NoBrl = 'NO_BRL',
  /** Ansvarlig selskap med delt ansvar */
  NoDa = 'NO_DA',
  /** Enkeltpersonforetak */
  NoEnk = 'NO_ENK',
  /** Eierseksjonssameie */
  NoEsek = 'NO_ESEK',
  /** Forening/lag/innretning */
  NoFli = 'NO_FLI',
  /** Norskregistrert utenlangsk foretak */
  NoNuf = 'NO_NUF',
  /** Samvirkeforetak */
  NoSa = 'NO_SA',
  /** Stiftlese */
  NoSti = 'NO_STI'
}

export type Location = {
  __typename?: 'Location';
  /** The main address field */
  address1?: Maybe<Scalars['String']>;
  /** The secondary address field */
  address2?: Maybe<Scalars['String']>;
  /** The postcode of the location */
  area?: Maybe<Scalars['String']>;
  /** The address of the location */
  city?: Maybe<Scalars['String']>;
  /** The coordinates of the location */
  coordinates?: Maybe<Coordinates>;
  /** The country object of the location */
  country?: Maybe<Country>;
  /** The postcode of the location */
  postcode?: Maybe<Scalars['String']>;
};

export type LocationInput = {
  /** The main address field */
  address1?: InputMaybe<Scalars['String']>;
  /** The secondary address field */
  address2?: InputMaybe<Scalars['String']>;
  /** The area of the location */
  area?: InputMaybe<Scalars['String']>;
  /** The address of the location */
  city?: InputMaybe<Scalars['String']>;
  /** The coordinates of the location */
  coordinates?: InputMaybe<CoordinatesInput>;
  /** The country object of the location */
  country?: InputMaybe<CountryInput>;
  /** The postcode of the location */
  postcode?: InputMaybe<Scalars['String']>;
};

/** Login credentials */
export type LoginInput = {
  /** The email of the user */
  email: Scalars['String'];
  /** The password of the user */
  password: Scalars['String'];
};

export enum OcrStatus {
  Done = 'done',
  Failed = 'failed',
  Pending = 'pending'
}

/** Open postings period object */
export type OpenPostingPeriod = {
  __typename?: 'OpenPostingPeriod';
  /** The accumulated open postings amount in this period */
  amount?: Maybe<Scalars['Float']>;
  /** Period from date */
  from?: Maybe<Scalars['GraphQLDate']>;
  /** Period to date */
  to?: Maybe<Scalars['GraphQLDate']>;
};

/** Open postings on suppliers/customers */
export type OpenPostings = {
  __typename?: 'OpenPostings';
  customer?: Maybe<Customer>;
  periods?: Maybe<Array<Maybe<OpenPostingPeriod>>>;
  supplier?: Maybe<Supplier>;
};

/** Query options for open postings */
export type OpenPostingsOptions = {
  /**
   * Optional customer id, if present, only results
   *                     with this customer id will be included
   */
  customer?: InputMaybe<Scalars['Int']>;
  /**
   * Optional supplier id, if present, only results
   *                     with this supplier id will be included
   */
  supplier?: InputMaybe<Scalars['Int']>;
  /**
   * Show all postings up to and including this date (defaults
   *                     to include all transactions)
   */
  to?: InputMaybe<Scalars['GraphQLDate']>;
};

export type Paging = {
  __typename?: 'Paging';
  cursors: Cursors;
  /** The total number of results */
  totalCount: Scalars['Int'];
};

/** A payment method, how a client pays for the service */
export enum PaymentMethod {
  Card = 'card',
  Invoice = 'invoice'
}

/** Payment plan data */
export type PaymentPlan = {
  __typename?: 'PaymentPlan';
  /** Fixed agency price for this plan */
  agencyPrice?: Maybe<Scalars['Float']>;
  /** The API base price for this plan */
  apiBasePrice?: Maybe<Scalars['Float']>;
  /** The API requests price for this plan */
  apiRequestPrice?: Maybe<Scalars['Float']>;
  /** The pricing for apps */
  appPricing?: Maybe<Scalars['JSONObject']>;
  /** The bank integration price for this plan */
  bankIntegrationPrice?: Maybe<Scalars['Float']>;
  /** The base monthly price for this plan */
  basePrice?: Maybe<Scalars['Float']>;
  /** The price for activating CID on this plan */
  cidInitialPrice?: Maybe<Scalars['Float']>;
  /** The monthly price for having CID activated */
  cidMonthlyPrice?: Maybe<Scalars['Float']>;
  /** The invoice CID price for this plan */
  cidPrice?: Maybe<Scalars['Float']>;
  /** The price for activating EHF on this plan */
  ehfInitialPrice?: Maybe<Scalars['Float']>;
  /** The monthly price for having EHF activated */
  ehfMonthlyPrice?: Maybe<Scalars['Float']>;
  /** The invoice ehf price for this plan */
  ehfPrice?: Maybe<Scalars['Float']>;
  /** The invoice email price for this plan */
  emailPrice?: Maybe<Scalars['Float']>;
  /** The file price for this plan */
  filesPrice?: Maybe<Scalars['Float']>;
  /** The id of this billing plan */
  id?: Maybe<Scalars['Int']>;
  /** The name of the billing plan */
  name?: Maybe<Scalars['String']>;
  /** The invoice post price for this plan */
  postPrice?: Maybe<Scalars['Float']>;
  /** If this plan is available to everyone */
  public?: Maybe<Scalars['Boolean']>;
  /** The remmitance price for this plan */
  remittancePrice?: Maybe<Scalars['Float']>;
  /** The SMS price for this plan */
  smsPrice?: Maybe<Scalars['Float']>;
  /** The included storage in MB */
  storage?: Maybe<Scalars['Int']>;
  /** The price for a storage pack (200GB) */
  storagePrice?: Maybe<Scalars['Float']>;
  /**
   * The transaction price for this plan, when exceeding
   *                   included transactions
   */
  transactionPrice?: Maybe<Scalars['Float']>;
  /** How many transactions that are included in this plan */
  transactions?: Maybe<Scalars['Int']>;
  /** The price for amount of users on this plan */
  userPrice?: Maybe<Scalars['Float']>;
  /** The VAT Return price for this plan */
  vatReturnPrice?: Maybe<Scalars['Float']>;
};

export enum PaymentScaStatus {
  Accepted = 'Accepted',
  AcceptedSettlementInProgress = 'AcceptedSettlementInProgress',
  AuthorizationRequired = 'AuthorizationRequired',
  Rejected = 'Rejected'
}

/** A type of payment, with account info and settings */
export type PaymentSetting = {
  __typename?: 'PaymentSetting';
  /** The payment account object */
  account?: Maybe<Account>;
  category?: Maybe<PaymentSettingCategory>;
  /** The payment description */
  description?: Maybe<Scalars['String']>;
  /** The payment id */
  id?: Maybe<Scalars['Int']>;
  /** If the payment is locked for deletion */
  locked?: Maybe<Scalars['Boolean']>;
  type?: Maybe<PaymentSettingType>;
};

export enum PaymentSettingCategory {
  /** Payment setting used for bank reconciliations */
  BankPayment = 'bankPayment',
  /** Payment setting used for invoice payments */
  InvoicePayment = 'invoicePayment',
  /** Payment setting used generating payment suggestions */
  RemittancePayment = 'remittancePayment'
}

/** A type of payment, with account info and settings, input data */
export type PaymentSettingCreateInput = {
  /** The payment account id */
  accountId: Scalars['Int'];
  category?: InputMaybe<PaymentSettingCategory>;
  /** The payment description */
  description: Scalars['String'];
  type: PaymentSettingType;
};

/** Options to use when requesting the settings */
export type PaymentSettingOptions = {
  category?: InputMaybe<PaymentSettingCategory>;
  type?: InputMaybe<PaymentSettingType>;
};

export enum PaymentSettingType {
  /** The payment is incoming (Sale) */
  Payment = 'payment',
  /** The payment is outgoing (Purchase) */
  Payout = 'payout'
}

/** A type of payment, with account info and settings, input data */
export type PaymentSettingUpdateInput = {
  /** The payment account id */
  accountId?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<PaymentSettingCategory>;
  /** The payment description */
  description?: InputMaybe<Scalars['String']>;
  /** The payment id to update */
  id: Scalars['Int'];
  type?: InputMaybe<PaymentSettingType>;
};

/** A phone object */
export type Phone = {
  __typename?: 'Phone';
  /** The country number of the phone object */
  code: Scalars['String'];
  /** The number of the phone object */
  number: Scalars['String'];
};

/** A phone input object */
export type PhoneInput = {
  /** The country number of the phone object */
  code: Scalars['String'];
  /** The number of the phone object */
  number: Scalars['String'];
};

/** A post */
export type Post = {
  __typename?: 'Post';
  /** The user who created this post */
  author?: Maybe<User>;
  /** The post body text */
  body?: Maybe<Scalars['String']>;
  /** The comments on this post */
  comments?: Maybe<CommentPaginatedResult>;
  /** When the post was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The id of the post */
  id?: Maybe<Scalars['Int']>;
  /** The title of the post */
  title: Scalars['String'];
  /** When the post was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
};


/** A post */
export type PostCommentsArgs = {
  options?: InputMaybe<CommentPagingOptions>;
};

export enum PostContext {
  Customer = 'customer',
  Project = 'project',
  Supplier = 'supplier'
}

/** Post input data, for creating a new post */
export type PostCreateInput = {
  /** The post body text */
  body?: InputMaybe<Scalars['String']>;
  /** In what context you are creating the post */
  context: PostContext;
  /** The id of the context you are creating this post for, (projectId, customerId, supplierId) */
  contextId: Scalars['Int'];
  /** The title of the post */
  title: Scalars['String'];
};

export enum PostOrderBy {
  CreatedAt = 'createdAt',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type PostPaginatedResult = {
  __typename?: 'PostPaginatedResult';
  data?: Maybe<Array<Maybe<Post>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type PostPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostSortDirection>>;
};

/** How to sort nodes in a query */
export type PostSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: PostOrderBy;
};

/** Post input data, for cupdating a post */
export type PostUpdateInput = {
  /** The post body text */
  body?: InputMaybe<Scalars['String']>;
  /** The id of the post */
  id: Scalars['Int'];
  /** The title of the post */
  title: Scalars['String'];
};

/** A product */
export type Product = {
  __typename?: 'Product';
  /** Which account this product belongs to */
  account?: Maybe<Account>;
  /** If the product is active or not */
  active?: Maybe<Scalars['Boolean']>;
  /** When the product was added */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** A description of the product */
  description?: Maybe<Scalars['String']>;
  /** The id of the product */
  id?: Maybe<Scalars['Int']>;
  /** The image of the product */
  image?: Maybe<Scalars['String']>;
  /** The name of the product */
  name?: Maybe<Scalars['String']>;
  /** The net price of the product */
  netPrice?: Maybe<Scalars['Float']>;
  /** The number of the product */
  productNumber?: Maybe<Scalars['String']>;
  /** The type of the product */
  type?: Maybe<ProductType>;
  /** The unit code of the product */
  unitCode?: Maybe<UnitCode>;
  vat?: Maybe<VatCode>;
};

/** Product input data, for creating a new product */
export type ProductCreateInput = {
  /** Which account this product belongs to */
  account?: InputMaybe<Scalars['Int']>;
  /** When the product was added */
  createdAt?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** A description of the product */
  description?: InputMaybe<Scalars['String']>;
  /** The image of the product */
  image?: InputMaybe<Scalars['String']>;
  /** The name of the product */
  name: Scalars['String'];
  /** The net price of the product */
  netPrice: Scalars['Float'];
  /** The number of the product */
  productNumber?: InputMaybe<Scalars['String']>;
  /** If the product is active or not, defaults to active */
  status?: InputMaybe<Status>;
  type: ProductType;
  /** The unit code of the product */
  unitCode: UnitCode;
  /** The unit code of the product */
  vatCode: Scalars['Int'];
};

export enum ProductOrderBy {
  Id = 'id',
  Name = 'name',
  Price = 'price',
  ProductNumber = 'productNumber'
}

export type ProductPaginatedResult = {
  __typename?: 'ProductPaginatedResult';
  data?: Maybe<Array<Maybe<Product>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type ProductPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProductSortDirection>>;
  /** A string you want to search products for */
  search?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  type?: InputMaybe<ProductType>;
};

/** How to sort nodes in a query */
export type ProductSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: ProductOrderBy;
};

export enum ProductType {
  Consumable = 'consumable',
  Service = 'service'
}

/** Product input data, for updating a product */
export type ProductUpdateInput = {
  /** Which account this product belongs to */
  account?: InputMaybe<Scalars['Int']>;
  /** When the product was added */
  createdAt?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** A description of the product */
  description?: InputMaybe<Scalars['String']>;
  /** The id of the product */
  id: Scalars['Int'];
  /** The image of the product */
  image?: InputMaybe<Scalars['String']>;
  /** The name of the product */
  name?: InputMaybe<Scalars['String']>;
  /** The net price of the product */
  netPrice?: InputMaybe<Scalars['Float']>;
  /** The number of the product */
  productNumber?: InputMaybe<Scalars['String']>;
  /** If the product is active or not */
  status?: InputMaybe<Status>;
  /** The type of the product */
  type?: InputMaybe<ProductType>;
  /** The unit code of the product */
  unitCode?: InputMaybe<UnitCode>;
  /** The unit code of the product */
  vatCode?: InputMaybe<Scalars['Int']>;
};

/** A project */
export type Project = {
  __typename?: 'Project';
  /** When the project was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The currency of the project */
  currency?: Maybe<Scalars['String']>;
  /** The customer of this project */
  customer?: Maybe<Customer>;
  /** When the project is due */
  deadline?: Maybe<Scalars['GraphQLDate']>;
  /** The description of the project */
  description?: Maybe<Scalars['String']>;
  /** The icon of the project */
  icon?: Maybe<Scalars['String']>;
  /** The id of the project */
  id?: Maybe<Scalars['Int']>;
  /** The members of this project */
  members?: Maybe<ProjectMemberPaginatedResult>;
  /** The name of the project */
  name?: Maybe<Scalars['String']>;
  /** The posts belonging to this project */
  posts?: Maybe<PostPaginatedResult>;
  /** The price of the project */
  price?: Maybe<Scalars['Float']>;
  /** The price model of the project */
  priceModel?: Maybe<Scalars['String']>;
  /** The priority of the project */
  priority?: Maybe<Scalars['Int']>;
  /** The progress of the project */
  progress?: Maybe<Scalars['Int']>;
  /** The project number */
  projectNumber?: Maybe<Scalars['String']>;
  /** If the project is members only */
  secret?: Maybe<Scalars['Boolean']>;
  /** The start date of the project */
  start?: Maybe<Scalars['GraphQLDate']>;
  stats?: Maybe<ProjectStatsType>;
  /** The status of the project */
  status?: Maybe<ProjectStatusEnum>;
  tabs?: Maybe<ProjectTabsType>;
  /** The tags on this project */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** Task lists belonging to this project */
  taskLists?: Maybe<Array<Maybe<TaskList>>>;
  /** The tasks belonging to this project */
  tasks?: Maybe<TaskPaginatedResult>;
  /** The url of the project */
  url?: Maybe<Scalars['String']>;
};


/** A project */
export type ProjectMembersArgs = {
  options?: InputMaybe<ProjectMemberPagingOptions>;
};


/** A project */
export type ProjectPostsArgs = {
  options?: InputMaybe<PostPagingOptions>;
};


/** A project */
export type ProjectTasksArgs = {
  options?: InputMaybe<TaskPagingOptions>;
};

/** Project input data, for creating a new project */
export type ProjectCreateInput = {
  /** The currency of the project */
  currency?: InputMaybe<Scalars['String']>;
  /** The id of the customer you are creating this project for */
  customerId?: InputMaybe<Scalars['Int']>;
  /** When the project is due */
  deadline?: InputMaybe<Scalars['GraphQLDate']>;
  /** The id of the department you are creating this project for */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** The description of the project */
  description?: InputMaybe<Scalars['String']>;
  /** The icon of the project */
  icon?: InputMaybe<Scalars['String']>;
  /** The project members to add to this new project */
  members?: InputMaybe<Array<InputMaybe<ProjectMemberCreateInput>>>;
  /** The name of the project */
  name: Scalars['String'];
  /** The price of the project */
  price?: InputMaybe<Scalars['Float']>;
  /** The price model of the project */
  priceModel?: InputMaybe<Scalars['String']>;
  /** The priority of the project */
  priority?: InputMaybe<Scalars['Int']>;
  /** The progress of the project */
  progress?: InputMaybe<Scalars['Int']>;
  /** The project number */
  projectNumber: Scalars['String'];
  /** If the project is members only */
  secret?: InputMaybe<Scalars['Boolean']>;
  /** The start date of the project */
  start?: InputMaybe<Scalars['GraphQLDate']>;
  /** The status of the project */
  status?: InputMaybe<ProjectStatusEnum>;
  tabs?: InputMaybe<ProjectTabsInputType>;
  /** The url of the project */
  url?: InputMaybe<Scalars['String']>;
};

/** A project member */
export type ProjectMember = {
  __typename?: 'ProjectMember';
  /** Some text describing the user */
  about?: Maybe<Scalars['String']>;
  /** If the user is active or not */
  active?: Maybe<Scalars['Boolean']>;
  bankAccounts?: Maybe<Array<Maybe<BankAccountListing>>>;
  /** The birthday of the user */
  birthday?: Maybe<Scalars['GraphQLDate']>;
  /** The country code of the user */
  countryCode?: Maybe<Scalars['String']>;
  /** The user cover photo */
  cover?: Maybe<File>;
  /** The date the user was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  dashboardLayout?: Maybe<Scalars['JSON']>;
  /**
   * A setting to store the user's pereference to show/hide
   *                   corrections, defaults to false
   */
  displayCorrections?: Maybe<Scalars['Boolean']>;
  /** The user education */
  education?: Maybe<Array<Maybe<UserEducation>>>;
  /** The email of the user */
  email?: Maybe<Scalars['String']>;
  /** If the user has confirmed the email or not */
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  /** The user experience */
  experience?: Maybe<Array<Maybe<UserExperience>>>;
  /** The first name of the user */
  firstname?: Maybe<Scalars['String']>;
  /** The id of the user */
  id?: Maybe<Scalars['Int']>;
  /** When the member joined the project */
  joined: Scalars['GraphQLDate'];
  /** The last name of the user */
  lastname?: Maybe<Scalars['String']>;
  /** The location object of the customer */
  location?: Maybe<Location>;
  /**
   * A unique identifier for this member when associated with a
   *                   project
   */
  memberId: Scalars['Int'];
  /** The name of the user's Microsoft email/account */
  microsoft?: Maybe<Scalars['String']>;
  /** The middle name of the user */
  middlename?: Maybe<Scalars['String']>;
  /** The mobile object of the user */
  mobile?: Maybe<Phone>;
  /** The full name of the user */
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<UserNotifications>;
  /** The user picture */
  picture?: Maybe<File>;
  /** What kind of role the member has on the project */
  projectRole?: Maybe<ProjectMemberRole>;
  siteLanguage?: Maybe<SiteLanguage>;
  /** The name of the user's Skype account */
  skype?: Maybe<Scalars['String']>;
  social?: Maybe<SocialNetworks>;
  timezone?: Maybe<Timezone>;
  /** If the user has accepted the TOS or not */
  tosAccepted?: Maybe<Scalars['Boolean']>;
  /** The type of the user */
  type?: Maybe<UserType>;
  /** The date the user was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The username of the user */
  username?: Maybe<Scalars['String']>;
};

/** Project member input data, for creating a member on a new project */
export type ProjectMemberCreateInput = {
  /** The project role of the member */
  projectRole: ProjectMemberRole;
  /** The id of the user you want to add as a member */
  userId: Scalars['Int'];
};

/** Project member input data, for creating a new project member */
export type ProjectMemberInput = {
  /** The id of the project you want to add the member to */
  projectId: Scalars['Int'];
  projectRole: ProjectMemberRole;
  /** The id of the user you want to add as a member */
  userId: Scalars['Int'];
};

export enum ProjectMemberOrderByType {
  Id = 'id',
  Joined = 'joined',
  Name = 'name',
  ProjectRole = 'projectRole'
}

export type ProjectMemberPaginatedResult = {
  __typename?: 'ProjectMemberPaginatedResult';
  data?: Maybe<Array<Maybe<ProjectMember>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type ProjectMemberPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectMemberSortDirection>>;
  /** Filter by project member role */
  projectRole?: InputMaybe<ProjectMemberRole>;
  /** A string you want to search members for */
  search?: InputMaybe<Scalars['String']>;
};

export enum ProjectMemberRole {
  Member = 'member',
  Owner = 'owner'
}

/** How to sort nodes in a query */
export type ProjectMemberSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: ProjectMemberOrderByType;
};

export enum ProjectOrderByType {
  Created = 'created',
  Deadline = 'deadline',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  ProjectNumber = 'projectNumber',
  Start = 'start',
  Status = 'status'
}

export type ProjectPaginatedResult = {
  __typename?: 'ProjectPaginatedResult';
  data?: Maybe<Array<Maybe<Project>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type ProjectPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** Filter projects where project is for customer */
  customerId?: InputMaybe<Scalars['Int']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectSortDirection>>;
  /** A string you want to search projects for */
  search?: InputMaybe<Scalars['String']>;
  /** Filter projects on a specific status */
  status?: InputMaybe<ProjectStatusEnum>;
  /** Filter projects where user is member */
  userId?: InputMaybe<Scalars['Int']>;
};

/** How to sort nodes in a query */
export type ProjectSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: ProjectOrderByType;
};

export type ProjectStatsType = {
  __typename?: 'ProjectStatsType';
  latestTimesheetEntry?: Maybe<Scalars['GraphQLDateTime']>;
  tasksComplete?: Maybe<Scalars['Int']>;
  tasksTotal?: Maybe<Scalars['Int']>;
  timesheetEntries?: Maybe<Scalars['Int']>;
  timesheetTotalHours?: Maybe<Scalars['Float']>;
};

export enum ProjectStatusEnum {
  Archived = 'archived',
  Complete = 'complete',
  InProgress = 'in_progress',
  NotStarted = 'not_started',
  OnHold = 'on_hold'
}

export type ProjectTabsInputType = {
  /** If the project has boards tab */
  board?: InputMaybe<Scalars['Boolean']>;
  /** If the project has discussions tab */
  discussions?: InputMaybe<Scalars['Boolean']>;
  /** If the project has files tab */
  files?: InputMaybe<Scalars['Boolean']>;
  /** If the project has progress tab */
  progress?: InputMaybe<Scalars['Boolean']>;
  /** If the project has tasks tab */
  tasks?: InputMaybe<Scalars['Boolean']>;
  /** If the project has timesheet tabs */
  timesheet?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectTabsType = {
  __typename?: 'ProjectTabsType';
  /** If the project has boards tab */
  board?: Maybe<Scalars['Boolean']>;
  /** If the project has discussions tab */
  discussions?: Maybe<Scalars['Boolean']>;
  /** If the project has files tab */
  files?: Maybe<Scalars['Boolean']>;
  /** If the project has progress tab */
  progress?: Maybe<Scalars['Boolean']>;
  /** If the project has tasks tab */
  tasks?: Maybe<Scalars['Boolean']>;
  /** If the project has timesheet tabs */
  timesheet?: Maybe<Scalars['Boolean']>;
};

/** Project input data, for updating a project */
export type ProjectUpdateInput = {
  /** The currency of the project */
  currency?: InputMaybe<Scalars['String']>;
  /** The id of the customer you are creating this project for */
  customerId?: InputMaybe<Scalars['Int']>;
  /** When the project is due */
  deadline?: InputMaybe<Scalars['GraphQLDate']>;
  /** The id of the department you are creating this project for */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** The description of the project */
  description?: InputMaybe<Scalars['String']>;
  /** The icon of the project */
  icon?: InputMaybe<Scalars['String']>;
  /** The id of the project */
  id: Scalars['Int'];
  /** The name of the project */
  name: Scalars['String'];
  /** The price of the project */
  price?: InputMaybe<Scalars['Float']>;
  /** The price model of the project */
  priceModel?: InputMaybe<Scalars['String']>;
  /** The priority of the project */
  priority?: InputMaybe<Scalars['Int']>;
  /** The progress of the project */
  progress?: InputMaybe<Scalars['Int']>;
  /** The project number */
  projectNumber: Scalars['String'];
  /** If the project is members only */
  secret?: InputMaybe<Scalars['Boolean']>;
  /** The start date of the project */
  start?: InputMaybe<Scalars['GraphQLDate']>;
  /** The status of the project */
  status?: InputMaybe<ProjectStatusEnum>;
  tabs?: InputMaybe<ProjectTabsInputType>;
  /** The url of the project */
  url?: InputMaybe<Scalars['String']>;
};

/** Used in filtering, a range of something */
export type Range = {
  /** Limit results to this number or higher */
  from?: InputMaybe<Scalars['Int']>;
  /** Limit results to this number or lower */
  to?: InputMaybe<Scalars['Int']>;
};

/** A reaction */
export type Reaction = {
  __typename?: 'Reaction';
  /** When the reaction was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The id of the reaction */
  id?: Maybe<Scalars['Int']>;
  /** The reaction body text */
  type: ReactionType;
  /** The user who created this reaction */
  user?: Maybe<User>;
};

export enum ReactionContext {
  Comment = 'comment',
  Post = 'post'
}

/** Reaction input data, for creating a new reaction */
export type ReactionCreateInput = {
  /** In what context you are creating the reaction */
  context: ReactionContext;
  /** The id of the context you are creating this reaction for */
  contextId: Scalars['Int'];
  /** The reaction body text */
  type: ReactionType;
};

export enum ReactionOrderBy {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type ReactionPaginatedResult = {
  __typename?: 'ReactionPaginatedResult';
  data?: Maybe<Array<Maybe<Reaction>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type ReactionPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ReactionSortDirection>>;
  /** A string you want to search reactions for */
  search?: InputMaybe<Scalars['String']>;
};

/** How to sort nodes in a query */
export type ReactionSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: ReactionOrderBy;
};

export enum ReactionType {
  Like = 'like'
}

/** A receiver bank account object for bank payments */
export type ReceiverBankAccount = {
  __typename?: 'ReceiverBankAccount';
  /** The bank account number */
  bban?: Maybe<Scalars['String']>;
  /** The bank bic code */
  bic?: Maybe<Scalars['String']>;
  /** The country */
  country?: Maybe<Country>;
  /** The account IBAN number */
  iban?: Maybe<Scalars['String']>;
  /**
   * The bank account number
   * @deprecated Switch to bban
   */
  number?: Maybe<Scalars['String']>;
  /**
   * The bank swift code
   * @deprecated Switch to bic
   */
  swift?: Maybe<Scalars['String']>;
};

/** A receiver bank account object for bank payments */
export type ReceiverBankAccountInput = {
  /** The bank account number */
  bban?: InputMaybe<Scalars['String']>;
  /** The bank swift code */
  bic: Scalars['String'];
  /** The country */
  country: CountryInput;
  /** The account IBAN number */
  iban?: InputMaybe<Scalars['String']>;
};

/** Input data for re-sending an invoice */
export type ResendInvoiceInput = {
  /**
   * Optional, use when you want to override the customer e-mail.
   *                     If provided, this e-mail will be used, even if the customer
   *                     on the invoice has another e-mail
   */
  email?: InputMaybe<Scalars['String']>;
  /** The id of the invoice you want to send */
  invoiceId: Scalars['Int'];
};

export type RootMutation = {
  __typename?: 'RootMutation';
  /** [client:write, clientServices:write] */
  activateBankIntegration?: Maybe<BankIntegration>;
  /** [client:write, clientServices:write] */
  activateCID?: Maybe<Scalars['Boolean']>;
  /** [client:write, clientServices:write] */
  activateEHF?: Maybe<Scalars['Boolean']>;
  /** [accessGroup:write] */
  addAccessGroupMember?: Maybe<Scalars['Boolean']>;
  /** [app:write] */
  addAppAdmin?: Maybe<AppAdmin>;
  /** [appSubscription:write] */
  addAppSubscription?: Maybe<AppSubscription>;
  /** [clientMember:write] */
  addClientMembers?: Maybe<Array<Maybe<ClientMember>>>;
  /** [agencyClient:write] */
  addCompanyToAgency?: Maybe<Client>;
  /** [projectMember:write] */
  addProjectMember?: Maybe<ProjectMember>;
  /** [attestation:write] */
  approveAttestation?: Maybe<Attestation>;
  /** [bankStatement:write] */
  approveBankStatement?: Maybe<BankStatement>;
  /** [timesheet:admin] */
  approveHours?: Maybe<Array<Maybe<Timesheet>>>;
  /** [bankPayment:write] */
  cancelBankPayment?: Maybe<BankPaymentCancellation>;
  clientInvitationRespond?: Maybe<ClientMember>;
  /** [file:write] */
  copyFile?: Maybe<File>;
  /** [file:write] */
  copyFolder?: Maybe<Folder>;
  /** [accessGroup:write] */
  createAccessGroup?: Maybe<AccessGroup>;
  /** [account:write] */
  createAccount?: Maybe<Account>;
  /** [app:write] */
  createApp?: Maybe<Application>;
  /** [bankAccount:write] */
  createBankAccount?: Maybe<BankAccount>;
  /** [user:write] */
  createBankAccountListing?: Maybe<BankAccountListing>;
  /** [bankPayment:write] */
  createBankPayment?: Maybe<BankPayment>;
  /** [bankStatement:write] */
  createBankStatement?: Maybe<BankStatement>;
  /** [billing:process] */
  createBillingPeriodData?: Maybe<Scalars['Boolean']>;
  /** [billingPlan:write] */
  createBillingPlan?: Maybe<BillingPlan>;
  /** [client:create] */
  createClient?: Maybe<Client>;
  /** [comment:write] */
  createComment?: Maybe<Comment>;
  /** [contact:write] */
  createContact?: Maybe<Contact>;
  /** Create a new custom vat code */
  createCustomVatCode?: Maybe<CustomVatCode>;
  /** [customer:write] */
  createCustomer?: Maybe<Customer>;
  /** [department:write] */
  createDepartment?: Maybe<Department>;
  /** [file:write] */
  createFolder?: Maybe<Folder>;
  /** [invoice:write] */
  createInvoice?: Maybe<Invoice>;
  /** [invoice:draft] */
  createInvoiceBasis?: Maybe<InvoiceBasis>;
  /** [invoice:write] */
  createInvoiceCreditNote?: Maybe<Invoice>;
  /** [invoice:write] */
  createInvoiceDebtCollection?: Maybe<Invoice>;
  /** [invoice:write] */
  createInvoicePayment?: Maybe<Invoice>;
  /** [invoice:write] */
  createInvoiceReminder?: Maybe<Invoice>;
  /** [paymentSetting:write] */
  createPaymentSetting?: Maybe<PaymentSetting>;
  /** [post:write] */
  createPost?: Maybe<Post>;
  /** [product:write] */
  createProduct?: Maybe<Product>;
  /** [project:write] */
  createProject?: Maybe<Project>;
  /** [reaction:write] */
  createReaction?: Maybe<Reaction>;
  /** [supplier:write] */
  createSupplier?: Maybe<Supplier>;
  /** [tags:write] */
  createTag?: Maybe<Tag>;
  /** [task:write] */
  createTask?: Maybe<Task>;
  /** [taskList:write] */
  createTaskList?: Maybe<TaskList>;
  /** [timesheet:write] */
  createTimesheet?: Maybe<Timesheet>;
  /** [user:write] */
  createUser?: Maybe<User>;
  /** [user:write] */
  createUserEducation?: Maybe<UserEducation>;
  /** [user:write] */
  createUserExperience?: Maybe<UserExperience>;
  /** [vatReturn:write] */
  createVatReturn?: Maybe<VatReturn>;
  /** [vatReturn:write] */
  createVatReturnPayment?: Maybe<Voucher>;
  /** [client:write, clientServices:write] */
  deactivateBankIntegration?: Maybe<Scalars['Boolean']>;
  /** [client:write, clientServices:write] */
  deactivateCID?: Maybe<Scalars['Boolean']>;
  /** [client:write, clientServices:write] */
  deactivateEHF?: Maybe<Scalars['Boolean']>;
  /** [attestation:write] */
  declineAttestation?: Maybe<Attestation>;
  /** [billingPlan:write] */
  deleteBillingPlan?: Maybe<Scalars['Boolean']>;
  /** [contact:remove] */
  deleteContact?: Maybe<Scalars['Boolean']>;
  /** [attestation:write] */
  forwardAttestation?: Maybe<Array<Maybe<Attestation>>>;
  /** [app:write] */
  generateAppSecret?: Maybe<Scalars['String']>;
  /** [bankStatement:write] */
  importBankStatement?: Maybe<BankStatement>;
  /** [data:transfer] */
  importSaftFile?: Maybe<SaftConflictGql>;
  /** [voucher:write] */
  importVouchers?: Maybe<Array<Maybe<Voucher>>>;
  /** [bankPayment:write] */
  initiateBankPayments?: Maybe<BankPaymentBundle>;
  /** [bankStatement:write] */
  lockBankTransactions?: Maybe<Array<Maybe<BankTransactionLock>>>;
  /** [voucher:post] */
  lockTransactions?: Maybe<Array<Maybe<AccountTransaction>>>;
  /** [vatReturn:write] */
  manualSubmitVatReturn?: Maybe<VatReturn>;
  /** [file:write] */
  mergeFiles?: Maybe<File>;
  /** [voucher:write] */
  mergeVouchers?: Maybe<Voucher>;
  /** @deprecated swithing to Auth2/OIDC identity server */
  newPassword?: Maybe<Token>;
  /** [client:write, clientServices:write] */
  refreshBankIntegrationStatus?: Maybe<BankIntegration>;
  /** [voucher:post] */
  registerAdvancedVoucher?: Maybe<Voucher>;
  /** [voucher:post] */
  registerBankStatement?: Maybe<Voucher>;
  /** [bankStatement:write] */
  registerBankTransactions?: Maybe<Array<Maybe<BankTransactionLock>>>;
  /** [voucher:post] */
  registerCustomerInvoice?: Maybe<Voucher>;
  /** [voucher:post] */
  registerCustomsDeclaration?: Maybe<Voucher>;
  /**
   * [voucher:post]
   * @deprecated swithing to registerCustomerInvoice
   */
  registerIncome?: Maybe<Voucher>;
  /** [voucher:post] */
  registerSupplierInvoice?: Maybe<Voucher>;
  /** [timesheet:admin] */
  rejectHours?: Maybe<Array<Maybe<Timesheet>>>;
  /** [accessGroup:write] */
  removeAccessGroup?: Maybe<Scalars['Boolean']>;
  /** [accessGroup:write] */
  removeAccessGroupMember?: Maybe<Scalars['Boolean']>;
  /** [account:write] */
  removeAccount?: Maybe<Scalars['Boolean']>;
  /** [app:write] */
  removeApp?: Maybe<Scalars['Boolean']>;
  /** [app:write] */
  removeAppAdmin?: Maybe<Scalars['Boolean']>;
  /** [appSubscription:remove] */
  removeAppSubscription?: Maybe<AppSubscription>;
  /** [bankAccount:write] */
  removeBankAccount?: Maybe<Scalars['Boolean']>;
  /** [bankAccount:write, clientServices:write] */
  removeBankAccountIntegration?: Maybe<BankAccount>;
  /** [user:write] */
  removeBankAccountListing?: Maybe<Scalars['Boolean']>;
  /** [bankPayment:write] */
  removeBankPayment?: Maybe<Scalars['Boolean']>;
  /** [bankPayment:write] */
  removeBankPayments?: Maybe<Scalars['Boolean']>;
  /** [bankStatement:write] */
  removeBankStatement?: Maybe<Scalars['Boolean']>;
  /** [bankStatement:write] */
  removeBankTransactionLock?: Maybe<Scalars['Boolean']>;
  /** [clientMember:write] */
  removeClientMember?: Maybe<Scalars['Boolean']>;
  /** [comment:write] */
  removeComment?: Maybe<Scalars['Boolean']>;
  /** [agencyClient:write] */
  removeCompanyFromAgency?: Maybe<Client>;
  /** [contact:write] */
  removeContactFromContext?: Maybe<Scalars['Boolean']>;
  /** [customVatCode:write] */
  removeCustomVatCode?: Maybe<Scalars['Boolean']>;
  /** [customer:remove] */
  removeCustomer?: Maybe<Scalars['Boolean']>;
  /** [department:remove] */
  removeDepartment?: Maybe<Scalars['Boolean']>;
  /** [file:write] */
  removeFile?: Maybe<Scalars['Boolean']>;
  /** [file:write] */
  removeFolder?: Maybe<Scalars['Boolean']>;
  /** [invoice:draft] */
  removeInvoice?: Maybe<Scalars['Boolean']>;
  /** [invoice:draft] */
  removeInvoiceBasis?: Maybe<Scalars['Boolean']>;
  /** [invoice:write] */
  removeInvoicePayment?: Maybe<Scalars['Boolean']>;
  /** [paymentSetting:write] */
  removePaymentSetting?: Maybe<Scalars['Boolean']>;
  /** [post:write] */
  removePost?: Maybe<Scalars['Boolean']>;
  /** [product:remove] */
  removeProduct?: Maybe<Scalars['Boolean']>;
  /** [project:remove] */
  removeProject?: Maybe<Scalars['Boolean']>;
  /** [projectMember:remove] */
  removeProjectMember?: Maybe<Scalars['Boolean']>;
  /** [reaction:write] */
  removeReaction?: Maybe<Scalars['Boolean']>;
  /** [supplier:remove] */
  removeSupplier?: Maybe<Scalars['Boolean']>;
  /** [tags:write] */
  removeTag?: Maybe<Scalars['Boolean']>;
  /** [task:write] */
  removeTask?: Maybe<Scalars['Boolean']>;
  /** [taskList:write] */
  removeTaskList?: Maybe<Scalars['Boolean']>;
  /** [timesheet:write] */
  removeTimesheet?: Maybe<Scalars['Boolean']>;
  /** [voucher:post] */
  removeTransactionLock?: Maybe<Scalars['Boolean']>;
  /** [user:write] */
  removeUserEducation?: Maybe<Scalars['Boolean']>;
  /** [user:write] */
  removeUserExperience?: Maybe<Scalars['Boolean']>;
  /** [voucher:write] */
  removeVoucher?: Maybe<Scalars['Boolean']>;
  /** [clientServices:write] */
  renewBankConsent?: Maybe<BankConsent>;
  /** [bankStatement:write] */
  reopenBankStatement?: Maybe<BankStatement>;
  /** [attestation:write] */
  requestAttestation?: Maybe<Attestation>;
  /** [clientMember:write] */
  resendClientMemberInvitation?: Maybe<ClientMember>;
  /** [invoice:write] */
  resendInvoice?: Maybe<Invoice>;
  /** [user:write] */
  resendSignupEmail?: Maybe<User>;
  /** @deprecated swithing to Auth2/OIDC identity server */
  resetPassword?: Maybe<Scalars['Boolean']>;
  /** [voucher:post] */
  reverseTransaction?: Maybe<Scalars['Boolean']>;
  /** [voucher:post] */
  reverseVoucher?: Maybe<Voucher>;
  /** [clientServices:write] */
  revokeBankConsent?: Maybe<Scalars['Boolean']>;
  /** [invoice:draft] */
  saveInvoiceDraft?: Maybe<Invoice>;
  /** [data:transfer] */
  saveSaftData?: Maybe<SaftGql>;
  /** [user:write] */
  setDefaultBankAccountListing?: Maybe<BankAccountListing>;
  /** [bankAccount:write, client:write] */
  setDefaultInvoiceBankAccount?: Maybe<BankAccount>;
  /** [invoice:draft] */
  setInvoiceBasisAsBilled?: Maybe<Array<Maybe<InvoiceBasis>>>;
  /** [tags:set] */
  setTag?: Maybe<Scalars['Boolean']>;
  /** [bankAccount:write, clientServices:write] */
  setupBankAccountIntegration?: Maybe<BankAccount>;
  /** @deprecated swithing to Auth2/OIDC identity server */
  signup?: Maybe<User>;
  /** [file:write] */
  splitFile?: Maybe<Array<Maybe<File>>>;
  /** [voucher:write] */
  splitVoucher?: Maybe<Array<Maybe<Voucher>>>;
  /** [timesheet:write] */
  startTimesheetTimer?: Maybe<Timesheet>;
  /** [timesheet:write] */
  stopTimesheetTimer?: Maybe<Timesheet>;
  /** [data:transfer] */
  undoSaftImport?: Maybe<Scalars['Boolean']>;
  /** [tags:set] */
  unsetTag?: Maybe<Scalars['Boolean']>;
  /** [accessGroup:write] */
  updateAccessGroup?: Maybe<AccessGroup>;
  /** [account:write] */
  updateAccount?: Maybe<Account>;
  /** [voucher:write] */
  updateAdvancedVoucher?: Maybe<Voucher>;
  /** [app:write] */
  updateApp?: Maybe<Application>;
  /** [bankAccount:write] */
  updateBankAccount?: Maybe<BankAccount>;
  /** [user:write] */
  updateBankAccountListing?: Maybe<BankAccountListing>;
  /** [bankPayment:write] */
  updateBankPayment?: Maybe<BankPayment>;
  /** [bankPayment:write] */
  updateBankPaymentProcess?: Maybe<BankPaymentBundle>;
  /** [voucher:write] */
  updateBankStatement?: Maybe<Voucher>;
  /** [billingPlan:write] */
  updateBillingPlan?: Maybe<BillingPlan>;
  /** [client:write] */
  updateClient?: Maybe<Client>;
  /** [clientMember:write] */
  updateClientMember?: Maybe<ClientMember>;
  /** [comment:write] */
  updateComment?: Maybe<Comment>;
  /** [contact:write] */
  updateContact?: Maybe<Contact>;
  /** Update a custom vat code */
  updateCustomVatCode?: Maybe<CustomVatCode>;
  /** [customer:write] */
  updateCustomer?: Maybe<Customer>;
  /** [voucher:write] */
  updateCustomerInvoice?: Maybe<Voucher>;
  /** [voucher:write] */
  updateCustomsDeclaration?: Maybe<Voucher>;
  /** [department:write] */
  updateDepartment?: Maybe<Department>;
  /** [file:write] */
  updateFile?: Maybe<File>;
  /** [file:write] */
  updateFolder?: Maybe<Folder>;
  /** [invoice:write] */
  updateInvoice?: Maybe<Invoice>;
  /** [invoice:draft] */
  updateInvoiceBasis?: Maybe<InvoiceBasis>;
  /** [paymentSetting:write] */
  updatePaymentSetting?: Maybe<PaymentSetting>;
  /** [post:write] */
  updatePost?: Maybe<Post>;
  /** [product:write] */
  updateProduct?: Maybe<Product>;
  /** [project:write] */
  updateProject?: Maybe<Project>;
  /** [projectMember:write] */
  updateProjectMember?: Maybe<ProjectMember>;
  /** [supplier:write] */
  updateSupplier?: Maybe<Supplier>;
  /** [voucher:write] */
  updateSupplierInvoice?: Maybe<Voucher>;
  /** [tags:write] */
  updateTag?: Maybe<Tag>;
  /** [task:write] */
  updateTask?: Maybe<Task>;
  /** [taskList:write] */
  updateTaskList?: Maybe<TaskList>;
  /** [timesheet:write] */
  updateTimesheet?: Maybe<Timesheet>;
  /** [user:write] */
  updateUser?: Maybe<User>;
  /** [user:write] */
  updateUserEducation?: Maybe<UserEducation>;
  /** [user:write] */
  updateUserExperience?: Maybe<UserExperience>;
  /** [vatReturn:write] */
  updateVatReturn?: Maybe<VatReturn>;
  /** [vatReturn:write] */
  updateVatReturnEntry?: Maybe<VatReturn>;
  /** [voucher:write] */
  updateVoucher?: Maybe<Voucher>;
  /** [file:write] */
  uploadFiles?: Maybe<Array<Maybe<File>>>;
  /** [voucher:write] */
  uploadVouchers?: Maybe<Array<Maybe<Voucher>>>;
  /** [vatReturn:write] */
  validateAndSendVatReturn?: Maybe<VatReturn>;
};


export type RootMutationActivateBankIntegrationArgs = {
  clientId?: InputMaybe<Scalars['Int']>;
  provider: BankIntegrationProvider;
};


export type RootMutationActivateCidArgs = {
  input?: InputMaybe<ClientCidInput>;
};


export type RootMutationActivateEhfArgs = {
  input: ClientEhfInput;
};


export type RootMutationAddAccessGroupMemberArgs = {
  input: AccessGroupMemberInput;
};


export type RootMutationAddAppAdminArgs = {
  input: AppAdminInput;
};


export type RootMutationAddAppSubscriptionArgs = {
  input: AppSubscriptionInput;
};


export type RootMutationAddClientMembersArgs = {
  input: Array<InputMaybe<ClientMemberInputCreate>>;
};


export type RootMutationAddCompanyToAgencyArgs = {
  input?: InputMaybe<CompanyAddToAgency>;
};


export type RootMutationAddProjectMemberArgs = {
  input: ProjectMemberInput;
};


export type RootMutationApproveAttestationArgs = {
  input: AttestationApproveInput;
};


export type RootMutationApproveBankStatementArgs = {
  input: BankStatementUpdateInput;
};


export type RootMutationApproveHoursArgs = {
  ids: Array<InputMaybe<Scalars['Int']>>;
};


export type RootMutationCancelBankPaymentArgs = {
  id: Scalars['Int'];
};


export type RootMutationClientInvitationRespondArgs = {
  id: Scalars['Int'];
  response: InvitationResponse;
};


export type RootMutationCopyFileArgs = {
  input: FileUpdateInput;
};


export type RootMutationCopyFolderArgs = {
  input: FolderUpdateInput;
};


export type RootMutationCreateAccessGroupArgs = {
  input: AccessGroupInputCreate;
};


export type RootMutationCreateAccountArgs = {
  input: AccountCreateInput;
};


export type RootMutationCreateAppArgs = {
  input: AppCreateInput;
};


export type RootMutationCreateBankAccountArgs = {
  input: BankAccountCreateInput;
};


export type RootMutationCreateBankAccountListingArgs = {
  input: BankAccountListingCreateInput;
};


export type RootMutationCreateBankPaymentArgs = {
  input: BankPaymentCreateInput;
};


export type RootMutationCreateBankStatementArgs = {
  input: BankStatementCreateInput;
};


export type RootMutationCreateBillingPeriodDataArgs = {
  input: ClientBillingPeriodDataInput;
};


export type RootMutationCreateBillingPlanArgs = {
  input: BillingPlanCreateInput;
};


export type RootMutationCreateClientArgs = {
  input: ClientCreateInput;
};


export type RootMutationCreateCommentArgs = {
  input: CommentCreateInput;
};


export type RootMutationCreateContactArgs = {
  input: ContactCreateInput;
};


export type RootMutationCreateCustomVatCodeArgs = {
  input: CustomVatCodeCreate;
};


export type RootMutationCreateCustomerArgs = {
  input: CustomerCreateInput;
};


export type RootMutationCreateDepartmentArgs = {
  input: DepartmentCreateInput;
};


export type RootMutationCreateFolderArgs = {
  input: FolderCreateInput;
};


export type RootMutationCreateInvoiceArgs = {
  input: InvoiceCreateInput;
};


export type RootMutationCreateInvoiceBasisArgs = {
  input: InvoiceBasisCreateInput;
};


export type RootMutationCreateInvoiceCreditNoteArgs = {
  input: InvoiceCreditNoteInput;
};


export type RootMutationCreateInvoiceDebtCollectionArgs = {
  input: InvoiceDebtCollectionInput;
};


export type RootMutationCreateInvoicePaymentArgs = {
  input: InvoicePaymentCreateInput;
};


export type RootMutationCreateInvoiceReminderArgs = {
  input: InvoiceReminderInput;
};


export type RootMutationCreatePaymentSettingArgs = {
  input: PaymentSettingCreateInput;
};


export type RootMutationCreatePostArgs = {
  input: PostCreateInput;
};


export type RootMutationCreateProductArgs = {
  input: ProductCreateInput;
};


export type RootMutationCreateProjectArgs = {
  input: ProjectCreateInput;
};


export type RootMutationCreateReactionArgs = {
  input: ReactionCreateInput;
};


export type RootMutationCreateSupplierArgs = {
  input: SupplierCreateInput;
};


export type RootMutationCreateTagArgs = {
  input: TagCreateInput;
};


export type RootMutationCreateTaskArgs = {
  input: TaskCreateInput;
};


export type RootMutationCreateTaskListArgs = {
  input: TaskListCreateInput;
};


export type RootMutationCreateTimesheetArgs = {
  input: TimesheetCreateInput;
};


export type RootMutationCreateUserArgs = {
  input: UserCreateInput;
};


export type RootMutationCreateUserEducationArgs = {
  input: UserEducationCreateInput;
};


export type RootMutationCreateUserExperienceArgs = {
  input: UserExperienceCreateInput;
};


export type RootMutationCreateVatReturnArgs = {
  input: VatReturnCreateInput;
};


export type RootMutationCreateVatReturnPaymentArgs = {
  input: VatReturnPaymentInput;
};


export type RootMutationDeactivateBankIntegrationArgs = {
  clientId?: InputMaybe<Scalars['Int']>;
};


export type RootMutationDeactivateCidArgs = {
  clientId?: InputMaybe<Scalars['Int']>;
};


export type RootMutationDeactivateEhfArgs = {
  clientId?: InputMaybe<Scalars['Int']>;
};


export type RootMutationDeclineAttestationArgs = {
  input: AttestationDeclineInput;
};


export type RootMutationDeleteBillingPlanArgs = {
  id: Scalars['Int'];
};


export type RootMutationDeleteContactArgs = {
  id: Scalars['Int'];
};


export type RootMutationForwardAttestationArgs = {
  input: AttestationForwardInput;
};


export type RootMutationGenerateAppSecretArgs = {
  id: Scalars['String'];
};


export type RootMutationImportBankStatementArgs = {
  input: BankStatementImportInput;
};


export type RootMutationImportSaftFileArgs = {
  input: ImportSaftGql;
};


export type RootMutationImportVouchersArgs = {
  input: ImportVoucher;
};


export type RootMutationInitiateBankPaymentsArgs = {
  ids: Array<InputMaybe<Scalars['Int']>>;
};


export type RootMutationLockBankTransactionsArgs = {
  input: BankTransactionLockInput;
};


export type RootMutationLockTransactionsArgs = {
  ids: Array<InputMaybe<Scalars['Int']>>;
};


export type RootMutationManualSubmitVatReturnArgs = {
  id: Scalars['Int'];
};


export type RootMutationMergeFilesArgs = {
  input: FileMergeInput;
};


export type RootMutationMergeVouchersArgs = {
  input: VoucherMergeInput;
};


export type RootMutationNewPasswordArgs = {
  input: UserNewPasswordInput;
};


export type RootMutationRefreshBankIntegrationStatusArgs = {
  clientId?: InputMaybe<Scalars['Int']>;
};


export type RootMutationRegisterAdvancedVoucherArgs = {
  input: VoucherAdvancedInput;
};


export type RootMutationRegisterBankStatementArgs = {
  input: VoucherBankStatementInput;
};


export type RootMutationRegisterBankTransactionsArgs = {
  input: BankTransactionPostingInput;
};


export type RootMutationRegisterCustomerInvoiceArgs = {
  input: VoucherCustomerInvoiceInputPost;
};


export type RootMutationRegisterCustomsDeclarationArgs = {
  input: VoucherCustomsDeclarationInput;
};


export type RootMutationRegisterIncomeArgs = {
  input: VoucherCustomerInvoiceInputPost;
};


export type RootMutationRegisterSupplierInvoiceArgs = {
  input: VoucherSupplierInvoiceInputPost;
};


export type RootMutationRejectHoursArgs = {
  ids: Array<InputMaybe<Scalars['Int']>>;
};


export type RootMutationRemoveAccessGroupArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveAccessGroupMemberArgs = {
  input: AccessGroupMemberInput;
};


export type RootMutationRemoveAccountArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveAppArgs = {
  id: Scalars['String'];
};


export type RootMutationRemoveAppAdminArgs = {
  input: AppAdminInput;
};


export type RootMutationRemoveAppSubscriptionArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveBankAccountArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveBankAccountIntegrationArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveBankAccountListingArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveBankPaymentArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveBankPaymentsArgs = {
  ids: Array<InputMaybe<Scalars['Int']>>;
};


export type RootMutationRemoveBankStatementArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveBankTransactionLockArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveClientMemberArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveCommentArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveCompanyFromAgencyArgs = {
  input?: InputMaybe<CompanyRemoveFromAgency>;
};


export type RootMutationRemoveContactFromContextArgs = {
  contactId: Scalars['Int'];
  context: ContactContext;
  contextId: Scalars['Int'];
};


export type RootMutationRemoveCustomVatCodeArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveCustomerArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveDepartmentArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveFileArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveFolderArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveInvoiceArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveInvoiceBasisArgs = {
  ids: Array<InputMaybe<Scalars['Int']>>;
};


export type RootMutationRemoveInvoicePaymentArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemovePaymentSettingArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemovePostArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveProductArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveProjectArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveProjectMemberArgs = {
  projectId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type RootMutationRemoveReactionArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveSupplierArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveTagArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveTaskArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveTaskListArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveTimesheetArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveTransactionLockArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveUserEducationArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveUserExperienceArgs = {
  id: Scalars['Int'];
};


export type RootMutationRemoveVoucherArgs = {
  id: Scalars['Int'];
};


export type RootMutationRenewBankConsentArgs = {
  id: Scalars['Int'];
  ssn?: InputMaybe<Scalars['String']>;
};


export type RootMutationReopenBankStatementArgs = {
  input: BankStatementUpdateInput;
};


export type RootMutationRequestAttestationArgs = {
  input: AttestationRequestInput;
};


export type RootMutationResendClientMemberInvitationArgs = {
  memberId: Scalars['Int'];
};


export type RootMutationResendInvoiceArgs = {
  input: ResendInvoiceInput;
};


export type RootMutationResendSignupEmailArgs = {
  userId: Scalars['Int'];
};


export type RootMutationResetPasswordArgs = {
  email: Scalars['String'];
};


export type RootMutationReverseTransactionArgs = {
  id: Scalars['Int'];
};


export type RootMutationReverseVoucherArgs = {
  id: Scalars['Int'];
};


export type RootMutationRevokeBankConsentArgs = {
  id: Scalars['Int'];
};


export type RootMutationSaveInvoiceDraftArgs = {
  input: InvoiceDraftInput;
};


export type RootMutationSaveSaftDataArgs = {
  input: SaveSaftTypeGql;
};


export type RootMutationSetDefaultBankAccountListingArgs = {
  id: Scalars['Int'];
};


export type RootMutationSetDefaultInvoiceBankAccountArgs = {
  id: Scalars['Int'];
};


export type RootMutationSetInvoiceBasisAsBilledArgs = {
  ids: Array<InputMaybe<Scalars['Int']>>;
};


export type RootMutationSetTagArgs = {
  input: TagContextInput;
};


export type RootMutationSetupBankAccountIntegrationArgs = {
  id: Scalars['Int'];
  ssn?: InputMaybe<Scalars['String']>;
};


export type RootMutationSignupArgs = {
  input: Signup;
};


export type RootMutationSplitFileArgs = {
  id: Scalars['Int'];
};


export type RootMutationSplitVoucherArgs = {
  id: Scalars['Int'];
};


export type RootMutationStartTimesheetTimerArgs = {
  input: TimesheetStartTimerInputType;
};


export type RootMutationStopTimesheetTimerArgs = {
  input: TimesheetStopTimerInputType;
};


export type RootMutationUndoSaftImportArgs = {
  id: Scalars['Int'];
};


export type RootMutationUnsetTagArgs = {
  input: TagContextInput;
};


export type RootMutationUpdateAccessGroupArgs = {
  input: AccessGroupInputUpdate;
};


export type RootMutationUpdateAccountArgs = {
  input: AccountUpdateInput;
};


export type RootMutationUpdateAdvancedVoucherArgs = {
  input: VoucherAdvancedInput;
};


export type RootMutationUpdateAppArgs = {
  input: AppUpdateInput;
};


export type RootMutationUpdateBankAccountArgs = {
  input: BankAccountUpdateInput;
};


export type RootMutationUpdateBankAccountListingArgs = {
  input: BankAccountListingUpdateInput;
};


export type RootMutationUpdateBankPaymentArgs = {
  input: BankPaymentUpdateInput;
};


export type RootMutationUpdateBankPaymentProcessArgs = {
  flowId: Scalars['String'];
};


export type RootMutationUpdateBankStatementArgs = {
  input: VoucherBankStatementInput;
};


export type RootMutationUpdateBillingPlanArgs = {
  input: BillingPlanUpdateInput;
};


export type RootMutationUpdateClientArgs = {
  input: ClientUpdateInput;
};


export type RootMutationUpdateClientMemberArgs = {
  input: ClientMemberInputUpdate;
};


export type RootMutationUpdateCommentArgs = {
  input: CommentUpdateInput;
};


export type RootMutationUpdateContactArgs = {
  input: ContactUpdateInput;
};


export type RootMutationUpdateCustomVatCodeArgs = {
  input: CustomVatCodeUpdate;
};


export type RootMutationUpdateCustomerArgs = {
  input: CustomerUpdateInput;
};


export type RootMutationUpdateCustomerInvoiceArgs = {
  input: VoucherCustomerInvoiceInput;
};


export type RootMutationUpdateCustomsDeclarationArgs = {
  input: VoucherCustomsDeclarationInput;
};


export type RootMutationUpdateDepartmentArgs = {
  input: DepartmentUpdateInput;
};


export type RootMutationUpdateFileArgs = {
  input: FileUpdateInput;
};


export type RootMutationUpdateFolderArgs = {
  input: FolderUpdateInput;
};


export type RootMutationUpdateInvoiceArgs = {
  input: InvoiceUpdateInput;
};


export type RootMutationUpdateInvoiceBasisArgs = {
  input: InvoiceBasisUpdateInput;
};


export type RootMutationUpdatePaymentSettingArgs = {
  input: PaymentSettingUpdateInput;
};


export type RootMutationUpdatePostArgs = {
  input: PostUpdateInput;
};


export type RootMutationUpdateProductArgs = {
  input: ProductUpdateInput;
};


export type RootMutationUpdateProjectArgs = {
  input: ProjectUpdateInput;
};


export type RootMutationUpdateProjectMemberArgs = {
  input: ProjectMemberInput;
};


export type RootMutationUpdateSupplierArgs = {
  input: SupplierUpdateInput;
};


export type RootMutationUpdateSupplierInvoiceArgs = {
  input: VoucherSupplierInvoiceInput;
};


export type RootMutationUpdateTagArgs = {
  input: TagUpdateInput;
};


export type RootMutationUpdateTaskArgs = {
  input: TaskUpdateInput;
};


export type RootMutationUpdateTaskListArgs = {
  input: TaskListUpdateInput;
};


export type RootMutationUpdateTimesheetArgs = {
  input: TimesheetUpdateInput;
};


export type RootMutationUpdateUserArgs = {
  input: UserUpdateInput;
};


export type RootMutationUpdateUserEducationArgs = {
  input: UserEducationUpdateInput;
};


export type RootMutationUpdateUserExperienceArgs = {
  input: UserExperienceUpdateInput;
};


export type RootMutationUpdateVatReturnArgs = {
  input: VatReturnUpdateInput;
};


export type RootMutationUpdateVatReturnEntryArgs = {
  input: VatReturnEntryUpdateInput;
};


export type RootMutationUpdateVoucherArgs = {
  input: VoucherUpdateInput;
};


export type RootMutationUploadFilesArgs = {
  input: FileUpload;
};


export type RootMutationUploadVouchersArgs = {
  input: VoucherUpload;
};


export type RootMutationValidateAndSendVatReturnArgs = {
  id: Scalars['Int'];
  longPull?: InputMaybe<Scalars['Boolean']>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  /** [accessGroup:read] */
  accessGroup?: Maybe<AccessGroup>;
  /** [clientMember:read] */
  accessGroupMembers?: Maybe<Array<Maybe<ClientMember>>>;
  /** [accessGroup:read] */
  accessGroups?: Maybe<Array<Maybe<AccessGroup>>>;
  /** [account:read] */
  account?: Maybe<Account>;
  /** [account:read] */
  accountGroups?: Maybe<Array<Maybe<AccountGroup>>>;
  accountingFirms?: Maybe<Array<Maybe<AccountingFirm>>>;
  accountingTemplates?: Maybe<Array<Maybe<AccountingTemplate>>>;
  /** [account:read] */
  accounts?: Maybe<Array<Maybe<Account>>>;
  /** [actionLog:read] */
  actionLogByContext?: Maybe<Array<Maybe<ActionLog>>>;
  /** [actionLog:read] */
  actionLogLatest?: Maybe<Array<Maybe<ActionLog>>>;
  /** [app:read] */
  activeApps?: Maybe<Array<Maybe<Application>>>;
  /** [agencyClient:read] */
  agencyClients?: Maybe<ClientPaginatedResult>;
  /** @deprecated swithing to Auth2/OIDC identity server */
  apiAccessToken?: Maybe<Token>;
  /** [app:read] */
  app?: Maybe<Application>;
  /** [app:read] */
  appAdmins?: Maybe<Array<Maybe<AppAdmin>>>;
  /** [app:read] */
  appByNamespace?: Maybe<Application>;
  /** [app:read] */
  appSubscription?: Maybe<AppSubscription>;
  /** [app:read] */
  appSubscriptions?: Maybe<Array<Maybe<AppSubscription>>>;
  /** [app:read] */
  apps?: Maybe<ApplicationPaginatedResult>;
  /** [attestation:read] */
  attestation?: Maybe<Attestation>;
  /** [attestation:read] */
  attestations?: Maybe<Array<Maybe<Attestation>>>;
  /** [transactions:read] */
  balanceReport?: Maybe<Array<Maybe<AccountReportGroup>>>;
  /** [transactions:read] */
  balanceSheetReport?: Maybe<Array<Maybe<BalanceSheetReport>>>;
  /** [bankAccount:read] */
  bankAccount?: Maybe<BankAccount>;
  /** [bankAccount:read] */
  bankAccountBalance?: Maybe<BankAccountBalance>;
  /** [bankAccount:read] */
  bankAccountListing?: Maybe<BankAccountListing>;
  /** [bankAccount:read] */
  bankAccountListings?: Maybe<Array<Maybe<BankAccountListing>>>;
  /** [bankAccount:read] */
  bankAccounts?: Maybe<Array<Maybe<BankAccount>>>;
  /** [client:read, bankAccount:read] */
  bankConsent?: Maybe<BankConsent>;
  /** [client:read, bankAccount:read] */
  bankConsents?: Maybe<Array<Maybe<BankConsent>>>;
  /** [bankPayment:read] */
  bankPayment?: Maybe<BankPayment>;
  /** [bankPayment:read] */
  bankPayments?: Maybe<BankPaymentPaginatedResult>;
  /** [bankStatement:read] */
  bankStatement?: Maybe<BankStatement>;
  /** [bankStatement:read] */
  bankStatements?: Maybe<Array<Maybe<BankStatement>>>;
  /** [bankStatement:read] */
  bankTransactionLock?: Maybe<BankTransactionLock>;
  /** [bankStatement:read] */
  bankTransactionLocks?: Maybe<Array<Maybe<BankTransactionLock>>>;
  /** [bankStatement:read] */
  bankTransactions?: Maybe<Array<Maybe<BankTransaction>>>;
  /** [billing:read] */
  billingPlan?: Maybe<BillingPlan>;
  /** [billing:read] */
  billingPlans?: Maybe<Array<Maybe<BillingPlan>>>;
  /** [client:read] */
  client?: Maybe<Client>;
  /** [clientMember:read] */
  clientMember?: Maybe<ClientMember>;
  /** [clientMember:read] */
  clientMembers?: Maybe<ClientMemberPaginatedResult>;
  /** [client:read] */
  clients?: Maybe<ClientPaginatedResult>;
  /** [comment:read] */
  comment?: Maybe<Comment>;
  /** [comment:read] */
  comments?: Maybe<CommentPaginatedResult>;
  /** [statistics:read] */
  companyStatistics?: Maybe<CompanyStatistics>;
  /** @deprecated swithing to Auth2/OIDC identity server */
  confirmEmail?: Maybe<Token>;
  /** [contact:read] */
  contact?: Maybe<Contact>;
  /** [contact:read] */
  contacts?: Maybe<ContactPaginatedResult>;
  customVatCode: CustomVatCode;
  customVatCodes?: Maybe<Array<Maybe<CustomVatCode>>>;
  /** [customer:read] */
  customer?: Maybe<Customer>;
  /** [customer:ledger] */
  customerLedgerReport?: Maybe<Array<Maybe<CustomerLedgerReport>>>;
  /** [customer:read] */
  customers?: Maybe<CustomerPaginatedResult>;
  /** [client:read] */
  deliveryMethods?: Maybe<Array<Maybe<DeliveryMethods>>>;
  /** [department:read] */
  department?: Maybe<Department>;
  /** [department:read] */
  departments?: Maybe<Array<Maybe<Department>>>;
  exchangeRate?: Maybe<ExchangeRate>;
  exchangeRates?: Maybe<Array<Maybe<ExchangeRate>>>;
  /** [transactions:read] */
  exportBalanceReport?: Maybe<Export>;
  /** [transactions:read] */
  exportBalanceSheetReport?: Maybe<Export>;
  /** [customer:ledger] */
  exportCustomerLedgerReport?: Maybe<Export>;
  /** [transactions:read] */
  exportLedgerReport?: Maybe<Export>;
  /** [transactions:read] */
  exportResultReport?: Maybe<Export>;
  /** [transactions:read] */
  exportSaftFinancial?: Maybe<Export>;
  /** [supplier:ledger] */
  exportSupplierLedgerReport?: Maybe<Export>;
  /** [vatReturn:read] */
  exportVatReturn?: Maybe<Export>;
  /** [voucher:read] */
  exportVouchers?: Maybe<Scalars['Boolean']>;
  /** [file:read] */
  file?: Maybe<File>;
  /** [file:read] */
  files?: Maybe<FilePaginatedResult>;
  /** [file:read] */
  folder?: Maybe<Folder>;
  /** [file:read] */
  folderTree?: Maybe<Scalars['String']>;
  /** [file:read] */
  folders?: Maybe<FolderPaginatedResult>;
  /** [account:read] */
  getSaftImports?: Maybe<Array<Maybe<ImportSaft>>>;
  /** [search] */
  globalLookupSearch?: Maybe<Array<Maybe<SearchResult>>>;
  /** [invoice:read] */
  invoice?: Maybe<Invoice>;
  /** [invoiceBasis:read] */
  invoiceBasis?: Maybe<InvoiceBasisPaginatedResult>;
  /** [invoice:read] */
  invoicePayment?: Maybe<InvoicePayment>;
  /** [invoice:read] */
  invoicePaymentOCRLog?: Maybe<Array<Maybe<InvoicePaymentOcrLog>>>;
  /** [invoice:read] */
  invoicePayments?: Maybe<Array<Maybe<InvoicePayment>>>;
  invoicePreview?: Maybe<Scalars['String']>;
  /** [invoice:read] */
  invoices?: Maybe<InvoicePaginatedResult>;
  /** [transactions:read] */
  ledgerReport?: Maybe<Array<Maybe<LedgerReport>>>;
  /** @deprecated swithing to Auth2/OIDC identity server */
  login?: Maybe<Token>;
  /** [customer:ledger] */
  openCustomerPostings?: Maybe<Array<Maybe<OpenPostings>>>;
  /** [supplier:ledger] */
  openSupplierPostings?: Maybe<Array<Maybe<OpenPostings>>>;
  /** [paymentPlan:read] */
  paymentPlan?: Maybe<PaymentPlan>;
  /** [paymentPlan:read] */
  paymentPlans?: Maybe<Array<Maybe<PaymentPlan>>>;
  /** [paymentSetting:read] */
  paymentSetting?: Maybe<PaymentSetting>;
  /** [paymentSetting:read] */
  paymentSettings?: Maybe<Array<Maybe<PaymentSetting>>>;
  /** [post:read] */
  post?: Maybe<Post>;
  /** [post:read] */
  posts?: Maybe<PostPaginatedResult>;
  /** [product:read] */
  product?: Maybe<Product>;
  /** [product:read] */
  products?: Maybe<ProductPaginatedResult>;
  /** [project:read] */
  project?: Maybe<Project>;
  /** [project:read] */
  projects?: Maybe<ProjectPaginatedResult>;
  /** [reaction:read] */
  reaction?: Maybe<Reaction>;
  /** [reaction:read] */
  reactions?: Maybe<ReactionPaginatedResult>;
  /** [transactions:read] */
  resultReport?: Maybe<Array<Maybe<AccountReportGroup>>>;
  /** [file:read] */
  storageStatistics?: Maybe<StorageStatistics>;
  /** [supplier:read] */
  supplier?: Maybe<Supplier>;
  /** [supplier:ledger] */
  supplierLedgerReport?: Maybe<Array<Maybe<SupplierLedgerReport>>>;
  /** [supplier:read] */
  suppliers?: Maybe<SupplierPaginatedResult>;
  /**
   * [client:read]
   * @deprecated swithing to Auth2/OIDC identity server
   */
  switchClient?: Maybe<ClientSwitch>;
  /** [bankAccount:read] */
  syncBankAccount?: Maybe<BankAccount>;
  /** [systemStatistics:read] */
  systemStatistics?: Maybe<SystemStatistics>;
  /** [tags:read] */
  tag?: Maybe<Tag>;
  /** [tags:read] */
  tags?: Maybe<TagPaginatedResult>;
  /** [task:read] */
  task?: Maybe<Task>;
  /** [task:read] */
  tasks?: Maybe<TaskPaginatedResult>;
  /** [timesheet:read] */
  timesheet?: Maybe<Timesheet>;
  /** [timesheet:read] */
  timesheetStats?: Maybe<Array<Maybe<TimesheetStats>>>;
  /** [timesheet:read] */
  timesheets?: Maybe<TimesheetPaginatedResult>;
  timezone?: Maybe<Timezone>;
  timezones?: Maybe<Array<Maybe<Timezone>>>;
  /** @deprecated swithing to Auth2/OIDC identity server */
  token?: Maybe<Token>;
  /** [transactions:read] */
  transactionLock?: Maybe<TransactionLock>;
  /** [transactions:read] */
  transactionLocks?: Maybe<Array<Maybe<TransactionLock>>>;
  /** [user:read] */
  user?: Maybe<User>;
  /** [user:read] */
  userEducation?: Maybe<Array<Maybe<UserEducation>>>;
  /** [user:read] */
  userExperience?: Maybe<Array<Maybe<UserExperience>>>;
  /** [user:read] */
  users?: Maybe<UserPaginatedResult>;
  vatCode?: Maybe<VatCode>;
  vatCodes?: Maybe<Array<Maybe<VatCode>>>;
  /** [vatReturn:read] */
  vatReturn?: Maybe<VatReturn>;
  /** [vatReturn:read] */
  vatReturns?: Maybe<Array<Maybe<VatReturn>>>;
  /** [voucher:read] */
  voucher?: Maybe<Voucher>;
  /** [voucher:read] */
  vouchers?: Maybe<VoucherPaginatedResult>;
};


export type RootQueryAccessGroupArgs = {
  id: Scalars['Int'];
};


export type RootQueryAccessGroupMembersArgs = {
  id: Scalars['Int'];
};


export type RootQueryAccessGroupsArgs = {
  options?: InputMaybe<AccessGroupOptions>;
};


export type RootQueryAccountArgs = {
  id: Scalars['Int'];
};


export type RootQueryAccountGroupsArgs = {
  options?: InputMaybe<AccountOptions>;
};


export type RootQueryAccountingTemplatesArgs = {
  options?: InputMaybe<AccountingTemplateOptions>;
};


export type RootQueryAccountsArgs = {
  options?: InputMaybe<AccountOptions>;
};


export type RootQueryActionLogByContextArgs = {
  options: ActionLogByContextOptions;
};


export type RootQueryActionLogLatestArgs = {
  options: ActionLogOptions;
};


export type RootQueryAgencyClientsArgs = {
  options?: InputMaybe<ClientPagingOptions>;
};


export type RootQueryAppArgs = {
  id: Scalars['String'];
};


export type RootQueryAppAdminsArgs = {
  options: AppAdminOptions;
};


export type RootQueryAppByNamespaceArgs = {
  namespace: Scalars['String'];
};


export type RootQueryAppSubscriptionArgs = {
  id: Scalars['Int'];
};


export type RootQueryAppSubscriptionsArgs = {
  options?: InputMaybe<AppSubscriptionOptions>;
};


export type RootQueryAppsArgs = {
  options?: InputMaybe<AppPagingOptions>;
};


export type RootQueryAttestationArgs = {
  id: Scalars['Int'];
};


export type RootQueryBalanceReportArgs = {
  options: AccountReportOptions;
};


export type RootQueryBalanceSheetReportArgs = {
  options: AccountReportOptions;
};


export type RootQueryBankAccountArgs = {
  id: Scalars['Int'];
};


export type RootQueryBankAccountBalanceArgs = {
  date?: InputMaybe<Scalars['GraphQLDate']>;
  id: Scalars['Int'];
};


export type RootQueryBankAccountListingArgs = {
  id: Scalars['Int'];
};


export type RootQueryBankAccountListingsArgs = {
  options?: InputMaybe<BankAccountListingOptions>;
};


export type RootQueryBankConsentArgs = {
  id: Scalars['Int'];
};


export type RootQueryBankConsentsArgs = {
  options?: InputMaybe<BankConsentOptions>;
};


export type RootQueryBankPaymentArgs = {
  id: Scalars['Int'];
};


export type RootQueryBankPaymentsArgs = {
  options?: InputMaybe<BankPaymentPagingOptions>;
};


export type RootQueryBankStatementArgs = {
  options: BankStatementOptions;
};


export type RootQueryBankStatementsArgs = {
  bankAccountId: Scalars['Int'];
};


export type RootQueryBankTransactionLockArgs = {
  id: Scalars['Int'];
};


export type RootQueryBankTransactionLocksArgs = {
  options: BankTransactionLockOptions;
};


export type RootQueryBankTransactionsArgs = {
  options: BankTransactionOptions;
};


export type RootQueryBillingPlanArgs = {
  id: Scalars['Int'];
};


export type RootQueryBillingPlansArgs = {
  options?: InputMaybe<BillingPlanOptions>;
};


export type RootQueryClientArgs = {
  id: Scalars['Int'];
};


export type RootQueryClientMemberArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type RootQueryClientMembersArgs = {
  options?: InputMaybe<ClientMemberPagingOptions>;
};


export type RootQueryClientsArgs = {
  options?: InputMaybe<ClientPagingOptions>;
};


export type RootQueryCommentArgs = {
  id: Scalars['Int'];
};


export type RootQueryCommentsArgs = {
  context: CommentContext;
  contextId: Scalars['Int'];
  options?: InputMaybe<CommentPagingOptions>;
};


export type RootQueryCompanyStatisticsArgs = {
  options?: InputMaybe<StatisticsOptions>;
};


export type RootQueryConfirmEmailArgs = {
  input: Scalars['String'];
};


export type RootQueryContactArgs = {
  id: Scalars['Int'];
};


export type RootQueryContactsArgs = {
  options?: InputMaybe<ContactPagingOptions>;
};


export type RootQueryCustomVatCodeArgs = {
  id: Scalars['Int'];
};


export type RootQueryCustomVatCodesArgs = {
  options?: InputMaybe<CustomVatCodeOptions>;
};


export type RootQueryCustomerArgs = {
  id: Scalars['Int'];
};


export type RootQueryCustomerLedgerReportArgs = {
  options: CustomerLedgerReportOptions;
};


export type RootQueryCustomersArgs = {
  options?: InputMaybe<CustomerPagingOptions>;
};


export type RootQueryDeliveryMethodsArgs = {
  customerId: Scalars['Int'];
};


export type RootQueryDepartmentArgs = {
  id: Scalars['Int'];
};


export type RootQueryDepartmentsArgs = {
  options?: InputMaybe<DepartmentOptions>;
};


export type RootQueryExchangeRateArgs = {
  date?: InputMaybe<Scalars['GraphQLDate']>;
  from: CurrencyCode;
  to: CurrencyCode;
};


export type RootQueryExchangeRatesArgs = {
  date?: InputMaybe<Scalars['GraphQLDate']>;
  from: CurrencyCode;
};


export type RootQueryExportBalanceReportArgs = {
  options: ExportOptions;
};


export type RootQueryExportBalanceSheetReportArgs = {
  options: ExportOptions;
};


export type RootQueryExportCustomerLedgerReportArgs = {
  options: ExportOptions;
};


export type RootQueryExportLedgerReportArgs = {
  options: ExportOptions;
};


export type RootQueryExportResultReportArgs = {
  options: ExportOptions;
};


export type RootQueryExportSaftFinancialArgs = {
  options: SaftFinancialExportOptions;
};


export type RootQueryExportSupplierLedgerReportArgs = {
  options: ExportOptions;
};


export type RootQueryExportVatReturnArgs = {
  options: VatReturnExportOptions;
};


export type RootQueryExportVouchersArgs = {
  options: ExportVouchersOptions;
};


export type RootQueryFileArgs = {
  id: Scalars['Int'];
};


export type RootQueryFilesArgs = {
  options: FilePagingOptions;
};


export type RootQueryFolderArgs = {
  id: Scalars['Int'];
};


export type RootQueryFolderTreeArgs = {
  contextId: Scalars['Int'];
  contextType: FolderContext;
};


export type RootQueryFoldersArgs = {
  options: FolderPagingOptions;
};


export type RootQueryGlobalLookupSearchArgs = {
  options: SearchOptions;
};


export type RootQueryInvoiceArgs = {
  id: Scalars['Int'];
};


export type RootQueryInvoiceBasisArgs = {
  options?: InputMaybe<InvoiceBasisPagingOptions>;
};


export type RootQueryInvoicePaymentArgs = {
  id: Scalars['Int'];
};


export type RootQueryInvoicePaymentOcrLogArgs = {
  clientId?: InputMaybe<Scalars['Int']>;
};


export type RootQueryInvoicePaymentsArgs = {
  invoiceId: Scalars['Int'];
};


export type RootQueryInvoicePreviewArgs = {
  input: InvoicePreviewInput;
};


export type RootQueryInvoicesArgs = {
  options?: InputMaybe<InvoicePagingOptions>;
};


export type RootQueryLedgerReportArgs = {
  options: AccountReportOptions;
};


export type RootQueryLoginArgs = {
  input: LoginInput;
};


export type RootQueryOpenCustomerPostingsArgs = {
  options: OpenPostingsOptions;
};


export type RootQueryOpenSupplierPostingsArgs = {
  options: OpenPostingsOptions;
};


export type RootQueryPaymentPlanArgs = {
  id: Scalars['Int'];
};


export type RootQueryPaymentSettingArgs = {
  id: Scalars['Int'];
};


export type RootQueryPaymentSettingsArgs = {
  options?: InputMaybe<PaymentSettingOptions>;
};


export type RootQueryPostArgs = {
  id: Scalars['Int'];
};


export type RootQueryPostsArgs = {
  context: PostContext;
  contextId: Scalars['Int'];
  options?: InputMaybe<PostPagingOptions>;
};


export type RootQueryProductArgs = {
  id: Scalars['Int'];
};


export type RootQueryProductsArgs = {
  options?: InputMaybe<ProductPagingOptions>;
};


export type RootQueryProjectArgs = {
  id: Scalars['Int'];
};


export type RootQueryProjectsArgs = {
  options?: InputMaybe<ProjectPagingOptions>;
};


export type RootQueryReactionArgs = {
  id: Scalars['Int'];
};


export type RootQueryReactionsArgs = {
  context: ReactionContext;
  contextId: Scalars['Int'];
  options?: InputMaybe<ReactionPagingOptions>;
};


export type RootQueryResultReportArgs = {
  options: AccountReportOptions;
};


export type RootQueryStorageStatisticsArgs = {
  options?: InputMaybe<StorageStatisticsOptions>;
};


export type RootQuerySupplierArgs = {
  id: Scalars['Int'];
};


export type RootQuerySupplierLedgerReportArgs = {
  options: SupplierLedgerReportOptions;
};


export type RootQuerySuppliersArgs = {
  options?: InputMaybe<SupplierPagingOptions>;
};


export type RootQuerySwitchClientArgs = {
  id: Scalars['Int'];
};


export type RootQuerySyncBankAccountArgs = {
  id: Scalars['Int'];
};


export type RootQuerySystemStatisticsArgs = {
  options?: InputMaybe<StatisticsOptions>;
};


export type RootQueryTagArgs = {
  id: Scalars['Int'];
};


export type RootQueryTagsArgs = {
  options: TagPagingOptions;
};


export type RootQueryTaskArgs = {
  id: Scalars['Int'];
};


export type RootQueryTasksArgs = {
  options: TaskPagingOptions;
};


export type RootQueryTimesheetArgs = {
  id: Scalars['Int'];
};


export type RootQueryTimesheetStatsArgs = {
  options?: InputMaybe<TimesheetStatsOptions>;
};


export type RootQueryTimesheetsArgs = {
  options?: InputMaybe<TimesheetPagingOptions>;
};


export type RootQueryTimezoneArgs = {
  id: Scalars['Int'];
};


export type RootQueryTransactionLockArgs = {
  id: Scalars['Int'];
};


export type RootQueryTransactionLocksArgs = {
  options: TransactionLockOptions;
};


export type RootQueryUserArgs = {
  id: Scalars['Int'];
};


export type RootQueryUserEducationArgs = {
  options: UserEducationOptions;
};


export type RootQueryUserExperienceArgs = {
  options: UserExperienceOptions;
};


export type RootQueryUsersArgs = {
  options?: InputMaybe<UserPagingOptions>;
};


export type RootQueryVatCodeArgs = {
  code: Scalars['Int'];
  date?: InputMaybe<Scalars['GraphQLDate']>;
};


export type RootQueryVatCodesArgs = {
  options?: InputMaybe<VatCodeOptions>;
};


export type RootQueryVatReturnArgs = {
  options: VatReturnOptions;
};


export type RootQueryVoucherArgs = {
  id: Scalars['Int'];
};


export type RootQueryVouchersArgs = {
  options?: InputMaybe<VoucherPagingOptions>;
};

export type RootSubscription = {
  __typename?: 'RootSubscription';
  fileUploadProgress?: Maybe<FileUploadProgress>;
};


export type RootSubscriptionFileUploadProgressArgs = {
  requestId: Scalars['String'];
};

export type SaftConflictGql = {
  __typename?: 'SaftConflictGQL';
  /** Accounts data */
  accounts?: Maybe<Scalars['JSON']>;
  /** Client data */
  client?: Maybe<Scalars['JSON']>;
  /** Customers data */
  customers?: Maybe<Scalars['JSON']>;
  /** Departments data */
  departments?: Maybe<Scalars['JSON']>;
  /** From date */
  fromDate?: Maybe<Scalars['GraphQLDate']>;
  /** Id for the proses file */
  id?: Maybe<Scalars['Int']>;
  /** Invoices data */
  invoices?: Maybe<Scalars['JSON']>;
  /** Organizations data */
  organizations?: Maybe<Scalars['JSON']>;
  /** Projects data */
  projects?: Maybe<Scalars['JSON']>;
  /** Suppliers data */
  suppliers?: Maybe<Scalars['JSON']>;
  /** To date */
  toDate?: Maybe<Scalars['GraphQLDate']>;
  /** Transactions data */
  transactions?: Maybe<Scalars['JSON']>;
  /** Users data */
  users?: Maybe<Scalars['JSON']>;
  /** Vouchers data */
  vouchers?: Maybe<Scalars['JSON']>;
  /** warnings */
  warnings?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * Contact person details for the company the data belongs
 *                       to
 */
export type SaftFinancialContact = {
  /** The emails of the contact */
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The first name of the contact */
  firstname: Scalars['String'];
  /** The last name of the contact */
  lastname: Scalars['String'];
  /** The phone objects of the contact */
  phones?: InputMaybe<Array<InputMaybe<PhoneInput>>>;
};

/** Options for exporting SAF-T data */
export type SaftFinancialExportOptions = {
  contact: SaftFinancialContact;
  /** The period start date to fetch data */
  from?: InputMaybe<Scalars['GraphQLDate']>;
  /** The period end date to fetch data */
  to?: InputMaybe<Scalars['GraphQLDate']>;
};

export type SaftGql = {
  __typename?: 'SaftGQL';
  /** Id for the proses file */
  id: Scalars['Int'];
  /** Warnings */
  warnings?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Save saft file */
export type SaveSaftTypeGql = {
  /** Customer data */
  customers?: InputMaybe<Scalars['JSON']>;
  /** Department data */
  departments?: InputMaybe<Scalars['JSON']>;
  /** From date */
  fromDate: Scalars['GraphQLDate'];
  /** Id Saft file */
  id: Scalars['Int'];
  /** Import everything */
  importAccounting: Scalars['Boolean'];
  /** Import customer */
  importCustomer: Scalars['Boolean'];
  /** Import department */
  importDepartment: Scalars['Boolean'];
  /** Import project */
  importProject: Scalars['Boolean'];
  /** Import supplier */
  importSupplier: Scalars['Boolean'];
  /** Project data */
  projects?: InputMaybe<Scalars['JSON']>;
  /** Supplier data */
  suppliers?: InputMaybe<Scalars['JSON']>;
  /** To date */
  toDate: Scalars['GraphQLDate'];
};

/** Global lookup search options */
export type SearchOptions = {
  /** Limit the number of results */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SearchSortDirection>>;
  /** The search string */
  search: Scalars['String'];
};

export enum SearchOrderBy {
  Name = 'name',
  Number = 'number',
  Type = 'type'
}

/** Global lookup search */
export type SearchResult = {
  __typename?: 'SearchResult';
  /** The id of the found object */
  id?: Maybe<Scalars['Int']>;
  /** The name of the found object */
  name?: Maybe<Scalars['String']>;
  /** The number in a series of the found object */
  number?: Maybe<Scalars['String']>;
  /** The type of found object */
  type?: Maybe<SearchResultTypeEnum>;
};

export enum SearchResultTypeEnum {
  /** Account object */
  Account = 'account',
  /** Contact object */
  Contact = 'contact',
  /** Customer object */
  Customer = 'customer',
  /** Invoice object */
  Invoice = 'invoice',
  /** Product object */
  Product = 'product',
  /** Project object */
  Project = 'project',
  /** Supplier object */
  Supplier = 'supplier',
  /** Task object */
  Task = 'task',
  /** User object */
  User = 'user',
  /** Voucher object */
  Voucher = 'voucher'
}

/** How to sort nodes in a query */
export type SearchSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: SearchOrderBy;
};

/** Input fields when signing up for the service */
export type Signup = {
  /** The email of the user */
  email: Scalars['String'];
  /** The first name of the user */
  firstname: Scalars['String'];
  /** The last name of the user */
  lastname: Scalars['String'];
  /** The middle name of the user */
  middlename?: InputMaybe<Scalars['String']>;
  /** The mobile object of the user */
  mobile: PhoneInput;
  /** The password of the user */
  password: Scalars['String'];
  siteLanguage?: InputMaybe<SiteLanguage>;
};

export enum SiteLanguage {
  En = 'en',
  EnUs = 'en_US',
  NbNo = 'nb_NO',
  No = 'no'
}

export type SocialNetworks = {
  __typename?: 'SocialNetworks';
  /** The account/username for the user on Facebook */
  facebook?: Maybe<Scalars['String']>;
  /** The account/username for the user on GitHub */
  github?: Maybe<Scalars['String']>;
  /** The account/username for the user on LinkedIn */
  linkedin?: Maybe<Scalars['String']>;
  /** The account/username for the user on Twitter */
  twitter?: Maybe<Scalars['String']>;
};

export type SocialNetworksInput = {
  /** The account/username for the user on Facebook */
  facebook?: InputMaybe<Scalars['String']>;
  /** The account/username for the user on GitHub */
  github?: InputMaybe<Scalars['String']>;
  /** The account/username for the user on LinkedIn */
  linkedin?: InputMaybe<Scalars['String']>;
  /** The account/username for the user on Twitter */
  twitter?: InputMaybe<Scalars['String']>;
};

export enum SortDirectionEnum {
  Asc = 'asc',
  Desc = 'desc'
}

/** The current balance on the default */
export type StatisticsBalance = {
  __typename?: 'StatisticsBalance';
  /** The balance on the bank account */
  balance?: Maybe<Scalars['Float']>;
  /** The standard invoice bank account for a client */
  bankAccount?: Maybe<BankAccount>;
};

export type StatisticsBankPayment = {
  __typename?: 'StatisticsBankPayment';
  /** Bank payment amount */
  amount?: Maybe<Scalars['Float']>;
  /** Bank payment currency amount */
  currencyAmount?: Maybe<Scalars['Float']>;
  /** Total amount of payments */
  total?: Maybe<Scalars['Int']>;
};

export type StatisticsBankPayments = {
  __typename?: 'StatisticsBankPayments';
  /** Amount that is approved */
  approvedPayments?: Maybe<StatisticsBankPayment>;
  /** Amount that is pending approval */
  pendingPayments?: Maybe<StatisticsBankPayment>;
};

/** A count of something, grouped by date */
export type StatisticsCount = {
  __typename?: 'StatisticsCount';
  data?: Maybe<Array<Maybe<StatisticsCountItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type StatisticsCountItem = {
  __typename?: 'StatisticsCountItem';
  count?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['GraphQLDate']>;
  day?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type StatisticsInvoiceCountItem = {
  __typename?: 'StatisticsInvoiceCountItem';
  cid?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['GraphQLDate']>;
  day?: Maybe<Scalars['Int']>;
  ehf?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  none?: Maybe<Scalars['Int']>;
  post?: Maybe<Scalars['Int']>;
  print?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type StatisticsInvoiceCounts = {
  __typename?: 'StatisticsInvoiceCounts';
  incoming?: Maybe<StatisticsInvoiceCountsDetails>;
  outgoing?: Maybe<StatisticsInvoiceCountsDetails>;
};

/** A count of invoices, grouped by date */
export type StatisticsInvoiceCountsDetails = {
  __typename?: 'StatisticsInvoiceCountsDetails';
  cid?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<StatisticsInvoiceCountItem>>>;
  ehf?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  none?: Maybe<Scalars['Int']>;
  post?: Maybe<Scalars['Int']>;
  print?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** Invoices and amount */
export type StatisticsInvoices = {
  __typename?: 'StatisticsInvoices';
  /** The total number of invoices */
  count?: Maybe<Scalars['Float']>;
  invoices?: Maybe<Array<Maybe<Invoice>>>;
  /** The total amount of all the invoices */
  totalAmount?: Maybe<Scalars['Float']>;
};

/** Options for fetching statistics from the API */
export type StatisticsOptions = {
  /** Optional client id, defaults to the users current client */
  clientId?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<DateQueryFilter>;
};

export type StatisticsVoucherCountItem = {
  __typename?: 'StatisticsVoucherCountItem';
  advanced?: Maybe<Scalars['Int']>;
  customerInvoice?: Maybe<Scalars['Int']>;
  customsDeclaration?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['GraphQLDate']>;
  day?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  supplierInvoice?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  vatReturn?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type StatisticsVoucherCounts = {
  __typename?: 'StatisticsVoucherCounts';
  advanced?: Maybe<Scalars['Int']>;
  customerInvoice?: Maybe<Scalars['Int']>;
  customsDeclaration?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<StatisticsVoucherCountItem>>>;
  date?: Maybe<Scalars['GraphQLDate']>;
  day?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  supplierInvoice?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  vatReturn?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export enum Status {
  Active = 'active',
  Inactive = 'inactive'
}

/** Client storage statistics */
export type StorageStatistics = {
  __typename?: 'StorageStatistics';
  /** Breakdown of the storage use by area */
  details?: Maybe<Array<Maybe<StorageStatisticsContext>>>;
  /** The amount of free storage in bytes */
  free?: Maybe<Scalars['Float']>;
  /** The total amount of storage in bytes */
  total?: Maybe<Scalars['Float']>;
  /** The amount of used storage in bytes */
  used?: Maybe<Scalars['Float']>;
};

/** An area of storage */
export type StorageStatisticsContext = {
  __typename?: 'StorageStatisticsContext';
  /** The storage context */
  context?: Maybe<FileStorageContext>;
  /** The storage used by this context in bytes */
  usage?: Maybe<Scalars['Float']>;
};

/** Options to filter storage statistics */
export type StorageStatisticsOptions = {
  /**
   * Optional client id, for getting data for a specific
   *                     client, only usable by administrators
   */
  clientId?: InputMaybe<Scalars['Int']>;
  /** In which context you are fetching files */
  context?: InputMaybe<FileContext>;
  /**
   * The id of the context you are fetching files for, i.e.
   *                     customer, project, supplier, task, user
   */
  contextId?: InputMaybe<Scalars['Int']>;
  /** The id of the parent folder you want the files to */
  folderId?: InputMaybe<Scalars['Int']>;
};

/** A supplier, users can be a part of multiple suppliers */
export type Supplier = {
  __typename?: 'Supplier';
  /** The user who created this comment */
  accountManager?: Maybe<User>;
  /**
   * Bank account for payments to this supplier
   * @deprecated Move to multiple bankAccounts
   */
  bankAccount?: Maybe<SupplierBankAccount>;
  bankAccounts?: Maybe<Array<Maybe<BankAccountListing>>>;
  /** The contacts on this supplier */
  contacts?: Maybe<Array<Maybe<Contact>>>;
  country?: Maybe<Country>;
  /** The date the supplier was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** Default ledger cost account for supplier invoices */
  defaultCostAccount?: Maybe<Account>;
  /** Default invoice currency code */
  defaultCurrency?: Maybe<CurrencyCode>;
  /** The number of days the supplier have to pay invoices */
  dueDays?: Maybe<Scalars['Int']>;
  /** The email of the supplier */
  email?: Maybe<Scalars['String']>;
  /** The fax object of the supplier */
  fax?: Maybe<Phone>;
  /** When the supplier was started/founded */
  founded?: Maybe<Scalars['String']>;
  /** The homepage of the supplier */
  homepage?: Maybe<Scalars['String']>;
  /** The id of the supplier */
  id?: Maybe<Scalars['Int']>;
  /** The invoices on this supplier */
  invoices?: Maybe<InvoicePaginatedResult>;
  /** The location object of the supplier */
  locationBusiness?: Maybe<Location>;
  /** The location object of the supplier */
  locationPost?: Maybe<Location>;
  /** The logo of the supplier */
  logo?: Maybe<Scalars['String']>;
  /** The mobile phone object of the supplier */
  mobile?: Maybe<Phone>;
  /** The name of the supplier */
  name?: Maybe<Scalars['String']>;
  /** Notes about the supplier, if any */
  notes?: Maybe<Scalars['String']>;
  /** The organization number of the supplier */
  organizationNumber?: Maybe<Scalars['String']>;
  /** The phone object of the supplier */
  phone?: Maybe<Phone>;
  /** The posts on this supplier */
  posts?: Maybe<PostPaginatedResult>;
  /** Suggested ledger cost account for supplier based on history */
  suggestedCostAccounts?: Maybe<Array<Maybe<Account>>>;
  /** The supplier number */
  supplierNumber?: Maybe<Scalars['Int']>;
  /** The tags on this supplier */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** The tasks belonging to this supplier */
  tasks?: Maybe<TaskPaginatedResult>;
  /** The date the supplier was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** If the supplier is registered for Value Added Tax or not */
  vat?: Maybe<Scalars['Boolean']>;
};


/** A supplier, users can be a part of multiple suppliers */
export type SupplierContactsArgs = {
  options?: InputMaybe<ContactOptions>;
};


/** A supplier, users can be a part of multiple suppliers */
export type SupplierInvoicesArgs = {
  options?: InputMaybe<InvoicePagingOptions>;
};


/** A supplier, users can be a part of multiple suppliers */
export type SupplierPostsArgs = {
  options?: InputMaybe<PostPagingOptions>;
};


/** A supplier, users can be a part of multiple suppliers */
export type SupplierTasksArgs = {
  options?: InputMaybe<TaskPagingOptions>;
};

/** A supplier bank account object */
export type SupplierBankAccount = {
  __typename?: 'SupplierBankAccount';
  /** The name of the bank */
  bank?: Maybe<Scalars['String']>;
  /** The bank account number */
  bban?: Maybe<Scalars['String']>;
  /** The bank bic code */
  bic?: Maybe<Scalars['String']>;
  /** The country */
  country?: Maybe<Country>;
  /** The account IBAN number */
  iban?: Maybe<Scalars['String']>;
  /**
   * The bank account number
   * @deprecated Switch to bban
   */
  number?: Maybe<Scalars['String']>;
  /**
   * The bank swift code
   * @deprecated Switch to bic
   */
  swift?: Maybe<Scalars['String']>;
};

/** Supplier input data, for creating a new supplier */
export type SupplierCreateInput = {
  /**
   * The id of the user which is acting as this supplier's
   *                     account manager
   */
  accountManagerId?: InputMaybe<Scalars['Int']>;
  /** A list of bank accounts for payments to this supplier */
  bankAccounts?: InputMaybe<Array<InputMaybe<BankAccountListingInput>>>;
  contacts?: InputMaybe<Array<InputMaybe<ContactCreateInput>>>;
  /** The country code of the supplier */
  countryCode?: InputMaybe<Scalars['String']>;
  /** Default ledger cost account for supplier invoices */
  defaultCostAccount?: InputMaybe<Scalars['Int']>;
  /** Default invoice currency code */
  defaultCurrency?: InputMaybe<CurrencyCode>;
  /** The number of days the supplier have to pay invoices */
  dueDays: Scalars['Int'];
  /** The email of the supplier */
  email?: InputMaybe<Scalars['String']>;
  /** The fax object of the supplier */
  fax?: InputMaybe<PhoneInput>;
  /** When the supplier was started/founded */
  founded?: InputMaybe<Scalars['String']>;
  /** The homepage of the supplier */
  homepage?: InputMaybe<Scalars['String']>;
  /** The location object of the supplier */
  locationBusiness?: InputMaybe<LocationInput>;
  /** The location object of the supplier */
  locationPost?: InputMaybe<LocationInput>;
  /** The logo of the supplier */
  logo?: InputMaybe<Scalars['String']>;
  /** The mobile phone object of the supplier */
  mobile?: InputMaybe<PhoneInput>;
  /** The name of the supplier */
  name: Scalars['String'];
  /** Notes about the supplier, if any */
  notes?: InputMaybe<Scalars['String']>;
  /** The organization number of the supplier */
  organizationNumber?: InputMaybe<Scalars['String']>;
  /** The phone object of the supplier */
  phone?: InputMaybe<PhoneInput>;
  /** The supplier number */
  supplierNumber: Scalars['Int'];
  /** If the supplier is registered for Value Added Tax or not */
  vat?: InputMaybe<Scalars['Boolean']>;
};

/** The supplier ledger during a specific period */
export type SupplierLedgerReport = {
  __typename?: 'SupplierLedgerReport';
  /** The change from incoming to outgoing */
  change?: Maybe<Scalars['Float']>;
  /** The account balance at the start of the period */
  incomingBalance?: Maybe<Scalars['Float']>;
  /** The account balance at the end of the period */
  outgoingBalance?: Maybe<Scalars['Float']>;
  supplier?: Maybe<Supplier>;
  /** All the transactions in this calculation */
  transactions?: Maybe<Array<Maybe<AccountTransaction>>>;
};

/** Query options for supplier ledger reports */
export type SupplierLedgerReportOptions = {
  /** Limit results to include exact amount in voucher transactions */
  amount?: InputMaybe<Scalars['Float']>;
  /** Limit results to include transaction amounts in this range */
  amountRange?: InputMaybe<Range>;
  /**
   * Optional client id, for getting reports for a specific
   *                   client, only usable by administrators
   */
  clientId?: InputMaybe<Scalars['Int']>;
  /** To include / exclude corrections, defaults to true (include). */
  corrections?: InputMaybe<Scalars['Boolean']>;
  /** Optional department id to filter accounting data */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** The period start date to fetch account data */
  from?: InputMaybe<Scalars['GraphQLDate']>;
  /** To only show open posts (on customers / suppliers) */
  openPostings?: InputMaybe<Scalars['Boolean']>;
  /** Optional project id to filter accounting data */
  projectId?: InputMaybe<Scalars['Int']>;
  /**
   * Optional list of supplier ids, if present, only results
   *                     with these ids will be included
   */
  suppliers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The period end date to fetch account data */
  to?: InputMaybe<Scalars['GraphQLDate']>;
};

export enum SupplierOrderByType {
  Created = 'created',
  Id = 'id',
  Name = 'name',
  SupplierNumber = 'supplierNumber'
}

export type SupplierPaginatedResult = {
  __typename?: 'SupplierPaginatedResult';
  data?: Maybe<Array<Maybe<Supplier>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type SupplierPagingOptions = {
  /** Only show results for a specific account manager */
  accountManager?: InputMaybe<Scalars['Int']>;
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SupplierSortDirection>>;
  /** A string you want to search suppliers for */
  search?: InputMaybe<Scalars['String']>;
};

/** How to sort nodes in a query */
export type SupplierSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: SupplierOrderByType;
};

/** Supplier input data, for updating a supplier */
export type SupplierUpdateInput = {
  /**
   * The id of the user which is acting as this supplier's
   *                     account manager
   */
  accountManagerId?: InputMaybe<Scalars['Int']>;
  /** The country code of the supplier */
  countryCode?: InputMaybe<Scalars['String']>;
  /** Default ledger cost account for supplier invoices */
  defaultCostAccount?: InputMaybe<Scalars['Int']>;
  /** Default invoice currency code */
  defaultCurrency?: InputMaybe<CurrencyCode>;
  /** The number of days the supplier have to pay invoices */
  dueDays?: InputMaybe<Scalars['Int']>;
  /** The email of the supplier */
  email?: InputMaybe<Scalars['String']>;
  /** The fax object of the supplier */
  fax?: InputMaybe<PhoneInput>;
  /** When the supplier was started/founded */
  founded?: InputMaybe<Scalars['String']>;
  /** The homepage of the supplier */
  homepage?: InputMaybe<Scalars['String']>;
  /** The id of the supplier */
  id: Scalars['Int'];
  /** The location object of the supplier */
  locationBusiness?: InputMaybe<LocationInput>;
  /** The location object of the supplier */
  locationPost?: InputMaybe<LocationInput>;
  /** The logo of the supplier */
  logo?: InputMaybe<Scalars['String']>;
  /** The mobile phone object of the supplier */
  mobile?: InputMaybe<PhoneInput>;
  /** The name of the supplier */
  name?: InputMaybe<Scalars['String']>;
  /** Notes about the supplier, if any */
  notes?: InputMaybe<Scalars['String']>;
  /** The organization number of the supplier */
  organizationNumber?: InputMaybe<Scalars['String']>;
  /** The phone object of the supplier */
  phone?: InputMaybe<PhoneInput>;
  /** The supplier number */
  supplierNumber?: InputMaybe<Scalars['Int']>;
  /** If the supplier is registered for Value Added Tax or not */
  vat?: InputMaybe<Scalars['Boolean']>;
};

/** Different statistics about the system */
export type SystemStatistics = {
  __typename?: 'SystemStatistics';
  invoices?: Maybe<StatisticsInvoiceCounts>;
  /** Total clients of the whole system, only counts active clients */
  totalClients?: Maybe<StatisticsCount>;
  /** Total users of the whole system, only counts active users */
  totalUsers?: Maybe<StatisticsCount>;
  vouchers?: Maybe<StatisticsVoucherCounts>;
};

/** A tag */
export type Tag = {
  __typename?: 'Tag';
  /** The different contexts where the tag can be used */
  allowedContexts?: Maybe<Array<Maybe<TagContext>>>;
  /** The color of the tag */
  color: Scalars['String'];
  /** The date time this tag was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The user who created this tag */
  createdBy?: Maybe<User>;
  /** The id of the tag */
  id?: Maybe<Scalars['Int']>;
  /** The name of the tag */
  name?: Maybe<Scalars['String']>;
};

export enum TagContext {
  /** Contact object that can have tags */
  Contact = 'contact',
  /** Customer object that can have tags */
  Customer = 'customer',
  /** File object that can have tags */
  File = 'file',
  /** Folder object that can have tags */
  Folder = 'folder',
  /** Invoice object that can have tags */
  Invoice = 'invoice',
  /** Product object that can have tags */
  Product = 'product',
  /** Project object that can have tags */
  Project = 'project',
  /** Supplier object that can have tags */
  Supplier = 'supplier',
  /** Task object that can have tags */
  Task = 'task',
  /** Timesheet object that can have tags */
  Timesheet = 'timesheet',
  /** Transaction object that can have tags */
  Transaction = 'transaction',
  /** User object that can have tags */
  User = 'user',
  /** Voucher object that can have tags */
  Voucher = 'voucher'
}

/** Tag input data, for linking or unlinking a tag */
export type TagContextInput = {
  /** The context of that to link the tag */
  context: TagContext;
  /** The id of the context object */
  contextId: Scalars['Int'];
  /** The id of the tag */
  tagId: Scalars['Int'];
};

/** Tag input data, for creating a new tag */
export type TagCreateInput = {
  /** The different contexts where the tag can be used */
  allowedContexts?: InputMaybe<Array<InputMaybe<TagContext>>>;
  /** The color of the tag */
  color: Scalars['String'];
  /** The name of the tag */
  name: Scalars['String'];
};

export enum TagOrderBy {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Id = 'id',
  Name = 'name'
}

export type TagPaginatedResult = {
  __typename?: 'TagPaginatedResult';
  data?: Maybe<Array<Maybe<Tag>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type TagPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** Filter on the different contexts where the tag can be used */
  allowedContexts?: InputMaybe<Array<InputMaybe<TagContext>>>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** In which context you are fetching tags */
  context?: InputMaybe<TagContext>;
  /**
   * The id of the context you are fetching tags for, i.e.
   *                     customer, project, supplier
   */
  contextId?: InputMaybe<Scalars['Int']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TagSortDirection>>;
  /** A string you want to search tags for */
  search?: InputMaybe<Scalars['String']>;
};

/** How to sort nodes in a query */
export type TagSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: TagOrderBy;
};

/** Tag input data, for updating a tag */
export type TagUpdateInput = {
  /** The different contexts where the tag can be used */
  allowedContexts?: InputMaybe<Array<InputMaybe<TagContext>>>;
  /** The color of the tag */
  color?: InputMaybe<Scalars['String']>;
  /** The id of the tag */
  id: Scalars['Int'];
  /** The name of the tag */
  name?: InputMaybe<Scalars['String']>;
};

/** A task */
export type Task = {
  __typename?: 'Task';
  /** The user which the task is assigned to */
  assignee?: Maybe<User>;
  /** When the task was completed */
  completed?: Maybe<Scalars['GraphQLDateTime']>;
  /** The context the task is stored in */
  context?: Maybe<TaskContext>;
  /** The id of the context the task is stored in, (projectId, customerId, supplierId) */
  contextId?: Maybe<Scalars['Int']>;
  /** The user who created this task */
  createdBy?: Maybe<User>;
  /** The customer if stored in a customer context */
  customer?: Maybe<Customer>;
  /** The description of the task */
  description?: Maybe<Scalars['String']>;
  /** When the task is due */
  dueDate?: Maybe<Scalars['GraphQLDateTime']>;
  /** The estimate of the task */
  estimate?: Maybe<Scalars['Float']>;
  /** The id of the task */
  id?: Maybe<Scalars['Int']>;
  /** The name of the task */
  name?: Maybe<Scalars['String']>;
  /** The list order string */
  order?: Maybe<Scalars['String']>;
  /** The parent of this task, if any */
  parent?: Maybe<Task>;
  /** The project if stored in a project context */
  project?: Maybe<Project>;
  /** When the task is starting */
  startDate?: Maybe<Scalars['GraphQLDateTime']>;
  /** A list of subtasks belonging to this task, if any */
  subtasks?: Maybe<TaskPaginatedResult>;
  /** The supplier if stored in a supplier context */
  supplier?: Maybe<Supplier>;
  /** The tags on this task */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** The task list in a project board that the task is in */
  taskList?: Maybe<TaskList>;
};


/** A task */
export type TaskSubtasksArgs = {
  options?: InputMaybe<TaskPagingOptions>;
};

export enum TaskContext {
  Customer = 'customer',
  Project = 'project',
  Supplier = 'supplier'
}

/** Task input data, for creating a new task */
export type TaskCreateInput = {
  /** The id of the user the task should be assigned to */
  assignee?: InputMaybe<Scalars['Int']>;
  /** When the task was completed */
  completed?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** In what context you are creating the task */
  context: TaskContext;
  /** The id of the context you are creating this task for, (projectId, customerId, supplierId) */
  contextId: Scalars['Int'];
  /** The description of the task */
  description?: InputMaybe<Scalars['String']>;
  /** When the task is due */
  dueDate?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** The estimate of the task */
  estimate?: InputMaybe<Scalars['Float']>;
  /** The name of the task */
  name: Scalars['String'];
  /** The list order string */
  order?: InputMaybe<Scalars['String']>;
  /** The id of the parent task, if any */
  parent?: InputMaybe<Scalars['Int']>;
  /** When the task is starting */
  startDate?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** The ids of the tags on this task */
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The id of the list the task should be in, if any */
  taskListId?: InputMaybe<Scalars['Int']>;
};

/** A task list */
export type TaskList = {
  __typename?: 'TaskList';
  /** When the list was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The id of the task */
  id?: Maybe<Scalars['Int']>;
  /** The name of the task list */
  name?: Maybe<Scalars['String']>;
  /** The order of the list */
  order?: Maybe<Scalars['Int']>;
  /** The tasks belonging to this list */
  tasks?: Maybe<TaskPaginatedResult>;
  /** When the list was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
};


/** A task list */
export type TaskListTasksArgs = {
  taskOptions?: InputMaybe<TaskPagingOptions>;
};

/** Task list input data, for creating a new list */
export type TaskListCreateInput = {
  /** The name of the task list */
  name: Scalars['String'];
  /** The order of the list */
  order?: InputMaybe<Scalars['Int']>;
  /** The id of the project where this list belongs */
  projectId: Scalars['Int'];
};

/** Task list input data, for updating a list */
export type TaskListUpdateInput = {
  /** The id of the list */
  id: Scalars['Int'];
  /** The name of the task list */
  name?: InputMaybe<Scalars['String']>;
  /** The order of the list */
  order?: InputMaybe<Scalars['Int']>;
};

export enum TaskOrderBy {
  Assignee = 'assignee',
  Completed = 'completed',
  Created = 'created',
  DueDate = 'dueDate',
  Id = 'id',
  Name = 'name'
}

export type TaskPaginatedResult = {
  __typename?: 'TaskPaginatedResult';
  data?: Maybe<Array<Maybe<Task>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type TaskPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** Get tasks assigned to a specific user id */
  assignee?: InputMaybe<Scalars['Int']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** Get tasks completed since date */
  completed?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** In which context you are fetching tasks */
  context?: InputMaybe<TaskContext>;
  /**
   * The id of the context you are fetching tasks for, i.e.
   *                     customer, project, supplier
   */
  contextId?: InputMaybe<Scalars['Int']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TaskSortDirection>>;
  /** Get subtasks of a parent task */
  parent?: InputMaybe<Scalars['Int']>;
  /** A string you want to search tasks for */
  search?: InputMaybe<Scalars['String']>;
  /** Get tasks filtered by status */
  status?: InputMaybe<TaskStatus>;
  /** Get tasks in a specific task list */
  taskListId?: InputMaybe<Scalars['Int']>;
  /** Get tasks that are unassigned */
  unassigned?: InputMaybe<Scalars['Boolean']>;
};

/** How to sort nodes in a query */
export type TaskSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: TaskOrderBy;
};

export enum TaskStatus {
  Completed = 'completed',
  Incomplete = 'incomplete'
}

/** Task input data, for cupdating a task */
export type TaskUpdateInput = {
  /** The id of the user the task should be assigned to */
  assignee?: InputMaybe<Scalars['Int']>;
  /** When the task was completed */
  completed?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** In what context you are creating the task */
  context?: InputMaybe<TaskContext>;
  /** The id of the context you are creating this task for, (projectId, customerId, supplierId) */
  contextId?: InputMaybe<Scalars['Int']>;
  /** The description of the task */
  description?: InputMaybe<Scalars['String']>;
  /** When the task is due */
  dueDate?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** The estimate of the task */
  estimate?: InputMaybe<Scalars['Float']>;
  /** The id of the task */
  id: Scalars['Int'];
  /** The name of the task */
  name?: InputMaybe<Scalars['String']>;
  /** The list order string */
  order?: InputMaybe<Scalars['String']>;
  /** The id of the parent task, if any */
  parent?: InputMaybe<Scalars['Int']>;
  /** When the task is starting */
  startDate?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** The ids of the tags on this task */
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** The id of the list the task should be in, if any */
  taskListId?: InputMaybe<Scalars['Int']>;
};

/** A timesheet entry is used for projects and user time tracking. */
export type Timesheet = {
  __typename?: 'Timesheet';
  /** If the time was billable or not */
  billable?: Maybe<Scalars['Boolean']>;
  /** The amount of hours billable */
  billableHours?: Maybe<Scalars['Float']>;
  /** The date the timesheet was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The customer this timesheet entry was registered on */
  customer?: Maybe<Customer>;
  /** The description of the timesheet entry */
  description?: Maybe<Scalars['String']>;
  /** The date of the timesheet entry */
  entryDate?: Maybe<Scalars['GraphQLDate']>;
  /** The amount of hours worked */
  hours?: Maybe<Scalars['Float']>;
  /** The id of the timesheet entry */
  id?: Maybe<Scalars['Int']>;
  /** The internal notes of the timesheet entry */
  notes?: Maybe<Scalars['String']>;
  /** The product this timesheet entry was registered on */
  product?: Maybe<Product>;
  /** The project this timesheet entry was registered on */
  project?: Maybe<Project>;
  /** The status of the timesheet entry */
  status?: Maybe<TimesheetStatus>;
  /** The tags on this timesheet entry */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** The start dateTime of time tracking */
  timeStart?: Maybe<Scalars['GraphQLDateTime']>;
  /** The stop dateTime of time tracking */
  timeStop?: Maybe<Scalars['GraphQLDateTime']>;
  /** The date the timesheet was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The user this timesheet entry was registered on */
  user?: Maybe<User>;
};

/** Timesheet input data, for creating a new timesheet entry */
export type TimesheetCreateInput = {
  /** If the time was billable or not */
  billable?: InputMaybe<Scalars['Boolean']>;
  /** The amount of hours billable */
  billableHours?: InputMaybe<Scalars['Float']>;
  /** The customer the timesheet entry should by registered at */
  customerId?: InputMaybe<Scalars['Int']>;
  /** The description of the timesheet entry */
  description?: InputMaybe<Scalars['String']>;
  /** The date the entry belongs to */
  entryDate: Scalars['GraphQLDate'];
  /** The amount of hours worked */
  hours: Scalars['Float'];
  /** The internal notes of the timesheet entry */
  notes?: InputMaybe<Scalars['String']>;
  /** The product the timesheet entry should by registered at */
  productId?: InputMaybe<Scalars['Int']>;
  /** The project the timesheet entry should by registered at */
  projectId?: InputMaybe<Scalars['Int']>;
  /** The status of the timesheet entry */
  status?: InputMaybe<TimesheetStatus>;
  /** The start dateTime of time tracking */
  timeStart?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** The stop dateTime of time tracking */
  timeStop?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** The user the timesheet entry should by registered at (selects current user by default) */
  userId?: InputMaybe<Scalars['Int']>;
};

export enum TimesheetOrderBy {
  Billable = 'billable',
  CreatedAt = 'createdAt',
  EntryDate = 'entryDate',
  Id = 'id',
  Status = 'status'
}

export type TimesheetPaginatedResult = {
  __typename?: 'TimesheetPaginatedResult';
  data?: Maybe<Array<Maybe<Timesheet>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type TimesheetPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** Filter on timesheet entries that are billable or not */
  billable?: InputMaybe<Scalars['Boolean']>;
  /** Filter on timesheet entries with a specific customer */
  customerId?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<DateQueryFilter>;
  /** Filter on timesheet entries with a specific entry date */
  entryDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TimesheetSortDirection>>;
  /** Filter on timesheet entries with a specific product */
  productId?: InputMaybe<Scalars['Int']>;
  /** Filter on timesheet entries with a specific project */
  projectId?: InputMaybe<Scalars['Int']>;
  /** A string you want to search timesheet for */
  search?: InputMaybe<Scalars['String']>;
  /** Filter on timesheet entries with a specific status */
  status?: InputMaybe<TimesheetStatus>;
  /** Filter on timesheet entries with a specific user */
  userId?: InputMaybe<Scalars['Int']>;
};

/** How to sort nodes in a query */
export type TimesheetSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: TimesheetOrderBy;
};

/** Timesheet input data, for starting a new timesheet timer */
export type TimesheetStartTimerInputType = {
  /** If the time was billable or not */
  billable?: InputMaybe<Scalars['Boolean']>;
  /** The customer the timesheet entry should by registered at */
  customerId?: InputMaybe<Scalars['Int']>;
  /** The description of the timesheet entry */
  description?: InputMaybe<Scalars['String']>;
  /** The date the entry belongs to */
  entryDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The internal notes of the timesheet entry */
  notes?: InputMaybe<Scalars['String']>;
  /** The product the timesheet entry should by registered at */
  productId?: InputMaybe<Scalars['Int']>;
  /** The project the timesheet entry should by registered at */
  projectId?: InputMaybe<Scalars['Int']>;
  /** The start dateTime of time tracking */
  timeStart?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** The user the timesheet entry should by registered at (selects current user by default) */
  userId?: InputMaybe<Scalars['Int']>;
};

export type TimesheetStats = {
  __typename?: 'TimesheetStats';
  billableHours?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['GraphQLDate']>;
  hours?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TimesheetStatsOptions = {
  /** Filter on timesheet entries that are billable or not */
  billable?: InputMaybe<Scalars['Boolean']>;
  /** Filter on timesheet entries with a specific customer */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Filter timesheet entries to after a date */
  fromDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** Filter on timesheet entries with a specific product */
  productId?: InputMaybe<Scalars['Int']>;
  /** Filter on timesheet entries with a specific project */
  projectId?: InputMaybe<Scalars['Int']>;
  /** Filter on timesheet entries with a specific status */
  status?: InputMaybe<TimesheetStatus>;
  /** Filter timesheet entries to before a date */
  toDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** Filter on timesheet entries with a specific user */
  userId?: InputMaybe<Scalars['Int']>;
};

export enum TimesheetStatus {
  Approved = 'approved',
  Counting = 'counting',
  Open = 'open',
  Rejected = 'rejected'
}

/** Timesheet input data, for stopping a timesheet timer */
export type TimesheetStopTimerInputType = {
  /** If the time was billable or not */
  billable?: InputMaybe<Scalars['Boolean']>;
  /** The amount of hours billable */
  billableHours?: InputMaybe<Scalars['Float']>;
  /** The customer the timesheet entry should by registered at */
  customerId?: InputMaybe<Scalars['Int']>;
  /** The description of the timesheet entry */
  description?: InputMaybe<Scalars['String']>;
  /** The date the entry belongs to */
  entryDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The id of the timesheet */
  id: Scalars['Int'];
  /** The internal notes of the timesheet entry */
  notes?: InputMaybe<Scalars['String']>;
  /** The product the timesheet entry should by registered at */
  productId?: InputMaybe<Scalars['Int']>;
  /** The project the timesheet entry should by registered at */
  projectId?: InputMaybe<Scalars['Int']>;
  /** The start dateTime of time tracking */
  timeStart?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** The stop dateTime of time tracking */
  timeStop?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** The user the timesheet entry should by registered at (selects current user by default) */
  userId?: InputMaybe<Scalars['Int']>;
};

/** Timesheet input data, for updating a timesheet */
export type TimesheetUpdateInput = {
  /** If the time was billable or not */
  billable?: InputMaybe<Scalars['Boolean']>;
  /** The amount of hours billable */
  billableHours?: InputMaybe<Scalars['Float']>;
  /** The customer the timesheet entry should by registered at */
  customerId?: InputMaybe<Scalars['Int']>;
  /** The description of the timesheet entry */
  description?: InputMaybe<Scalars['String']>;
  /** The date the entry belongs to */
  entryDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The amount of hours worked */
  hours?: InputMaybe<Scalars['Float']>;
  /** The id of the timesheet */
  id: Scalars['Int'];
  /** The internal notes of the timesheet entry */
  notes?: InputMaybe<Scalars['String']>;
  /** The product the timesheet entry should by registered at */
  productId?: InputMaybe<Scalars['Int']>;
  /** The project the timesheet entry should by registered at */
  projectId?: InputMaybe<Scalars['Int']>;
  /** The status of the timesheet entry */
  status?: InputMaybe<TimesheetStatus>;
  /** The start dateTime of time tracking */
  timeStart?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** The stop dateTime of time tracking */
  timeStop?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** The user the timesheet entry should by registered at */
  userId?: InputMaybe<Scalars['Int']>;
};

/** A timezone object */
export type Timezone = {
  __typename?: 'Timezone';
  /** The abbreviation for this timezone */
  abbr?: Maybe<Scalars['String']>;
  /** Details describing the timezone */
  details?: Maybe<Scalars['String']>;
  /** Daylight savings time or not */
  dst?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the timezone */
  id?: Maybe<Scalars['Int']>;
  /** The name of the timezone */
  name?: Maybe<Scalars['String']>;
  /** UTC offset */
  offset?: Maybe<Scalars['Int']>;
};

/** Get a JWT access token */
export type Token = {
  __typename?: 'Token';
  /** When the token expires */
  expires: Scalars['Float'];
  /** A JWT access token used to authenticate other requests */
  token: Scalars['String'];
};

/** A transaction object */
export type Transaction = {
  __typename?: 'Transaction';
  /** If this transaction has been reversed/corrected */
  correction?: Maybe<Scalars['Boolean']>;
  /** The transaction description */
  description?: Maybe<Scalars['String']>;
  /** The id of this transaction */
  id?: Maybe<Scalars['Int']>;
  /** The lines on this transaction */
  lines?: Maybe<Array<Maybe<TransactionLine>>>;
  /** If this transaction is locked (in a VAT Return period) */
  locked?: Maybe<Scalars['Boolean']>;
  /** If this transaction is is of type payment */
  payment?: Maybe<Scalars['Boolean']>;
  /** The transaction period (month) */
  period?: Maybe<Scalars['Int']>;
  /** The transaction period (year) */
  periodYear?: Maybe<Scalars['Int']>;
  /** The transaction date */
  transactionDate?: Maybe<Scalars['GraphQLDate']>;
};

/** Transaction account */
export type TransactionAccount = {
  __typename?: 'TransactionAccount';
  /** The account for this transaction */
  account?: Maybe<Scalars['Int']>;
  /** If true, the VAT code is custom */
  customVatCode?: Maybe<Scalars['Boolean']>;
  /** The VAT code for this transaction */
  vatCode?: Maybe<Scalars['Int']>;
};

/** Transaction account */
export type TransactionAccountAdvanced = {
  __typename?: 'TransactionAccountAdvanced';
  /** The account for this transaction */
  account?: Maybe<Scalars['Int']>;
  /** If true, the VAT code is custom */
  customVatCode?: Maybe<Scalars['Boolean']>;
  /** Advanced vouchers can have customer ids */
  customerId?: Maybe<Scalars['Int']>;
  /** Advanced vouchers can have supplier ids */
  supplierId?: Maybe<Scalars['Int']>;
  /** The VAT code for this transaction */
  vatCode?: Maybe<Scalars['Int']>;
};

/** Transaction account input data for advanced vouchers */
export type TransactionAccountAdvancedInput = {
  /** The account for this transaction */
  account: Scalars['Int'];
  customVatCode?: InputMaybe<Scalars['Boolean']>;
  /** Customer id for this account, cannot be empty if account is 1500 */
  customerId?: InputMaybe<Scalars['Int']>;
  /** Supplier id for this account, cannot be empty if account is 2400 */
  supplierId?: InputMaybe<Scalars['Int']>;
  /** The VAT code for this transaction */
  vatCode: Scalars['Int'];
};

/** Transaction account input data for customs declarations */
export type TransactionAccountCustomsDeclarationInput = {
  /** The account for this transaction */
  account?: InputMaybe<Scalars['Int']>;
  /** The VAT code for this transaction */
  vatCode: Scalars['Int'];
};

/** Transaction account input data */
export type TransactionAccountInput = {
  /** The account for this transaction */
  account?: InputMaybe<Scalars['Int']>;
  /** The VAT code for this transaction */
  vatCode?: InputMaybe<Scalars['Int']>;
};

/** Transaction account input data */
export type TransactionAccountInputPost = {
  /** The account for this transaction */
  account: Scalars['Int'];
  /** If true, the vatCode is a custom vat code */
  customVatCode?: InputMaybe<Scalars['Boolean']>;
  /** The VAT code for this transaction */
  vatCode: Scalars['Int'];
};

/** Transaction amount data, for partial amounts in accounting */
export type TransactionAmount = {
  __typename?: 'TransactionAmount';
  account?: Maybe<TransactionAccount>;
  accrual?: Maybe<Accrual>;
  amount?: Maybe<Amount>;
  credit?: Maybe<TransactionAccountAdvanced>;
  debit?: Maybe<TransactionAccountAdvanced>;
  departmentId?: Maybe<Scalars['Int']>;
  /** A description for this transaction */
  description?: Maybe<Scalars['String']>;
  invoiceId?: Maybe<Scalars['Int']>;
  paymentSettingId?: Maybe<Scalars['Int']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  /** Dates for advancer voucher amounts */
  transactionDate?: Maybe<Scalars['GraphQLDate']>;
};

/**
 * Transaction amount input data, for partial amounts in
 *                 accounting, used when creating a transaction
 */
export type TransactionAmountAdvancedInput = {
  amount: AmountInput;
  credit?: InputMaybe<TransactionAccountAdvancedInput>;
  debit?: InputMaybe<TransactionAccountAdvancedInput>;
  /** Optional departmentId */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** A description for this transaction */
  description: Scalars['String'];
  /** Optional invoice id */
  invoiceId?: InputMaybe<Scalars['Int']>;
  /** Optional projectId */
  projectId?: InputMaybe<Scalars['Int']>;
  /** The date for this transaction */
  transactionDate?: InputMaybe<Scalars['GraphQLDate']>;
};

/**
 * Transaction amount input data, for partial amounts in
 *                 accounting, used when creating a transaction
 */
export type TransactionAmountBankStatementInput = {
  amount: AmountInput;
  /** The payment setting id for transaction (Gives account, description and type) */
  paymentSettingId: Scalars['Int'];
  /** The date for this transaction */
  transactionDate: Scalars['GraphQLDate'];
};

/**
 * Transaction amount input data, for partial amounts in
 *                 accounting, used when creating a transaction (income)
 */
export type TransactionAmountCustomerInvoiceInput = {
  account?: InputMaybe<TransactionAccountInput>;
  amount: AmountInput;
  /** Optional departmentId */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** A description for this transaction */
  description?: InputMaybe<Scalars['String']>;
  /** Optional productId */
  productId?: InputMaybe<Scalars['Int']>;
  /** Optional projectId */
  projectId?: InputMaybe<Scalars['Int']>;
};

/**
 * Transaction amount input data, for partial amounts in
 *                 accounting, used when creating a transaction (income)
 */
export type TransactionAmountCustomerInvoiceInputPost = {
  account: TransactionAccountInputPost;
  amount: AmountInput;
  /** Optional departmentId */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** A description for this transaction */
  description: Scalars['String'];
  /** Optional productId */
  productId?: InputMaybe<Scalars['Int']>;
  /** Optional projectId */
  projectId?: InputMaybe<Scalars['Int']>;
};

/**
 * Transaction amount input data, for partial amounts in
 *                 accounting, used when creating transactions on a customs
 *                 declaration
 */
export type TransactionAmountCustomsDeclarationInput = {
  account: TransactionAccountCustomsDeclarationInput;
  amount: AmountInputCustomsDeclaration;
  /** A description for this transaction */
  description?: InputMaybe<Scalars['String']>;
};

/**
 * Transaction amount input data, for partial amounts in
 *                 accounting, used when creating a transaction
 */
export type TransactionAmountSupplierInvoiceInput = {
  account?: InputMaybe<TransactionAccountInput>;
  accrual?: InputMaybe<AccrualInput>;
  amount: AmountInput;
  /** Optional departmentId */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** A description for this transaction */
  description?: InputMaybe<Scalars['String']>;
  /** Optional projectId */
  projectId?: InputMaybe<Scalars['Int']>;
};

/**
 * Transaction amount input data, for partial amounts in
 *                 accounting, used when creating a transaction
 */
export type TransactionAmountSupplierInvoiceInputPost = {
  account: TransactionAccountInputPost;
  accrual?: InputMaybe<AccrualInput>;
  amount: AmountInput;
  /** Optional departmentId */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** A description for this transaction */
  description: Scalars['String'];
  /** Optional projectId */
  projectId?: InputMaybe<Scalars['Int']>;
};

/** A transaction line in a journal/transaction, for accounting */
export type TransactionLine = {
  __typename?: 'TransactionLine';
  /** The account for this line */
  account: Scalars['Int'];
  amount?: Maybe<Amount>;
  /** Whether this line has a custom VAT code */
  customVatCode?: Maybe<Scalars['Boolean']>;
  customer?: Maybe<Customer>;
  description?: Maybe<Scalars['String']>;
  /** The transaction line id */
  id: Scalars['Int'];
  supplier?: Maybe<Supplier>;
  /** The system entry time for this line */
  systemEntryTime?: Maybe<Scalars['String']>;
  type?: Maybe<AccountType>;
  /** The VAT code for this line */
  vatCode?: Maybe<Scalars['Int']>;
  /** The VAT percent for this line */
  vatPercent?: Maybe<Scalars['Float']>;
};

/** A transaction lock object */
export type TransactionLock = {
  __typename?: 'TransactionLock';
  /** The timestamp when the lock was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The id of this transaction lock */
  id?: Maybe<Scalars['Int']>;
  /** The transactions in this transaction lock */
  transactions?: Maybe<Array<Maybe<AccountTransaction>>>;
  /** The user that created the transaction lock */
  user?: Maybe<User>;
  /** The user id of the user creating the lock */
  userId?: Maybe<Scalars['Int']>;
};

/** Options for fetching transaction locks */
export type TransactionLockOptions = {
  /** Find transaction locks connected to specific transaction lines */
  transactionLineIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Filter results on a specific user */
  userId?: InputMaybe<Scalars['Int']>;
};

export enum TransactionOrderBy {
  Id = 'id',
  SystemEntryDate = 'systemEntryDate',
  TransactionDate = 'transactionDate'
}

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type TransactionPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** Option to hide/show corrections, defaults to true */
  corrections?: InputMaybe<Scalars['Boolean']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TransactionSortDirection>>;
};

/** How to sort nodes in a query */
export type TransactionSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: TransactionOrderBy;
};

export enum UnitCode {
  /** year */
  Ann = 'ANN',
  /** bunt */
  Be = 'BE',
  /** pose */
  Bg = 'BG',
  /** flaske */
  Bo = 'BO',
  /** eske */
  Bx = 'BX',
  /** time */
  Hur = 'HUR',
  /** kg */
  Kgt = 'KGT',
  /** km */
  Kmt = 'KMT',
  /** liter */
  Ltr = 'LTR',
  /** month */
  Mon = 'MON',
  /** m2 */
  Mtk = 'MTK',
  /** m3 */
  Mtq = 'MTQ',
  /** meter */
  Mtr = 'MTR',
  /** items */
  Nar = 'NAR',
  /** pakke */
  Nmp = 'NMP',
  /** rull */
  Nrl = 'NRL',
  /** pall */
  Pf = 'PF',
  /** brett */
  Pu = 'PU',
  /** sekk */
  Sa = 'SA',
  /** tonn */
  Tne = 'TNE',
  /** week */
  Wee = 'WEE'
}

/** A user of the application */
export type User = {
  __typename?: 'User';
  /** Some text describing the user */
  about?: Maybe<Scalars['String']>;
  /** If the user is active or not */
  active?: Maybe<Scalars['Boolean']>;
  bankAccounts?: Maybe<Array<Maybe<BankAccountListing>>>;
  /** The birthday of the user */
  birthday?: Maybe<Scalars['GraphQLDate']>;
  /** The country code of the user */
  countryCode?: Maybe<Scalars['String']>;
  /** The user cover photo */
  cover?: Maybe<File>;
  /** The date the user was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  dashboardLayout?: Maybe<Scalars['JSON']>;
  /**
   * A setting to store the user's pereference to show/hide
   *                   corrections, defaults to false
   */
  displayCorrections?: Maybe<Scalars['Boolean']>;
  /** The user education */
  education?: Maybe<Array<Maybe<UserEducation>>>;
  /** The email of the user */
  email?: Maybe<Scalars['String']>;
  /** If the user has confirmed the email or not */
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  /** The user experience */
  experience?: Maybe<Array<Maybe<UserExperience>>>;
  /** The first name of the user */
  firstname?: Maybe<Scalars['String']>;
  /** The id of the user */
  id?: Maybe<Scalars['Int']>;
  invitations?: Maybe<Invitations>;
  /** The last name of the user */
  lastname?: Maybe<Scalars['String']>;
  /** The location object of the customer */
  location?: Maybe<Location>;
  /** The name of the user's Microsoft email/account */
  microsoft?: Maybe<Scalars['String']>;
  /** The middle name of the user */
  middlename?: Maybe<Scalars['String']>;
  /** The mobile object of the user */
  mobile?: Maybe<Phone>;
  /** The full name of the user */
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<UserNotifications>;
  /** The user picture */
  picture?: Maybe<File>;
  siteLanguage?: Maybe<SiteLanguage>;
  /** The name of the user's Skype account */
  skype?: Maybe<Scalars['String']>;
  social?: Maybe<SocialNetworks>;
  timezone?: Maybe<Timezone>;
  /** If the user has accepted the TOS or not */
  tosAccepted?: Maybe<Scalars['Boolean']>;
  /** The type of the user */
  type?: Maybe<UserType>;
  /** The date the user was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The username of the user */
  username?: Maybe<Scalars['String']>;
};

/** User payload definition */
export type UserCreateInput = {
  /** Some text describing the user */
  about?: InputMaybe<Scalars['String']>;
  /** The birthday of the user */
  birthday?: InputMaybe<Scalars['GraphQLDate']>;
  /** The country code of the user */
  countryCode?: InputMaybe<Scalars['String']>;
  dashboardLayout?: InputMaybe<Scalars['JSON']>;
  /**
   * A setting to store the user's pereference to show/hide
   *                     corrections
   */
  displayCorrections?: InputMaybe<Scalars['Boolean']>;
  /** The email of the user */
  email: Scalars['String'];
  /** The first name of the user */
  firstname: Scalars['String'];
  /** The last name of the user */
  lastname: Scalars['String'];
  /** The location object of the customer */
  location?: InputMaybe<LocationInput>;
  /** The name of the user's Microsoft email/account */
  microsoft?: InputMaybe<Scalars['String']>;
  /** The middle name of the user */
  middlename?: InputMaybe<Scalars['String']>;
  /** The mobile object of the user */
  mobile?: InputMaybe<PhoneInput>;
  /** The full name of the user */
  name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<UserNotificationsInput>;
  /** The password of the user */
  password: Scalars['String'];
  siteLanguage?: InputMaybe<SiteLanguage>;
  /** The name of the user's Skype account */
  skype?: InputMaybe<Scalars['String']>;
  social?: InputMaybe<SocialNetworksInput>;
  /** The id of the timezone for this user */
  timezoneId?: InputMaybe<Scalars['Int']>;
  /** The type of the user */
  type: UserType;
  /** The username of the user */
  username?: InputMaybe<Scalars['String']>;
};

/** A users education history entry */
export type UserEducation = {
  __typename?: 'UserEducation';
  /** Activities and societies ex. Alpha Phi Omega, band, volleyball */
  activities?: Maybe<Scalars['String']>;
  /** When the education entry was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The degree of the education ex. bachelor */
  degree?: Maybe<Scalars['String']>;
  /** The end month of the education (1-12) */
  endMonth?: Maybe<Scalars['Int']>;
  /** The end year of the education */
  endYear?: Maybe<Scalars['Int']>;
  /** The education field of study ex. administration */
  fieldOfStudy?: Maybe<Scalars['String']>;
  /** The grade given the education */
  grade?: Maybe<Scalars['String']>;
  /** The id of the education entry */
  id?: Maybe<Scalars['Int']>;
  /** Description or notes about the education */
  notes?: Maybe<Scalars['String']>;
  /** The name of the school */
  school?: Maybe<Scalars['String']>;
  /** The start month of the education (1-12) */
  startMonth?: Maybe<Scalars['Int']>;
  /** The start year of the education */
  startYear?: Maybe<Scalars['Int']>;
  /** When the education entry was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
};

/** Input object for creating a user education entry */
export type UserEducationCreateInput = {
  /** Activities and societies ex. Alpha Phi Omega, band, volleyball */
  activities?: InputMaybe<Scalars['String']>;
  /** The degree of the education ex. bachelor */
  degree?: InputMaybe<Scalars['String']>;
  /** The end month of the education (1-12) */
  endMonth?: InputMaybe<Scalars['Int']>;
  /** The end year of the education */
  endYear?: InputMaybe<Scalars['Int']>;
  /** The education field of study ex. administration */
  fieldOfStudy?: InputMaybe<Scalars['String']>;
  /** The grade given the education */
  grade?: InputMaybe<Scalars['String']>;
  /** Description or notes about the education */
  notes?: InputMaybe<Scalars['String']>;
  /** The name of the school */
  school: Scalars['String'];
  /** The start month of the education (1-12) */
  startMonth?: InputMaybe<Scalars['Int']>;
  /** The start year of the education */
  startYear?: InputMaybe<Scalars['Int']>;
};

/** Options for fetching user education data */
export type UserEducationOptions = {
  /** The id of the user to get education for */
  userId: Scalars['Int'];
};

/** Input object for updating a user education entry */
export type UserEducationUpdateInput = {
  /** Activities and societies ex. Alpha Phi Omega, band, volleyball */
  activities?: InputMaybe<Scalars['String']>;
  /** The degree of the education ex. bachelor */
  degree?: InputMaybe<Scalars['String']>;
  /** The end month of the education (1-12) */
  endMonth?: InputMaybe<Scalars['Int']>;
  /** The end year of the education */
  endYear?: InputMaybe<Scalars['Int']>;
  /** The education field of study ex. administration */
  fieldOfStudy?: InputMaybe<Scalars['String']>;
  /** The grade given the education */
  grade?: InputMaybe<Scalars['String']>;
  /** The id of the entry to update */
  id: Scalars['Int'];
  /** Description or notes about the education */
  notes?: InputMaybe<Scalars['String']>;
  /** The name of the school */
  school?: InputMaybe<Scalars['String']>;
  /** The start month of the education (1-12) */
  startMonth?: InputMaybe<Scalars['Int']>;
  /** The start year of the education */
  startYear?: InputMaybe<Scalars['Int']>;
};

/** A users work work experience entry */
export type UserExperience = {
  __typename?: 'UserExperience';
  /** The name of the company */
  company?: Maybe<Scalars['String']>;
  /** When the work experience entry was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** If the job is the current position */
  currentPosition?: Maybe<Scalars['Boolean']>;
  /** The employment status */
  employmentStatus?: Maybe<EmploymentStatus>;
  /** The end month of the experience (1-12) */
  endMonth?: Maybe<Scalars['Int']>;
  /** The end year of the experience */
  endYear?: Maybe<Scalars['Int']>;
  /** The id of the work experience entry */
  id?: Maybe<Scalars['Int']>;
  /** The work location ex. Oslo, Norway */
  location?: Maybe<Scalars['String']>;
  /** Description or notes about the experience */
  notes?: Maybe<Scalars['String']>;
  /** The start month of the experience (1-12) */
  startMonth?: Maybe<Scalars['Int']>;
  /** The start year of the experience */
  startYear?: Maybe<Scalars['Int']>;
  /** The work title ex. salesrep, CEO etc. */
  title?: Maybe<Scalars['String']>;
  /** When the work experience entry was last updated */
  updatedAt?: Maybe<Scalars['GraphQLDateTime']>;
};

/** Input object for creating a user work experience entry */
export type UserExperienceCreateInput = {
  /** The name of the company */
  company: Scalars['String'];
  /** If the job is the current position */
  currentPosition?: InputMaybe<Scalars['Boolean']>;
  /** The employment status */
  employmentStatus?: InputMaybe<EmploymentStatus>;
  /** The end month of the experience (1-12) */
  endMonth?: InputMaybe<Scalars['Int']>;
  /** The end year of the experience */
  endYear?: InputMaybe<Scalars['Int']>;
  /** The work location ex. Oslo, Norway */
  location?: InputMaybe<Scalars['String']>;
  /** Description or notes about the experience */
  notes?: InputMaybe<Scalars['String']>;
  /** The start month of the experience (1-12) */
  startMonth?: InputMaybe<Scalars['Int']>;
  /** The start year of the experience */
  startYear: Scalars['Int'];
  /** The work title ex. salesrep, CEO etc. */
  title: Scalars['String'];
};

/** Options for fetching user experience data */
export type UserExperienceOptions = {
  /** The id of the user to get experience for */
  userId: Scalars['Int'];
};

/** Input object for updating a user work experience entry */
export type UserExperienceUpdateInput = {
  /** The name of the company */
  company?: InputMaybe<Scalars['String']>;
  /** If the job is the current position */
  currentPosition?: InputMaybe<Scalars['Boolean']>;
  /** The employment status */
  employmentStatus?: InputMaybe<EmploymentStatus>;
  /** The end month of the experience (1-12) */
  endMonth?: InputMaybe<Scalars['Int']>;
  /** The end year of the experience */
  endYear?: InputMaybe<Scalars['Int']>;
  /** The id of the entry to update */
  id: Scalars['Int'];
  /** The work location ex. Oslo, Norway */
  location?: InputMaybe<Scalars['String']>;
  /** Description or notes about the experience */
  notes?: InputMaybe<Scalars['String']>;
  /** The start month of the experience (1-12) */
  startMonth?: InputMaybe<Scalars['Int']>;
  /** The start year of the experience */
  startYear?: InputMaybe<Scalars['Int']>;
  /** The work title ex. salesrep, CEO etc. */
  title?: InputMaybe<Scalars['String']>;
};

/** New password input data to update a lost password */
export type UserNewPasswordInput = {
  /** The new password for the user */
  password: Scalars['String'];
  /** The token returned from a password recovery request */
  token: Scalars['String'];
};

/** What kind of notifications the user will receive */
export type UserNotifications = {
  __typename?: 'UserNotifications';
  /** If the user will receive notification about approvals or not */
  approvals?: Maybe<Scalars['Boolean']>;
  /** If the user will receive notification about calendar updates or not */
  calendarUpdates?: Maybe<Scalars['Boolean']>;
  /** If the user will receive notification about private message or not */
  privateMessages?: Maybe<Scalars['Boolean']>;
  /** If the user will receive notification about project changes or not */
  projectChanges?: Maybe<Scalars['Boolean']>;
  /** If the user will receive notification about assigned tasks or not */
  taskAssigned?: Maybe<Scalars['Boolean']>;
};

/** What kind of notifications the user will receive */
export type UserNotificationsInput = {
  /** If the user will receive notification about approvals or not */
  approvals?: InputMaybe<Scalars['Boolean']>;
  /** If the user will receive notification about calendar updates or not */
  calendarUpdates?: InputMaybe<Scalars['Boolean']>;
  /** If the user will receive notification about private message or not */
  privateMessages?: InputMaybe<Scalars['Boolean']>;
  /** If the user will receive notification about project changes or not */
  projectChanges?: InputMaybe<Scalars['Boolean']>;
  /** If the user will receive notification about assigned tasks or not */
  taskAssigned?: InputMaybe<Scalars['Boolean']>;
};

export enum UserOrderBy {
  Created = 'created',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Updated = 'updated',
  Username = 'username'
}

export type UserPaginatedResult = {
  __typename?: 'UserPaginatedResult';
  data?: Maybe<Array<Maybe<User>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type UserPagingOptions = {
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** When set, only returns users on a certain client */
  clientId?: InputMaybe<Scalars['Int']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserSortDirection>>;
  /** A string you want to search users for */
  search?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
};

/** How to sort nodes in a query */
export type UserSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: UserOrderBy;
};

export enum UserType {
  Admin = 'admin',
  User = 'user'
}

/** User payload definition */
export type UserUpdateInput = {
  /** Some text describing the user */
  about?: InputMaybe<Scalars['String']>;
  /** If the user is active or not */
  active?: InputMaybe<Scalars['Boolean']>;
  /** The birthday of the user */
  birthday?: InputMaybe<Scalars['GraphQLDate']>;
  /** The country code of the user */
  countryCode?: InputMaybe<Scalars['String']>;
  /** A GraphQL upload, add input name="cover" to a file upload */
  cover?: InputMaybe<Array<InputMaybe<Scalars['GraphQLFileUpload']>>>;
  dashboardLayout?: InputMaybe<Scalars['JSON']>;
  /**
   * A setting to store the user's pereference to show/hide
   *                     corrections
   */
  displayCorrections?: InputMaybe<Scalars['Boolean']>;
  /** The email of the user */
  email?: InputMaybe<Scalars['String']>;
  /** If the user has confirmed the email or not */
  emailConfirmed?: InputMaybe<Scalars['Boolean']>;
  /** The first name of the user */
  firstname?: InputMaybe<Scalars['String']>;
  /**
   * The id of the user, optional, defaults to currently
   *                     logged in user
   */
  id?: InputMaybe<Scalars['Int']>;
  /** The last name of the user */
  lastname?: InputMaybe<Scalars['String']>;
  /** The location object of the customer */
  location?: InputMaybe<LocationInput>;
  /** The name of the user's Microsoft email/account */
  microsoft?: InputMaybe<Scalars['String']>;
  /** The middle name of the user */
  middlename?: InputMaybe<Scalars['String']>;
  /** The mobile object of the user */
  mobile?: InputMaybe<PhoneInput>;
  /** The full name of the user */
  name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<UserNotificationsInput>;
  /** The password of the user */
  password?: InputMaybe<Scalars['String']>;
  /** A GraphQL upload, add input name="picture" to a file upload */
  picture?: InputMaybe<Array<InputMaybe<Scalars['GraphQLFileUpload']>>>;
  siteLanguage?: InputMaybe<SiteLanguage>;
  /** The name of the user's Skype account */
  skype?: InputMaybe<Scalars['String']>;
  social?: InputMaybe<SocialNetworksInput>;
  /** The id of the timezone for this user */
  timezoneId?: InputMaybe<Scalars['Int']>;
  /** If the user has accepted the TOS or not */
  tosAccepted?: InputMaybe<Scalars['Boolean']>;
  /** The type of the user */
  type?: InputMaybe<UserType>;
  /** The username of the user */
  username?: InputMaybe<Scalars['String']>;
};

/** A VAT entry account object */
export type VatEntryAccount = {
  __typename?: 'VATEntryAccount';
  account?: Maybe<Account>;
  /** All the transactions in this account */
  transactions?: Maybe<Array<Maybe<AccountTransaction>>>;
};

/** A VAT report for a specific period */
export type VatReturnEntry = {
  __typename?: 'VATReturnEntry';
  accounts?: Maybe<Array<Maybe<VatEntryAccount>>>;
  /** The VAT basis */
  amount?: Maybe<Scalars['Float']>;
  /** If the VAT code is custom, this is the name of the custom VAT code */
  customVatName?: Maybe<Scalars['String']>;
  /** Post description */
  description?: Maybe<Scalars['String']>;
  /** If the amount should be displayed in report */
  displayAmount?: Maybe<Scalars['Boolean']>;
  /** If the VAT amount should be displayed in report */
  displayVatAmount?: Maybe<Scalars['Boolean']>;
  /** The entry number or VAT code */
  entry?: Maybe<Scalars['Int']>;
  /** The note for this entry */
  note?: Maybe<Scalars['String']>;
  /** The VAT amount, calculated form basis */
  vatAmount?: Maybe<Scalars['Float']>;
  vatCodes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** The VAT percent */
  vatPercent?: Maybe<Scalars['Float']>;
};

/** A VAT report group with entries for a specific period */
export type VatReturnEntryGroup = {
  __typename?: 'VATReturnEntryGroup';
  entries?: Maybe<Array<Maybe<VatReturnEntry>>>;
  name?: Maybe<Scalars['String']>;
};

export type VatCode = {
  __typename?: 'VatCode';
  /** The account for this VAT code */
  account?: Maybe<Scalars['Int']>;
  /** The VAT code */
  code?: Maybe<Scalars['Int']>;
  /** The cost account for this VAT code, if any */
  costAccount?: Maybe<Scalars['Int']>;
  /** The description of this VAT code */
  description?: Maybe<Scalars['String']>;
  /** The income account for this VAT code */
  incomeAccount?: Maybe<Scalars['Int']>;
  /** The name of this VAT code */
  name?: Maybe<Scalars['String']>;
  /** The percent of this VAT code */
  percent?: Maybe<Scalars['Float']>;
  percentHistory?: Maybe<Array<Maybe<VatCodePercentHistory>>>;
  type?: Maybe<VatCodeType>;
  /** If the vat code is meant for vat registered clients or not */
  vatRegistered?: Maybe<Scalars['Boolean']>;
};

/** VatCode query options and filters */
export type VatCodeOptions = {
  /**
   * The date to fetch the percent value, defaults
   *                     to todays date
   */
  date?: InputMaybe<Scalars['GraphQLDate']>;
  /** A string you want to search vat codes for */
  search?: InputMaybe<Scalars['String']>;
  /** Only return certain VAT code types */
  types?: InputMaybe<Array<InputMaybe<VatCodeType>>>;
};

export type VatCodePercentHistory = {
  __typename?: 'VatCodePercentHistory';
  /** The date where this percent is valid from, inclusive */
  date?: Maybe<Scalars['GraphQLDate']>;
  /** The percent at this point in time */
  percent?: Maybe<Scalars['Float']>;
};

export enum VatCodeType {
  Purchase = 'purchase',
  ReverseTaxLiabilityClimate = 'reverseTaxLiabilityClimate',
  ReverseTaxLiabilityGoods = 'reverseTaxLiabilityGoods',
  ReverseTaxLiabilityService = 'reverseTaxLiabilityService',
  Sales = 'sales',
  Vat = 'vat'
}

/** A VAT Return object */
export type VatReturn = {
  __typename?: 'VatReturn';
  /** Additional info about this period */
  additionalInfo?: Maybe<Scalars['String']>;
  changes?: Maybe<Scalars['Boolean']>;
  entries?: Maybe<Array<Maybe<VatReturnEntry>>>;
  /** The VAT Return from date */
  fromDate?: Maybe<Scalars['GraphQLDate']>;
  groupedEntries?: Maybe<Array<Maybe<VatReturnEntryGroup>>>;
  /** The id of the VAT Return */
  id?: Maybe<Scalars['Int']>;
  /** If this period is locked or not */
  locked?: Maybe<Scalars['Boolean']>;
  /**
   * The result of the VAT return, if negative: the client is
   *                     owed, if positive: client has a fee to pay
   */
  result?: Maybe<Scalars['Float']>;
  /** The submission data from Altinn */
  submission?: Maybe<VatReturnSubmission>;
  submitType?: Maybe<VatReturnSubmitType>;
  /** When this period was submitted */
  submittedDate?: Maybe<Scalars['GraphQLDate']>;
  /** The VAT Return to date */
  toDate?: Maybe<Scalars['GraphQLDate']>;
  type?: Maybe<VatReturnType>;
  /** The voucher representing this VAT-return (if created) */
  voucher?: Maybe<Voucher>;
  /**
   * Any vouchers for this period
   * @deprecated Move to voucher instead of vouchers
   */
  vouchers?: Maybe<Array<Maybe<Voucher>>>;
};

/** VAT Return input data, for creating a new VAT Return */
export type VatReturnCreateInput = {
  /** Additional info about this period */
  additionalInfo?: InputMaybe<Scalars['String']>;
  /** The VAT Return from date */
  fromDate: Scalars['GraphQLDate'];
  /** If this period should now be locked */
  locked: Scalars['Boolean'];
  /** When the VAT return was submitted to a legal authority */
  submittedDate?: InputMaybe<Scalars['GraphQLDateTime']>;
  /** The VAT Return to date */
  toDate: Scalars['GraphQLDate'];
};

/** VAT Return input data, for updating a entry */
export type VatReturnEntryUpdateInput = {
  /** Index of the entry */
  entryIndex: Scalars['Int'];
  /** The id of the VAT Return */
  id: Scalars['Int'];
  /** Note for this entry */
  note: Scalars['String'];
};

/** Options for exporting data */
export type VatReturnExportOptions = {
  /** Optional account to limit the results */
  account?: InputMaybe<Scalars['Int']>;
  /** Limit results to include exact amount in voucher transactions */
  amount?: InputMaybe<Scalars['Float']>;
  /** Limit results to include transaction amounts in this range */
  amountRange?: InputMaybe<Range>;
  /**
   * Optional client id, for getting reports for a specific
   *                   client, only usable by administrators
   */
  clientId?: InputMaybe<Scalars['Int']>;
  /** To include / exclude corrections, defaults to true (include). */
  corrections?: InputMaybe<Scalars['Boolean']>;
  /**
   * Optional list of customer ids, if present, only results
   *                   with these ids will be included
   */
  customers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Optional department id to filter accounting data */
  departmentId?: InputMaybe<Scalars['Int']>;
  /** Only valid format right now is "pdf" */
  format: ExportFormat;
  /** The period start date to fetch account data */
  from?: InputMaybe<Scalars['GraphQLDate']>;
  /** To only show open posts (on customers / suppliers) */
  openPostings?: InputMaybe<Scalars['Boolean']>;
  /** Optional project id to filter accounting data */
  projectId?: InputMaybe<Scalars['Int']>;
  /** Optional range of accounts to limit the results */
  range?: InputMaybe<Range>;
  /**
   * Optional list of supplier ids, if present, only results
   *                   with these ids will be included
   */
  suppliers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Which term to export */
  term: Scalars['Int'];
  /** The period end date to fetch account data */
  to?: InputMaybe<Scalars['GraphQLDate']>;
  /** Which year the term is in */
  year: Scalars['Int'];
};

/** Query options for vat returns */
export type VatReturnOptions = {
  /**
   * Optional client id, for getting data for a specific
   *                     client, only usable by administrators
   */
  clientId?: InputMaybe<Scalars['Int']>;
  /** The period start date to fetch data */
  from: Scalars['GraphQLDate'];
  /** The period end date to fetch data */
  to: Scalars['GraphQLDate'];
};

/** Payment data, for making a new payment on a VAT return */
export type VatReturnPaymentInput = {
  /** The amount payed */
  amount: Scalars['Float'];
  /** Payment date */
  paymentDate: Scalars['GraphQLDate'];
  /** An id of the payment setting you want to use for this payment */
  paymentSettingId: Scalars['Int'];
  /** The id of the VAT return */
  vatReturnId: Scalars['Int'];
  /** The id of the voucher to put this payment on */
  voucherId: Scalars['Int'];
};

/** A VAT return submission */
export type VatReturnSubmission = {
  __typename?: 'VatReturnSubmission';
  /** The feedback from Altinn */
  altinnPaymentInfo?: Maybe<Scalars['JSON']>;
  /** mva receipt */
  receipt?: Maybe<Scalars['String']>;
  /** The URL to the SCA page */
  scaUrl?: Maybe<Scalars['String']>;
  /** The stage of mva submission */
  stage?: Maybe<Stage>;
  /** The status of mva submission */
  status?: Maybe<Status>;
  /** Information about the status on mva submission */
  statusMessage?: Maybe<Scalars['String']>;
};

export enum VatReturnSubmitType {
  Automatic = 'automatic',
  Manual = 'manual'
}

export enum VatReturnType {
  Correction = 'correction',
  Main = 'main',
  Supplementary = 'supplementary'
}

/** VAT Return input data, for updating a period */
export type VatReturnUpdateInput = {
  /** Additional info about this period */
  additionalInfo?: InputMaybe<Scalars['String']>;
  /** The id of the VAT Return */
  id: Scalars['Int'];
  /** If this period should now be locked */
  locked?: InputMaybe<Scalars['Boolean']>;
};

/** A Voucher */
export type Voucher = {
  __typename?: 'Voucher';
  /** A list of partial amounts on this voucher */
  amounts?: Maybe<Array<Maybe<TransactionAmount>>>;
  /** Any attachments included with the voucher */
  attachments?: Maybe<Array<Maybe<File>>>;
  /** The attestation requests on this voucher */
  attestations?: Maybe<Array<Maybe<Attestation>>>;
  /** Bank account ID if voucher is bank statement */
  bankAccountId?: Maybe<Scalars['Int']>;
  /** When this voucher was created */
  createdAt?: Maybe<Scalars['GraphQLDateTime']>;
  /** The customer */
  customer?: Maybe<Customer>;
  /** A description of this voucher */
  description?: Maybe<Scalars['String']>;
  /** The file associated with this voucher */
  file?: Maybe<File>;
  /** The id of the voucher */
  id?: Maybe<Scalars['Int']>;
  /** The invoice belonging to this voucher */
  invoice?: Maybe<Invoice>;
  /** If this voucher has been locked */
  locked?: Maybe<Scalars['Boolean']>;
  /**
   * The number of pages on this pdf voucher
   * @deprecated Switching to file pages
   */
  pages?: Maybe<Scalars['Int']>;
  /**
   * If this voucher has been posted, created transactions etc
   * @deprecated Moved to voucher status to enable more states
   */
  posted?: Maybe<Scalars['Boolean']>;
  source?: Maybe<VoucherSource>;
  /** The status of the voucher (draft, approval or posted) */
  status?: Maybe<VoucherStatus>;
  /** The supplier */
  supplier?: Maybe<Supplier>;
  /** The tags on this voucher */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /**
   * The thumbnail for with this voucher
   * @deprecated Switching to file thumbnail
   */
  thumb?: Maybe<File>;
  /** Total amount of lines or outgoing balance in bank statements */
  totalAmount?: Maybe<Scalars['Float']>;
  /** The transaction date of the voucher */
  transactionDate?: Maybe<Scalars['GraphQLDate']>;
  /** The transactions on this voucher */
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  type?: Maybe<VoucherType>;
  /** The user that first created this voucher */
  user?: Maybe<User>;
  /** The vat return on this voucher */
  vatReturn?: Maybe<VatReturn>;
  /** The number of the voucher, only available on posted vouchers */
  voucherNumber?: Maybe<Scalars['String']>;
};


/** A Voucher */
export type VoucherTransactionsArgs = {
  options?: InputMaybe<TransactionPagingOptions>;
};

/**
 * Voucher input data, for creating transactions when creating an
 *                 advanced voucher
 */
export type VoucherAdvancedInput = {
  amounts: Array<InputMaybe<TransactionAmountAdvancedInput>>;
  /** User ids of users to request approval for this voucher */
  attestants?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** A description of this voucher */
  description?: InputMaybe<Scalars['String']>;
  /** The id of the voucher */
  id?: InputMaybe<Scalars['Int']>;
  /** The date for this transaction */
  transactionDate: Scalars['GraphQLDate'];
  /**
   * A field to indicate what kind of voucher this is. Different
   *                     validation rules may apply depending on this type. Defaults
   *                     to "advanced"
   */
  type?: InputMaybe<VoucherType>;
};

/**
 * Voucher input data, for creating transactions when creating an
 *                 bank statement voucher
 */
export type VoucherBankStatementInput = {
  amounts?: InputMaybe<Array<InputMaybe<TransactionAmountBankStatementInput>>>;
  /** The id of the bank account */
  bankAccountId: Scalars['Int'];
  /** The id of the voucher */
  id?: InputMaybe<Scalars['Int']>;
  /** The month of the bank statement */
  month: Scalars['Int'];
  /** The end balance of the account */
  totalAmount: Scalars['Float'];
  /** The year of the bank statement */
  year: Scalars['Int'];
};

/** Voucher input data, for updating vouchers already created */
export type VoucherCustomerInvoiceInput = {
  amounts: Array<InputMaybe<TransactionAmountCustomerInvoiceInput>>;
  /** CID number or message */
  cid?: InputMaybe<Scalars['String']>;
  currency: CurrencyInput;
  /** Customer id */
  customerId: Scalars['Int'];
  /** A description of this voucher */
  description: Scalars['String'];
  /** If dueDate is not set, this will update the invoice */
  dueDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The id of the voucher */
  id?: InputMaybe<Scalars['Int']>;
  /** If invoiceDate is not set, this will update the invoice */
  invoiceDate: Scalars['GraphQLDate'];
  /** For updating the invoice with a number, if not set yet */
  invoiceNumber?: InputMaybe<Scalars['String']>;
};

/** Voucher input data, for registering customer invoices not generated in Catacloud */
export type VoucherCustomerInvoiceInputPost = {
  amounts: Array<InputMaybe<TransactionAmountCustomerInvoiceInputPost>>;
  /** User ids of users to request approval for this voucher */
  attestants?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  currency: CurrencyInput;
  /**
   * Supplier id, non optional if the method is "purchase",
   *                     ignored for "sales"
   */
  customerId: Scalars['Int'];
  /** A description of this voucher */
  description?: InputMaybe<Scalars['String']>;
  /** If dueDate is not set, this will update the invoice */
  dueDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The id of the voucher */
  id?: InputMaybe<Scalars['Int']>;
  /** The date of the invoice */
  invoiceDate: Scalars['GraphQLDate'];
  /** The invoice number */
  invoiceNumber: Scalars['String'];
  payment?: InputMaybe<VoucherPaymentInput>;
};

/** For creating transactions as a customs declaration  */
export type VoucherCustomsDeclarationInput = {
  amounts: Array<InputMaybe<TransactionAmountCustomsDeclarationInput>>;
  /** User ids of users to request approval for this voucher */
  attestants?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** A description of this voucher */
  description?: InputMaybe<Scalars['String']>;
  /** The id of the voucher */
  id?: InputMaybe<Scalars['Int']>;
  /** The date for this transaction */
  transactionDate: Scalars['GraphQLDate'];
};

export type VoucherMergeInput = {
  description: Scalars['String'];
  vouchers: Array<InputMaybe<Scalars['Int']>>;
};

export enum VoucherOrderBy {
  Created = 'created',
  Description = 'description',
  Id = 'id',
  Type = 'type',
  VoucherDate = 'voucherDate',
  VoucherNumber = 'voucherNumber'
}

export type VoucherPaginatedResult = {
  __typename?: 'VoucherPaginatedResult';
  data?: Maybe<Array<Maybe<Voucher>>>;
  paging: Paging;
};

/**
 * An object containing info about where to start fetching
 *                   objects, sorting, filtering etc
 */
export type VoucherPagingOptions = {
  /** Only return results where on this account */
  account?: InputMaybe<Scalars['String']>;
  /** How to fetch objects (fetch n objects "after" this cursor) */
  after?: InputMaybe<Scalars['String']>;
  /** Limit results to include exact amount in voucher transactions */
  amount?: InputMaybe<Scalars['Float']>;
  /** Limit results to include transaction amounts in this range */
  amountRange?: InputMaybe<Range>;
  /** Only fetch vouchers waiting on attestation from this user id */
  attester?: InputMaybe<Scalars['Int']>;
  /** How to fetch objects (fetch n objects "before" this cursor) */
  before?: InputMaybe<Scalars['String']>;
  /** The period start date to fetch vouchers */
  dateFrom?: InputMaybe<Scalars['GraphQLDate']>;
  /** The period end date to fetch vouchers */
  dateTo?: InputMaybe<Scalars['GraphQLDate']>;
  /** Limit results to include invoice numbers matching this input */
  invoiceNumber?: InputMaybe<Scalars['String']>;
  /** How many objects to fetch */
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VoucherSortDirection>>;
  /** A string you want to search vouchers for */
  search?: InputMaybe<Scalars['String']>;
  /** Only fetch vouchers with a certain status (draft, approval or posted) */
  status?: InputMaybe<VoucherStatus>;
  /** Only fetch vouchers with a certain type */
  type?: InputMaybe<VoucherType>;
  /** Limit results to include voucher numbers matching this input */
  voucherNumber?: InputMaybe<Scalars['String']>;
};

/** Voucher payment input data */
export type VoucherPaymentInput = {
  /** The amount for this payment, in the invoice currency */
  amount: Scalars['Float'];
  /** The id of the bank account to pay from when paying through bank integration */
  bankAccountId?: InputMaybe<Scalars['Int']>;
  /** Amount in opposite currency */
  currencyAmount?: InputMaybe<Scalars['Float']>;
  /** Payment date */
  paymentDate: Scalars['GraphQLDate'];
  /** An id of the payment setting you want to use for this payment */
  paymentSettingId?: InputMaybe<Scalars['Int']>;
  /** Receiver bank account details if paying through bank integration */
  toBankAccount?: InputMaybe<ReceiverBankAccountInput>;
};

/** How to sort nodes in a query */
export type VoucherSortDirection = {
  direction?: InputMaybe<SortDirectionEnum>;
  sort: VoucherOrderBy;
};

export enum VoucherSource {
  BankPayment = 'bankPayment',
  BankReconciliation = 'bankReconciliation',
  CustomerInvoice = 'customerInvoice',
  Electronic = 'electronic',
  Manual = 'manual'
}

export enum VoucherStatus {
  /** Voucher is assigned to attestation approval */
  Approval = 'approval',
  /** Voucher is a draft (default state) */
  Draft = 'draft',
  /** Voucher is posted and written to ledger */
  Posted = 'posted'
}

/** Voucher input data, for updating vouchers already created */
export type VoucherSupplierInvoiceInput = {
  amounts: Array<InputMaybe<TransactionAmountSupplierInvoiceInput>>;
  /** CID number or message */
  cid?: InputMaybe<Scalars['String']>;
  currency: CurrencyInput;
  /** A description of this voucher */
  description: Scalars['String'];
  /** If dueDate is not set, this will update the invoice */
  dueDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The id of the voucher */
  id?: InputMaybe<Scalars['Int']>;
  /** If invoiceDate is not set, this will update the invoice */
  invoiceDate: Scalars['GraphQLDate'];
  /** For updating the invoice with a number, if not set yet */
  invoiceNumber?: InputMaybe<Scalars['String']>;
  /** Supplier id */
  supplierId: Scalars['Int'];
};

/**
 * Voucher input data, for updating vouchers already created,
 *                 when posting transactions
 */
export type VoucherSupplierInvoiceInputPost = {
  amounts: Array<InputMaybe<TransactionAmountSupplierInvoiceInputPost>>;
  /** User ids of users to request approval for this voucher */
  attestants?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** CID number or message */
  cid?: InputMaybe<Scalars['String']>;
  currency: CurrencyInput;
  /** A description of this voucher */
  description?: InputMaybe<Scalars['String']>;
  /** If dueDate is not set, this will update the invoice */
  dueDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** The id of the voucher */
  id?: InputMaybe<Scalars['Int']>;
  /** If invoiceDate is not set, this will update the invoice */
  invoiceDate: Scalars['GraphQLDate'];
  /** For updating the invoice with a number, if not set yet */
  invoiceNumber?: InputMaybe<Scalars['String']>;
  payment?: InputMaybe<VoucherPaymentInput>;
  /**
   * Supplier id, non optional if the method is "purchase",
   *                     ignored for "sales"
   */
  supplierId: Scalars['Int'];
};

export enum VoucherType {
  Advanced = 'advanced',
  BankStatement = 'bankStatement',
  CustomerInvoice = 'customerInvoice',
  CustomsDeclaration = 'customsDeclaration',
  EmployeeExpense = 'employeeExpense',
  OcrGiro = 'ocrGiro',
  OpeningBalance = 'openingBalance',
  Payment = 'payment',
  Payroll = 'payroll',
  Reminder = 'reminder',
  Remmitance = 'remmitance',
  SupplierInvoice = 'supplierInvoice',
  TermAssignment = 'termAssignment',
  TravelExpense = 'travelExpense',
  Unknown = 'unknown',
  VatReturn = 'vatReturn'
}

/** Voucher input data, for updating already created vouchers or creating vouchers from files */
export type VoucherUpdateInput = {
  /** A description of this voucher */
  description?: InputMaybe<Scalars['String']>;
  /** The id of the file to copy to voucher or create voucher from */
  fileId?: InputMaybe<Scalars['Int']>;
  /** The id of the voucher */
  id?: InputMaybe<Scalars['Int']>;
  /** The date for this transaction */
  transactionDate?: InputMaybe<Scalars['GraphQLDate']>;
  /** Set the type of voucher */
  type?: InputMaybe<VoucherType>;
};

/** Voucher input data, for creating a new voucher */
export type VoucherUpload = {
  /** A file, pdf, image etc */
  vouchers: Array<InputMaybe<Scalars['GraphQLFileUpload']>>;
};

export enum Stage {
  Delivery = 'delivery',
  Done = 'done',
  Pay = 'pay',
  SettlementInfo = 'settlementInfo'
}

export enum Status {
  AuthorizationFailed = 'authorizationFailed',
  Error = 'error',
  Pending = 'pending',
  Started = 'started',
  Success = 'success'
}
