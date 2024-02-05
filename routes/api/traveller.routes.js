const router = require('express').Router();
const Traveller = require('../../models/Traveller');

// GET ALL (async/await)
router.get('/', async (req, res) => {
  const bookData = await Traveller.findAll()
  res.json(bookData);
});

// GET BY ID (async/await)
router.get('/:id', async (req, res) => {
  const bookData = await Traveller.findByPk(req.params.id)
  res.json(bookData);
});

// CREATE (async/await)
router.post('/', async (req, res) => {
  try {
    const bookData = await Traveller.create(req.body)
    res.json(bookData);
  } catch( err ) {
    res.status(500).json({ error: err.message })
  }
});

// UPDATE (async/await)
router.put('/:isbn', async (req, res) => {
  try {
    const updatedBook = await Traveller.update(
      req.body, 
      {
        where: {
          isbn: req.params.isbn
        }
      }
    )
    res.json(updatedBook)
  } catch( err ){
    res.status(500).json({ error: err.message })
  }
})

// DELETE (async/await)
router.delete('/:id', async (req, res) => {
  try {
    await Traveller.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.json({ status: "ok" })
  } catch( err ){
    res.status(500).json({ error: err.message })
  }
})


module.exports = router;