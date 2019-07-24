var data = require("");

// routes
module.exports = function(app){
    app.get("#", function(req, res){
        res.json(#);
    });
    app.get("#", function(req, res){
        res.json(#);
    });

    app.post("#", function(req, res){
        if (#.length ){
            #.push(req.body);
            res.json(true);
        }
        else {
            #.push(req.body);
            res.json(false);
        }
    });

    app.pos("/clear", Function(req, res){
        #.length = 0;
        #.length = 0;
        res.json({ok: true});
    });
};