const handler = require('./dbTesting');
const redis = require('redis');
const redisClient = redis.createClient({host : 'localhost', port : 6379});

redisClient.on('ready',function() {
  console.log("Redis is ready");
 });
 
 redisClient.on('error',function() {
  console.log("Error in Redis");
 });

 const saveInLocalStorage = (key,value)=>{
    return new Promise((resolve, reject)=>{
      let valueToStore = JSON.stringify(value);
      redisClient.set(key,valueToStore,(err,result)=>{
        if(err)
          reject(err);
        resolve(result);
      })
    })
 };
//Life Saver : https://medium.com/javascript-in-plain-english/converting-javascript-callbacks-to-promise-and-async-await-replacing-async-waterfall-method-with-3c8b7487e0b9
 const getFromLocalStorage = (key) =>{
   return new Promise((resolve,reject)=>{
     redisClient.get(key,(err,vals)=>{
       if(err)
        reject(err);
      let values = JSON.parse(vals);
      resolve(values);
     })
   });
 }

 const initLocalStorage = () =>{
  return new Promise((resolve, reject) => {
    (async ()=>{
      try{
        let result = await handler.getAllRooms();
        await saveInLocalStorage("rooms",result);
        let currentValues = await getFromLocalStorage("rooms"); 
        resolve(currentValues);
      }catch(e){
        console.error(`ERROR[initLocalStorage] ${JSON.stringify(e)}`)
        reject(e);
      }
    })()
  });
  }

module.exports = {saveInLocalStorage,getFromLocalStorage,initLocalStorage}