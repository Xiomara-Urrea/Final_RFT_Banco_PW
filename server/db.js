const mongoose = require('mongoose'); 

const URI = 'mongodb://xiomara:Asd123@ds151863.mlab.com:51863/sisbancaria';

mongoose.connect(URI)
	.then(db => console.log(`DB is connected`))
	.catch(err => console.error(err));

module.exports = mongoose; 
