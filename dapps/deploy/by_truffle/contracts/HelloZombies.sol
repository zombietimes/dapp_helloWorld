pragma solidity >=0.5.0;

contract HelloZombies {
  string s_value = "I am a zombie.";
  function Get() external view returns (string memory) {
    return s_value;
  }
  function Set(string calldata value) external {
    s_value = value;
  }
  function SetP(string memory value) public {
    s_value = value;
  }
}

