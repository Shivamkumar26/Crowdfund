# RapidFund

## Learning - connect react app to blockchain and pair it with metamask.
## -  Smart contract on Etherium Network using Solidity language.
## - Thirdweb tool allows to create, release, deploy smart contract using single command. 
## Why Thirdweb - because its free, simple and open source. 

## Commands - 
npx thirdweb@latest create --contract
-> webapp -> hardhat -> Crowdfunding

For more security we use environment variables - dotenv package
npm install dotenv


## About Smart Contract
Its is written in Solidity Language.
There is a `Campaign` object that contains all the required parameters. 
Global variable `currentNumberOfCampaigns` stores total number of current campaigns.
There are total 4 functions 
- `createCampaign` to store the information of added campaign and return its index(or address in array), 
- `donateToCampaign` to store the information of user who donated and value. Its return type is payble that means cryptocurreny will be send.
- `getDonators` returns the details of all the users who donated in that campaign.
- `getCampaigns` returns all the active campaigns present.