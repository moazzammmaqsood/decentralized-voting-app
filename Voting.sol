pragma solidity ^0.6.0;

contract Ballot {
    
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

   uint private countResult = 0;
   uint public finalResult = 0;
   uint public totalVoter = 0;
   uint public totalVote = 0;

   address public ballotOfficialAddress;
   string public ballotOfficialName;

   mapping(uint => vote) private votes;
   mapping(address => voter) public voterRegister;
   enum State { Created, Voting, Ended }

   State public state;

    // MODIFIERS
    modifier condition(bool _condition) {
      require(_condition);
    }
    modifier onlyOfficial() {
      require(msg.sender == ballotOfficialAddress);
    }
    modifier inState(State _state) {
      require(state == _state);
     }

   // FUNCTIONS
   constructor(
      string memory _ballot0fficialName,
      string memory _proposal
   )
   {
       ballotOfficialAddress = msg.sender;
       ballotofficialName = _ballot0fficialName;
       proposal = _proposal;
       state = State.Created;
   }

   function addVoter(string memory name, string memory cnic, string memory age, string memory region, string memory city, string memory country){
   public
   inState(State.Created)
   onlyOfficial

   }
   function startVote(){
   }
   function doVote(){
   }
   function endVote(){
   }

   function  addCandidate(string memory name,string memory symbolUrl, string memory region ,string memory city , string memory country  ) public {
       candidates[count] = Candidate(count ,name,symbolUrl,region,city,country);
   }  
 
}