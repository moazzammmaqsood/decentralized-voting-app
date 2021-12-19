pragma solidity ^0.6.0;

contract Voting {
    
     struct Voter {
      //   address account;
        string name; 
        string cnic;
        string age;
        string region;
        string city;
        string country;
        Candidate candidate
    }

   struct Candidate{
      uint32 candidateId;
      string name;
      string symbolUrl;
      string region;
      string city;
      string country;
   }
   
    mapping (uint32 => Candidate) public  candidates;

   uint32 count=0;
   function  addCandidate(string memory name,string memory symbolUrl, string memory region ,string memory city , string memory country  ) public {
       candidates[count] = Candidate(count ,name,symbolUrl,region,city,country);
   }  
 
}