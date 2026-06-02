const express = require("express");
const { getAllMovies, getByIdMovies, insertMovie, updateMovie, deleteMovie, checkLogin } = require("../services/movies.service");
const { authMiddleware } = require("../middlewares/auth.middleware");
const router = express.Router();

router.use(authMiddleware);

router.get("/", async (req, res) => {
  const data = await getAllMovies();
  res.status(data.statusCode).send(data);
});

router.get("/:id", async (req, res) => {
    const data = await getByIdMovies(req.params.id);
    res.status(data.statusCode).send(data);
});

router.post("/", async (req,res) => {
  const data = await insertMovie(req.body);
  res.status(data.statusCode).send(data);
});

//login
router.post('/login', async (req,res) => {
  const data = await checkLogin(req.body);
  res.send(data);
})

router.patch("/:id", async (req,res) => {
  const data = await updateMovie(req.params.id, req.body);
  res.status(data.statusCode).send(data);
});

router.delete("/:id", async (req,res) => {
  const data = await deleteMovie(req.params.id);
  res.status(data.statusCode).send(data)
})

module.exports = router;
