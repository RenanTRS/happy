const Database = require('./database/db.js');
const saveOrphanage = require('./database/saveOrphanage.js');

module.exports = {
    index(req, res){
        return res.render('index');
    },
    
    async orphanages(req, res){
        try {
            //Colocar o orphanages pelo banco
            const db = await Database;
            const orphanages = await db.all('SELECT * FROM orphanages');
            return res.render('orphanages', {orphanages});
        } catch (error) {
            console.log(error);
            return res.send('Erro no banco de dados');
        }
    },
    async orphanage(req, res){
        const id = req.query.id;
        try {
          const db = await Database;
          const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`);
          const orphanage = results[0];

          orphanage.images = orphanage.images.split(",");
          orphanage.firstImage = orphanage.images[0];

          if(orphanage.open_on_weekends == "0"){
              orphanage.open_on_weekends = false;
          } else{
              orphanage.open_on_weekends = true;
          }
          
          return res.render('orphanage', {orphanage});
        } catch (error) {
            console.log(error);
            return res.send('Erro no banco de dados');
        }
        return res.render('orphanage');
    },
    createOrphanage(req, res){
        return res.render('create-orphanage');
    }
}