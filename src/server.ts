import {Express} from "express";
import * as express from "express";
import * as http from "node:http";
import router from "src/plugins/articles/api/router";
import helmet from "helmet";
import config from "src/config";

export default class Server {
    app: Express;

    constructor() {
        this.app = express();
    }

    register() {
        const port = config.PORT;

        this.app.use(helmet());

        this.app.use('/api', router);

        return new Promise<void>(resolve => {
            http.createServer(this.app).listen(port, () => {
                console.log(`Server listening on port ${port}. Open http://localhost:${port} to see the app`);
                resolve();
            });
        })
    }
}