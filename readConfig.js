const YML = require('config-yml');

/*
try {
  let fileContents = fs.readFileSync('./sms-registration.yaml', 'utf8');
  let config = yaml.safeLoad(fileContents);

  console.log(config.domain);
} catch (e) {
  console.log(e);
}
*/

let [obj] = YML.bridges.filter(item => item.domain == "vinix.im")

console.log(obj.port);