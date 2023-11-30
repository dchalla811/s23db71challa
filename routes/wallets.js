const express = require('express');
const router = express.Router();

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

const wallet_controller = require('../controllers/wallets');


router.get('/',wallet_controller.wallet_view_all_Page);

// GET request for one costume.
router.get('/wallets/:id', wallet_controller.wallet_detail);

/* GET detail wallet page */
router.get('/detail',secured, wallet_controller.wallet_view_one_Page);

/* GET create costume page */
router.get('/create',secured, wallet_controller.wallet_create_Page);

router.get('/update',secured, wallet_controller.wallet_update_Page);

router.get('/delete',secured, wallet_controller.wallet_delete_Page);



module.exports=router;
