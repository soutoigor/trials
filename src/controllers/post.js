const {
  create: createPost,
  list: listPosts,
  update: updatePost,
  remove: removePost,
} = require('../services/post')

const create = (req, res) => {
  createPost(req.body)
    .then((post) => {
      res.json(post)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

const list = (req, res) => {
  listPosts()
    .then((posts) => {
      res.json(posts)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

const update = (req, res) => {
  updatePost(req.body, req.params.id)
    .then((posts) => {
      if (posts.message === 'Post not found') {
        res.status(404).send(posts.message)
      }
      res.json(posts)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

const remove = (req, res) => {
  removePost(req.params.id)
    .then((post) => {
      if (post.message === 'Post not found') {
        return res.status(404).send(post.message)
      }
      res.json(post)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

module.exports = {
  create,
  list,
  update,
  remove,
}
