const express = require('express');
const router = express.Router();
const register = require('./functions');
const validate = require('./../../middlewares/validateFields');

router.post('/', [validate.validateRegister, register.add]);

module.exports = router;