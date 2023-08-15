const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./ratings.controller");
const notesRouter = require("../notes/notes.router")

router.use("/:ratingId/notes", controller.ratingExists, notesRouter)
router.route("/:ratingId").get(controller.read).all(methodNotAllowed);

router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;