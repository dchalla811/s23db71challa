const express = require('express');
const router = express.Router();
const wallet_controller = require('../controllers/wallets');
// router.get('/',(req,res) => {
//     res.render('wallets', { title: 'Search Results - wallets', ad: wallets });
//   });

router.get('/',wallet_controller.wallet_view_all_Page);

module.exports = router;



