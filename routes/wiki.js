const router = require("express").Router();
//const client = require("../db");
const { addPage } = require("../views");



router.get('/', (req, res, next) => {
    try {
        res.send()

    } catch (err) {

    }
});

router.post('/', (req, res, next) => {
    try {
        res.send()

    } catch (err) {

    }
})

router.get('/add', async (req, res) => {
    res.send(addPage());
})


module.exports = router;