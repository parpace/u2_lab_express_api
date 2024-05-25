const  { Schema } = require('mongoose')

const actorSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        alive: { type: Boolean, required: true },
        movie: { type: Schema.Types.ObjectId, ref: 'Movie' }
    },
    { timestamps: true },
)

module.exports = (actorSchema)