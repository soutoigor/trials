const Post = require('../models/post')
const {
  forEach,
  all,
  isNil,
  includes,
  keys,
} = require('ramda')

const create = async (attributes) => {
  const post = new Post(attributes)

  try {
    await post.save()
    return post
  } catch (err) {
    return err
  }
}

const list = async () => {
  try {
    const posts = await Post.find({})
    return posts
  } catch (err) {
    return err
  }
}

const listById = async (id) => {
  try {
    const post = await Post.findById(id)
    if (isNil(post)) throw new Error('Post not found')
    return post
  } catch (err) {
    return err
  }
}

const update = async (attributes, id) => {
  const updates = keys(attributes)
  const allowedUpdates = ['like', 'comments']
  const isValidOperation = all(update => includes(update, allowedUpdates), updates)
  if (!isValidOperation) throw new Error('Invalid update')

  try {
    const post = await Post.findById(id)
    if (isNil(post)) throw new Error('Post not found')
    forEach(
      (update) => {
        post[update] = attributes[update]
      },
      updates,
    )
    await post.save()
    return post
  } catch (err) {
    return err
  }
}

const remove = async (id) => {
  try {
    const post = await Post.findByIdAndDelete(id)
    if (isNil(post)) throw new Error('Post not found')
    return post
  } catch (err) {
    return err
  }
}

module.exports = {
  create,
  list,
  listById,
  update,
  remove,
}
