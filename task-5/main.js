const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
  
  function maxnum(a,b,c,d){
    if(a>b && a>c && a>d){
        console.log(a);
    }
    else if(b>a && b>c && b>d){
        console.log(b);
    }
    else if(c>a && c>b && c>d){
        console.log(c);
    }
    else if(d>a && d>c && d>b){
        console.log(d);
    }
}

maxnum(1,2,3,4);
  
});
