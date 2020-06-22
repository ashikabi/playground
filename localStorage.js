const handler = require('./dbTesting');
const redis = require('redis');
const redisClient = redis.createClient({host : 'localhost', port : 6379});

redisClient.on('ready',async ()=> {
  console.log("Redis is ready");
  await initLocalStorage();
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

 const initLocalStorage = async () =>{
      try{
        let result = await handler.getAllRooms();
        console.log(`DB total rooms : ${result.length}`);
        await saveInLocalStorage("rooms",result);
      }catch(e){
        console.error(`ERROR[initLocalStorage] ${e}`)
      }
  }

module.exports = {saveInLocalStorage,getFromLocalStorage,initLocalStorage}