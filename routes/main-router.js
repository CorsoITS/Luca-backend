const routerOperator= require('./operatore-router.js');
//const routerPrenotazione=require ('./prenotazione-router.js');
//const routerPostazione=require ('./postazione-router.js');

function ConnectRouter (app) {
    app.use('/operatore', routerOperator);
    //app.use('/prenotazione', routerPrenotazione);
    //app.use('/postazione', routerPostazione);
}

module.exports = ConnectRouter;