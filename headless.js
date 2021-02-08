
'use strict;'

const benv = require('benv');

const t = Date.now();

benv.setup(function() {
  benv.require(__dirname + '/bundle.app.js');
});

console.log('benv require took', Date.now() -t, 'milliseconds');

