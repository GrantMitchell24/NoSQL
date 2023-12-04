const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/thought', thoughtsRoutes);

module.exports = router;
