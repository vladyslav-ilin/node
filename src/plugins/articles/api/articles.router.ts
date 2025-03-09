import {Router} from "express";
import {pgdb} from "src/db/typeorm";
import {Articles} from "src/db/entities";

const articlesRouter = Router();

articlesRouter.get('/', async (_req, res) => {
    const article = await pgdb.getRepository(Articles).findOneBy({
        id: 'ded42c26-e97d-4b43-bd6b-57884eb04acb'
    })
    res.json(article);
});

export default articlesRouter;

