//Arquivo para teste
/* 

//const async = require('hbs/lib/async');
const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async (db)=>{
    //Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.2210624",
        lng: "-49.6455527",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9984364321",
        images: ["https://images.unsplash.com/photo-1597095556745-7bcd893840ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjMxNjMyNDMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",

        "https://images.unsplash.com/photo-1626103999420-4187ccec0cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjMxNjMyNTEw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h às 18h",
        open_on_weekends: "1"
    });
    //Consultar dados da tabela
    //const selectedOrphanages = await db.all('SELECT * FROM orphanages');
    //console.log(selectedOrphanages);
    
    //Consultar um orfanato, somente pelo ID
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id="2"');
    //console.log(orphanage);

});*/