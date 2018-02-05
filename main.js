import keyStore from "./key.js";
import helper from "../iRobots/helper.js";
var db = require('../iRobots/db.js')("10.82.0.1", "YunNan");

var key = keyStore.caomaoguo
console.log(key);

// //npm install baidu-aip-sdk

var AipNlpClient = require("baidu-aip-sdk").nlp;

// 设置APPID/AK/SK
var APP_ID = key.appID;
var API_KEY = key.apiKey;
var SECRET_KEY = key.secretKey;

var client = new AipNlpClient(APP_ID, API_KEY, SECRET_KEY);




function NLP(type){
	db.close();
	var find = {};
	find[type] = null;
	//console.log(find);

 	return db.open("train_first").then(() => { 
        return db.collection.find(find, {discuss: 1}).toArray();
    }).then((arr) => {
    	return helper.iteratorArr(arr, (data) => {

			var text = data.discuss;
	    	//console.log(text.length);
	    	return client[type](text).then(function(result) {
			    console.log(JSON.stringify(result));
				var t = {} 
				t[type] = (result);
				return db.updateById(data._id, t);
			}).catch(function(err) {
			    // 如果发生网络错误
			    console.log(err);
			});   

    	})

    }).then(() => {
        db.close();
	    console.log(type+" Loaded");
        return;
    }).catch((e) => {
        db.close();
        console.log(e);
        return;
    })
}


NLP("depparser");


