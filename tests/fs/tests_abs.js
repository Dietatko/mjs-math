load("mjs_assert.js");
load("mjs_math.js");

function abs_withZero_returnsZero(c) {
   return assertIsEqual(c, "result", Math.abs(0), 0);
}

function abs_withPositive_returnsPositive(c) {
   return assertIsEqual(c, "result", Math.abs(10), 10);
}

function abs_withNegative_returnsNegative(c) {
   return assertIsEqual(c, "result", Math.abs(-10), 10);
}

function buildAbsScenarios() {
   return [
      {
         name: "abs_withZero_returnsZero",
         func: abs_withZero_returnsZero,
      },
      {
         name: "abs_withPositive_returnsPositive",
         func: abs_withPositive_returnsPositive,
      },
      {
         name: "abs_withNegative_returnsNegative",
         func: abs_withNegative_returnsNegative
      }
   ];
}