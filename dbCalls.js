const ls = require('./localStorage');


const mainStuff = async () =>{

  let actualValues = await ls.initLocalStorage();
  console.log("mainstuff.............");
  console.log(actualValues);

};

mainStuff();