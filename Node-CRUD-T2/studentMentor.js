var express = require('express');
var app = express();
var fs = require("fs");
const cors = require("cors");
app.use(express.json());
app.use(cors())
let Data=[];
let ss=[];
let mm = [];
queryData=[
    {
        query:"updateStudent",
        dta:
        {
            SID:2,
            name:"S2"
        }
    },
    {
        query:"updateMentor",
        dta:
        {
            TID: 2,
            name: "T2",
            sArr: [],
            count: 0
        }
    },
    {
        query:"assign",
        dta:
        [
            {
                stu:1,
                men:1
            },
            {
                stu:1,
                men:2
            },
            {
                stu:2,
                men:2
            }
        ]
    },
    {
        query:"deleteAssign",
        dta:
        [
            {
                stu:1,
                men:1
            },
            {
                stu:1,
                men:2
            }
        ]
    }
]
app.get('/studentMentor', function (req, res) 
{
    res.status(200).json(Data);
});
    
app.post('/studentMentor',function(req, res)
{
    Data.push(req.body);
    res.status(200).json({alert:"success"});

});

app.put('/studentMentor',function(req, res)
{
    var d = queryData;
    for(var i=0;i<d.length;i++)
    {
        var q= d[i].query;
        var qdata = d[i].dta;
        if(q=="updateStudent")
        {
            Data[0][0].push(qdata);
        }
        if(q=="updateMentor")
        {
            Data[0][1].push(qdata);
        }
        if(q=="assign")
        {
            for(var j=0;j< qdata.length;j++)
            {
                var s= qdata[j].stu;
                var m= qdata[j].men;
                if(!(ss.indexOf(s)>-1))
                {
                    for(var k=0;k<Data[0][1].length;k++)
                    {
                            if(Data[0][1][k].TID==m)
                            {
                                Data[0][1][k].sArr.push(s);
                                Data[0][1][k].count++;
                                ss.push(s);
                                break;
                            }
                    }
                }
                else
                {
                    console.log("mentor already assigned to student :"+s);
                }
            }
        }
    }
    res.status(200).json({alert:"updated"});
});
app.delete('/studentMentor',function(req, res)
{
    var d = queryData;
    for(var i=0;i<d.length;i++)
    {
        var q= d[i].query;
        var qdata = d[i].dta;
        if(q=="deleteAssign")
        {
            for(var j=0;j< qdata.length;j++)
            {
                var s= qdata[j].stu;
                var m= qdata[j].men;
                if(ss.indexOf(s)>-1)
                {
                    for(var k=0;k<Data[0][1].length;k++)
                    {
                            if(Data[0][1][k].TID==m)
                            {
                                Data[0][1][k].sArr.splice(Data[0][1][k].sArr.indexOf(s),1);
                                Data[0][1][k].count--;
                                ss.splice(ss.indexOf(s),1);
                            }
                    }
                }
                else
                {
                    console.log("not found student :"+s);
                }
            }
        }
    }
    res.status(200).json({alert:"deleted"});
});

app.listen(3000);