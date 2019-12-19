const router = require("express").Router();
const bookRoutes = require("./books");


router.use("/book",bookRoutes);


module.exports = router;

