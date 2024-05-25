const db = require('../db')
const { Movie } = require('../models')
const { Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const thePrestige = await Movie.find({ title: 'The Prestige' })
    const inception = await Movie.find({ title: 'Inception' })
    const interstellar = await Movie.find({ title: 'Interstellar' })
    
    const reviews = [
        {
            score: 8.9,
            comment: `Although the film's stunning reveals make the audience realise it has been duped... there is a protagonist to empathise with each time.`,
            movie: thePrestige[0]._id
        },
        {
            score: 8.2,
            comment: `An early indicator of Nolan's skillful storytelling; the final twist is nicely executed. One of the rare adaptions that overshadows it's source material.`,
            movie: thePrestige[0]._id
        },
        {
            score: 7.5,
            comment: `Nolan is exploring dreams and the possibilities are endless, which is why it’s a little disappointing that so much of the film feels like a generic CGI action movie, albeit a high-class one.`,
            movie: inception[0]._id
        },
        {
            score: 8.5,
            comment: `Inception engaged on a mainly intellectually level, but that isn't to say that film didn't pack an emotional impact.`,
            movie: inception[0]._id
        },
        {
            score: 9.2,
            comment: `Staggeringly beautiful, bafflingly complex, this is proper event cinema.`,
            movie: interstellar[0]._id
        },
        {
            score: 8.3,
            comment: `With all the rampant think pieces questioning the probability of every science fiction film that comes out, it's comforting to across a movie that doesn't really claim to have any of the answers.`,
            movie: interstellar[0]._id
        },
    ]
    await Review.insertMany(reviews)
    console.log(`created reviews`)
}

const run = async () => {
    await main()
    db.close()
}

run()