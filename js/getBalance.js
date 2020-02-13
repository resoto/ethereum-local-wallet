function getEther(){
	web3.eth.getBalance($("#address").val(),function(error, result){
		console.log(result.toString());
		$('#tableBalance tbody tr').eq(0).children('td').eq(2).text(web3.utils.fromWei(result.toString(), 'ether'));
	});
}
