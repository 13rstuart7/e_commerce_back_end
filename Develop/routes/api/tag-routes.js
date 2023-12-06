const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const tag = await Tag.findAll()
    res.json(tag)
  } catch(err){
    res.json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one tag by its `id` value
  // be sure to include its associated Products
  try{
    const tag = await Tag.findAll({
      where:{id:req.params.id}
    })
    res.json(tag)
  } catch(err){
    res.json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const tag = await Tag.create(req.body)
    res.json(tag)
  } catch(err){
    res.json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag by its `id` value
  try{
    const tag = await Tag.update(req.body,{
      where:{id:req.params.id}
    })
    res.json(tag)
  } catch(err){
    res.json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a tag by its `id` value
  try{
    const tag = await Tag.destroy({
      where:{id:req.params.id}
    })
    res.json(tag)
  } catch(err){
    res.json(err)
  }
});

module.exports = router;
