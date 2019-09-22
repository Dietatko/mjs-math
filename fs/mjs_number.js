let Number = {
   // The smallest interval between two representable numbers.
   EPSILON: 0.000000000001, //Math.pow(2, -52),
};

// Special "not a number" value.
Number.NaN = NaN;
Number.isNaN = isNaN;

// Special value representing negative infinity; returned on overflow.
Number.NEGATIVE_INFINITY = ffi("double mjs_math_getNegativeInfinity()")();

// Special value representing infinity; returned on overflow.
Number.POSITIVE_INFINITY = ffi("double mjs_math_getPositiveInfinity()")();
let Infinity = Number.POSITIVE_INFINITY;

Number.isFinite = function(value) {
   return typeof value === 'number' && 
      value !== Number.NaN && value !== Number.NEGATIVE_INFINITY && value !== Number.POSITIVE_INFINITY;
}
