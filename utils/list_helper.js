const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((total, blog) => { return total + blog.likes }, 0)
}

const favoriteBlog = (blogs) => {
  return blogs.length === 0
    ? undefined
    : blogs.reduce((currBlog, nextblog) => {
      return nextblog.likes > currBlog.likes ? nextblog : currBlog
    })
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) { return undefined }
  else {
    const counts = {}
    blogs.map(blog => {
      counts[blog.author] = (counts[blog.author] || 0) + 1
    })

    const author = Object.keys(counts).reduce((curr, next) => {
      return counts[next] > counts[curr] ? next : curr
    })

    return { author: author, blogs: counts[author] }
  }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) { return undefined }
  else {
    const likes = {}
    blogs.map(blog => {
      likes[blog.author] = (likes[blog.author] || 0) + blog.likes
    })

    const author = Object.keys(likes).reduce((curr, next) => {
      return likes[next] > likes[curr] ? next : curr
    })

    return { author: author, likes: likes[author] }
  }
}



module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}