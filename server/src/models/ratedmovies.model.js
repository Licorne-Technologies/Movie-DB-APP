
module.exports = function (app) {
  const modelName = 'ratedmovies';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    movieId: { type: String, required: true, index: true },
    userId: { type: mongooseClient.Schema.Types.ObjectId, required: true, },
    uniqueMovieId: { type: String, required: true, index: true, unique: true },
  }, {
    timestamps: true,
    strict: false
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);

};
