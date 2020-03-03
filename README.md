# dApp 1 Project

## eKYC - a Hyperledger Fabric project

Luka Buzaladze  
Deepanshu Gupta  
Aaron Lu

### Goal
Know your client (KYC) laws are a common way to protect investors and investments. However, many companies require a user to fill out the similar KYC applications over and over again. eKYC aims to solve this problem where the user is able to fill out a single KYC form, and approve the information for various companies.

### Data/Parameters

| Variable Name | Type   | Details                                                                                                                    | Notes                                                                                            |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| user          | `Object` | {userId: `number`, firstName: `string`, lastname: `string`, DOB: `number (seconds)`, income: `number`, passport: `number`} | data structure for each individual person                                                        |
| companyData   | `Object` | { `companyId`: {`userId`:  `Object` user}}                                                                                  | data structure for companies. an object of objects where companyId => userId => user information |
| token | `String` | | token used in API calls for authentication

### Functions

| Functions         | Inputs               | Outputs        | Notes                                                    |
| ----------------- | -------------------- | -------------- | -------------------------------------------------------- |
| inputData         | Object (user object) | userId         | store user data                                          |
| approveCompany    | companyId            | --             | takes a users data and inputs it into the companies data |
| getDataIndividual | --                   | Object         | gets individuals data for KYC infomration                |
| getDataCorporate  | --                   | Object{Object} | gets all data from companies list of KYC infomration     |
| getToken | payload, privateKey | token | used for providing authentication token to front-end |
| checkToken | token, privateKey | boolean | used to check validity of token - only called in API/Express

### Modeling
![](./documentation/systemDiagram.png)

### Architecture
The user and company facing interface is a React front end that connects to a Express API that is connected to a Hyperledger Fabric network.

### Deployment Instructions

### Resources
- [JWT](https://github.com/auth0/node-jsonwebtoken)
