const mongoose = require('mongoose');

const connectDatabase = async () => {
  const MONGODB_URI = process.env.DB_URI;
  try {
    await mongoose.connect(MONGODB_URI);
    // await mongoose.connect(LOCAL_DB);
    console.log("MongoDB connect");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};


// () => { mongoose.connect(process.env.DB_URI, {
//     useNewUrlParser : true,
//     useUnifiedTopology : true,
//     useCreateIndex : true
// }).then(con => {
//     console.log(`MongoDB Database connected with host ${con.connection.host}`);
// });
// }

module.exports = connectDatabase;