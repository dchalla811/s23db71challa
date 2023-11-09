var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var wallet_controller = require('../controllers/wallets');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume. 
router.post('/wallet', wallet_controller.wallet_create_post);
// DELETE request to delete Costume.
router.delete('/wallet/:id', wallet_controller.wallet_delete);
// PUT request to update Costume.
router.put('/wallet/:id', wallet_controller.wallet_update_put);
// GET request for one Costume.
router.get('/wallet/:id', wallet_controller.wallet_detail);
// GET request for list of all Costume items.
router.get('/wallet', wallet_controller.wallet_list);
module.exports = router;