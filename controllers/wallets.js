var wallet = require('../models/wallets');
// List of all Costumes
exports.wallet_list = async function(req, res) {
    try{
    theWallets = await wallet.find();
    res.send(theWallets);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
// for a specific Costume.
exports.wallet_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Wallet detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.wallet_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Wallet create POST');
};
// Handle Costume delete form on DELETE.
exports.wallet_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Wallet delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.wallet_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Wallet update PUT' + req.params.id);
};