const express = require('express');
const cors = require("cors");
const mongodb = require("mongodb");
const MongodbClient = mongodb.MongoClient;
const app = express();
const bcryptjs = require('bcryptjs');
const json = require('jsonwebtoken');
app.use(cors());
app.use(express.json());
const Database = "LoginData";
const url = "mongodb+srv://sm1:admin@cluster0.w2ual.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const shortUrl = require('node-url-shortener');
app.post("/signup",async (req,res) =>
{
    try 
    {
        let connection = await MongodbClient.connect(url);
        let db = connection.db(Database);
        let salt = await bcryptjs.genSalt(10);
        let hash = await bcryptjs.hash(req.body.Passcode,salt);
        console.log(salt);
        console.log(hash);
        req.body.Passcode=hash;
        let insertiondb = await db.collection("Login").insertOne(req.body);
        //console.log(insertiondb);
        connection.close();
        res.status(200).json({alert:"registered"});
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).json({alert:"error"});  
    }
    
});

app.post("/login",async (req,res) =>
{
    try 
    {
        let connection = await MongodbClient.connect(url);
        let db = connection.db(Database);
        let user = await db.collection("Login").findOne({Email:req.body.Email});
        if(user)
        {
            let result = await bcryptjs.compare(req.body.Passcode,user.Passcode);
            if(result)
            {
                let token = json.sign({_id : user._id},'alphabetagamatheta');    
                console.log(token);            
                res.status(200).json({alert:"Login Successfully",token});
            }
            else
            {
                res.status(401).json({alert:"Wrong Passcode"});
            }
        }
        else
        {
            res.status(404).json({alert:"User not Found: Kindly Register First"});
        }   
        connection.close();
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).json({alert:"error"});  
    }
    
});

async function authenticate(req,res,next) 
{
    let auth= req.headers.authorization;
    console.log(auth);
    if (auth) 
    {
        let result = await json.verify(req.headers.authorization,'alphabetagamatheta');
        console.log(result);
        if(result)
        {
            next();
        }
        else 
        {
            res.status(401).json({alert:"not authorised"});
        }   
    } 
    else 
    {
        res.status(401).json({alert:"not authorised"});
    }
}

app.post("/dashboard", authenticate, async (req,res) =>
{
    try
    {
        let longu = req.body.long;
        console.log(longu);
        shortUrl.short(longu, function(err, url)
        {
            console.log(url);
        });
        res.status(200).json("Url Sorted");
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({alert:"error"});
    }
});
app.listen(3000);