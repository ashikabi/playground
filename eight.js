let employees = [
  { name: "Jonathan Joestar", position: "Backend", age: 31 },
  { name: "George Joestar", position: "Frontend", age: 21 },
  { name: "Joseph Joestar", position: "Fullstack", age: 25 },
  { name: "Holy Joestar", position: "QA", age: 25 },
  { name: "Jotaro Joestar", position: "tester", age: 24 },
  { name: "Josuke Joestar", position: "UAT", age: 34 },
  { name: "Speedwagon", position: "Backend", age: 41 },
  { name: "Dio", position: "QA", age: 36 },
  { name: "Avdol", position: "Fullstack", age: 28 },
  { name: "Jose Joestar", position: "Backend", age: 23 },
  { name: "Chepe Joestar", position: "Backend", age: 31 },
  { name: "Robert Joestar", position: "Fronted", age: 30 },
  { name: "Ambar Joestar", position: "Backend", age: 29 },
  { name: "Khalesi Joestar", position: "QA", age: 27 },
];

const sortedArray = (list, key) => {
  return list.sort((a, b) =>
    typeof a[key] === "number"
      ? a[key] < b[key]
        ? -1
        : 1
      : a[key] < b[key]
      ? -1
      : 1
  );
};

console.log(sortedArray(employees, "age"));

let orderByAge = employees.sort((a, b) => (a.age > b.age ? 1 : -1));

console.log(orderByAge);

let bk = employees.reduce(
  (acc, cc) => (cc.position == "Backend" ? (acc += cc.age) : acc),
  0
);
let ft = employees.reduce(
  (acc, cc) => (cc.position == "Frontend" ? (acc += cc.age) : acc),
  0
);
let fs = employees.reduce(
  (acc, cc) => (cc.position == "Fullstack" ? (acc += cc.age) : acc),
  0
);
let qa = employees.reduce(
  (acc, cc) => (cc.position == "QA" ? (acc += cc.age) : acc),
  0
);
let tst = employees.reduce(
  (acc, cc) => (cc.position == "tester" ? (acc += cc.age) : acc),
  0
);
let uat = employees.reduce(
  (acc, cc) => (cc.position == "UAT" ? (acc += cc.age) : acc),
  0
);

console.log(bk);

let older = employees.reduce((a, b) => (b.age > a ? b.age : a), 0);

console.log(older);

bk = bk / employees.filter((item) => item.position == "Backend").length;
ft = ft / employees.filter((item) => item.position == "Frontend").length;
fs = fs / employees.filter((item) => item.position == "Fullstack").length;
qa = qa / employees.filter((item) => item.position == "QA").length;
tst = tst / employees.filter((item) => item.position == "tester").length;

let total = {
  backend: bk,
  frontend: ft,
  fullstack: fs,
  QA: qa,
  tester: tst,
  UAT: uat,
};

//console.log(total);

let originalText = "Hello World";

let invertedText = originalText
  .split("")
  .map((letter) =>
    letter == letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()
  );

console.log(invertedText.join(""));

const xxx = { delta: 0, tetta: 0 };

xxx.delta = 3.14;
xxx.tetta = 6.28;
xxx.z = 9;

//console.log(xxx);

let videoSegments = ["video1.mp4", "video2.mp4", "video3.mp4", "video5.mp4"];

let result = videoSegments.join("|");

console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::");
console.log(result);

let version = "1.6.1";

console.log(`....................${version.slice(1)}.........................`);

const ta = { kpArray: [] };
//ta.kpArray = [];
let room = 9;
let phonenumber = "72201157";

ta.kpArray.push({ room, phonenumber });

room = 2;
phonenumber = "75211759";

ta.kpArray.push({ room, phonenumber });

room = 1;
phonenumber = "75211760";

ta.kpArray.push({ room, phonenumber });

console.log(" . . . .. .  . . . . . . . . . .. ");
console.log(ta.kpArray);

let kv = ta.kpArray.find((item) => item.phonenumber == "72201157");

console.log(`----{{ ${JSON.stringify(kv.room)} }}-----`);

ta.kpArray = ta.kpArray.filter((item) => item.room != 1);

console.log(`..............${JSON.stringify(ta.kpArray)}................`);

let arrayTest = [];
arrayTest.push(
  "https://dev.bandwidth.com/messaging/methods/messages/createMessage.html"
);

console.log("...");
console.log(`.............${JSON.stringify(arrayTest)}................`);

