const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
  
  function primenum(num){
    primenum = true;
  for(let i = 2;i<num;i++){
    if(num%i==0){
      primenum = false;
      break;
    }
    else{
      primenum = true;
    }
  }
  if(primenum==true){
    console.log('Eded sadedir')
  }
  else{
    console.log('Eded sade deyildir');
    }
}
primenum(prompt());
  
});
