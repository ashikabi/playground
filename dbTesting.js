const db = require('./db/db');
const {store} = require('./db/definitions/tables');

const getAllRooms = () =>{
    return new Promise((resolve, reject)=>{
      (async () => {
        let columns = store.columns.join(",");  
        let query = `SELECT ${columns} FROM ${store.table} WHERE ${store.where} ORDER BY created DESC;`;
        try{
          let conn = await db.getConnection();
          conn.query(query, (error, rows) => {
            if(error){
              console.error(`ERROR[getAllRooms] ::::: ${JSON.stringify(error)}`);
              reject(error)
            }
            console.log(`retrieving all the rooms`);
            conn.release();
            resolve(rows);
          });
        }catch(e){
          conn.release();
          console.error(`ERROR[getAllRooms] ::::: ${JSON.stringify(e)}`);
          reject(e);
        }
      })()
    });
};

/*
example: 
data = {
  domain: "vinix.im",// for now vinix, but eventually will be reading from kazoo API
  room_id: "!MvbCXesJCSGoFBLbcJ:vinix.im",
  from_number: "+13053315999",
  to_number: "+13053315999".
  invited_users: "['mdiaz','jartiga']",// the array should be convert to text with JSON.stringify
  kazoo_id: "901823918239810923809"// AccountId getting from kazooApi.getAccountId
}
*/
const addRoom = async (data) =>{
  return new Promise((resolve, reject) => {
    (async () => {
      let columns = store.columns;
      columns.shift();//removing column id
      let values = columns.map((colName) => data[colName]);
      let valuesToInsert = "";
      values.forEach((val) => {
        valuesToInsert += `'${val}',`
      });
      valuesToInsert += `now()`;
      columns = columns.join(",");
      columns += ',created';
      let query = `INSERT INTO ${store.table} (${columns}) VALUES(${valuesToInsert});`
        try{
          let conn = await db.getConnection();
        conn.query(query, (error, result) => {
            if(error){
              console.error(`ERROR[addRoom] ::::: ${JSON.stringify(error)}`);
              reject(error);
            }
            conn.release();
            data.id = result.insertId;
            resolve(data);
          });
        }catch(e){
          conn.release();
          console.error(`ERROR[addRoom] ::::: ${JSON.stringify(e)}`);
          reject(e);
        }
    })()
  });
  };

  module.exports = {getAllRooms,addRoom}