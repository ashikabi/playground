const ls = require('./localStorage');
const handler = require('./dbTesting');


const mainStuff = async () =>{

  let actualValues = await ls.getFromLocalStorage("rooms");
  console.log("mainstuff.............");
  console.log(actualValues);
/*
 let data = {
    domain: "artiga.im",// for now vinix, but eventually will be reading from kazoo API
    room_id: "!MvbCXesJCSGoFBLbcJ:vinix.im",
    from_number: "+13053315999",
    to_number: "+13053315999",
    invited_users: JSON.stringify(['mdiaz','jartiga','beto']),
    kazoo_id: "901823918239810923809"// AccountId getting from kazooApi.getAccountId
  }

  let result = await handler.addRoom(data);

  console.log("The following item was added...");
  console.log(result);

  let allValues = await handler.getAllRooms();
  console.log("getting all the values...");
  console.log(allValues)
*/
  
};

mainStuff();