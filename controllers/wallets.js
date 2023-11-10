const wallets = require('../models/wallets');
var wallet = require('../models/wallets');
// List of all Costumes
exports.wallet_list = async function (req, res) {
    try {
        theWallets = await wallet.find();
        res.send(theWallets);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Costume.
exports.wallet_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await wallet.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

//Handle Costume create on POST.
exports.wallet_create_post = async function (req, res) {
    console.log(req.body)
    let document = new wallet();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.wallets_type = req.body.wallets_type;
    document.wallets_color = req.body.wallets_color;
    document.wallets_capacity = req.body.wallets_capacity;
    try {
        let results = await document.save();
        res.send(results);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume delete form on DELETE.
exports.wallet_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Wallet delete DELETE ' + req.params.id);
};

// Handle Costume update form on PUT.
exports.wallet_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await wallets.findById(req.params.id)
        // Do updates of properties
        if (req.body.wallets_type)
            toUpdate.wallets_type = req.body.wallets_type;
        if (req.body.wallets_color) toUpdate.wallets_color = req.body.wallets_color;
        if (req.body.wallets_capacity) toUpdate.wallets_capacity = req.body.wallets_capacity;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
}

// VIEWS
// Handle a show all view
exports.wallet_view_all_Page = async function (req, res) {
    try {
        theWallets = await wallet.find();
        res.render('wallets', { title: 'wallet Search Results', results: theWallets });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};