var express = require('express');
var app = express();
const port = 8080;
const cors = require('cors');
var fs = require('fs');

app.use(express.json());
app.use(cors());

app.get('/getAppointments', (req, res) => {
    fs.readFile(__dirname + "/" + "appointments.json", 'utf8', (err, data) =>  {
        console.log(data);
        res.end(data);
    })
})

app.post('/addAppointment', (req, res) => {
    fs.readFile(__dirname + "/" + "appointments.json", 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        let appointments = JSON.parse(data) || {};
        let index = Object.keys(appointments).length+1;
        while(appointments["app"+index]){
            index++;
        }
        const newAppointment = req.body;
        newAppointment.id = index.toString();
        console.log(newAppointment);
        appointments[`app${newAppointment.id}`] = newAppointment;

        fs.writeFile(__dirname + "/" + 'appointments.json', JSON.stringify(appointments), 'utf-8', (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            res.json(appointments);
        })
    })    
})

app.delete('/deleteAppointment/:id', (req, res) => {
    fs.readFile(__dirname +"/" + "appointments.json", "utf-8" ,(err, data) => {
        var appointments = JSON.parse(data);
        delete appointments["app"+ req.params.id.slice(1)];
        console.log("app"+ req.params.id.slice(1));
        
        fs.writeFile(__dirname + "/" + 'appointments.json', JSON.stringify(appointments), 'utf-8', (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.json(appointments);
        })
    })

    
})

var server = app.listen(port, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("REST API demo app listening at http://localhost:", port);
})