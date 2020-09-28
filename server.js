//ütleme et meil on vaja ekspressi
const express = require('express');
//loome äppi mis kasutab expressi
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extender: true}));

app.get('/', function(request, response){
    //kontrollime directoryt
    console.log(__dirname);
    
    response.sendFile(__dirname+'/index.html');
});

app.post('/', function(request, response){
    //kontrollime kasutaja sisestatud andmeid
    console.log(request.body);
    let num1 = Number(request.body.num1);
    let num2 = Number(request.body.num2);
    let result = num1 / (num2*num2);
    console.log(`${num1} / (${num2} * ${num2}) = ${result}`);
    console.log(typeof(num1));
   // response.send(`${num1} / (${num2} * ${num2}) = ${result}`);
    if(result < 19){
        response.send("su BMI on " + result + " Alakaal") 
        }
        if(result > 18.5 && result < 24.9){
            response.send("su BMI on " + result + "Normaalkaal")
        }
        if(result > 25 && result < 29.9){
            response.send("su BMI on " + result + "Ülekaal")
        }
        if(result > 30){
            response.send("su BMI on " + result + "Rasvumine.")
        }
        
        
        
})
//app ootab päringut. ootab pordi numbrit ja helistab tagasi?
app.listen(3000, function(){
    console.log('Server is running on port 3000');
});