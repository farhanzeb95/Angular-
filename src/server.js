const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Roshaan-Cctv-Frontend'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/Roshaan-Cctv-Frontend/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`);
});
