const a = require('./constants/a')
const b = require('./constants/b')
const helper1 = require('./helpers/helper1')
const helper2 = require('./helpers/helper2')
const css1 = require('./stylesheets/a.css')
const css2 = require('./stylesheets/b.css')

exports.constants = {
  a: a,
  b: b
}

exports.helpers = {
  helper1: helper1,
  helper2: helper2
}

exports.stylesheets = {
  css1: css1,
  css2: css2
}
