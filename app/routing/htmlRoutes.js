var path = require("path");

// routes
module.exports = function (app) {
    app.get("*", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/home.html"));
    });
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/survey.html"));
    });

};