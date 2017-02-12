/**
  Constants used for blog processing scripts
*/
const path = require('path')
const projectRoot = path.join(__dirname, '..', '..')
const repoURL = 'https://github.com/TZM/blog'
const repoBranch = 'master'
/* uncomment out the line below to work locally with different blog branch
repoBranch = 'your-custom-repo-branch-here'
/**/

module.exports = {
  repoURL,
  repoBranch,
  downloadLink: `${repoURL}/archive/${repoBranch}/.zip`,
  // blogRepoPath: path.join(projectRoot, 'content-external/blog'),
  // blogRepoPostPath: path.join(projectRoot, 'content-external/blog/posts/'),
  blogRepoPath: path.join(projectRoot, 'blog'),
  blogRepoPostPath: path.join(projectRoot, 'blog/posts/'),
  siteBlogPath: path.join(projectRoot, 'content/blog/'),
  authorDataPath: path.join(projectRoot, 'src/pages/Blog/', 'generated-authors.json'),
}
