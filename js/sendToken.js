



    async function sendToken() {

        // 送信元のアドレス (Walletの作成手順にあるwallet.getAddress()のメソッドによって得られたaddress)     
        var fromAddress = $("#address").val();
        // 送信先のアドレス
        //var toAddress = $("#address_to").val();
        const toAddress  = prompt('送金先アドレス');
        var toContract = "0xac95624d677e3b26421a1c4f7bdac11855866307";
        // ガスプライス
        var gass_price = "0x" + Number($("#gass_price").val()).toString(16);
        // ガスリミット
        var gass_limit = "0x" + Number($("#gass_limit").val()).toString(16);

        // 著名付きトランザクションのnonce値として必要なため、送信元アドレスのTransaction countを取得する
        const count = await web3.eth.getTransactionCount(fromAddress);
        const countHex = `0x` + count.toString(16);
        
        //const money = "0x" + Number(web3.utils.toWei($('#money').val(),'ether')).toString(16);
        var inputValue = prompt('送金額');
        const money = "0x" + Number(web3.utils.toWei(inputValue,'ether')).toString(16);
        //console.log(money);  
        // 上記のWallet作成手順にある、wallet.getPrivateKeyString()によって得られた、Private keyの値を設定する
        const privateKeyStr = $("#private_key").val();
        let privateKey = new EthJS.Buffer.Buffer(privateKeyStr, 'hex');
        
        const functionAbi = contract.methods.transfer(toAddress,inputValue).encodeABI()

        
        // transactionのパラメータの設定
        const txParams = {
            nonce: countHex,
            // 適切なgasPriceとgasLimitを設定する
            gasPrice: gass_price,
            gasLimit: gass_limit,
            to: toContract,
            // 送金する金額
            //value: money
            data: functionAbi
        };
        console.log(txParams);
        web3.eth.estimateGas(txParams,function(error, result){
            console.log("gasLimit:");
            console.log(result);
        });
        // Transactionオブジェクトの生成
        const tx = new EthJS.Tx(txParams);
        // 秘密鍵での署名 
        tx.sign(privateKey);
        // Transactionオブジェクトをシリアライズして、16進数で表現
        const serializedTx = tx.serialize();
        const rawTx = '0x' + serializedTx.toString('hex');
        // 署名付きトランザクションの送信
        web3.eth.sendSignedTransaction(rawTx)
        .on('transactionHash', function(hash){
          console.log('transactionHash');
          //web3.eth.getTransaction(hash).then(alertJSON);
        });
        update();
    }
        /*.on('receipt', function(receipt){
          console.log('receipt');
        })
        .on('confirmation', function(confirmationNumber, receipt){
          console.log('confirmation');
        })
        .on('error', function(error){
          if (error.indexOf("Transaction was not mined within 50 blocks")) {
            return;
          }
          alert(error);
          console.log(error);
        }); 
    }*/
    
