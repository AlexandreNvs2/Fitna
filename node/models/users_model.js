import mongoose from 'mongoose'

const UsersSchema = mongoose.Schema({
    name: {
        type: String,
    },

    lastName : {
        type: String,
    },

    mail: {
        type: String
    },

    phone: {
        type: Number
    },

    date_log: {
        type: date.now()
    }

    

})


const Users = mongoose.model('USER', UsersSchema)

export default Users