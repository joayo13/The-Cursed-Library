var express = require('express');
var router = express.Router();
const user_controller = require("../controllers/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource', req.user);
});
router.get('/:id', user_controller.user_get)

module.exports = router;
