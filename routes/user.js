

// router.use(function (req, res, next) {
//     // .. some logic here .. like any other middleware
//     next()
//   })

const router = require("express").Router();
const { userPages } = require("../views");

router.get('/', (req, res, next) => {
  try {
      res.send('testing')

  } catch (err) {
      console.log(err);
  }
});

router.get('/:id', (req, res, next) => {
  try {
      res.send('testing')

  } catch (err) {
      console.log(err);
  }
});

router.post('/', (req, res, next) => {
  try {

      res.send('testing')

  } catch (err) {

  }
})

router.put('/:id', async (req, res) => {
  res.send('testing');
})

router.delete('/:id', async (req, res) => {
  res.send(addPage());
})

module.exports = router;