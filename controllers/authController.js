var authService = require("../services/authService");

const register = function(req,res){
    let register = authService.Register(req.body, function(err,result){
        if(err) res.send(err)
        else res.send(result)
    })
}

const login = function(req, res){
    let login = authService.Login(req.body, function(err, result){
        if(err)
           res.send(err)
        res.send(result);
    })
 }

const validate_token = function(req, res){
    let validate = authService.Validate(req.body.token,function(err, result){
        if(err)
            res.send(err.message);
        res.send(result);
    })
}

const simple_hello = function (req, res) {
    console.log(">>>>>>>>",req.body.test)
    res.send("Hello from our node server");
}

module.exports = {
    // register,
    // login,
    validate_token,
    simple_hello
}