var express = require('express');
var app = express();
var fs = require("fs");
const cors = require("cors");

app.use(cors())
app.get('/files', function (req, res) 
{
    apidata=[];
    fs.readdir("../",{withFileTypes:true}, function (err, data) 
    {
        var i=0;
        data.forEach((file)=>{
          var a = data[i++].name;
          var b = file.isDirectory();
          var u;
          if(b)
          {
            u="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/1200px-OneDrive_Folder_Icon.svg.png";
          }
          else
          {
            u="https://icons.iconarchive.com/icons/double-j-design/origami/256/file-icon.png";
          }
          var dta = 
          {
              "name":a,
              "url":u
          }
          apidata.push(dta);
      })
      console.log(apidata);
      res.send(apidata);
      JSON.stringify(apidata);
    });
})
app.listen(8080);
