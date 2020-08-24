let mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost:27017/crud', { useNewUrlParser: true, useUnifiedTopology: true  }) // cambiar al mongodbcloud
module.exports = mongoose;