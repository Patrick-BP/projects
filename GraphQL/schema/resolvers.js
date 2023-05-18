const UserList = require('../fakeData')
const {} = require('../fakeData')
const resolvers = {
    Query: {
        users(){
            return UserList
        }
    }
}
module.exports = {resolvers}