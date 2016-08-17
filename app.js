var db = require('stf-device-db')
var express = require('express');

var app = express()
app.use(express.static('photo'))
app.use(express.static('icon'))

app.get('/device/:model', function (req, res) {
  var requestedModel = req.params.model
  if (requestedModel == null) {
    res.status(500).send("Missing \"model\" parameter")
  }
  var data = db.find({model: requestedModel})
  if (data != null) {
    res.json({imageUrl : data.image})
  } else {
    res.json({imageUrl : "default.jpg"})
  }

});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});
