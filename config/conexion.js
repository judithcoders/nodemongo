let mongoose =  require('mongoose');

mongoose.connect('mongodb+srv://crud:crud@cluster0.xrmsq.mongodb.net/crud',{ useNewUrlParser: true,  useUnifiedTopology: true });
//mongoose.connect('mongodb://localhost:27017/crud', { useNewUrlParser: true, useUnifiedTopology: true  })
module.exports = mongoose;