const express = require('express');
const router = express.Router();
const wallet_controller = require('../controllers/wallets');
// router.get('/',(req,res) => {
//     res.render('wallets', { title: 'Search Results - wallets', ad: wallets });
//   });

router.get('/',wallet_controller.wallet_view_all_Page);

// GET request for one costume.
router.get('/wallets/:id', wallet_controller.wallet_detail);
module.exports = router;

/* GET detail wallet page */
router.get('/detail', wallet_controller.wallet_view_one_Page);

/* GET create costume page */
router.get('/create', wallet_controller.wallet_create_Page);
