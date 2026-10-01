// CHALLENGE 1 


{
  // string | const: my name will not be reassigned
  const fullName = "Galaletsang Modise";      
 
  // number | let: age changes every birthday
  let age = 22;                                
 
  // boolean | let: my opinion of JavaScript may change as I learn more
  let enjoysJavaScript = true;
 
  // number (decimal) | const: a fixed favourite temperature
  const favouriteTemperature = 22.5;
 
  // number (special value NaN)
  const notANumber = Number("hello");
 
  // number (special value infinity) | const: 1 / 0 is always Infinity
  const infiniteValue = 1 / 0;
 
  // number | const: a constant, never changes
  const biggestSafeInteger = Number.MAX_SAFE_INTEGER;
 
  // null | const: deliberately empty
  const emptyValue = null;
 
  console.log(fullName, age, enjoysJavaScript, favouriteTemperature);
  console.log(notANumber, infiniteValue, biggestSafeInteger, emptyValue);
 
  /*
    Interview Answers:
 
    1. The most important difference between var and let is scope.
       var is function-scoped (it ignores blocks like if/for and is
       hoisted as undefined), while let is block-scoped and cannot be
       used before its declaration. That makes let more predictable.
 
    2. I default to const because it tells the next reader "this binding
       never gets reassigned", which removes a whole class of bugs and
       makes code easier to reason about. I only switch to let when I
       know the value must change, like a counter or a running total.
 
    3. usrNm is bad because it is cryptic and forces the reader to guess.
       I would rename it to userName (or username). In a professional
       codebase many people read the code far more often than it is
       written, so clear names act as documentation and save time.
  */
}

// CHALLENGE 2 


{
  // Re-declared here so this block is self-contained
  const fullName = "Galaletsang Modise";
  let age = 25;
  let enjoysJavaScript = true;
  const favouriteTemperature = 22.5;
  const notANumber = Number("hello");
  const infiniteValue = 1 / 0;
  const biggestSafeInteger = Number.MAX_SAFE_INTEGER;
  const emptyValue = null;
 
  console.log(typeof fullName);            // "string"
  console.log(typeof age);                 // "number"
  console.log(typeof enjoysJavaScript);    // "boolean"
  console.log(typeof favouriteTemperature);// "number" 
  console.log(typeof notANumber);          // "number" 
  console.log(typeof infiniteValue);       // "number"
  console.log(typeof biggestSafeInteger);  // "number"
  console.log(typeof emptyValue);          // "object" 
 
  console.log(typeof undefined);           // "undefined"
  console.log(typeof null);                // "object" 
  console.log(typeof NaN);                 // "number"
  console.log(typeof "42");                // "string" (quotes make it text)
  console.log(typeof (typeof 42));         // "string" (typeof 42 is "number", and typeof "number" is "string")
  console.log(typeof [1, 2, 3]);           // "object" (arrays are objects)
  console.log(typeof function () {});     // "function"
 
  /*
    SURPRISES - what I now understand:
    - typeof null is "object", and typeof NaN is "number". I expected
      "null" and "not a number".
    - typeof [1,2,3] is "object". Arrays are a kind of object, so to test
      for an array I need Array.isArray().
    - typeof (typeof 42) is "string" because typeof ALWAYS returns a string.
    - typeof function(){} gives "function" even though functions are
      technically objects too.
  */
 
  /*
    Why is typeof NaN 'number' and typeof null 'object'? 
 
    NaN: it is intentional. NaN stands for "Not a Number", but it is a
    special value INSIDE the number type.  It is what a numeric operation returns when
    the result is not a valid number (like 0 / 0), so it is still of type
    number. 
 
    null: this one is a genuine historical bug. In the first version of
    JavaScript, values were stored with a type tag and null's internal
    representation happened to match the object tag. It was never fixed
    because fixing it would break huge amounts of existing websites. So
    it is a bug we live with and work around.
  */
}
 
// CHALLENGE 3 

{
  let a = "123";
  let b = "3.14";
  let c = "hello";
  let d = "42abc";
  let e = "";
  let f = 0;
  let g = null;
  let h = undefined;
 
  // Small helper so every log prints BOTH the result and its typeof
  const show = (label, result) => console.log(`  ${label} -> ${result} (${typeof result})`);
 
  // Runs all five conversions on one value
  const convertAll = (name, x) => {
    console.log(`--- ${name} = ${String(x)} ---`);
    show("Number()    ", Number(x));
    show("parseInt()  ", parseInt(x));
    show("parseFloat()", parseFloat(x));
    show("Boolean()   ", Boolean(x));
    show("String()    ", String(x));
  };
 
  
 
  /*
    ANSWERS:
 
    1. Number('42abc') is strict: the WHOLE string must be a valid number,
       so it returns NaN. parseInt('42abc') reads from the left and stops
       at the first invalid character, so it returns 42.
 
    2. I reach for parseFloat when the value can have decimals, like
       prices ("199.99"), measurements or percentages. parseInt would
       silently chop off everything after the decimal point.
 
    3. Number('') returns 0, not NaN. It is a common source of bugs
       because an empty form field looks like a valid number 0, so a
       blank input can be treated as "the user entered zero" and pass
       validation unnoticed.
  */
}
 
// CHALLENGE 4 

