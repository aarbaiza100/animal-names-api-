// install/define  express
const express = require('express')
const app = express()
const PORT = 3000

// app.use(cors())


// create animal objects to return 
let animals = {
    'lion': {
        'kingdom': 'animalia',
        'phylum': 'chordata',
        'class': 'mammalia',
        'order': 'carnivora',
        'subfamily': 'pantherinae',
        'genus': 'panthera',
        'species': 'panthera leo'
    },

    'blue whale': {
        'kingdom': 'animalia',
        'phylum': 'chordata',
        'class': 'mammalia',
        'order': 'cetacea',
        'family': 'balaenoptera',
        'species': 'balaenoptera musculus'


    },
    'whale': {
        'kingdom': 'animalia',
        'phylum': 'chordata',
        'class': 'mammalia',
        'subclass': 'eutheria',
        'order': 'cetacea'

    },

    'bat': {
        'kingdom': 'animalia',
        'phylum': 'chordata',
        'class': 'mammalia',
        'infraclass': 'eutheria',
        'superorder': 'laurasiatheria',
        'order': 'chiroptera'
    },
    
    'unknown': {
        'kingdom': 'unknown',
        'phylum': 'unknown',
        'class': 'unknown'
    }


}

app.get('/', (req, res) => {
res.sendFile( __dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const animalName = req.params.name.toLowerCase()
    if(animals[animalName]) {
        res.json(animals[animalName])
    } else {
        res.json(animals['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
