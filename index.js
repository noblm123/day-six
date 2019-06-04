const express = require('express');

const app = express();

var fs = require("fs");

router.get("/api/users", (req, res) => {
  fs.readFile("./src/data/data.json", function(err, data) {
    if (err) throw err;
    var parseData = JSON.parse(data);
    res.json(parseData.users);
  });
});

 
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

app.get('/api/users', (req,res) => {
    res.json(users);
});

//Middleware function:
const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

//Middleware execue:
app.use(logger)

const users = [
    {
        "id": "1",
        "name": "Byron",
        "role": "user",
        "email": "byron@mail.com",
        "password": "P@ssword"
      },
      {
        "id": "2",
        "name": "brett",
        "role": "service provider",
        "email": "brett@mail.com",
        "password": "P@ssword1"
      },
      {
        "id": "3",
        "name": "Riaz",
        "role": "user",
        "email": "riaz@mail.com",
        "password": "P@ssword2"
      },
    ]
