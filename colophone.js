'use strict'

const path = require('path')
const spawn = require( 'child_process' ).spawnSync

module.exports = {
  author: require("./package.json").author,
  build: {
    branch: spawn( 'git', [ 'branch' ] ).stdout.toString().split('* ', 2)[1].split('\n', 1)[0],
    clean: spawn( 'git', [ 'status' ] ).stdout.toString().length === 0,
    rev: spawn( 'git', [ 'rev-parse', 'HEAD' ] ).stdout.toString().slice(0,8),
  },
  description: require("./package.json").description,
  homepage: require("./package.json").homepage,
  license: require("./package.json").license,
  repo: require("./package.json").repository.url,
  version: require("./package.json").version,
  year: new Date().getFullYear(),
}

console.log(module.exports)
