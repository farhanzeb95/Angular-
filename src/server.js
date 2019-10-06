const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/ROSHAAN-CCTV-FRONTEND'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/ROSHAAN-CCTV-FRONTEND/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`);
});
