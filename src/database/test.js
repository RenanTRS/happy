//const async = require('hbs/lib/async');
const Database = require('./db.js');

Database.then(async (db)=>{
    //Inserir dados na tabela
    /*await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-27.2210624",
            "-49.6555527",
            "Lar dos meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "998234652",
            "https://images.unsplash.com/photo-1597095556745-7bcd893840ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjMxNjMyNDMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 8h às 18h",
            "0"
        );
    `);*/
    //Consultar dados da tabela
    /*const selectedOrphanages = await db.all('SELECT * FROM orphanages');
    console.log(selectedOrphanages);*/
    
    //Consultar um orfanato, somente pelo ID
    /*const orphanage = await db.all('SELECT * FROM orphanages WHERE id="2"');
    console.log(orphanage);*/

});