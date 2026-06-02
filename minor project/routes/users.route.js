const express = require('express');
const { getAllUser, getAllUserById, insertUser, updateUser, deleteUser, checkLogin } = require('../services/users.service');
const { authMiddleware } = require('../middlewares/auth.middleware');
const router = express.Router();

router.use(authMiddleware);

router.get('/',async (req,res) => {
    const data = await getAllUser();
    res.send(data)
});

router.get('/:id',async (req,res) => {
    const data = await getAllUserById(req.params.id);
    res.send(data);
});

//insert
router.post('/',async (req,res) => {
    const data = await insertUser(req.body);
    res.send(data)
});

//login
router.post('/login',async (req,res) => {
    const data = await checkLogin(req.body);
    res.send(data)
});

router.patch('/:id', async(req,res) => {
    const data = await updateUser(req.params.id, req.body);
    res.send(data);
});

router.delete('/:id', async (req,res) => {
    const data = await deleteUser(req.params.id);
    res.send(data);
});

module.exports = router;