const sol = artifacts.require('HelloZombies.sol');
contract('HelloZombies', function (accounts){
  it("Get() : Get the default value.",async()=>{
    const instance = await sol.deployed();
    const value = await instance.Get();
    assert.equal(value,"I am a zombie.","The value is not correct.");
  });
  it("Set() : Set the value.",async()=>{
    const instance = await sol.deployed();
    const tx = await instance.Set("We are zombies.");
  });
  it("Get() : Get the value again.",async()=>{
    const instance = await sol.deployed();
    const value = await instance.Get();
    assert.equal(value,"We are zombies.","The value has not changed yet.");
  });
});

