$('#addButton2').on('click', function() {
	addToken("index2");
});
$('#delButton2').on('click', function() {
	delToken("index2");
});

$('#addButton3').on('click', function() {
	addToken("index3");
});
$('#delButton3').on('click', function() {
	delToken("index3");
});

$('#addButton4').on('click', function() {
	addToken("index4");
});
$('#delButton4').on('click', function() {
	delToken("index4");
});

$('#addButton5').on('click', function() {
	addToken("index5");
});
$('#delButton5').on('click', function() {
	delToken("index5");
});

function addToken(index){
	var contractAddress = prompt("コントラクトアドレスを入力してください！");
	localStorage.setItem(index, contractAddress);
}
function delToken(index){
	localStorage.removeItem(index);
}


const abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "allowed",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];


var  tokenAddress1 = "0xff3b93b50d3518596f7496e5ea49e929499546a4";
var  tokenAddress2 = "0xd661af81cd7ef5d8b30b858f6ae1548cad24db85";


var contract; //=  new web3.eth.Contract(abi,tokenAddress);
//contract.methods.balanceOf($("#address").val()).call().then(console.log);

function getName(tokenAddress,index){
	contract =  new web3.eth.Contract(abi,"0xac95624d677e3b26421a1c4f7bdac11855866307");
	contract.methods.name().call(function(error, result){
		$('#tableBalance tbody tr').eq(index).children('td').eq(0).text(result);
		const functionAbi = contract.methods.transfer("0x821674f4452f1f02776ec0d6f2b4b843bd5e62f9",100).encodeABI()
		//var data = contract.transfer.getData("0x821674f4452f1f02776ec0d6f2b4b843bd5e62f9",100);
	});
}
function getSymbol(index){
	contract.methods.symbol().call(function(error, result){
		$('#tableBalance tbody tr').eq(index).children('td').eq(1).text(result);
	});
}
function getTokenBalance(index){
	contract.methods.balanceOf($("#address").val()).call(function(error, result){
		$('#tableBalance tbody tr').eq(index).children('td').eq(2).text(result);
	});
}
