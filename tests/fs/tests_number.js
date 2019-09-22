load("mjs_assert.js");
load("mjs_number.js");

function NaN_returnsNaN(c) {
   return assertIsNaN(c, "result", NaN) &&
   assertIsNaN(c, "result", Number.NaN);
}

function isNaN_withNaN_returnsTrue(c) {
   return assertIsEqual(c, "result", isNaN(NaN), true) &&
      assertIsEqual(c, "result", isNaN(Number.NaN), true) &&
      assertIsEqual(c, "result", Number.isNaN(NaN), true) &&
      assertIsEqual(c, "result", Number.isNaN(Number.NaN), true);
}

function isNaN_withNonNaN_returnsFalse(c) {
   return assertIsEqual(c, "result", isNaN(Number.NEGATIVE_INFINITY), false) &&
      assertIsEqual(c, "result", isNaN(Number.POSITIVE_INFINITY), false) &&   
      assertIsEqual(c, "result", isNaN(0), false) &&
      assertIsEqual(c, "result", isNaN({}), false) &&
      assertIsEqual(c, "result", isNaN([]), false) &&
      assertIsEqual(c, "result", isNaN("string"), false) &&
      assertIsEqual(c, "result", isNaN(null), false) &&
      assertIsEqual(c, "result", isNaN(undefined), false);
}

function PositiveInfinity_returnsInfinity(c) {
   return assertIsEqual(c, "typeof Number.POSITIVE_INFINITY", typeof Number.POSITIVE_INFINITY, "number") &&
   assertIsEqual(c, "typeof Infinity", typeof Infinity, "number");
}

function NegativeInfinity_returnsInfinity(c) {
   return assertIsEqual(c, "typeof Number.NEGATIVE_INFINITY", typeof Number.NEGATIVE_INFINITY, "number");
}

function isFinite_withFiniteNumber_returnsTrue(c) {
   return assertIsEqual(c, "result", Number.isFinite(1), true) &&
      assertIsEqual(c, "result", Number.isFinite(0), true) &&
      assertIsEqual(c, "result", Number.isFinite(1), true);
}

function isFinite_withInfinteNmber_returnsFalse(c) {
   return assertIsEqual(c, "result", Number.isFinite(Number.NEGATIVE_INFINITY), false) &&
      assertIsEqual(c, "result", Number.isFinite(Number.POSITIVE_INFINITY), false);
}

function isFinite_withNonNumber_returnsFalse(c) {
   return assertIsEqual(c, "result", Number.isFinite({}), false) &&
      assertIsEqual(c, "result", Number.isFinite([]), false) &&
      assertIsEqual(c, "result", Number.isFinite("string"), false) &&
      assertIsEqual(c, "result", Number.isFinite(null), false) &&
      assertIsEqual(c, "result", Number.isFinite(undefined), false);
}

function buildNumberScenarios() {
   return [
      { name: "NaN_returnsNaN", func: NaN_returnsNaN },
      { name: "isNaN_withNaN_returnsTrue", func: isNaN_withNaN_returnsTrue },
      { name: "isNaN_withNonNaN_returnsFalse", func: isNaN_withNonNaN_returnsFalse },
      { name: "PositiveInfinity_returnsInfinity", func: PositiveInfinity_returnsInfinity },
      { name: "NegativeInfinity_returnsInfinity", func: NegativeInfinity_returnsInfinity },
      { name: "isFinite_withFiniteNumber_returnsTrue", func: isFinite_withFiniteNumber_returnsTrue },
      { name: "isFinite_withInfinteNmber_returnsFalse", func: isFinite_withInfinteNmber_returnsFalse },
      { name: "isFinite_withNonNumber_returnsFalse", func: isFinite_withNonNumber_returnsFalse }
   ];
}