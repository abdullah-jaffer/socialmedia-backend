import http from 'http';
import express from 'express';
import config from './config/config';
import { verifyToken } from './middleware/auth'
import { putUser, 
         listUsers, 
         getUserById,
         putPost, 
         listPosts, 
         getPostById,
         getPostsById, 
         updatePostById,
         follow,
         unfollow,
         feed,
         signin } from './routes/index';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  //app.use(verifyToken);

/*Routes*/ 
app.use('/app', putUser, 
                listUsers, 
                getUserById, 
                putPost, 
                listPosts, 
                getPostById,
                getPostsById, 
                updatePostById,
                follow,
                feed,
                unfollow,
                signin);

/*Error handling*/
app.use((req, res, next) => {
    const error = new Error('not found');

    return res.status(404).json({
        status: 404,
        message: error.message
    })
    next();
});


/*Create Server*/
const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => {console.log("Server running")})
