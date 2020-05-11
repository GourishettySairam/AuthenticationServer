const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// assert is used to check true or false values

const url = 'mongodb://localhost:27017/';
const dbname = 'Authentication'

MongoClient.connect(url,(err,client)=>{
  assert.equal(err,null);
  console.log('connected correctly to server');

  const db = client.db(dbname);
  const collection = db.collection('UserDetails');
  collection.insertOne({"name":"admin","password":"password"},(err,res)=>{
    assert.equal(err,null);

    console.log('After insert')
    console.log(res.ops);
    collection.find({}).toArray((err,docs)=>{
      assert.equal(err,null);
      console.log('found');
      console.log(docs);

      db.dropCollection('UserDetails', (err,res)=>{
        assert.equal(err,null);
        client.close();
      })

    })
  })
})
