load("mjs_number.js");

let Math = {
   //Euler's constant and the base of natural logarithms, approximately 2.718.
   E: 2.718281828459045,

   // Natural logarithm of 2, approximately 0.693.
   LN2: 0.6931471805599453,

   // Natural logarithm of 10, approximately 2.303.
   LN10: 2.302585092994046,

   // Base 2 logarithm of E, approximately 1.443.
   LOG2E: 1.4426950408889634,
   
   // Base 10 logarithm of E, approximately 0.434.
   LOG10E: 0.4342944819032518,
   
   // Ratio of the circumference of a circle to its diameter, approximately 3.14159.
   PI: 3.141592653589793,
   
   // Square root of 1/2; equivalently, 1 over the square root of 2, approximately 0.707.
   SQRT1_2: 0.7071067811865476,
   
   // Square root of 2, approximately 1.414.
   SQRT2: 1.4142135623730951,

   // Returns the absolute value of a number.
   abs: ffi("double fabs(double)"),

   // // Returns the arccosine of a number.
   // acos: function(x) {

   // },

   // // Returns the hyperbolic arccosine of a number.
   // acosh: function(x) {

   // },

   // // Returns the arcsine of a number.
   // asin: function(x) {

   // },

   // // Returns the hyperbolic arcsine of a number.
   // asinh: function(x) {

   // },

   // // Returns the arctangent of a number.
   // atan: function(x) {

   // },

   // // Returns the hyperbolic arctangent of a number.
   // atanh: function(x) {

   // },

   // // Returns the arctangent of the quotient of its arguments.
   // atan2: function(y, x) {

   // },

   // // Returns the cube root of a number.
   // cbrt: function(x) {

   // },

   // // Returns the smallest integer greater than or equal to a number.
   // ceil: function(x) {

   // },

   // // Returns the number of leading zeroes of a 32-bit integer.
   // clz32: function(x) {

   // },

   // // Returns the cosine of a number.
   // cos: function(x) {

   // },

   // // Returns the hyperbolic cosine of a number.
   // cosh: function(x) {

   // },

   // Returns Ex, where x is the argument, and E is Euler's constant (2.718), the base of the natural logarithm.
   exp: ffi("double exp(double)"),

   // // Returns subtracting 1 from exp(x).
   // expm1: function(x) {

   // },

   // // Returns the largest integer less than or equal to a number.
   // floor: function(x) {

   // },

   // // Returns the nearest single precision float representation of a number.
   // fround: function(x) {

   // },

   // // Returns the square root of the sum of squares of its arguments.
   // hypot: function([x[, y[, …]]]) {

   // },

   // // Returns the result of a 32-bit integer multiplication.
   // imul: function(x, y) {

   // },

   // Returns the natural logarithm (loge, also ln) of a number.
   log: ffi("double log(double)"),

   // // Returns the natural logarithm (loge, also ln) of 1 + x for a number x.
   // log1p: function(x) {
   //    return Math.log(1 + x);
   // },

   // Returns the base 10 logarithm of a number.
   log10: ffi("double log10(double)"),

   // Returns the base 2 logarithm of a number.
   log2: function(x) {
      return Math.log(x) / Math.log(2);
   },

   // // Returns the largest of zero or more numbers.
   // max: function([x[, y[, …]]]) {

   // },

   // // Returns the smallest of zero or more numbers.
   // min: function([x[, y[, …]]]) {

   // },

   // Returns base to the exponent power, that is, baseexponent.
   pow: ffi("double pow(double, double)"),

   // // Returns a pseudo-random number between 0 and 1.
   // random: function() {

   // },

   // // Returns the value of a number rounded to the nearest integer.
   // round: function(x) {

   // },

   // // Returns the sign of the x, indicating whether x is positive, negative or zero.
   // sign: function(x) {

   // },

   // // Returns the sine of a number.
   // sin: function(x) {

   // },

   // // Returns the hyperbolic sine of a number.
   // sinh: function(x) {

   // },

   // // Returns the positive square root of a number.
   // sqrt: function(x) {

   // },

   // // Returns the tangent of a number.
   // tan: function(x) {

   // },

   // // Returns the hyperbolic tangent of a number.
   // tanh: function(x) {

   // },

   // // Returns the integer part of the number x, removing any fractional digits.
   // trunc: function(x) {

   // },
};
