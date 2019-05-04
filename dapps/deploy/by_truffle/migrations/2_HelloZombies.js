const sol = artifacts.require("./HelloZombies.sol");
module.exports = function(deployer) {
  deployer.deploy(sol);
};

