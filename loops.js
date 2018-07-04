exports.spin = function(req,res){
    var loop = "";
    for(var i=1;i<=1000;i+=1){
        if(i%2 == 0) {
            loop = loop +  i + ", ";
        }
    }
    res.send(loop);
}