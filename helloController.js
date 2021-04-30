exports.getWorld = function(req,res){
    res.json({result: 'Hello Wrold from Controller'});
}

exports.getWorldParams = function(req,res){
    res.json({message: 'RESTful API with Node.js: Interactive Web Application,CA1 seeking out CA2 ', data: [
        req.params.foo,
        req.params.bar
    ]});
};

exports.postWorld = function(req,res){
    res.json({result: 'Post was sent', data: req.body});
};