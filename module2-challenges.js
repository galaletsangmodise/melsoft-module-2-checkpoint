// CHALLENGE 1 

console.log("CHALLENGE 1");
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

console.log("CHALLENGE 2");
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
 
 