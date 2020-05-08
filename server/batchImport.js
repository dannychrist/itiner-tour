'use strict'

const fs = require('file-system');
const venues = require('./data/venues.json')

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert')

const uri ="mongodb+srv://dannychrist:1234@cluster0-7mgdg.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const getVenues = async () => {
  try {
  await client.connect();
  const db = client.db('tour');
  const r = await db.collection('venues').insertMany(venues);

  assert.equal(venues.length, r.insertedCount);
  console.log('success');
  } catch (err) {
    console.log(err.stack);
  }

  client.close();
}

getVenues();