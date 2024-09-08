interface ProviderId {
    [key : string] : string
}

interface ProviderValues {
  [key : string] : string
}

const providerValues : ProviderValues = {
  amazon : 'CLAIM_DATA', // '171 orders'
  aadhar : 'CLAIM_DATA', //
  uber : 'ride_count', // 32
  bank : 'account_balance' ,//
  uberuser:'',
  facebook : '',
  salary: '',
  flipkart: '',
  swiggy: '',
  steam:'CLAIM_DATA', // accountid
  luma: '',
  alaska: '',
  calendly: 'user_email',// email
  smallcase: 'exited_returns',// 4000
  alphabot_discord: 'discord', // discord id
  alphabot_twitter: 'twitter_ID', // twitter id
  alphabot_address: 'wallet_address' // address of alphabot
  // growwkyc : 
}

const providerIds : ProviderId = {
  amazon : '5f83ab14-9656-4552-9fbc-482e07022766', // Amazon 2023 Order Count
  aadhar : '5e1302ca-a3dd-4ef8-bc25-24fcc97dc800', // Aadhaar Card Date of Birth
  uber: '6d3f6753-7ee6-49ee-a545-62f1b1822ae5', // Uber Us - 2
  bank : 'e56a707e-e8e9-458e-846a-bda8d9699d79', // Bank of America Bank Balance
  uberuser : '9d2ea353-8819-447d-9e3f-c433a0d9fe40', // Uber user credentials
  facebook : '309e9bc9-be15-4b46-8212-6cc1c0ce14a2', // Facebook account associated with Instagram.
  salary : 'e917d34d-4f88-4670-ab52-fd0ce3342762', // Proof of Salary and Title
  growwkyc : '8a7f0989-c4d9-4528-ac82-a46abaa3c564', // Groww - Verified KYC
  groww : 'dc55113f-c57f-477b-95cc-09a691da1982', // Groww - Investment Details
  alphabot :'55f3d52a-57c1-4c34-9fac-daa6325fb836', // Alphabot - wallet and social details
  github : 'f1762793-4caf-4738-9a65-be8db24090b9',
  linkdin: '03cdff35-6c27-4626-8231-2b298c3538c0', // LinkedIn Analytics Data
  bigbasket: 'f5eb152e-4e52-41d4-be7b-2fc0e8adc892', // Bigbasket Order Count and BBstar Membership
  blinkit: '618435af-81b0-4b63-aa1d-96187b7f8403', // BlinkIt User details and Time Stamp of when the app was installed
  kaggle: '624aed5c-98f8-4c4d-a20f-f4eaefa67977', // Kaggle Dashboard Analytics
  flipkart: '599cd301-97fe-43cf-9423-6f35f302f826', // flipkart addressbook,
  swiggy: 'eeaa0f1a-d7ae-4fe1-a382-36119326cc17', // Swiggy Addressbook
  steam: '1bba104c-f7e3-4b58-8b42-f8c0346cdeab', // Steam ID
  luma: '62f79395-4138-4134-9ae9-97f5351ef101', // Luma proof of invite
  alaska:  'f1ecc692-cf13-4f45-9b91-ea1459875f07', // Alaska Miles
  calendly:  '7cec5d34-36f0-44d8-92ea-286f6b615ed9', // Calendly Link Ownership
  smallcase: '72569723-4e63-440d-84f6-0f9d8cae932b', // Smallcase returns
};

export { providerIds , providerValues}