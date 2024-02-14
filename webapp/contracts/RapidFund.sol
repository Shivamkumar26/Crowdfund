// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract RapidFund {
    struct Campaign {
        address owner; // info of campaign creator
        string title; //name of campaign
        string description; //about campaign
        uint256 target; //amount
        uint256 deadline; //time deadline
        uint256 amountCollected; 
        string imageUrl; 
        address[] donators; //array of donators
        uint256[] donations; //array of funds
    }

    mapping(uint256 => Campaign) public campaigns; // so that we can use campaigns[0]

    uint256 public currentNumberOfCampaigns = 0;

    function createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _imageUrl) public returns (uint256) {
        Campaign storget campaign = campaigns[currentNumberOfCampaigns];

        //kind of check to see if everything is fine?
        require(campaign.deadline < block.timepstamp, "Enter a valid deadline.");

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.imageUrl = _imageUrl;

        currentNumberOfCampaigns++;

        // returning most recently added Campaign index
        return currentNumberOfCampaigns-1;
    }

    function donateToCampaign(uint256 _id) public payable {
        //payable means we will send cryptocurrency from this function

        uint256 amount = msg.value;
        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        (bool sent,) = payable(campaign.owner).call{value: amount}(" ");
        if(sent) {
            campaign.amountCollected = campaign.amountCollected + amount;
        }
    }

    function getDonators(uint256 _id) view public returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }
    
    function getCampaigns() view public returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](currentNumberOfCampaigns);

        for(uint i=0; i < currentNumberOfCampaigns; i++) {
            // Campaign storage item = campaigns[i];

            allCampaigns[i] = campaigns[i];
        }
        return allCampaigns;
    }
}