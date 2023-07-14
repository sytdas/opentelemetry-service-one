import { Router } from 'express';

const router = Router();
/* GET home page. */
router.get('/*', async function(req, res, next) {
  try {
    const response = await fetch(`${process.env.REMOTE_SERVICE}/${req.path}`);
    const json = await response.json();
    res.json(json);
  } catch (e) {
    next(e)
  }
});

export default router;
