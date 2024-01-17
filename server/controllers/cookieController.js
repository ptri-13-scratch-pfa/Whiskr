const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
    res.cookie("ssid", res.locals.userid);
    console.log(">>> cookie is all set: ", res.locals.userid);
    return next();
}

module.exports = cookieController;