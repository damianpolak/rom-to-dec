# rom-to-dec [![Build Status](https://travis-ci.org/damianpolak/rom-to-dec.svg?branch=master)](https://travis-ci.org/damianpolak/rom-to-dec)

> :jack_o_lantern: Converts roman to decimal numerals: MCCXIX → 1219

## Install

```
$ npm install rom-to-dec
```

## Usage

```js
const romToDec = require('rom-to-dec');

romToDec('CXXIII');
// returns '123'
romToDec('DLXVII');
// returns '567'
romToDec('MMMXCIX');
// returns '3099'
romToDec('MCCXIX');
// returns '1219'
romToDec('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCCXV');
// returns '40215'
```

## License

MIT © Damian Polak
