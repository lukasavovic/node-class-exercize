exports.execute = function(req,res){
    var fizbiz = '';
    for(var i = 1; i<100;i+=1){
        if(i%15 == 0){
            fizbiz += "FizzBuzz,"
        } else if(i%5 == 0){
            fizbiz += "Buzz,";
        } else if(i%3 == 0) {
            fizbiz += "Fuzz,"
        }
        fizbiz = fizbiz + i + "<br>";
    }
    res.send(fizbiz);
}