console.log(".");
console.log("..");
console.log("...");
let mediaUrl =
  "https://messaging.bandwidth.com/api/v2/users/u-ddpqk3sn6qtqm4edjiz7oqi/media/617d4041-8cd0-42cb-9b99-10a2e4340454/0/IMG_0638.jpg";
let version2 =
  "https://messaging.bandwidth.com/api/v2/users/u-ddpqk3sn6qtqm4edjiz7oqi/media/47ddc0f5-0bc8-4cf6-bdf7-142db88774a9/0/IMG_0589.jpg";
let mediaID = mediaUrl.split("/").splice(-3).join("/");

console.log(`............${mediaID}.............`);

let v2ID = version2.split("/media/");

console.log(".");
console.log("..");
console.log("...");
console.log(`.......${v2ID[1]}...........`);

let name = v2ID[1].split("/");

console.log(encodeURI(version2));

console.log(encodeURIComponent(name[name.length - 1]));

console.log(__dirname);

let headers = {
  "content-type": `algo;multipart/form-data`,
  "content-length": "filesize",
  accept: "*/*",
  Authorization:
    "Bearer f0ef37ff7e04bbcc4b8400fb912233828d25d6dbb5a9c7a80dd11ffac715f74c",
};

delete headers["content-type"];
console.log(headers);

let dm = "720x1280\n";
dm = dm.split("x");

let obj = {
  h: parseInt(dm[1]),
  w: parseInt(dm[0]),
};

let sms = ["mdiaz", "jartiga"];

//sms = sms.map((userId) => `@${userId}:vinix.im`);

console.log(typeof sms);
let sms_string = JSON.stringify(sms);
console.log(typeof sms_string);

console.log(typeof JSON.parse(sms_string));

let columns = [
  "id",
  "domain",
  "room_id",
  "from_number",
  "to_number",
  "invited_users",
  "kazoo_id",
];

//let col = columns.join(",")
columns.shift();
console.log(columns);

let data = {
  from_number: "+13053315999",
  to_number: "+13053315999",
  invited_users: "['mdiaz','jartiga']", // the array should be convert to text with JSON.stringify
  kazoo_id: "901823918239810923809", // AccountId getting from kazooApi.getAccountId
  //domain: "vinix.im",// for now vinix, but eventually will be reading from kazoo API
  room_id: "!MvbCXesJCSGoFBLbcJ:vinix.im",
};

//data.created = new Date().toJSON();

let values = columns.map((colName) => data[colName]);

let valuesToInsert = "";
values.forEach((val) => {
  valuesToInsert += `'${val}',`;
});

columns = columns.join(",");
columns += ",created";

valuesToInsert += `'${new Date().toJSON()}'`;

console.log(`columns : ${columns}`);
console.log(`values : ${valuesToInsert}`);

let objTest = { "+19544141212": ["mdiaz", "jartiga"] };

let ket = [];
for (let [key, value] of Object.entries(objTest)) {
  console.log(`${key}: ${value}`);
  ket = value;
}

console.log(`::::: ${ket} ::::::`);

let media = [
  "https://messaging.bandwidth.com/api/v2/users/u-ddpqk3sn6qtqm4edjiz7oqi/media/c630e866-ebfa-4194-b7c4-5f21e7e22016/0/0.smil",
  "https://messaging.bandwidth.com/api/v2/users/u-ddpqk3sn6qtqm4edjiz7oqi/media/c630e866-ebfa-4194-b7c4-5f21e7e22016/1/IMG_0559.jpg",
];

media = media.filter((url) => {
  let allowedMedia = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "pdf",
    "mp3",
    "mp4",
    "m4a",
    "wav",
    "aac",
  ];
  let extension = url.split(".");
  return allowedMedia.includes(extension[extension.length - 1].toLowerCase());
});

console.log(":.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.");
console.log(media);

delete data.invited_users;

console.log(__dirname);

let phone = "@sms_13053315558:vinix.im";
phone = `+${phone.match(/\d+/g)}`;

console.log(phone);

let user = "@jartiga:vinix.im";

user = user.split(":");

console.log(user[0].substring(1, user[0].length));

console.log(".........................");
console.log(`test array : ${!!data.room_id}`);
console.log(".........................");

console.log(columns.includes("room_id"));

let roomToBeCreated = "@sms_13053315558:vinix.im";
console.log(
  `=========>    encodeURIComponent : ${encodeURIComponent(roomToBeCreated)}`
);

