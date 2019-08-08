const router = require("express").Router();
//const client = require("../db");
const { addPage } = require("../views");
const { Page } = require("../models")


router.get('/', (req, res, next) => {
    try {
        res.send('testing')

    } catch (err) {
        console.log(err);
    }
});

router.post('/', async (req, res, next) => {
    console.log(req.body)
    const page = new Page({
        title: req.body.title,
        content: req.body.content,
        status: req.body.status
      });
    
    try {
        await page.save();
        res.redirect('/');

    } catch (err) {
        console.log(err);
    }
})

router.get('/add', async (req, res) => {
    res.send(addPage());
})


module.exports = router;