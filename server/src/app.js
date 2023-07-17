//app.js
const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')['development']);
const cors = require('cors');
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Application up and Running.')
})

app.listen(port, () => {
  console.log('It is running yo.')
})

app.get('/movies', (req, res) => {
  knex('movie')
    .select('*')
    .then(data => {
      res.json(data)
    })
})

// app.post('/movies', (req, res) => {
//   const { title } = req.body;

//   knex('movie')
//     .insert({ title: title })
//     .returning('*')
//     .then(data => {
//       res.json(data);
//     })
//     .catch(error => {
//       res.status(500).json({ error: 'Failed to add the movie.' });
//     });
// });

// app.delete('/movies', (req, res) => {
//   const { id } = req.body;

//   knex('movie')
//     .where({ id: id })
//     .del()
//     .then(data => {
//       res.json({ message: 'Movie deleted successfully.' });
//     })
//     .catch(error => {
//       res.status(500).json({ error: 'Failed to delete the movie.' });
//     });
// });

// app.get('/movies', (req, res) => {
//   const { search } = req.query;

//   knex('movie')
//     .where('title', 'ilike', `%${search}%`)
//     .select('*')
//     .then(data => {
//       res.json(data);
//     })
//     .catch(error => {
//       res.status(500).json({ error: 'Failed to fetch movies.' });
//     });
// });

// app.put('/movies', (req, res) => {
//   const { id, watched } = req.body;

//   knex('movie')
//     .where({ id: id })
//     .update({ watched: watched })
//     .returning('*')
//     .then(data => {
//       res.json(data);
//     })
//     .catch(error => {
//       res.status(500).json({ error: 'Failed to update the movie.' });
//     });
// });