{
  // 1. "5" + 3
  // Prediction: "53", string. + with a string operand means concatenation, so 3 becomes "3".
  console.log("5" + 3);
 
  // 2. "5" - 3
  // Prediction: 2, number. There is no string version of -, so "5" is coerced to 5.
  console.log("5" - 3);
 
  // 3. "5" * "2"
  // Prediction: 10, number. * is numeric only, so both strings become numbers.
  console.log("5" * "2");
 
  // 4. true + 1
  // Prediction: 2, number. No strings involved, so true becomes 1.
  console.log(true + 1);
 
  // 5. true + "1"
  // Prediction: "true1", string. A string is present, so + concatenates and true becomes "true".
  console.log(true + "1");
 
  // 6. false + null
  // Prediction: 0, number. false becomes 0 and null becomes 0, so 0 + 0.
  console.log(false + null);
 
  // 7. null + undefined
  // Prediction: NaN, number. null becomes 0 but undefined becomes NaN, and 0 + NaN is NaN.
  console.log(null + undefined);
 
  // 8. 1 / 0
  // Prediction: Infinity, number. JS does not throw on division by zero (IEEE 754).
  console.log(1 / 0);
 
  // 9. 0 / 0
  // Prediction: NaN, number. The result is mathematically undefined.
  console.log(0 / 0);
 
  // 10. "abc" - 1
  // Prediction: NaN, number. "abc" cannot be converted to a number, so NaN - 1 is NaN.
  console.log("abc" - 1);
 
  // 11. [] + []
  // Prediction: "" (empty string), string. Arrays convert to strings: [] becomes "", and "" + "" is "".
  console.log([] + []);
 
  // 12. [1] + [2]
  // Prediction: "12", string. [1] becomes "1" and [2] becomes "2", then they are concatenated.
  console.log([1] + [2]);
}

//CHALLENGE 5

 
//PART 1: THE BUGGY CODE
function buggyCode() {
  // Creates a function-scoped string "Sarah".
  // ISSUE 1: uses var instead of const/let (function-scoped, hoisted, re-declarable, so accidental bugs).
  var userName = "Sarah"
  // Creates the string "25".
  // ISSUE 2: age is a STRING, not a number. 
  var userAge = "25"
  // Creates the number 85.5.
  var userScore = 85.5
  // Creates the string "10".
  // ISSUE 3: adjustment is a STRING, so it will not add numerically.
  var scoreAdjustment = "10"
  // number + string means concatenation.
  // ISSUE 4 (the bug): 85.5 + "10" gives "85.510" (a string), not 95.5.
  var newScore = userScore + scoreAdjustment
  // Prints "New score: 85.510", which is wrong.
  // ISSUE 5: string concatenation with + instead of a template literal.
  console.log("New score: " + newScore)
  // ISSUE 6: salary is a string for a number value. Money should be a number.
  var salary = "50000"
  // ISSUE 7: TAX_RATE looks like a constant (UPPER_CASE) but var lets it be reassigned.
  var TAX_RATE = 0.15
  // "50000" * 0.15 works only by IMPLICIT coercion (7500). 
  var tax = salary * TAX_RATE
  // Prints "Tax: R7500". ISSUE 8: no formatting to two decimals for money.
  console.log("Tax: R" + tax)
  // 65 - "25" works by implicit coercion (40). 
  var yearsUntilRetirement = 65 - userAge
  console.log("Years until retirement: " + yearsUntilRetirement)
  // ISSUE 9: "25" + 85.5 concatenates to "2585.5" instead of adding to 110.5.
  var totalAgeAndScore = userAge + userScore
  console.log(totalAgeAndScore)
  // ISSUE 10: isAdmin is the STRING "false", not the boolean false.
  var isAdmin = "false"
  // Boolean("false") is TRUE (any non-empty string is truthy), so it prints "Admin: true". 
  console.log("Admin: " + Boolean(isAdmin))
  // ISSUE 11: inconsistent style, no semicolons, and userName is declared but never used.
}
buggyCode();
 
//PART 2: THE CORRECTED VERSION 

{
  const userName = "Sarah";              // const: never reassigned 
  const userAge = 25;                    // real number 
  const userScore = 85.5;
  const scoreAdjustment = 10;            // real number 
  const newScore = userScore + scoreAdjustment;   // 95.5, numeric addition
  console.log(`New score for ${userName}: ${newScore}`);   // template literal 
 
  const salary = 50000;                  // number 
  const TAX_RATE = 0.15;                 // const so it really is a constant 
  const tax = salary * TAX_RATE;         // no coercion needed
  console.log(`Tax: R${tax.toFixed(2)}`);   // 2 decimals 
 
  const yearsUntilRetirement = 65 - userAge;
  console.log(`Years until retirement: ${yearsUntilRetirement}`);
 
  const totalAgeAndScore = userAge + userScore;   // 110.5 
  console.log(totalAgeAndScore);
 
  const isAdmin = false;                 // real boolean 
  console.log(`Admin: ${isAdmin}`);       // no Boolean needed
}
 
/*
 PART 3: REVIEW 
  Here is what I changed:
  - Replaced every var with const (none of these values change).
  - Stored numbers as numbers: age, adjustment and salary were strings,
    which caused "85.510" and "2585.5" instead of real sums.
  - Made isAdmin a real boolean. Boolean("false") is true, which could
    accidentally grant admin access.
  - Used template literals instead of + concatenation, and toFixed(2)
    for money.
  - Kept TAX_RATE as const since it is a true constant, and added
    semicolons and consistent style. The unused userName is now used.

*/
 