const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  //get description for a selected movie
  console.log(req.params.id);
  const queryText = `SELECT * FROM "movies_genres" WHERE "movies_id" = $1;`
  pool.query(queryText, [req.params.id])
  .then(result => {
    console.log(result.rows);
    res.send(result.rows)
  })
  .catch(err => {
    console.log('error in GET_DETAILS route', err);
    res.sendStatus(500)
    
  });
}) 

module.exports = router;