roomToBeCreated = roomToBeCreated.split(":")[0];

if (roomToBeCreated.startsWith("@sms_")) console.log(roomToBeCreated);
else console.log("fail.........");

let play = "Empty room (was sms_13053315558)";

console.log(`====>>>> ${play.includes("sms_")}`);

let userTest = "@sms_50372201157";

console.log(roomToBeCreated.substring(1));

console.log(sms.filter((u) => u != "mdiaz"));

let id = "!pHavKRpDhGmlXGsDXd:vinix.im";

let defaultDomain = id.split(":");

console.log(defaultDomain[1]);

if (!data.domain) data.domain = "dummy";

console.log(JSON.stringify(data));

let testing = "+50372201157";

testing = `#${testing}:vinix.im`;

console.log(encodeURIComponent("!NwOLbmpHyNpRFXutkp:vinix.im"));

let userId = "@sms_50372201157:vinix.im";
let roomId = "!NwOLbmpHyNpRFXutkp:vinix.im";
userId = encodeURIComponent(userId);
roomId = encodeURIComponent(roomId);
let tagName = "m.bridges";
let url = `https://vinix.im/_matrix/client/r0/user/${userId}/rooms/${roomId}/tags/${tagName}`;

console.log(url);

let currentState = {
  events: {
    "m.room.create": {
      "": {
        type: "m.room.create",
        sender: "@sms_50372201193:vinix.im",
        content: {
          room_version: "5",
          creator: "@sms_50372201193:vinix.im",
        },
        event_id: "$PaQgTZtC0vI4SlgcI670EOtmJpCCfqmdrx5B77fb0F8",
        origin_server_ts: 1591972877094,
        unsigned: {
          age: 356066,
        },
        room_id: "!gdfhKZPQpFgLwrsDqh:vinix.im",
      },
    },
    "m.room.topic": {
      "": {
        type: "m.room.topic",
        sender: "@sms_50372201193:vinix.im",
        content: {
          topic: "sms_50372201193",
        },
        event_id: "$jmd8B1ACl2c8-UCw1cNY8YZgK_rZIYSN0Kuhj_FQzfk",
        origin_server_ts: 1591972877354,
        unsigned: {
          age: 355806,
        },
        room_id: "!gdfhKZPQpFgLwrsDqh:vinix.im",
      },
    },
  },
};

console.log("............................................");
console.log("............................................");
console.log(currentState.events["m.room.create"]);

let [createObj] = Object.values(currentState.events["m.room.create"]);
let [topicObj] = currentState.events.hasOwnProperty("m.room.topic")
  ? Object.values(currentState.events["m.room.topic"])
  : [];

console.log(createObj.content.creator.substring(1).startsWith("sms_"));
if (topicObj) console.log(topicObj.content.topic.startsWith("sms_"));
else console.log("There are not topic at all");

let testUser = "@sms_13053315558:vinix.im";
console.log(testUser.match(/\d+/g).toString());

let topic = testUser.split(":");
console.log(topic[0].substring(1));

const store = {
  table: "sms_store",
  columns: [
    "id",
    "domain",
    "room_id",
    "from_number",
    "to_number",
    "invited_users",
    "kazoo_id",
  ],
  where: `domain = 'vinix.im' AND deleted!=1 `,
};

let cols = store.columns.filter((col) => col != "id");
console.log(cols);

let imageurl = "mxc://vinix.im/LuvgaduaraKdlbVmJIOIvVpG";
console.log(JSON.stringify(imageurl));

imageurl = imageurl.split("/");
console.log(imageurl[imageurl.length - 1]);

let phoneNumberx = "1234567890";
console.log(". * . . * . . * . . * . . * . ");
console.log(phoneNumberx.match(/\d+/g).toString().length == 10);
console.log(!phoneNumberx.includes("@"));

const currentUser = "@jartiga:vinix.im";
const domain = currentUser.split(":")[1];

console.log(domain);

let sms2 = [
  {
    default_number: "+19544141212",
    phone: "+19544141212",
    sms_users: ["mdiaz", "jartiga", "santhony"],
  },
  { phone: "+19542289350", sms_users: ["jartiga-2"] },
];

let [users] = sms2.filter((item) => item.phone == "+19544141212");
console.log(
  "===================================================================="
);
console.log(users.sms_users);

console.log(encodeURIComponent("Riot-1.6.4"));
