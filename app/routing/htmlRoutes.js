module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "app/pulbic/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "app/pulbic/survey.html"));
    });
}