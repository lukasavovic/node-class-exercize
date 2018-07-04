exports.integerReturn = function(req, res){
    
    if(Number.isInteger(parseInt(req.params.id))){
       res.send(req.params.id);     
    }
}
