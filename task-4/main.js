const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
    
  
     function fibonacci(num){
        let n1 = 1, n2 = 2, nextStep;
        for(let i = 1;i<=num;i++){
            // console.log(i)
            // debugger;
            console.log(n1);
            nextStep = n1 + n2;
            n1 = n2;
            n2 = nextStep;
        }
       }
       fibonacci(10);
});
