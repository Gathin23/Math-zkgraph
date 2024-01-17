// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract ZKMath {

    uint256 public calculatedValue;

    event Add(uint256 indexed a, uint256 indexed b);
    event Sub(uint256 indexed a, uint256 indexed b);
    event Mul(uint256 indexed a, uint256 indexed b);
    event Div(uint256 indexed a, uint256 indexed b);
    event Mod(uint256 indexed a, uint256 indexed b);
    event Min(uint256 indexed a, uint256 indexed b);
    event Max(uint256 indexed a, uint256 indexed b);
    event Sqrt(uint256 indexed a);


    function run(uint256 value) external {
        calculatedValue = value;
    }

    function add(uint256 a, uint256 b) external {
        emit Add(a, b);
    }

    function sub(uint256 a, uint256 b) external {
        emit Sub(a, b);
    }

    function mul(uint256 a, uint256 b) external {
        emit Mul(a, b);
    }

    function div(uint256 a, uint256 b) external {
        require(b > 0, "Division by zero");
        emit Div(a, b);
    }

    function mod(uint256 a, uint256 b) external {
        require(b > 0, "Modulo by zero");
        emit Mod(a, b);
    }

    function min(uint256 a, uint256 b) external {
        emit Min(a, b);
    }

    function max(uint256 a, uint256 b) external {
        emit Max(a, b);
    }

    function sqrt(uint256 a) external {
        emit Sqrt(a);
    }
}
