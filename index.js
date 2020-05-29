

let employees = [{name: "Jonathan Joestar", position: "Backend", age: 31},
                 {name: "George Joestar", position: "Frontend", age: 21},
                 {name: "Joseph Joestar", position: "Fullstack", age: 25},
                 {name: "Holy Joestar", position: "QA", age: 25},
                 {name: "Jotaro Joestar", position: "tester", age: 24},
                 {name: "Josuke Joestar", position: "UAT", age: 34},
                 {name: "Speedwagon", position: "Backend", age: 41},
                 {name: "Dio", position: "QA", age: 36},
                 {name: "Avdol", position: "Fullstack", age: 28},
                 {name: "Jose Joestar", position: "Backend", age: 23},
                 {name: "Chepe Joestar", position: "Backend", age: 31},
                 {name: "Robert Joestar", position: "Fronted", age: 30},
                 {name: "Ambar Joestar", position: "Backend", age: 29},
                 {name: "Khalesi Joestar", position: "QA", age: 27}];

let orderByAge = employees.sort((a,b) => a.age > b.age? 1:-1);

console.log(orderByAge);

let bk = employees.reduce((acc,cc) => cc.position=="Backend"? acc += cc.age : acc,0);
let ft = employees.reduce((acc,cc) => cc.position=="Frontend"? acc += cc.age : acc,0);
let fs = employees.reduce((acc,cc) => cc.position=="Fullstack"? acc += cc.age : acc,0);
let qa = employees.reduce((acc,cc) => cc.position=="QA"? acc += cc.age : acc,0);
let tst = employees.reduce((acc,cc) => cc.position=="tester"? acc += cc.age : acc,0);
let uat = employees.reduce((acc,cc) => cc.position=="UAT"? acc += cc.age : acc,0);

console.log(bk);

let older = employees.reduce((a,b) => b.age>a? b.age : a ,0);

console.log(older);

bk =  bk / employees.filter((item)=> item.position=="Backend").length;
ft =  ft / employees.filter((item)=> item.position=="Frontend").length;
fs =  fs / employees.filter((item)=> item.position=="Fullstack").length;
qa =  qa / employees.filter((item)=> item.position=="QA").length;
tst =  tst / employees.filter((item)=> item.position=="tester").length;

let total = {backend: bk,  
             frontend: ft,
             fullstack: fs,
             QA: qa,
             tester: tst,
             UAT: uat};


    
//console.log(total);


let originalText = "Hello World";

let invertedText = originalText.split("")
                               .map((letter) => letter==letter.toUpperCase()? letter.toLowerCase():letter.toUpperCase());

console.log(invertedText.join(""));


const xxx = {delta : 0,
             tetta : 0}

xxx.delta = 3.14;
xxx.tetta = 6.28;
xxx.z = 9;

//console.log(xxx);

let videoSegments = ['video1.mp4','video2.mp4','video3.mp4','video5.mp4']

let result = videoSegments.join('|')

console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::")
console.log(result)


let version = '1.6.1'

console.log(`....................${version.slice(1)}.........................`)

const ta = {kpArray: []};
 //ta.kpArray = [];
let room = 9
let phonenumber = '72201157'

ta.kpArray.push({room, phonenumber})

room = 2
phonenumber = '75211759'

ta.kpArray.push({room, phonenumber})

room = 1
phonenumber = '75211760'

ta.kpArray.push({room, phonenumber})


console.log(" . . . .. .  . . . . . . . . . .. ")
console.log(ta.kpArray)


let kv = ta.kpArray.find((item) => item.phonenumber == "72201157")


console.log(`----{{ ${JSON.stringify(kv.room)} }}-----`)



ta.kpArray = ta.kpArray.filter((item) => item.room != 1)

console.log(`..............${JSON.stringify(ta.kpArray)}................`)

let arrayTest = [];
arrayTest.push("https://dev.bandwidth.com/messaging/methods/messages/createMessage.html")

console.log("...")
console.log(`.............${JSON.stringify(arrayTest)}................`)


console.log(".")
console.log("..")
console.log("...")
let mediaUrl = "https://messaging.bandwidth.com/api/v2/users/u-ddpqk3sn6qtqm4edjiz7oqi/media/617d4041-8cd0-42cb-9b99-10a2e4340454/0/IMG_0638.jpg"
let version2 = "https://messaging.bandwidth.com/api/v2/users/u-ddpqk3sn6qtqm4edjiz7oqi/media/47ddc0f5-0bc8-4cf6-bdf7-142db88774a9/0/IMG_0589.jpg"
let mediaID = mediaUrl.split("/")
                      .splice(-3)
                      .join("/");

console.log(`............${mediaID}.............`)

let v2ID = version2.split("/media/")

console.log(".")
console.log("..")
console.log("...")
console.log(`.......${v2ID[1]}...........`)

  let name = v2ID[1].split('/');



console.log(encodeURI(version2))

console.log(encodeURIComponent(name[name.length-1]))

console.log(__dirname)


let   headers= {
  'content-type': `algo;multipart/form-data`,
  'content-length': "filesize",
  'accept' : '*/*',
  "Authorization": "Bearer f0ef37ff7e04bbcc4b8400fb912233828d25d6dbb5a9c7a80dd11ffac715f74c"
}

delete headers['content-type']
console.log(headers)

let dm = "720x1280\n"
dm = dm.split("x");

let obj = {
  h: parseInt(dm[1]),
  w: parseInt(dm[0])
}

let sms = ["mdiaz","jartiga"]

//sms = sms.map((userId) => `@${userId}:vinix.im`);

console.log(typeof sms)
let sms_string = JSON.stringify(sms)
console.log(typeof sms_string)

console.log(typeof JSON.parse(sms_string))


let columns = ['id',
                'domain',
                'room_id',
                'from_number',
                'to_number',
                'invited_users',
                'kazoo_id']

//let col = columns.join(",")                
columns.shift();
console.log(columns);

let data = {
  from_number: "+13053315999",
  to_number: "+13053315999",
  invited_users: "['mdiaz','jartiga']",// the array should be convert to text with JSON.stringify
  kazoo_id: "901823918239810923809",// AccountId getting from kazooApi.getAccountId
  domain: "vinix.im",// for now vinix, but eventually will be reading from kazoo API
  room_id: "!MvbCXesJCSGoFBLbcJ:vinix.im",
}

//data.created = new Date().toJSON();


let values = columns.map((colName) => data[colName]);

let valuesToInsert = "";
values.forEach((val) => {
  valuesToInsert += `'${val}',`
});

columns = columns.join(',');
columns += ',created';

valuesToInsert += `'${new Date().toJSON()}'`;

console.log(`columns : ${columns}`)
console.log(`values : ${valuesToInsert}`)

