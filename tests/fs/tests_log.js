load("mjs_assert.js");
load("mjs_math.js");

function exp_returnsCorrectEtoX(c) {
   return assertIsApproxEqual(c, "result", Math.exp(2), Math.E * Math.E) && 
      assertIsApproxEqual(c, "result", Math.exp(1), Math.E) && 
      assertIsApproxEqual(c, "result", Math.log(0), -Infinity) && 
      assertIsApproxEqual(c, "result", Math.log(-1), 0.36787944117144233);
}

function log_withPositive_returnsCorrectNaturalLogarithm(c) {
   return assertIsApproxEqual(c, "result", Math.log(Math.E * Math.E * Math.E), 3) && 
      assertIsApproxEqual(c, "result", Math.log(Math.E), 1) && 
      assertIsApproxEqual(c, "result", Math.log(1), 0);
}

function log_withNegative_returnsNaN(c) {
   return assertIsNaN(c, "result", Math.log(-10));
}

function log_withZero_returnsMinusInfinity(c) {
   return assertIsEqual(c, "result", Math.log(0), -Infinity);
}

function log10_withPositive_returnsCorrect10Logarithm(c) {
   return assertIsApproxEqual(c, "result", Math.log10(1000), 3) &&
      assertIsApproxEqual(c, "result", Math.log10(10), 1) &&
      assertIsApproxEqual(c, "result", Math.log10(1), 0);
}

function log10_withNegative_returnsNaN(c) {
   return assertIsNaN(c, "result", Math.log10(-1));
}

function log10_withZero_returnsMinusInfinity(c) {
   return assertIsEqual(c, "result", Math.log10(0), -Infinity);
}

function log2_withPositive_returnsCorrect2Logarithm(c) {
   return assertIsApproxEqual(c, "result", Math.log2(8), 3) &&
      assertIsApproxEqual(c, "result", Math.log2(2), 1) &&
      assertIsApproxEqual(c, "result", Math.log2(1), 0);
}

function log2_withNegative_returnsNaN(c) {
   return assertIsNaN(c, "result", Math.log2(-1));
}

function log2_withZero_returnsMinusInfinity(c) {
   return assertIsEqual(c, "result", Math.log2(0), -Infinity);
}

function pow_returnsCorrectBaseRaisedExponent(c) {
   return assertIsApproxEqual(c, "result", Math.pow(7, 2), 49) && 
      assertIsApproxEqual(c, "result", Math.pow(-7, 3), -343) && 
      assertIsApproxEqual(c, "result", Math.pow(4, 0.5), 2) && 
      assertIsApproxEqual(c, "result", Math.pow(8, -1/3), 0.5);
}

function pow_withNegativeBaseAndFractionalExponent_returnsNaN(c) {
   return assertIsNaN(c, "result", Math.pow(-4, 0.5));
}

function buildLogScenarios(c) {
   return [
      {
         name: "exp_returnsCorrectEtoX",
         func: exp_returnsCorrectEtoX,
      },
      {
         name: "log_withPositive_returnsCorrectNaturalLogarithm",
         func: log_withPositive_returnsCorrectNaturalLogarithm,
      },
      {
         name: "log_withNegative_returnsNaN",
         func: log_withNegative_returnsNaN,
      },
      {
         name: "log_withZero_returnsMinusInfinity",
         func: log_withZero_returnsMinusInfinity
      },
      {
         name: "log10_withPositive_returnsCorrect10Logarithm",
         func: log10_withPositive_returnsCorrect10Logarithm
      },
      {
         name: "log10_withNegative_returnsNaN",
         func: log10_withNegative_returnsNaN
      },
      {
         name: "log10_withZero_returnsMinusInfinity",
         func: log10_withZero_returnsMinusInfinity
      },
      {
         name: "log2_withPositive_returnsCorrect2Logarithm",
         func: log2_withPositive_returnsCorrect2Logarithm
      },
      {
         name: "log2_withNegative_returnsNaN",
         func: log2_withNegative_returnsNaN
      },
      {
         name: "log2_withZero_returnsMinusInfinity",
         func: log2_withZero_returnsMinusInfinity
      },
      {
         name: "pow_returnsCorrectBaseRaisedExponent",
         func: pow_returnsCorrectBaseRaisedExponent
      },
      {
         name: "pow_withNegativeBaseAndFractionalExponent_returnsNaN",
         func: pow_withNegativeBaseAndFractionalExponent_returnsNaN
      }
   ];
}
