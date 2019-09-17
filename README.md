# Partial Math object polyfill for mJS engine

## Overview
The [mJS](https://github.com/cesanta/mjs) is a restricted JavaScript engine designed for microcontrollers with limited resources. The Math object is not supported out of the box to limit the library footprint.

This library adds some of the JavaScript [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) object properties and methods. 

## Example
Import library in `mos.yml`:
```
libs:
  - origin: https://github.com/mongoose-os-libs/mjs
  - origin: https://github.com/Dietatko/mjs-math
```

Use in javascript code:
```
load("mjs_math.js");
```

## Available functions
Following functions are available:

## Footprint
Not all functions are available to limit amount of storage and memory needed. There is no option of including only some of the functions at the moment.
