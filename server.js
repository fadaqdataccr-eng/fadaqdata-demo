const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const API_KEY = process.env.API_KEY;

// HOME
app.get("/", (req, res) => {

res.sendFile(__dirname + "/index.html");

});

// BUY DATA
app.post("/buy-data", async (req, res) => {

try{

const {

network,
phone,
plan

} = req.body;

// VALIDATION
if(
!network ||
!phone ||
!plan
){

return res.json({

status:"failed",
message:"All fields required"

});

}

// PAYLOAD
const payload = {

network:String(network),

phone:String(phone),

data_plan:String(plan),

ref:"FDQ" + Date.now(),

ported_number:true

};

console.log("PAYLOAD:");
console.log(payload);

// REAL API REQUEST
const response = await fetch(
"https://fadaqdata.com/api/data/",
{

method:"POST",

headers:{

"Content-Type":"application/json",

"Authorization":
`Token ${API_KEY}`

},

body:JSON.stringify(payload)

}
);

// RAW RESPONSE
const raw =
await response.text();

console.log("RAW RESPONSE:");
console.log(raw);

// JSON PARSE
let data;

try{

data =
JSON.parse(raw);

}catch(err){

return res.json({

status:"failed",
message:"Invalid API response",
raw:raw

});

}

// SUCCESS
if(
data.status === "success"
||
data.Status === "successful"
){

return res.json({

status:"success",

reference:
payload.ref,

api:data

});

}

// FAILED
return res.json({

status:"failed",

message:
data.message
||
data.error
||
data.true_response
||
"Transaction failed"

});

}catch(error){

console.log(error);

return res.json({

status:"failed",
message:"Server Error"

});

}

});

// BUY AIRTIME
app.post("/buy-airtime", async (req, res) => {

try{

const {

network,
phone,
amount

} = req.body;

if(
!network ||
!phone ||
!amount
){

return res.json({

status:"failed",
message:"All fields required"

});

}

const payload = {

network:String(network),

phone:String(phone),

amount:String(amount),

airtime_type:"VTU"

};

console.log(payload);

const response = await fetch(
"https://fadaqdata.com/api/topup/",
{

method:"POST",

headers:{

"Content-Type":"application/json",

"Authorization":
`Token ${API_KEY}`

},

body:JSON.stringify(payload)

}
);

const raw =
await response.text();

console.log(raw);

let data;

try{

data =
JSON.parse(raw);

}catch{

return res.json({

status:"failed",
message:"Invalid API response"

});

}

if(
data.status === "success"
||
data.Status === "successful"
){

return res.json({

status:"success",

reference:
"FDQ" + Date.now(),

api:data

});

}

return res.json({

status:"failed",

message:
data.message
||
data.error
||
"Transaction failed"

});

}catch(error){

console.log(error);

return res.json({

status:"failed",
message:"Server Error"

});

}

});

// SERVER
const PORT =
process.env.PORT || 3000;

app.listen(PORT, ()=>{

console.log(
"Server running on port " + PORT
);

});
