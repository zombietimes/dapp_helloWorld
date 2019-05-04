# [dapp_helloWorld](https://github.com/zombietimes/dapp_helloWorld)
This is a sample application of DApps.  

## Overview
[dapp_helloWorld](https://github.com/zombietimes/dapp_helloWorld) allows getting and setting a message on the blockchain.  
It is created as a project of Truffle framework.  
It allows accessing to Ganache(Ethereum) and Loom Network.  
It allows accessing through Express server(application server).  
[DApps : Medium](https://medium.com/swlh/understanding-dapps-decentralized-applications-8f3668ebdc9a)  
[Truffle : Official](https://truffleframework.com/)  
[Ganache : Official](https://truffleframework.com/docs/ganache/overview)  
[Loom Network SDK : Official](https://loomx.io/developers/)  
[Express : Official](https://expressjs.com/)  

## Description
Let's run and analyze the sample DApps.  
You can understand deeply by editing the sample code.  
I think that it is worth learning the smart contract development.  
I focus on Ethereum and Loom Network as the DApps.  

### Sample DApps
I created some sample smart contracts below.  
I hope to be useful to you when you develop DApps.  
- [Hello world : HelloZombies.sol](https://github.com/zombietimes/dapp_helloWorld) : Here!
- [ERC20 : Coin20.sol](https://github.com/zombietimes/dapp_erc20)
- [ERC721 : Asset721.sol](https://github.com/zombietimes/dapp_erc721)
- [Multi contract : ImportZombies.sol](https://github.com/zombietimes/dapp_multiContract)
- [Sending Ether](https://github.com/zombietimes/dapp_sendEther)

### Setting up the development environment.
The script file [setup0000_all](https://github.com/zombietimes/setup0000_all) is useful to set up the development environment.  
It consists of the external script files below.  
[setup0000_all](https://github.com/zombietimes/setup0000_all)  

### Environment
This script file is for Ubuntu(Linux).  
I recommend that you use VirtualBox + Ubuntu.  

## Usage
After setting up the development environment by [setup0000_all](https://github.com/zombietimes/setup0000_all),  
run `ubuntuCmd_setupDapp_helloZombies.sh` on Ubuntu console window.  
You can compile and deploy the sample contract by Truffle framwork.  
And then, you can access it on the blockchain  
through Express server from the browser.  

### Compile and deploy to Ganache
At first, we have to compile and deploy the smart contract.  
The role of `ubuntuCmd_setupDapp_helloZombies.sh` is below.  
- Copy the smart contract to Truffle project.
- Compile and deploy by using Truffle commands.
- Run Truffle console to Ganache(Ethereum private test network).
- Create Express project to run the smart contract through web server.
```sh
# Ubuntu commands.
git clone https://github.com/zombietimes/dapp_helloWorld.git
cd dapp_helloWorld
sh ./ubuntuCmd_setupDapp_helloZombies.sh
```
![dapp_helloWorld_0000.png]()  
After running Ganache, press the Enter key.  
![dapp_helloWorld_0001.png]()  
![dapp_helloWorld_0002.png]()  
![dapp_helloWorld_0003.png]()  
![dapp_helloWorld_0004.png]()  

### Truffle console to Ganache
The next step is the operation on Truffle console.  
Confirm to get and set a message.  
```sh
# Truffle commands.
HelloZombies.address
HelloZombies.deployed().then(ret=>instance=ret)
instance.Get().then()
instance.Set('If a zombie bites you').then()
instance.Get().then()
instance.Set('We are zombies.').then()
instance.Get().then()
.exit
```
![dapp_helloWorld_0005.png]()  
![dapp_helloWorld_0006.png]()  
![dapp_helloWorld_0007.png]()  
![dapp_helloWorld_0008.png]()  
![dapp_helloWorld_0009.png]()  
![dapp_helloWorld_0010.png]()  
![dapp_helloWorld_0011.png]()  

### Web server to Ganache
The next step is the operation on Ubuntu console.  
`to_helloZombies.js` is the sample code written by node.js.  
You can get and set a message by using it.  
```sh
# Ubuntu commands.
cd ~/dapps/deploy/by_truffle/accessor
node ./to_helloZombies.js
```
![dapp_helloWorld_0012.png]()  

### Browser to Web server to Ganache
The final step is web browsing.  
You can get and set a message by accessing to the web server.  
See the console window in the developer tool of the browser.  
```sh
# Ubuntu commands.
cd ~/dapps/web/by_express/helloZombies
node ./bin/www
```
```sh
# Browser.
http://127.0.0.1:3000
```
![dapp_helloWorld_0013.png]()  
![dapp_helloWorld_0014.png]()  

## Requirement
I confirmed that it works on Ubuntu Desktop 18.04 in VirtualBox.  
It works on the environment below.  
- On Ubuntu.
- Google Chrome.
- [setup0000_all](https://github.com/zombietimes/setup0000_all)

## Relative links
### Overview
[Ethereum : Official](https://www.ethereum.org/)  
[Ethereum : Wikipedia](https://en.wikipedia.org/wiki/Ethereum)  
[Loom Network : Official](https://loomx.io/)  
[Loom Network : Binance wiki](https://info.binance.com/en/currencies/loom-network)  

### Development
[Online editor : EthFiddle](https://ethfiddle.com/)  
[Online editor : Remix](https://remix.ethereum.org/)  

### Learning
[Online learning : CryptoZombies](https://cryptozombies.io/)  
[Grammar : Solidity](https://solidity.readthedocs.io/)  
[Grammar : Best Practices](https://github.com/ConsenSys/smart-contract-best-practices)  

### DApps
[DApps : CryptoKitties](https://www.cryptokitties.co/)  
[DApps : Zombie Battle ground](https://loom.games/en/)  

## Messages
Do you believe that the decentralized world is coming?  
When do you use [DApps](https://en.wikipedia.org/wiki/Decentralized_application)?  
Why?  

## License
BSD 3-Clause, see `LICENSE` file for details.  

---
Produced by Zombie Times  

