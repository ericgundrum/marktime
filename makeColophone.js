'use strict'

const pkg  = require('./package.json')
const spawn = require('child_process').spawnSync

require('fs').writeFileSync( 'src/colophone.js', 'module.exports = ' + JSON.stringify({
    author: pkg.author,
    build: {
      branch: spawn( 'git', [ 'branch' ] ).stdout.toString().split('* ', 2)[1].split('\n', 1)[0],
      clean: spawn( 'git', [ 'status' ] ).stdout.toString().endsWith('clean\n'),
      rev: spawn( 'git', [ 'rev-parse', 'HEAD' ] ).stdout.toString().slice(0,8),
    },
    description: pkg.description,
    homepage: pkg.homepage,
    license: pkg.license,
    source: pkg.repository.url,
    version: pkg.version,
    year: new Date().getFullYear(),
}, null, 2 ) + '\n')
