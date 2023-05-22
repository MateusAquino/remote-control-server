const sass = require('sass')
const fs = require('fs')
const path = require('path')

const input = path.join(__dirname, '../scss/style.scss')
const output = path.join(__dirname, '../res/style.css')
const result = sass.compile(input, { style: 'compressed' })
fs.writeFileSync(output, result.css)
