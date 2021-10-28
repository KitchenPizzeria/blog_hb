const { MongoClient } = require("mongodb");
const connectionString = `mongodb+srv://root:admin@cluster0.mxzcz.mongodb.net/mySecondDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("myFirstDatabase");
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
