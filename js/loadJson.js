function update(){
    
    getEther();
    getName("0xff3b93b50d3518596f7496e5ea49e929499546a4",1);
    getSymbol(1);
    getTokenBalance(1);
    getName("0xd661af81cd7ef5d8b30b858f6ae1548cad24db85",2);
    getSymbol(2);
    getTokenBalance(2);
}

$(function(){
        var reader;
        function onChange(event) {
            reader.readAsText(event.target.files[0]);   
        }
        function onLoad(event) {
            console.log(JSON.parse(event.target.result));
            var keyPass = prompt('パスワードを入力してください');
            var readKey = JSON.parse(event.target.result);
            var privateKey=keythereum.recover(keyPass, readKey);
            console.log(privateKey.toString('hex'));
            console.log(readKey.address);
            $("#private_key").val(privateKey.toString('hex'));
            $("#address").val('0x' + readKey.address);
            update();
        }

        reader = new FileReader();
        reader.onload = onLoad;

        $('input[type="file"]').on('change', onChange);
    });
    
