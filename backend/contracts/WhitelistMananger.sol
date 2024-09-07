// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;



// @dev This contract manages the whitelist. We are separating the whitelist logic from the hook to make things easier
// to read.
contract WhitelistMananger  {
    mapping(address => bool ) public whitelist;

    error UnauthorizedAttester();

    constructor() { }

    function setWhitelist(address attester, bool allowed) external  {
        whitelist[attester] = allowed;
    }

    function _checkAttesterWhitelistStatus(address attester) internal view {
        if(whitelist[attester] == false) revert UnauthorizedAttester();
    }
}
