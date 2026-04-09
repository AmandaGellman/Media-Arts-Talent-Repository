import { Router, type IRouter } from "express";
import healthRouter from "./health";
import usersRouter from "./users";
import talentsRouter from "./talents";
import membershipsRouter from "./memberships";
import jobsRouter from "./jobs";
import adsRouter from "./ads";
import mediaRouter from "./media";
import statsRouter from "./stats";

const router: IRouter = Router();

router.use(healthRouter);
router.use(usersRouter);
router.use(talentsRouter);
router.use(membershipsRouter);
router.use(jobsRouter);
router.use(adsRouter);
router.use(mediaRouter);
router.use(statsRouter);

export default router;
