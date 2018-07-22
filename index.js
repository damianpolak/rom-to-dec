/*
 * rom-to-dec
 * https://github.com/damianpolak/rom-to-dec
 *
 * Copyright 2018, Damian Polak
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 */

module.exports = romToDec = (str) => {
  'use strict';

  if(str === undefined ||
     str === null ||
     str === 0 ||
     str === '' ||
     typeof(str) !== 'string') {
       throw new TypeError('Expected correct string value');
  }

  str = str.toUpperCase();

};
