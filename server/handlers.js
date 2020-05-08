const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');

const getVenues = async (req, res) => {
  console.log('first step')
  const uri ="mongodb+srv://dannychrist:1234@cluster0-7mgdg.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
    const db = client.db('tour');
    db.collection('venues')
      .find()
      .toArray((err, data) => {
        console.log(data)
        if (data) res.status(200).send(data);
        else client.close();
      });
      res.status(200).send({ success: true });
}

const addUser = async (req, res) => {
  const uri ="mongodb+srv://dannychrist:1234@cluster0-7mgdg.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  let user = req.body
  const userId = user.sub.split('').splice(6).join('');
  console.log(userId)
  console.log(user)
  const userEmail = user.email;
  try
    {
    await client.connect();
    const db = client.db('tour')
    const result = await db.collection('users').findOne({_id: userId, email: userEmail})
    console.log(result)

    if (result === null) {
      const insertResult = await db.collection('users').insertOne({_id: userId, email: userEmail})
      console.log(insertResult)
      assert.equal(1, r.insertedCount);
      assert.equal(1, r.modifiedCount);

      res.status(200).json({
        message: 'Successfully added to the database',
        _id: userId,
        email: userEmail
      })
    } else {
      res.status(500).json({
        message: 'Email already exists!',
      })
    }
    } catch (err) {
    res.status(500).json({
      message: 'Failed to insert to mongo database',
    })
  }
}

// const updateTime = async (req, res) => {
//   const uri ="mongodb+srv://dannychrist:1234@cluster0-7mgdg.mongodb.net/test?retryWrites=true&w=majority";
//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   try {
//     await client.connect();
//     const db = client.db('tour')
//   }
// }

module.exports = { 
  getVenues,
  addUser,
};