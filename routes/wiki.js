const router = require("express").Router();
//const client = require("../db");
const { addPage } = require("../views");
const wikipage = require("../views/wikipage.js");
const { Page } = require("../models")
const main = require("../views/main.js");

router.get('/', async (req, res, next) => {
    try {
        const arrayOfPages = await Page.findAll();
        console.log(arrayOfPages);
        res.send(main(arrayOfPages));
    } catch (err) {
        console.log(err);
    }
});





    // ${pages.map(function(page){
    //     return "<li>" + `${page.title}` + "</li>";
    //   }).join('')}
  

router.post('/', async (req, res, next) => {
    console.log(req.body)
    const page = new Page({
        title: req.body.title,
        content: req.body.content,
        status: req.body.status
      });
    
    try {
        await page.save();
        res.redirect(`/wiki/${page.slug}`);

    } catch (err) {
        console.log(err);
    }
})

router.get('/add', async (req, res) => {
    res.send(addPage());
})

router.get('/:slug', async (req, res, next) => {
    try {
        const page = await Page.findOne({
            where: {
                slug: req.params.slug
            }
        });
        res.send(wikipage(page));
    } catch (err) { next(err)}
});

module.exports = router;