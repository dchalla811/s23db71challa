const express = require('express');
const router = express.Router();

const wallets = [
    {
    wallets_type: 'leather',
    wallets_color: 'brown',
    wallets_capacity: 120,
},
{
    wallets_type: 'canvas',
    wallets_color: 'black',
    wallets_capacity: 40,
 },
  {
    wallets_type: 'synthetic',
    wallets_color: 'blue',
    wallets_capacity: 25,
 }

];
router.get('/',(req,res) => {
    res.render('wallets', { title: 'Search Results - wallets', ad: wallets });
  });

 
  module.exports = router;


 
