pragma solidity >=0.7.0 <0.9.0;


contract Voting {

   struct voter {
      string voterName;
      bool voted;
      string cnic;
      string age;
      string city;
      uint32 pin;
      address ballotAddress;
   }

    struct Candidate {
        string candidateName;
        uint64 voteCount ;
        uint32 index;
    }


    Candidate[] public candidates;
    mapping(string => voter) voters;
    uint64 totalVoter;


    constructor(){

        candidates.push(Candidate("PTI",0,1));
        candidates.push(Candidate("PPP",0,2));
        candidates.push(Candidate("PMLN",0,3));
        candidates.push(Candidate("JUI",0,4));
  
      
    }

    function  populateVoters() external{
        addVoter( "Ahmed", "4220136738369",1234);
        addVoter( "Moazzam", "6110123148997",2342);
        addVoter( "Hassan", "4640145879658",2412);
        addVoter( "Ali", "4221025478963",2211);
    }

    function addVoter(  string memory _voterName, string memory _cnic , uint32 _pin)private {
        voter memory v;
        v.voterName = _voterName;
        v.cnic = _cnic;
        v.voted = false;
        v.pin = _pin;
        v.ballotAddress = msg.sender;
        voters[_cnic] = v;
        totalVoter++;
    }


    function ValidateVoter(string memory _cnic , uint32 _pin ) public view returns (bool) {
       require(voters[_cnic].ballotAddress== msg.sender,"You dont belong to this address");
        if(voters[_cnic].pin == _pin) {
            return true;
            }
        else {
            return false;
            }
    }

    function vote(uint32   _candidateid) external {
        Candidate memory can = candidates[_candidateid];
        can.voteCount++;
        candidates[_candidateid]=can;
    }

    function getCandidateCount(uint32   _candidateid)public view  returns(Candidate memory can)
    {
        return candidates[_candidateid];
    }


      function getCandidates()public view  returns(Candidate[] memory can)
    {
        return candidates;
    }


}