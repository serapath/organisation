const bel = require('bel')
const csjs = require('csjs-inject')

const header = require('header')
const footer = require('footer')

module.exports = organisation

function organisation ({
  data = { tabs: [] },
  theme = { fontsizes: {}, colors: {}, fontfaces: {} },
  css = {}
} = {}) {
  const {
    title,
    place,
    time,
    event,
    home,
    logo,
    chat,
    chapters,
    tabs = []
  } = data
  const {
    fontsizes: { fs0, fs1, fs2, fs3, fs4, fs5, fs6, fs7, fs8, fs9 },
    colors: { c0, c1, c2, c3, c4, c5, c6, c7, c8, c9 },
    fontfaces: { ff0, ff1, ff2 }
  } = theme
  const element1 = header({
    home: '/foo',
    logo: ''
  })
  const element2 = footer({
    tools: [{ title: 'foo', url: '/bar' }]
  })
  const element = bel`<div class="organisation">
    ${element1}
    <div class="content">
      <h1> hello world </h1>
    </div>
    ${element2}
  </div>`
  return element
}
