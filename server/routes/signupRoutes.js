const router = require("express").Router();
const path = require("path");
const userController = require("../controllers/userController");

router.post("/", userController.createUser, (req, res) => {
    return res.status(400);
});

router.post("/adopter", userController.createAdopter, (req, res) => {
    return res.status(200);
});

router.post("/cat", userController.createCat, (req, res) => {
    return res.status(200).json("succussfully");
});


module.exports = router;
