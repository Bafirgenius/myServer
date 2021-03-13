module.exports = {
    getPosts: (req, res) => {
        res.send("Contoller work")
    },
    createPosts: async (req, res) => {
        res.send("post creation")
    }
}