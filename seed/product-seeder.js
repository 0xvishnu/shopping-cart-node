let dbconfig = require('../dbconfig/db-connect');

dbconfig.connect(function (error) {
    if (error) {
        console.log('DB connection error')
        process.exit(1)
    }
    else {

        console.log('Connected suuceessfully....!')





        dbconfig.get().collection('product').insertMany([{
                imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
                title:'Gothic Video Game',
                description: 'Awesome Game !!!',
                price : 20
            },
                {
                    imagePath:'https://supermariobros.io/data/image/super-mario-revived.jpg',
                    title:'Super MArio',
                    description: 'Pwoli  Game !!!',
                    price : 10
                },
                {
                    imagePath:'https://cdn.gearnuke.com/wp-content/uploads/2018/06/fortnite-nintendo-switch-icon.jpg',
                    title:'Fortnite',
                    description: 'Kidu  Game !!!',
                    price : 20
                },
                {
                    imagePath:'https://yuzu-emu.org/images/game/boxart/minecraft-nintendo-switch-edition.png',
                    title:'MInecraft',
                    description: 'Fantastic Game !!!',
                    price : 20
                },

                {
                    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
                    title:'Gothic Video Game',
                    description: 'Awesome Game !!!',
                    price : 20
                },
                {
                    imagePath:'https://supermariobros.io/data/image/super-mario-revived.jpg',
                    title:'Super MArio',
                    description: 'Pwoli  Game !!!',
                    price : 10
                },
                {
                    imagePath:'https://cdn.gearnuke.com/wp-content/uploads/2018/06/fortnite-nintendo-switch-icon.jpg',
                    title:'Fortnite',
                    description: 'Kidu  Game !!!',
                    price : 20
                },
                {
                    imagePath:'https://yuzu-emu.org/images/game/boxart/minecraft-nintendo-switch-edition.png',
                    title:'MInecraft',
                    description: 'Fantastic Game !!!',
                    price : 20
                },


                {
                    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
                    title:'Gothic Video Game',
                    description: 'Awesome Game !!!',
                    price : 20
                },
                {
                    imagePath:'https://supermariobros.io/data/image/super-mario-revived.jpg',
                    title:'Super MArio',
                    description: 'Pwoli  Game !!!',
                    price : 10
                },
                {
                    imagePath:'https://cdn.gearnuke.com/wp-content/uploads/2018/06/fortnite-nintendo-switch-icon.jpg',
                    title:'Fortnite',
                    description: 'Kidu  Game !!!',
                    price : 20
                },
                {
                    imagePath:'https://yuzu-emu.org/images/game/boxart/minecraft-nintendo-switch-edition.png',
                    title:'MInecraft',
                    description: 'Fantastic Game !!!',
                    price : 20
                },


            ]
        )


















    }
});

