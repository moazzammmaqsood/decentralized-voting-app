export const ContractABI =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_cnic",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "_pin",
				"type": "uint32"
			}
		],
		"name": "ValidateVoter",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "candidateName",
				"type": "string"
			},
			{
				"internalType": "uint64",
				"name": "voteCount",
				"type": "uint64"
			},
			{
				"internalType": "uint32",
				"name": "index",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "_candidateid",
				"type": "uint32"
			}
		],
		"name": "getCandidateCount",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "candidateName",
						"type": "string"
					},
					{
						"internalType": "uint64",
						"name": "voteCount",
						"type": "uint64"
					},
					{
						"internalType": "uint32",
						"name": "index",
						"type": "uint32"
					}
				],
				"internalType": "struct Voting.Candidate",
				"name": "can",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCandidates",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "candidateName",
						"type": "string"
					},
					{
						"internalType": "uint64",
						"name": "voteCount",
						"type": "uint64"
					},
					{
						"internalType": "uint32",
						"name": "index",
						"type": "uint32"
					}
				],
				"internalType": "struct Voting.Candidate[]",
				"name": "can",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "populateVoters",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "_candidateid",
				"type": "uint32"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]