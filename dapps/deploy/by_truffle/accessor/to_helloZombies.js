// This script is for node.js.

(async function (){
  const accessor = require('./accessor_web3_server.js');

  const contractName = "HelloZombies";
  const instance = await accessor.GetContract(contractName);
  console.log(contractName);

  let val = await instance.methods.Get().call();
  console.log(val);
  let tx = await instance.methods.Set("If a zombie bites you,").send();
  // console.log(tx);
  val = await instance.methods.Get().call();
  console.log(val);
  tx = await instance.methods.Set("We are zombies.").send();
  // console.log(tx);
  val = await instance.methods.Get().call();
  console.log(val);
})();
