const db = require('../db')
const { Movie } = require('../models')
const { Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const thePrestige = await Movie.find({ title: 'The Prestige' })
    const inception = await Movie.find({ title: 'Inception' })
    const interstellar = await Movie.find({ title: 'Interstellar' })
    const tenet = await Movie.find({ title: 'Tenet' })
    const oppenheimer = await Movie.find({ title: 'Oppenheimer' })

    const actors = [
        {
            name: `Hugh Jackman`,
            age: 55,
            alive: true,
            movie: thePrestige[0]._id
        },
        {
            name: `Christian Bale`,
            age: 50,
            alive: true,
            movie: thePrestige[0]._id
        },
        {
            name: `Leonardo DiCaprio`,
            age: 49,
            alive: true,
            movie: inception[0]._id
        },
        {
            name: `Ken Watanabe`,
            age: 64,
            alive: true,
            movie: inception[0]._id
        },
        {
            name: `Matthew McConaughey`,
            age: 54,
            alive: true,
            movie: interstellar[0]._id
        },
        {
            name: `Anne Hathaway`,
            age: 41,
            alive: true,
            movie: interstellar[0]._id
        },
        {
            name: `John David Washington`,
            age: 39,
            alive: true,
            movie: tenet[0]._id
        },
        {
            name: `Elizabeth Debicki`,
            age: 33,
            alive: true,
            movie: tenet[0]._id
        },
        {
            name: `Cillian Murphy`,
            age: 48,
            alive: true,
            movie: oppenheimer[0]._id
        },
        {
            name: `Robert Downey Jr.`,
            age: 59,
            alive: true,
            movie: oppenheimer[0]._id
        },
    ]
    await Actor.insertMany(actors)
    console.log(`created actors`)
}

const run = async () => {
    await main()
    db.close()
}

run()