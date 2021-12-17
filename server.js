const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')
const path = require('path')

async function startServer() {
    const app = express();
    const buildPath = __dirname + '/frontend/build/';
    const PORT = process.env.PORT || 8080

    const apolloServer = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
    });
    await apolloServer.start()
    apolloServer.applyMiddleware({app: app});
    console.log("Apollo Server Started")

    // await mongoose.connect('mongodb://localhost:27017/task_manager_db', {
    //     useUnifiedTopology: true,
    //     useNewUrlParser: true
    // })
    // console.log("MongoDB Connected");

    mongoose.connect('mongodb://localhost:27017/task_manager_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    let db = mongoose.connection;
    db.on('error', () => {
        console.error("Error while connecting to DB");
    });
    console.log("MongoDB Connected");

    // app.use((req, res) => {
    //     res.send("Hello from Express Apollo Server");
    // })

    app.use(express.static("/frontend/public"))
    app.use(express.static(buildPath))
    // app.get('/', function (req,res) {
    //     res.sendFile(path.join(buildPath, "index.html"));
    //   });
    app.use((req, res) => {
        res.sendFile(path.join(buildPath, "index.html"));
    });

    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT)
    });
}


startServer();