# dApp 1 Project
This is a simple project as a first exposure to Hyperledger Fabric.

## eKYC - a Hyperledger Fabric project

Luka Buzaladze  
Deepanshu Gupta  
Aaron Lu

### Goal

Know your client (KYC) laws are a common way to protect investors and investments. However, many companies require a user to fill out the similar KYC applications over and over again. eKYC aims to solve this problem where the user is able to fill out a single KYC form, and approve the information for various companies.


### Data/Parameters

| Variable Name | Type     | Details                                                                                                                    | Notes                                                                                            |
| ------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| user          | `Object` | {`userId`, `firstName`, `lastName`, `DOB`, `income`, `passport`} | data structure for each individual person                                                        |
| relations     | `Object` | [{ `companyId`, `userId`}, ...] | a list of paired company ids and user ids to track approval |
| companies | `Array` | [`companyId`, ...] | list of all company ids |
| token         | `String` |                                                                                                                            | token used in API calls for authentication, parsed token used to form userId                     |

### Functions

| Functions      | Inputs (front-end to API)  | Inputs(API to chaincode) | Output (chaincode)            | Output (API)   | Notes                                                                                                                                                                      |
| -------------- | -------------------------- | ------------------------ | ----------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| inputData      | `user` object       | {`userId`, `user` object}    | --                            | userId         | store user data                                                                                                                                                            |
| approveCompany | `companyId`                  | {`userId`, `companyId`}      | --                            | `boolean`        | takes a users data and inputs it into the companies data                                                                                                                   |
| getData        | --                         | `userId`                   | `user` object                   | `user` object    | gets individuals data for KYC information                                                                                                                                  |
| saveCompany | N/A | `companyId` | -- | N/A | Used to save companyId to list of company ids  |
| getCompanies | N/A | -- | [`companyId`, ...] | N/A | gets a list of all approved and registered companies |
| getRelations   | -- | {`key`, `userId` or `companyId`}      | [`companyId`, ...] or [`userId`, ...] | -- | for company - function to get userIds that have approved then return associated user information, for user - function to get approved companyIds then return company names |
| getToken       | `payload`                    | N/A                      | N/A                           | `token`          | used for providing authentication token to front-end                                                                                                                       |
| checkToken     | `token`                      | N/A                      | N/A                           | `boolean`        | used to check validity of token - only called in API/Express                                                                                                               |

### API Endpoints

Token should be passed whenever interacting with the API other than the `\login` POST call.

| Endpoint     | Type  | Input                    | Output                                      | Functionality                                               | Called By |
| ------------ | ----- | ------------------------ | ------------------------------------------- | ----------------------------------------------------------- | --------- |
| `\login`     | `get` | token | true/false                                       | check if token is valid or not                              | both      |
| `\login`     | `post` | username, password, type                    | token                                  | login endpoint to generate token                            | both      |
| `\user`      | `get` | token                    | user information                            | get user information                                        | user      |
| `\user`      | `post` | token, payload           | true/false                                  | store user information                                      | user      |
| `\corporate` | `get` | --                       | array of user objects                       | get information that is approved for company                | company   |
| `\approve`   | `get` | --                       | array of approved companies + all companies | get a list of approved companies and all possible companies | user      |
| `\approve`   | `post` | companyId                | true/false                                  | approve company for user information                        | user      |

### Modeling

![](./documentation/systemDiagram.png)

### Architecture

The user and company facing interface is a React front end that connects to a Express API that is connected to a Hyperledger Fabric network.

### Deployment Instructions
TBD

### Resources

- [JWT](https://github.com/auth0/node-jsonwebtoken)
