---
layout: workshops
title: Programming 101
---

# Programming 101

## Data Types
Programs need data to work with, perform operations on, and to return outputs from computation and analysis. Real world geographic and non-geographic phenomena and entities are represented in computer programs as data of specific types. 

In JavaScript there are seven primitive data types:

* undefined
* String
* Number
* Boolean
* BigInt
* Symbol
* null

### Strings

Strings are used to represent text in JavaScript programs. Strings contain characters which are surrounded by ` or “ (single or double quotes). There are several cases where string variables are used when working with geospatial data; for example, in the metadata of satellite images the name of the sensor used to collect an image could be stored as a string.

<details>
  <summary><b>What other information related to geographic data could be stored as a string data type?</b></summary>
  <p><br>Anything that needs to be represented as text data such as place names, road names, names of weather stations.</p>
</details>
<br>

Enter the following command into the code editor to create a string variable.

```js
var stringVar= 'Hello World!';

```
You have created a string variable called `stringVar` which contains the text information 'Hello World!'. This is data that you can use in your program. 

You can use the `print()` operation to print the data in `stringVar` onto the *Console* for inspection. 

```js
print(stringVar)
```

You should see `Hello World!` displayed in the *Console*.

<div style="text-align: center;">
<iframe src="https://player.vimeo.com/video/441912597" width="640" height="321" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p><a href="https://vimeo.com/441912597">Hello World!</a></p>
</div>

### Number

Number data type is used to represent numeric data. Storing numbers in programs allows us to perform mathematical and statistical operations and use numeric attributes to describe geographic features and entities.

<details>
  <summary><b>What other information related to geographic data could be stored as a number data type?</b></summary>
  <p><br>Temperature, precipitation, population counts.</p>
</details>
<br>

Let's create some numeric data.

```js
var x = 1;
var y = 2;
print(x);
print(y);

```

Execute the following code to perform some basic maths with the variables `x` and `y`.

```js
var z = x + y;
```

<details>
  <summary><b>What value do you think will be stored in the variable <code>z</code>?</b></summary>
  <p> <p><br>3<br> <code>print(z);</code></p></p>
</details>
<br>

### Boolean 
<!-- Relevant to later exercises? -->
Boolean data is used to store true or false values. This is useful for storing the results of comparison (equal to, greater than, less than) and logical (and, or, not) operations.

<table style="width:75%; border-collapse: collapse; border-bottom: 1px solid #ddd; padding: 15px; margin-left: auto; margin-right: auto;">
  <caption>JavaScript comparison and logical operators</caption>
  <tr>
    <th>Operator</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><code>==</code></td>
    <td>equal to</td>
    <td><code>x == 5</code></td>
  </tr>
  <tr>
    <td><code>!=</code></td>
    <td>not equal</td>
    <td><code>x != 5</code></td>
  </tr>
   <tr>
    <td><code>></code></td>
    <td>greater than</td>
    <td><code>x > 5</code></td>
  </tr>
  <tr>
    <td><code><</code></td>
    <td>less than</td>
    <td><code>x < 5</code></td>
  </tr>
  <tr>
    <td><code>>=</code></td>
    <td>greater than or equal to</td>
    <td><code>x >= 5</code></td>
  </tr>
  <tr>
    <td><code><=</code></td>
    <td>less than or equal to</td>
    <td><code>x <= 5</code></td>
  </tr>
  <tr>
    <td><code>&&</code></td>
    <td>and</td>
    <td><code>x == 5 && y == 4</code></td>
  </tr>
  <tr>
    <td><code>||</code></td>
    <td>or</td>
    <td><code>x == 5 || y == 5</code></td>
  </tr>
  <tr>
    <td><code>!</code></td>
    <td>not</td>
    <td><code>!(x <= 5)</code></td>
  </tr>
</table>

Boolean operations are useful for controlling the flow of programs (e.g. if X is true then do Y) and for filtering datasets based on a condition (e.g. get all cities with a population greater than 500,000). Let's experiment with boolean conditions. 

```js
var demoBool = z;
print(demoBool == 4);

var bool1 = x;
print(bool1 == 1 && y == 2);

