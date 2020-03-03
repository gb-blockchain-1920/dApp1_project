## Install Hyperledger Explorer

##### Change firewall

Change the firewall rules to allow the following ports if running on cloud environment like GCP, AWS.

tcp:8080
tcp:9090
tcp:3000
tcp:8090


##### Git clone explorer

```
git clone https://github.com/hyperledger/blockchain-explorer.git
```

##### Get the Keystore key for org1 peer admin.

```
ls ~/fabric-samples/first-network/crypto-config/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp/keystore
```

Copy the value.

#####  Open first-network.json from blockchain-explorer and update the Org1MSP adminPrivateKey path with the key you copied from the above step.

```
vi ~/blockchain-explorer/examples/net1/connection-profile/first-network.json
```

#####  Copy the crypto from fabric samples

```
cp -r ~/fabric-samples/first-network/crypto-config/* ~/blockchain-explorer/examples/net1/crypto
```

#####  Get the explorer up and running

Now go back to ~/blockchain-explorer run following command and you should not notice program exit with 1

```
cd blockchain-explorer/
docker-compose up

docker-compose down -v
docker-compose up -d
docker ps
```

#####  open explorer

By going to

`http://<your external ip>:8090`

login using the default user id and password `admin/adminpw`.


##### To remove docker containers
```
docker kill $(docker ps -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
```