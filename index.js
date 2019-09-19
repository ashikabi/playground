

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