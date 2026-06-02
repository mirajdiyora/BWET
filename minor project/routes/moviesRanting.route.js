const express = require('express');
const { getAllRating, getByIdRating, insertRating, updateRating, deleteRating, checkLogin } = require('../services/moviesRating.service');
const router = express.Router();

router.get("/", async (req, res)=>{
    const data = await getAllRating();
    res.status(data.statusCode).send(data);
});

router.get("/:id",  async (req, res)=>{
    const data = await getByIdRating(req.params.id);
    res.status(data.statusCode).send(data);
});

//login
router.post('/login', async (req,res) => {
  const data = await checkLogin(req.body);
  res.send(data);
})

router.post("/",  async (req, res)=>{
    const data = await insertRating(req.body);
    res.status(data.statusCode).send(data);
});

router.get("/:id",  async (req, res)=>{
    const data = await updateRating(req.params.id, req.body);
    res.status(data.statusCode).send(data);
});

router.get("/:id",  async (req, res)=>{
    const data = await deleteRating(req.params.id);
    res.status(data.statusCode).send(data);
});

module.exports = router;