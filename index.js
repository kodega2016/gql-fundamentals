const { ApolloServer } = require("apollo-server")
const gql = require("graphql-tag")

const typeDefs = gql`
    type User{
        name:String,
        avatar:String,
        friends:[User]!
    }

    type Query{
        me:User!
    }
`

const resolvers = {
    Query: {
        me() {
            return {
                name: "Khadga Bahadur Shrestha",
                avatar:"avatar.png",
                friends:[
                    {
                        name:"Nishuka Shrestha",
                        avatar:"nishuka.png"
                    },
                    {
                        name:"Sakar Subedi",
                        avatar:"sakar.png"
                    }
                ]
            }
        }
    }
}


const server = new ApolloServer({
    typeDefs, resolvers
})

server.listen(4000, () => {
    console.log(`server is running...`)
})
