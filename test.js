import  keyStore from "./key.js";
var key = keyStore.kongchun
console.log(key);

//npm install baidu-aip-sdk

var AipNlpClient = require("baidu-aip-sdk").nlp;

// 设置APPID/AK/SK
var APP_ID = key.appID;
var API_KEY = key.apiKey;
var SECRET_KEY = key.secretKey;

var client = new AipNlpClient(APP_ID, API_KEY, SECRET_KEY);

var text = "百度是一家高科技公司";

// //调用词法分析
// client.lexer(text).then(function(result) {
//     console.log(JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log(err);
// });



//调用依存句法分析
// client["depparser"](text).then(function(result) {
//     console.log(JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log(err);
// });



var text = "三星电脑电池不给力";

// 调用评论观点抽取
client.commentTag(text).then(function(result) {
    console.log(JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});


// var text = "苹果是一家伟大的公司";

// // 调用情感倾向分析
// client.sentimentClassify(text).then(function(result) {
//     console.log(JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log(err);
// });