var bool2 = y < x;
print(bool2)
```

<details>
  <summary><b>What value do you think will be stored in the variable <code>bool1</code> and <code>bool2</code>?</b></summary>
  <p> 
    <p><code>bool1 = true</code></p>
    <p><code>bool2 = false</code></p>
  </p>
</details>
<br>

### Objects

An object in JavaScript is a collection properties where each property is a name:value pair and the value can be any data type (e.g. String, Number, Boolean, null) or a type of object. You can create custom data types using objects as required by your program's needs; for example, you could create an object to represent a point with two name:value pairs: `longitude: 25.55` and `latitude: 23.42` where the values are number type coordinates. You can access properties of an object using the dot operator: `.` with the format `<object name>.<property name>`. 

Let's create an object with two values that correspond to a longitude and latitude pair.

```js
var lon = 25.55;
var lat = 23.42;

// create an object named point
var point = {
  longitude: lon,
  latitude: lat
};
print(point);

// access value in object
print(point.longitude);
```

<br>

### Arrays

Arrays are a special list-like object that store an ordered collection of elements. Arrays are declared by placing values in square brackets `[1, 2, 3]` and you access values inside an array using the value's array index. The first value in an array has an index of 0, the second value has an index of 1, and the final value has an index of `n-1` where `n` is the number of elements in the array. This is the distinction between arrays and objects where elements are represented by name:value pairs. The elements in arrays are ordered and accessed by their index position; the elements in objects are unordered and accessed by their property name. 

Below is an example of how to create an array of numbers that represent years.

```js
var years = [2000, 2001, 2002, 2003, 2004, 2005, 2006];
```

You can see the data inside arrays using the `print()` command or extract information from arrays using square brackets `[]` and the index of the element. 

```js
print(years);
var year0 = years[0];
print(year0);
var year1 = years[1];
print(year1);
```

You can also put strings inside arrays.

```js
var stringList = ['I', 'am', 'in', 'a', 'list'];
print(stringList);
```
<!-- Could be removed -->
Remember, each item in an array is separated by a comma. You can create n-Dimensional arrays. 

```js
var squareArray = [
  [2, 3], 
  [3, 4]
];
print(squareArray);
```

<details>
  <summary><b>What kind of geospatial data is suited to being represented using arrays?</b></summary>
  <p><br>Images captured by satellites, UAVs (drones), or aeroplanes - image data consists of a grid of pixels. This kind of data is called raster data in Geography speak.</p>
</details>

<br>

## Variables
<!-- Consider brinin this section earlier, before boolean? -->
Variables provide a named reference for data that is used in a program.  

To create a variable you need to declare it using the **`var`** keyword. Once a variable is declared you can put data inside it and use that variable, and therefore the data inside it, in your program. When we were adding `x` and `y` above, we were actually referring to the numeric data values stored inside `x` and `y`. 

You assign data to a variable using the assignment operator `=`.

The code block below declares a variable `temp` and then assigns the value `25` to this variable. As demonstrated by the variable `temp1` you can declare a variable and assign values to it in one statement. 

```js
var temp;
temp = 25;

var temp1 = 26;
```

Using variables makes code easier to organise and write. For example, if you want to perform multiple operations on temperature data you can refer to the data using the variable name as opposed to either writing out the temperature values or reading them from a file separately for each operation.

<br>

## Functions
<!-- This could be cut, if they're not writing functions in this lab they won't be applying this theory -->
Functions perform a specific task or operation on data in your program. Before you use a function you need to declare it.

* The `function` keyword.
* The name of the function (e.g. `function subtraction`).
* The list of parameters the function takes in separated by commas and enclosed in parentheses (e.g. `function subtraction(number1, number2)`).
* A list of statements that perform the function tasks enclosed in braces `{ }`. 
* A `return` statement that specifies what data is returned by a call to the function.

Let's make a function that performs a subtraction operation.

```js
// substraction function

//function declaration
function subtraction(number1, number2) {
  var diff = number1 - number2;
  return diff;
}
```

Once a function has been declared you can call it from within your program. Let's use our variables `x` and `y` again and subtract `x` from `y`.

```js
var diff = subtraction(y, x);
print(diff)

```

You should see the result of calling `subtraction()` printed in the *Console*.

<!--Stacking of bands will be unfamiliar to a newcomer at this point in the lab - consider a different function or shifting this to where geographic data starts to be used -->
Google Earth Engine also comes with a suite of in-built functions that you can use to retrieve, analyse, and visualise data. You can explore these functions under the *Docs* tab in the left side-bar. The picture below shows the documentation for the `addBands()` function which can be used to stack bands from two `Image`s. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/docs_side_bar.png" class="workshop-img-small">
    <figcaption>Docs tab in the code editor. Where you can find a listing of in-build Google Earth Engine functions.</figcaption>
</figure>

<br>