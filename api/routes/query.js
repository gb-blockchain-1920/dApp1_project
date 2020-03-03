/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

var express = require('express');
var router = express.Router();

/* GET query listing. */
router.get('/', async function(req, res, next) {
    const { FileSystemWallet, Gateway } = require('fabric-network'); //Creates a new gateway and use it to connect to the network
    const path = require('path');
    
    const ccpPath = path.resolve(__dirname, '..', 'config', 'connection-org1.json');
    
    
        try {
    
            // Create a new file system based wallet for managing identities.
            const walletPath = path.join(process.cwd(), 'wallet');
            const wallet = new FileSystemWallet(walletPath);
            console.log(`Wallet path: ${walletPath}`);
    
            // Check to see if we've already enrolled the user.
            const userExists = await wallet.exists('user1');
            if (!userExists) {
                console.log('An identity for the user "user1" does not exist in the wallet');
                console.log('Run the registerUser.js application before retrying');
                return;
            }
    
            // Create a new gateway for connecting to our peer node.
            const gateway = new Gateway();
            // use the identity of user1 from wallet to connect
            await gateway.connect(ccpPath, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });
    
            // Get the network (channel) our contract is deployed to.
            const network = await gateway.getNetwork('mychannel');
    
            // Get the contract from the network.
            const contract = network.getContract('fabcar');
    
            // Evaluate the specified transaction.
            // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
            // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
            const result = await contract.evaluateTransaction('queryAllCars');
            console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
            res.json(JSON.parse(result.toString()));
    
        } catch (error) {
            console.error(`Failed to evaluate transaction: ${error}`);
            process.exit(1);
        }
        
    
});

module.exports = router;
