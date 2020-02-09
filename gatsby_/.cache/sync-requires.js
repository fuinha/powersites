const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-contato-js": hot(preferDefault(require("/opt/PROJECTS2019/NEW2/ProjectSite/powersites/gatsby_/src/pages/contato.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/opt/PROJECTS2019/NEW2/ProjectSite/powersites/gatsby_/src/pages/index.js")))
}

