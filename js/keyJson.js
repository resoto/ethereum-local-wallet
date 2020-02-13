$('#check').on('click', function() {
	var key = prompt('paste keystore(json_string)');
    var keyObj = JSON.parse(key);
    var password = prompt('password?');
    var privateKey=keythereum.recover(password, keyObj);
   
    console.log(privateKey.toString('hex'));
    console.log(keyObj.address);
    $("#private_key").val(privateKey.toString('hex'));
    $("#address").val('0x' + keyObj.address);
});

$('#check2').on('click', function() {
	var inputAddress = prompt('addressを入力してください');
	var inputPrivate = prompt('private keyを入力してください');
    $("#private_key").val(inputPrivate.toString('hex'));
    $("#address").val(inputAddress);
    getEther();
});

$('#go').on('click', function() {
    sendEther();
});
$('#go2').on('click', function() {
    sendToken();
});
$('#update').on('click', function() {
    update();
});