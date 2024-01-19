const Session = require("../models/sessionModel.js");

const sessionController = {};

sessionController.isLoggedIn = async (req, res, next) => {
    try {
        console.log(">>> current userid in the res.locals.userid: ", res.locals.userid);
        const result = await Session.findOne({ cookieId: res.locals.userid });
        console.log(">>> currenst session record in the session model: ", result);
        if (result) {
            console.log(">>> currenst session is for the user: ", result);
        } else {
            console.log(">>> didnot find a corresponding userid in the session model.");
        }
        return next();
    }
    catch(err) {
        return next({
          log: "sessionControoler.isLoggedIn has error!",
          status: 500,
          message: { err: "sessionControoler.isLoggedIn has error" },
        });
    }    
}

sessionController.startSession = (req, res, next) => {
    console.log(res.locals.ssid);
    const currSession = new Session( {cookieId: res.locals.ssid });
    console.log(currSession);

    currSession
    .save()
    .then(next())
    .catch(err => {
        return next("Error in sessionController.startSession: " + JSON.stringify(err));
    })
}

module.exports = sessionController;