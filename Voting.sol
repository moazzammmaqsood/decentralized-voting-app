// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Ballot {

   address public ballotOfficialAddress;
   string public ballotOfficialName;
   string public proposal;
   uint public totalVoter = 0;
   uint public totalVote = 0;
   uint public candidateCount;
   string public winner;

   // ENTITIES
   struct voter {
      string voterName;
      bool voted;
      string cnic;
      string age;
      string city;
   }

   struct vote {
      address voterAddress;
      bool choice;
      uint candidateId;
   }

   struct Candidate{
      uint id;
      string name;
      uint voteCount;
   }

   // MAPPINGS
   mapping (uint => Candidate) public candidates;
   mapping(uint => vote) private votes;
   mapping(address => voter) public voterRegister;

   // STATES
   enum State { Created, Voting, Ended }
   State public state;

   // EVENTS
   event eventVote(
      uint indexed _candidateid
   );

   // MODIFIERS
   modifier condition(bool _condition) {
      require(_condition);
      _;
   }
   modifier onlyOfficial() {
      require(msg.sender == ballotOfficialAddress);
      _;
   }
   modifier inState(State _state) {
      require(state == _state);
      _;
   }

   // FUNCTIONS
   constructor(string memory _ballotOfficialName, string memory _proposal){
      ballotOfficialAddress = msg.sender;
      ballotOfficialName = _ballotOfficialName;
      proposal = _proposal;

      addCandidate("PTI");
      addCandidate("PPP");
      addCandidate("MQM");
      addCandidate("PML-N");

      addVoter(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2, "Ahmed", "4220136738369");
      addVoter(0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db, "Moazzam", "4250121547896");
      addVoter(0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB, "Hassan", "4640145879658");
      addVoter(0x17F6AD8Ef982297579C203069C1DbfFE4348c372, "Ali", "4221025478963");

      state = State.Created;
   }

   function addCandidate(string memory _name) private {
      candidateCount++;
      candidates[candidateCount] = Candidate(candidateCount, _name, 0);
   }

   function addVoter(address _voterAddress, string memory _voterName, string memory _cnic)private {
      voter memory v;
      v.voterName = _voterName;
      v.cnic = _cnic;
      v.voted = false;
      voterRegister[_voterAddress] = v;
      totalVoter++;
   }

   function startVote()
   public
   inState(State.Created)
   onlyOfficial
   {
      state = State.Voting;
   }

   function voteCandidate(uint _candidateid)
   public
   inState(State.Voting)
   {
      if (bytes(voterRegister[msg.sender].voterName).length != 0 &&
      _candidateid > 0 &&
      _candidateid <= candidateCount &&
      !voterRegister[msg.sender].voted
      )
      {
         voterRegister[msg.sender].voted = true;
         candidates[_candidateid].voteCount++;

         emit eventVote(_candidateid);

         Candidate memory c;
         c.voteCount++;
         vote memory v;
         v.voterAddress = msg.sender;
         votes[totalVote] = v;
         totalVote++;
      }
   }

   function endVote()
   public
   inState(State.Voting)
   onlyOfficial
   {
      state = State.Ended;
      winner = '';
      uint max = candidates[0].voteCount;
      uint maxIndex = 0;
      for(uint i = 1; i<= candidateCount; i++) {
         if (candidates[i].voteCount > max) {
            maxIndex = i;
            max = candidates[i].voteCount;
         }
      }
      winner = candidates[maxIndex].name;
   }

   // function getVoterAddressByCnic(string memory _cnic) private inState(State.Voting) onlyOfficial returns(address voterAddress){
   //     address currentVoterAddress;

   //     for(uint i=1; i<totalVoter; i++) {
   //         if (voterRegister[i].cnic == _cnic){
   //             currentVoterAddress = voterRegister[i].voterAddress;
   //         }
   //     }
   //     return currentVoterAddress;
   // }
}

