module.exports = function (app) {
  const modelName = 'watchlists';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    movieId: { type: String, required: true, index: true },
    userId: { type: mongooseClient.Schema.Types.ObjectId, required: true, },
    uniqueMovieId: { type: String, required: true, index: true, unique: true },
    archived: { type: Boolean, required: true },
  }, {
    timestamps: true,
    strict: false
  });


  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);

};
