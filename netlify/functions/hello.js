import { MongoClient } from 'mongodb'

//https://answers.netlify.com/t/fetching-mongodb-data-with-lambda-functions/11225 

const MONGO_URL = process.env.MONGO_URL;

async function getData() {
  const client = new MongoClient(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  try {
    await client.connect();
    const test = await client
      .db('my-waste')
      .collection('facilities')
      .find()
      .toArray();
    console.log('test', test)
    return test;
  } catch (err) {
    console.log(err); // output to netlify function log
  } finally {
    await client.close();
  }
}

export async function handler(event, context) {
  const data = await getData()
  console.log('event', event)
  console.log('context', context)
  console.log('data', data)
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch(e) {
    console.error('handler error', e)
  }
    
  };