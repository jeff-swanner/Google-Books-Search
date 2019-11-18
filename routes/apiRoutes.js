const router = require("express").Router();
const booksController = require("../controllers/booksController");

router.route("/books")
  .get(booksController.findAll)
  .post(booksController.save);

router
  .route("/books/:id")
  .delete(booksController.remove);

module.exports = router;
