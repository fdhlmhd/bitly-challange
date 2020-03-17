const mongose = require('mongoose')
const config = require('config')
const db = config.get('mongoURl')

const connectDB = async () => {
    try {
        await mongose.connect(db, {
            useNewUrlParser: true
        });

        console.log('MongoDB Connected...');
        

    } catch (err) {
      console.error(err.message);
      process.exit(1)
    }
}

module.exports = connectDB;