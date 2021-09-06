---
layout: workshops
title: Kalbarri Damage
---

# Introduction to GEE
Google Earth Engine is a geospatial analysis platform that runs on Google Cloud. Using Google Earth Engine you can access and analyse large amounts of geospatial data and satellite images from your web browser. 

Google Earth Engine is advancing our capacity to monitor and understand changes in Earth systems due to climate change and human development through making it easier for scientists to unlock insights from big archives of satellite data. Check out some applications of Google Earth Engine here:

* Deforestation
* Urban Heat Islands
* Water

You need to sign up for Google Earth Engine here: [https://earthengine.google.com/signup/](https://earthengine.google.com/signup/) 

Google Earth Engine programs comprise a series of statements written in JavaScript. These statements describe how to get the data you want to work with, what analysis you want to perform on the data, and how you want to see the results (e.g. a map or chart). 

Load Google Earth Engine in your web browser at: [https://code.earthengine.google.com](https://code.earthengine.google.com)

<figure style="margin-left: auto; margin-right: auto; text-align: center">
    <img src="{{site.url}}/assets/images/code_editor_diagram.png" class="img-fluid">
    <figcaption>Google Earth Engine code editor (source: Google Earth Engine Developers Guide)</figcaption>
</figure>

Some key code editor features include:

* Code editor: where you write JavaScript statements.
* Scripts tab: save the JavaScript code for your Google Earth Engine programs.
* Map: web map to visualise spatial data.
* Docs: lists all the in-built functions and operations.
* Console: print results from analysis and metadata.
* Inspector tab: interactive query of spatial objects on the map.
* Geometry tools: digitise vector features to use in your Google Earth Engine programs.
* Run: Run your script.


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

<br>
<details>
  <summary><b>What other information related to geographic data could be stored as a string data type?</b></summary>
  <p><br>Anything that needs to be represented as text data such as place names, road names, names of weather stations.</p>
</details>
<br>

Enter the following command into the code editor to create a string variable.

```
var stringVar= 'Hello World!';

```
You have created a string variable called `stringVar` which contains the text information 'Hello World!'. This is data that you can use in your program. 

You can use the `print()` operation to print the data in `stringVar` onto the *Console* for inspection. 

```
print(stringVar)
```

You should see `Hello World!` displayed in the *Console*.

<div style="text-align: center;">
<iframe src="https://player.vimeo.com/video/441912597" width="640" height="321" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p><a href="https://vimeo.com/441912597">Hello World!</a></p>
</div>

### Number

Number data type is used to represent numeric data. Storing numbers in programs allows us to perform mathematical and statistical operations and use numeric attributes to describe geographic features and entities.

<br>
<details>
  <summary><b>What other information related to geographic data could be stored as a number data type?</b></summary>
  <p><br>Temperature, precipitation, population counts.</p>
</details>
<br>

Let's create some numeric data.

```
var x = 1;
var y = 2;
print(x);
print(y);

```

Execute the following code to perform some basic maths with the variables `x` and `y`.

```
var z = x + y;
```

<br>
<details>
  <summary><b>What value do you think will be stored in the variable <code>z</code>?</b></summary>
  <p> <p><br>3<br> <code>print(z);</code></p></p>
</details>
<br>

### Boolean

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

```
var demoBool = z == 4;
print(demoBool);

var bool1 = x == 1 && y == 2;

var bool2 = y < x;
```

<br>
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

```
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

```
var years = [2000, 2001, 2002, 2003, 2004, 2005, 2006];
```

You can see the data inside arrays using the `print()` command or extract information from arrays using square brackets `[]` and the index of the element. 

```
print(years);
var year0 = years[0];
print(year0);
var year1 = years[1];
print(year1);
```

You can also put strings inside arrays.

```
var stringList = ['I', 'am', 'in', 'a', 'list'];
print(stringList);
```

Remember, each item in an array is separated by a comma. You can create n-Dimensional arrays. 

```
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

Variables provide a named reference for data that is used in a program.  

To create a variable you need to declare it using the **`var`** keyword. Once a variable is declared you can put data inside it and use that variable, and therefore the data inside it, in your program. When we were adding `x` and `y` above, we were actually referring to the numeric data values stored inside `x` and `y`. 

You assign data to a variable using the assignment operator `=`.

The code block below declares a variable `temp` and then assigns the value `25` to this variable. As demonstrated by the variable `temp1` you can declare a variable and assign values to it in one statement. 

```
var temp;
temp = 25;

var temp1 = 26;
```

Using variables makes code easier to organise and write. For example, if you want to perform multiple operations on temperature data you can refer to the data using the variable name as opposed to either writing out the temperature values or reading them from a file separately for each operation.

<br>

## Functions

Functions perform a specific task or operation on data in your program. Before you use a function you need to declare it.

* The `function` keyword.
* The name of the function (e.g. `function subtraction`).
* The list of parameters the function takes in separated by commas and enclosed in parentheses (e.g. `function subtraction(number1, number2)`).
* A list of statements that perform the function tasks enclosed in braces `{ }`. 
* A `return` statement that specifies what data is returned by a call to the function.

Let's make a function that performs a subtraction operation.

```
// substraction function

//function declaration
function subtraction(number1, number2) {
  var diff = number1 - number2;
  return diff;
}
```

Once a function has been declared you can call it from within your program. Let's use our variables `x` and `y` again and subtract `x` from `y`.

```
var diff = subtraction(y, x);
print(diff)

```

You should see the result of calling `subtraction()` printed in the *Console*.

Google Earth Engine also comes with a suite of in-built functions that you can use to retrieve, analyse, and visualise data. You can explore these functions under the *Docs* tab in the left side-bar. The picture below shows the documentation for the `addBands()` function which can be used to add two image bands together. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/docs_side_bar.png" class="img-fluid">
    <figcaption>Docs tab in the code editor. Where you can find a listing of in-build Google Earth Engine functions.</figcaption>
</figure>

# Geographic Data

Geographic data is used to describe entities (e.g. a road) or phenomenon (e.g. a bushfire) that have a position in space (i.e. on the Earth's land surface).

Geographic data consists of two pieces of information:

1. Locational information that describes where the data is located on the Earth's land surface (e.g. a latitude and longitude pair of values describing the location of a point).
2. Attribute information that describes the characteristics, entities, or phenomenon occurring at a location (e.g. the name of a city associated with a latitude and longitude pair for the city's location).

There are two main approaches to representing geographic data: raster data and vector data.

## Raster

Raster data represent geographic features or phenomenon by splitting the Earth's land surface up into a grid of regular sized cells (pixels) and assigning a value to each pixel. Pixel values can be continuous (e.g. values represent precipitation) or categorical (e.g. values represent a land cover type). 

The dimensions of a pixel relative to distance on the Earth’s land surface determines the complexity and detail of spatial features that can be resolved in raster data. A pixel that represents a 1 km x 1 km footprint on the Earth’s surface will not be able to represent an individual tree or a single building.

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/raster-data.png" class="img-fluid">
    <figcaption>Raster data; each pixel has a value that corresponds to a geographic entity or phenomenon such as land cover in the example here.</figcaption>
</figure>

### Images

In Google Earth Engine, raster data is stored as an `Image`. An `Image` is a special data structure that can have one or more bands (a band is an array of pixels with values that comprise the raster data model) and some properties that tell use about the data in the bands (e.g. data source, date of image creation). This information about the data is called metadata. 

Let's explore an `Image` in Google Earth Engine. Run the following code:

```
var ps4Img = ee.Image("users/jmad1v07/morethanmaps/ps4-median-composite");
print(ps4Img);
```

This loads a <a href="https://www.planet.com/products/planet-imagery/" target="_blank">Planet Scope 4</a> image into the variable `ps4Img`. Passing this variable to the `print()` function displays the `Image` metadata. You should see that the Planet Scope 4  `Image` that you have just loaded has four bands. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/ps4-image.png" class="img-fluid">
    <figcaption>Printing PS4 metadata to the console.</figcaption>
</figure>

However, we're working with geographic data so it make sense to display it on a map. The following code block does that for us. 

You will see we create a variable called `ps4VisParams` which contains some instructions to describe how we want to visualise our data. Here, we're doing to display an RGB image which is similar to what we see with our eyes. Google Earth Engine comes with a helpful `addLayer()` function that we can use to pass our data and visualisation parameters to; this function will add the data to the map. 

```
ps4Img = ps4Img.divide(10000); 
var ps4VisParams = {
  'bands': ['b3', 'b2', 'b1'],
  'min':-0.019809672744311654,
  'max':0.20674148403313686
};
Map.addLayer(ps4Img, ps4VisParams, 'PS4 Image');
```

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/ps4-image-map.png" class="img-fluid">
    <figcaption>Printing PS4 Image to the Map display</figcaption>
</figure>

### ImageCollections

## Vector

Vector data represents geographic data as geometric features:

* points (i.e. a coordinate pair of values)
* lines (i.e. two or more points connected by a line)
* polygons (i.e. three or more points connected by a non-intersecting line which closes the polygon)

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/vector-data.png" class="img-fluid">
    <figcaption>Vector data: point, lines, and polygons for representing geographic features.</figcaption>
</figure>

Along with coordinates that represent the position of the geometric feature, vector data also stores non-spatial attribute information which describe characteristics of the geographic phenomenon or entity represented by the geometry feature.


# Remote Sensing

## Remote Sensing Concepts

### Spectral Reflectance

### Image Bands

