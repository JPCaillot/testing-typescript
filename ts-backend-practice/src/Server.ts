import { IncomingMessage, ServerResponse, createServer } from 'http';

export class Server {
    public startServer() {
        createServer(
            (req: IncomingMessage, res: ServerResponse) => {
                console.log(`Got request from ${req.headers['user-agent']} for ${req.url}`);
                res.write('Hello World from TS server!');
                res.end();
            }
        ).listen(8080);
        console.log('Server started');
    }
}