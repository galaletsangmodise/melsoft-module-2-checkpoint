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