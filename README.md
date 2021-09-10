# EBIQUITY CODE

## Using NPM

Please use `npm run start`  to run the development server

## Answers to the second part of the test

* I will start by not using the var keyword in the for in loops as we now have const/let in ES6 which are block scoped and var variables can be redeclared within its scope. Let for values that will be later updated and const for values that wont change.
```
  const processedObject = []
```

* The level in hierarchyLookupTable needs to be declared as a variable as this will flag up as an error saying level is not defined

* There may not be a need to declare current_level = hierarchyLookupTable[level], rather just add it directly into the processedObject square bracket notation straight away

* Also maybe instead of using push we can use the new spread operators to assign a new array with the previous values into the data and media values
* in the generateDataarray function, rather than use a for loop. A forEach array method could be used instead on the hierarchyLookuptable array. Executing the specified function for each of the items in the array as below:
```
  hierarchyLookupTable.forEach(item => rawObject[item] = [])
```
This will also go for the for loop running through the converted rawObject array. However, I will declare a new variable
```
const rawObjectKeys array = Object.Keys(rawObject)
``` 
then loop through that.

* The variable names need to be in camelCasing. eg. values_array should be valuesArray

* I will certainly look  at using HOF array methods where possible within this function instead. map for example where I need to create a new array by calling a function on the items in a previous array whilst returning the same length of items also

* To test each function, I will have a test suite describing what it is I am going to be testing for in each function. Each suite will then have different test cases checking for the expected result of each step within the functions 



