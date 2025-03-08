import {Router} from "express";
import ArticlesRouter from "src/plugins/articles/api/articles.router";

const router = Router();

router.use('/articles', ArticlesRouter);

export default router;