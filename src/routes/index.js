const express = require('express');
const router = express.Router();

const userRoutes = rquire("./../domains/user")

router.use("/user", userRoutes);

module.exports = router;