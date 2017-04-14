'use strict'

/**
 * @returns {*}
 */
module.exports = function (opt) {
  const path = require('path')
  const pkg  = require('./package.json')
  const spawn = require('child_process').spawnSync
  let colophone =
  {
    author: pkg.author,
    build: {
      branch: spawn( 'git', [ 'branch' ] ).stdout.toString().split('* ', 2)[1].split('\n', 1)[0],
      clean: spawn( 'git', [ 'status' ] ).stdout.toString().length === 0,
      rev: spawn( 'git', [ 'rev-parse', 'HEAD' ] ).stdout.toString().slice(0,8),
    },
    description: pkg.description,
    homepage: pkg.homepage,
    license: pkg.license,
    source: pkg.repository.url,
    version: pkg.version,
    year: new Date().getFullYear(),
  }

  return {
    code: 'module.exports = function() { return ' + JSON.stringify(colophone) + '}',
    dependencies: [
      require.resolve('./package.json'),
      require.resolve('path'),
      require.resolve('child_process'),
    ],
    cacheable: true
  }
}
