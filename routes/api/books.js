const router = require("express").Router();
const booksController = require("../../controllers/booksController");


// MATCHES with /api/movie
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);


// MATCHES with /api/movie/:id
router.route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;
