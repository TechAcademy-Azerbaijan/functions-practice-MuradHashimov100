const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
  
      function numberPow(num){
            let pow = 1;
            for(let i = 1;i<num;i++){
               if(i**2 <num){
                pow = i ** 2;
                console.log(pow);
               }
            }
        }
        numberPow(20);
  
});
