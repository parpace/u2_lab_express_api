const db = require('../db')
const { Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = [
        {
            title: `The Prestige`,
            runtime: `2h 10min`,
            rating: 8.5,
            yearReleased: 2006,
            description: `After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.`
        },
        {
            title: `Inception`,
            runtime: `2h 28min`,
            rating: 8.8,
            yearReleased: 2010,
            description: `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.`
        },
        {
            title: `Interstellar`,
            runtime: `2h 49min`,
            rating: 8.7,
            yearReleased: 2014,
            description: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.`
        },
        {
            title: `Tenet`,
            runtime: `2h 30min`,
            rating: 7.3,
            yearReleased: 2020,
            description: `Armed with only the word "Tenet," and fighting for the survival of the entire world, CIA operative, The Protagonist, journeys through a twilight world of international espionage on a global mission that unfolds beyond real time.`
        },
        {
            title: `Oppenheimer`,
            runtime: `3h`,
            rating: 8.3,
            yearReleased: 2023,
            description: `The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.`
        },
    ]
    await Movie.insertMany(movies)
    console.log(`created movies`)
}

const run = async () => {
    await main()
    db.close()
}

run()