exports.handler = async (event, context) => {
  console.log('event', event)
  console.log('context', context)
    return {
      statusCode: 200,
      body: `${process.env.MONGO_URL}`
    };
  };