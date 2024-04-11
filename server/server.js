const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
//
app.use(cors());
cloudinary.config({
  cloud_name: 'dohtfj5zs',
  api_key: '588842527859546',
  api_secret: '-WihU7kL-S4JYThwqLF_aGcWBKw'
});

app.get('/api/images', (req, res) => {
  cloudinary.api.resources(
    function (error, result) {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(result.resources);
      }
    }
  );
});
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  //app.use('/graphql', expressMiddleware(server));

  // if we're in production, serve client/dist as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
