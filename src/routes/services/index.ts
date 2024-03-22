import express from 'express';

const router = express.Router();
import datahandler  from "../../reclaim/reclaim_data"
import reqhandler from "../../reclaim/reclaim_request"

router.all('/proof',datahandler);
router.all('/requestUrl',reqhandler);

export default router;