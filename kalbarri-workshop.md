---
layout: workshops
title: Kalbarri
---

# Building Damage in Kalbarri

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri-title.png" class="img-fluid" style="min-width:100%">
</figure>

This workshop will demonstrate techniques for assessing building damage caused by Tropical Cyclone Seroja, which impacted Kalbarri in April 2021. 

## Tropical Cyclone Seroja

Tropical Cyclone Seroja formed on 3 April 2021 and dissipated on 12 April 2021. It's track passed through Indonesia, Timor Leste, and finally impacted the Western Australia coast near Kalbarri as a category 3 storm. The storm caused significant damage in all the countries it impacted including damaging infrastructure and buildings in Western Australia's coastal towns. 

The ABC news has reported on damage to buildings in Kalbarri [here](https://www.abc.net.au/news/2021-05-28/cyclone-seroja-damage-report-suggests-region-classified-cyclonic/100170602).

## Learning Objectives

* Understand the different types of geospatial data (vector, raster, and attributes).
* Develop an understanding of remote sensing images.
* Learn basic programming techniques to process and analyse remote sensing images.
* Learn image analysis techniques to detect change from remote sensing images.
* Understand how remote sensing data can be used for rapid and wide-scale mapping of climatic hazard impacts to infrastructure and property.

## Activities

* Introduction to Tropical Cyclones, the cost of their impacts, and importance of damage mapping. 
* Introduction to geospatial data in Google Earth Engine.
* Introduction to basic programming techniques and concepts.
* Introduction to workshop data (polygon building footprints, coarse spatial resolution multi-date Planet data, fine spatial resolution Nearmap data).
* Introduction to image analysis techniques to map building damage.
* Discussion of how rapid damage mapping is important to guide responses as coastal areas are more exposed to climatic hazards under climate change.


<br>

# Introduction to GEE
Google Earth Engine is a geospatial analysis platform that runs on Google Cloud. Using Google Earth Engine you can access and analyse large amounts of geospatial data and satellite images from your web browser. 

Google Earth Engine is advancing our capacity to monitor and understand changes in Earth systems due to climate change and human development through making it easier for scientists to unlock insights from big archives of satellite data. 

You need to sign up for Google Earth Engine here: [https://earthengine.google.com/signup/](https://earthengine.google.com/signup/) 

Google Earth Engine programs comprise a series of statements written in JavaScript. These statements describe how to get the data you want to work with, what analysis you want to perform on the data, and how you want to see the results (e.g. a map or chart). 

Load Google Earth Engine in your web browser at: [https://code.earthengine.google.com](https://code.earthengine.google.com)

<figure style="margin-left: auto; margin-right: auto; text-align: center">
    <img src="{{site.url}}/assets/images/code_editor_diagram.png" class="workshop-img">
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

<br>

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

# Geographic Data

Geographic data is used to describe entities (e.g. a road) or phenomena (e.g. a bushfire) that have a position in space (i.e. on the Earth's land surface).

Geographic data consists of two pieces of information:

1. Locational information that describes where the data is located on the Earth's land surface (e.g. a pair of latitude and longitude values describing the location of a point).
2. Attribute information that describes the characteristics, entities, or phenomenon occurring at a location (e.g. the name of a city associated with a latitude and longitude pair for the city's location).

There are two main approaches to representing geographic data: raster data and vector data.

## Raster

Raster data represent geographic features or phenomena by splitting the Earth's land surface into a grid of regular sized cells (pixels) and assigning a value to each pixel. Pixel values can be continuous (e.g. values representing precipitation) or categorical (e.g. values that represent a land cover type). 

The dimensions of a pixel relative to distance on the Earth’s land surface determines the complexity and detail of spatial features that can be resolved in raster data. A pixel that represents a 1 km x 1 km footprint on the Earth’s surface will not be able to represent an individual tree or a single building.

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/raster-data.png" class="workshop-img">
    <figcaption>Raster data; each pixel has a value that corresponds to a geographic entity or phenomenon such as land cover in the example here.</figcaption>
</figure>

### Images

In Google Earth Engine, raster data is stored as an `Image`. An `Image` is a special data structure that can have one or more bands (a band is an array of pixels with values) and some properties that tell us about the data in the bands (e.g. data source, date of image creation). This information about the data is called metadata. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/gee-image.png" class="workshop-img-small">
    <figcaption>The multiple bands of a <code>Image</code> data structure in Google Earth Engine (source: Google Earth Engine)</figcaption>
</figure>

Let's explore an `Image` in Google Earth Engine. Run the following code:

```js
// Planet Scope 4 Image
var ps4Img = ee.Image("users/jmad1v07/morethanmaps/ps4-median-composite");
print(ps4Img);
```

This loads a <a href="https://www.planet.com/products/planet-imagery/" target="_blank">Planet Scope 4</a> image into the variable `ps4Img`. Passing this variable to the `print()` function displays the `Image` metadata. You should see that the Planet Scope 4  `Image` that you have just loaded has four bands. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/ps4-image.png" class="workshop-img-small">
    <figcaption>Printing PS4 metadata to the console.</figcaption>
</figure>

However, we're working with geographic data so it make sense to display it on a map. The following code block does that for us. 

You will see we create a variable called `ps4VisParams` which contains some instructions to describe how we want to visualise our data. Here, we're doing to display an RGB image which is similar to what we see with our eyes. Google Earth Engine comes with a helpful `addLayer()` function that we can use to pass our data and visualisation parameters to; this function will add the data to the map. 

```js
// Center the map on Kalbarri
Map.centerObject(ee.Geometry.Point([114.16361565669752, -27.71407018883071]), 16);

ps4Img = ps4Img.divide(10000); 
var ps4VisParams = {
  'bands': ['b3', 'b2', 'b1'],
  'min':-0.019809672744311654,
  'max':0.20674148403313686
};
Map.addLayer(ps4Img, ps4VisParams, 'PS4 Image');
```

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/ps4-image-map.png" class="workshop-img-small">
    <figcaption>Printing PS4 Image to the Map display.</figcaption>
</figure>

### ImageCollections

An `ImageCollection` in Google Earth Engine is a stack of `Image`s; it provides a structure to group together and organise related `Image`s. For example, you could create an `ImageCollection` that stores all the Kalbarri `Image`s captured by the Planet satellite over a 6 month period. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/image-collection.png" class="workshop-img">
    <figcaption>Visual of <code>ImageCollection</code> data structure in Google Earth Engine (source: Google Earth Engine)</figcaption>
</figure>

`ImageCollection`s provide functions for:

* Filtering `Image`s based on a condition (e.g. selecting `Image`s that fall within a date range).
* Mapping functions over `Image`s in the `ImageCollection` (e.g. multiplying all `Image` values by a constant value).
* Reducing `Image`s in an `ImageCollection` (e.g. summing the values of all `Image`s in an `ImageCollection`).

Let's explore an `ImageCollection` of Planet Scope 4 `Image`s in Google Earth Engine. Execute the following code snippet in the code editor. 

```js
//ImageCollection
var ps4ImgColl = ee.ImageCollection('users/jmad1v07/morethanmaps/kalbarri-ps4-tc-seroja');
print(ps4ImgColl);
```

You should see that the `ImageCollection`'s metadata has been printed to the *Console* and that there are 130 Planet Scope 4 `Image`s in the collection. 

#### Filter

We can filter out a subset of `Image`s from the `ImageCollection` using conditions and summarise (`reduce`) our filtered data. Let's get all the `Image`s before Tropical Cyclone Seroja made land fall on the Western Australian coastline (11 April 2021) and compute the median value for each band in these `Image`s.

We call the `.filterDate()` date function on our `ImageCollection` and pass two dates (start date and end date) as strings into the function. These string dates specify the date range that we want to select `Image`s from. You can check out the `Image`'s that have been filtered into a new `ImageCollection` `ps4PreTCSeroja` in the *Console*. 

```js
// Filter Images pre TC Seroja
var ps4PreTCSeroja = ps4ImgColl
    .filterDate('2021-01-01', '2021-04-09');
print('Images pre-TC Seroja:', ps4PreTCSeroja);
```

#### Reduce

We can also summarise all the `Image`s in an `ImageCollection`; we use [`reduce()`](https://developers.google.com/earth-engine/guides/reducers_intro) operations to perform these summaries. For example, we can compute the average value for each pixel, in each band, for all `Image`s in an `ImageCollection`. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/gee-reduce-image-collections.png" class="workshop-img">
    <figcaption>Illustration of reducing an <code>ImageCollection</code> in Google Earth Engine (source: Google Earth Engine).</figcaption>
</figure>

The pattern for reducing an `ImageCollection` should be familiar. We use the `.` operator to call the relevant `reduce()` function on the `ImageCollection` we wish to summarise. Here, we'll use the `.median()` reducer to compute median pre-Tropical Cyclone Seroja `Image`. 

```js
// Median reducer
// divide by 1000 to rescale PS4 image to reflectance
var ps4PreTCSerojaMedian = ps4PreTCSeroja.median().divide(10000);
print('pre-TC Seroja - median Image:', ps4PreTCSerojaMedian);

// visualise parameters
var medianVisParams = {
  'bands': ['b3', 'b2', 'b1'],
  'min': 0,
  'max': 0.25
};
Map.addLayer(ps4PreTCSerojaMedian, medianVisParams, 'PS4 Image - pre-TC Seroja');

```

Your code editor should be similar to the screengrab below. You should see the median Planet Scope 4 `Image` of pre-Tropical Cyclone Seroja `Image`s added to the map and available under the *Layers* selector. The median `Image` should also be printed on your *Console* with four bands. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/reducer-results.png" class="workshop-img">
    <figcaption>Visualising and exploring the results from reducing an <code>ImageCollection</code>.</figcaption>
</figure>


<details>
  <summary><b>If you wanted create a mean <code>Image</code> from a stack of <code>Image</code>s in an <code>ImageCollection</code>, what do you think the reducer function would look like?</b></summary>
  <p><br><code>.mean()</code></p>
</details>

<br>

## Vector

Vector data represents geographic data as geometric features:

* points (i.e. a coordinate pair of values)
* lines (i.e. two or more points connected by a line)
* polygons (i.e. three or more points connected by a non-intersecting line which closes the polygon)

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/vector-data.png" class="workshop-img">
    <figcaption>Vector data: point, lines, and polygons for representing geographic features.</figcaption>
</figure>

Along with coordinates that represent the position of the geometric feature, vector data also stores non-spatial attribute information which describe characteristics of the geographic phenomenon or entity represented by the geometry feature.

### Geometry

In Google Earth Engine a [`Geometry`](https://developers.google.com/earth-engine/guides/geometries) object is used to represent geographic coordinates for vector data. We can create a list of coordinates and pass them into a constructor function to create `Geometry` objects that we can draw on the map or use in geometric operations (e.g. create buffers around points, measure distance between points).

Let's create a `Point` `Geometry` object in Kalbarri. You should see a marker appear on the map at the location specified by the coordinate pair. 

```js
// Vector data - point
var kalbarriPoint =  ee.Geometry.Point([114.16361565669752, -27.71407018883071]);
print('Kalbarri Point:', kalbarriPoint);
Map.addLayer(kalbarriPoint, {}, 'Point');
```

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/display-point-kalbarri.png" class="workshop-img">
    <figcaption>Display a <code>Point</code> <code>Geometry</code> object on the map.</figcaption>
</figure>

### Feature

`Geometry` objects help us store geographic coordinates, but what about attribute information that describes the location? For example, if we have a `Point` object describing the location of a town on the Earth's surface we might also want attribute information that tells us the name of the town or the population of the town. In Google Earth Engine we use `Feature`s to combine geographic information in `Geometry` objects with non-spatial attribute information in `Dictionary` objects. 

We've already introduced JavaScript objects which consist of name:value pairs (e.g. `{name: 'Kalbarri'}`). A `Feature` in Google Earth Engine contains a `Geometry` object in a `geometry` property and a `Dictionary` object of attributes in a `properties` property. 

We can create a `Feature` in Google Earth Engine using the `ee.Feature()` constructor function. 

```js
// Feature
var kalbarriFeature = ee.Feature(kalbarriPoint, {name: 'Kalbarri'});
print('Kalbarri Feature:', kalbarriFeature);
```
You should see `kalbarriFeature` printed to the *Console* where you can inspect its `geometry` and `properties` property slots. 

### FeatureCollection

Similar to the approach of grouping `Image`s in an `ImageCollection`, we can organise `Feature`s in a `FeatureCollection`. `FeatureCollection`s give us similar tools to filter and summarise `Feature`s stored in the `FeatureCollection`. 

Let's explore a `FeatureCollection` storing building footprints for Kalbarri. Each building is represented as a `Feature` in the `FeatureCollection` and each `Feature` stores a `Geometry` object representing the building's footprint. The building footprints are obtained from Microsoft's building footprints [dataset](https://github.com/microsoft/AustraliaBuildingFootprints).

```js
// Feature Collection - Building Footprints
var buildingFootprints = ee.FeatureCollection('users/jmad1v07/morethanmaps/microsoft_building_footprints');
print('Building Footprings:', buildingFootprints);
Map.addLayer(buildingFootprints, {}, 'Building Footprints');
```

You should see the outline of the building footpringts in Kalbarri appear on the map.

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/feature-collection-building-footprints.png" class="workshop-img">
    <figcaption><code>FeatureCollection</code> of Microsoft building footprints in Kalbarri.</figcaption>
</figure>

<br>

# Remote Sensing

The Planet Scope 4 `Image`s that you have been working with store data that is recorded by sensors on satellites that are observing the Earth. 

As satellites orbit the Earth, they monitor the same location on the land surface across time and capture information about land surface conditions. This information can be used to track changes in properties of the Earth's land surface (e.g. land cover change or vegetation health) and identify how ecosystems are responding to climatic change and hazard events. 

The process of using sensors to capture information about the Earth's land surface is remote senisng. Let's explore some core remote sensing concepts so that we can understand how the Planet Scope 4 `Image`s are created and contain useful information for detecting change caused by climatic events. 

## Remote Sensing Concepts

### Spectral Reflectance

Remote sensors on satellites measure electromagnetic energy reflected or emitted by objects on the Earth's land surface. The sensor that produces Planet Scope 4 `Image`s is a passive sensor; this means it measures the energy of sunlight reflected by objects. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/satellite-remote-sensing.png" class="workshop-img-small">
    <figcaption>Simple model of passive satellite remote sensing.</figcaption>
</figure>

Most often, when monitoring the Earth's surface using remote sensing images, we want `Image` pixels to have units of surface reflectance. Surface reflectance is the ratio of energy of incoming solar radiation to reflected solar radiation as measured by a sensor at the Earth's surface. Reflectance has values between 0 (no incoming solar radiation is reflected) to 1 (all incoming solar radiation is reflected). The roughness and albedo of an object determine how much radiation is reflected e.g. polar ice caps have a high albedo and thus have high surface reflectance. 

When conditions on the Earth's surface change, levels of surface reflectance change. Imagine looking at a scene before and after a flood, after a flood you can see water is present where previously there was land. The reason you can detect this change with your eyes is because there is a difference in light reflected off the scene in areas of flood-driven change. The same principle applies when monitoring the land surface using satellite-based sensors; a change in surface reflectance indicates a change on the land surface. This allows us to detect change such as deforestation events or damage caused by tropical cyclones. 

<details>
  <summary><b>Why is surface reflectance used to monitor land surface objects as opposed to a more direct measure of energy levels at the sensor?</b></summary>
  <p><br>Some days are brighter than others, this means that solar illumination conditions are different and levels of reflected energy off land surface objects at the sensor will be different. However, the land surface object will not have changed and it is change in land surface objects that we seek to monitor. If the reflective properties of an object do not change, the ratio of incoming to reflected light should be the same even if the energy of incoming light changes. Thus, using surface reflectance to monitor land surface objects avoids conflating change in illumination conditions with actual changes in land surface objects.</p>
</details>

<br>

Remote sensors measure electromagnetic energy reflected by Earth surface features. Electromagnetic energy travels through the atmosphere and space as waves that are characterised by wavelength and frequency. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/EMS-Introduction_earthdata-nasa.jpeg" class="workshop-img">
    <figcaption>Electromagnetic spectrum. Source: <a href="https://earthdata.nasa.gov/learn/backgrounders/remote-sensing" target="_blank">NASA</a>.</figcaption>
</figure>

Features on the Earth's land surface have different reflectance characteristics at different wavelenghts. Think about smooth bright white roofs; these roofs are reflecting lots incoming light across red, green, and blue visible wavelengths which is why the roof is white (reflectance across the visible spectrum) and bright (lots of incoming energy reflected). The same prinicple also explains why vegetation appears green; healthy vegetation reflects more green light and absorbs more red and blue light. 

Remote sensors measure reflectance in different spectral wavelengths. This allows us to distinguish features on the Earth's surface based on their varying reflectance across wavelengths. Our eyes can only sense reflected energy in the visible spectrum; however, remote sensors can sense over a wider range of the electromagnetic spectrum e.g. infrared. 

Sensing reflectance across the electromagnetic spectrum increases our capacity to monitor important and interesting properties of Earth surface features. For example, water absorbs near-infrared radiation so appears `darker' compared the land surface. Green vegetation is reflective in near-infrared wavelengths (as near-infrared radiation reflects off the internal structure of leaves).

### Image Bands

Let's explore how surface reflectance in different wavelengths is represented in the Planet Scope 4 `Image`s we have been visualising on the map.

Head to the *Inspector* tab next to the *Console* in the upper right of the code editor. When the *Inspector* tab is selected you can click on the map display and values in `Image`s at the location you clicked will be printed.

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/inspector-tab.png" class="workshop-img-small">
    <figcaption><em>Inspector</em> tab.</figcaption>
</figure>

Click at a location on the map and look in the *Inspectors* tab. Under the *PS4 Image - pre-TC Seroja* `Image` you should see four numbers printed against properties labelled `b1`, `b2`, `b3`, and `b4`. These numbers are the surface reflectance values recorded by the sensor in different wavelengths:

* `b1`: blue visible light
* `b2`: green visible light
* `b3`: red visible light
* `b4`: near-infrared light

`b1`, `b2`, `b3`, and `b4` are the names of `Image` bands. Surface reflectance values for the same location but different wavelengths are stored in a separate band. Each band is a raster dataset - values are stored in pixels.

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/reflectance-values.png" class="workshop-img-small">
    <figcaption>Surface reflectance values in the four bands of a Planet Scope 4 <code>Image</code>.</figcaption>
</figure>

We have been visualising the red, green, and blue bands of Planet Scope 4 `Image`s together on the map display. This is called a RGB colour composite image, which is similar to how our eyes perceive colour by combining intensities of red, green, and blue light. 

However, we can also visualise surface reflectance values for a single band on the map. Let's map surface reflectance in the visible blue wavelengths.

```js
// Blue band surface reflectance
var ps4Blue = ps4PreTCSerojaMedian.select('b1');
Map.addLayer(ps4Blue, {min:0, max: 0.4}, 'PS4 Blue Band');
```
<details>
  <summary><b>Which objects have the highest reflectance in the blue band, and why?</b></summary>
  <p><br>House roofs appear brightest on the map which indicates they have the highest reflectance values. This makes sense, roofs are typically smooth shiny surfaces that will reflect incoming sunlight.</p>
</details>

<br>

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/ps4-blue-band-reflectance.png" class="workshop-img">
    <figcaption>Surface reflectance values in the blue band of a Planet Scope 4 <code>Image</code>.</figcaption>
</figure>

As mentioned above, different surfaces have different levels of reflectance at different wavelengths. In other words, different surface objects have different spectral reflectance characteristics which we can use to distinguish objects or features in a satellite image.

Use the *Layers* selector to bring the image *PS4 Image - pre-TC Seroja* onto the map display. Then head to the *Inspector* tab, click on a water pixel, and then click on the chart symbol next to the layer name. This will allow you visualise pixel values in a bar chart. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/inspector-graph.png" class="workshop-img">
    <figcaption>Turn on the <em>Inspector</em> chart to visualise pixel values in a bar chart.</figcaption>
</figure>

<br>

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/water-spectral-reflectance.png" class="workshop-img-small">
    <figcaption>Bar chart showing spectral reflectance for a water pixel in a Planet Scope 4 <code>Image</code>.</figcaption>
</figure>

Click on pixels of different surface cover types such as buildings, roads, and vegetation. 

<details>
  <summary><b>Can you spot common patterns in the spectral reflectance of pixels of different cover types?</b></summary>
  <p><br>
  <ul>
    <li>Water absorbs incoming solar radiation and has low levels of reflectance. Water is particularly absorbant in near-infrared wavelengths.</li>
    <li>Green vegetation has high levels of reflectance in the near-infrared band (band 4) compared to the visible wavelengths.</li>
    <li>Building roofs have higher levels of surface reflectance in all wavelengths as they are smooth reflective surfaces.</li>
    <li>Bare earth areas have lower levels of reflectance than shiny roofs, and in the visible bands there is more reflectance in the red band (band 3). This is why the bare earth has a reddish colour.</li>
  </ul>
  </p>
</details>

<br>

# Mapping Building Damage

You have learnt about how we can represent real world features and phenomenon using geographic data, programming tools to manipulate and analyse geographic data, and how satellite images can be used to monitor change on the Earth's surface. Let's pull all these skills together to map the location of damaged buildings after Tropical Cyclone Seroja impacted Kalbarri in April 2021.

First, let's have a look at the impact of Tropical Cyclone Seroja on buildings in Kalbarri. We can use a high-resolution aerial image captured by [Nearmap](https://www.nearmap.com/au/en) after the cyclone event. 

```js
// High-resolution Nearmap image
var nmKalbarriSeroja = ee.Image("users/jmad1v07/morethanmaps/kalbarri-nearmap-tcseroja");
print(nmKalbarriSeroja);
Map.addLayer(nmKalbarriSeroja, {}, 'Nearmap post-TC Seroja');
```

Start exploring the imagery on your map - you can clearly see the complete damage to some roofs, partial damage to others, and those that remained intact. We're going to try and automatically detect damaged roofs from satellite images. 

<details>
  <summary><b>How do you think the surface reflectance of a roof will change if it has been damaged during Tropical Cyclone Seroja?</b></summary>
  <p><br>We might expect there to be a decrease in surface reflectance compared to it's pre-damaged state. The cyclone damage will make the roof surface rougher, incoming solar radiation will be reflected in equally in all directions with less energy being directly reflected to the satellite-sensor. This will be our working hypothesis. We'll expect that damaged roofs will show a decrease in surface reflectance compared to their pre-damaged state and undamaged roofs will have similar levels of surface reflectance before and after the storm.
  </p>
</details>

<br>

## Change Detection - Identifying Damaged Roofs

Change detection is an image analysis technique where two images of the same location, but captured on different dates, are compared to identify change in surface reflectance which can be related to actual change on the Earth's surface. 

A simple approach is subtracting one image from another and visualising the difference in pixel values. Large positive or negative pixel values indicate that a change occurred at that location. Another approach is to divide the pre-image by the post-image; if there has been little change between the two images the change image should have pixel values of 1. If there has been a decrease in surface reflectance, pixel values in the change image should be greater than one. 

Here, we will use the approach of dividing pre- and post-Images to detect damaged roofs in Kalbarri. First, we need to create our post-Tropical Cyclone Seroja `Image`.

```js
// post TC Seroja
var ps4PostTCSerojaMedian = ps4ImgColl
    .filterDate('2021-04-12', '2021-04-19')
    .median()
    .divide(10000);
Map.addLayer(ps4PostTCSerojaMedian, ps4VisParams, 'PS4 Image - post-TC Seroja');

```

You will have noticed that we're dividing the Planet Scope 4 `Image`s by 10000. This is because the Planet Scope 4 `Image`s are stored as whole number integers and we need to rescale them back to reflectance values between 0 and 1.

Let's divide the pre-Tropical Cyclone Seroja `Image` by the post-Tropical Cyclone Seroja `Image` and visualise change in the blue band.

```js
// Change building image
var change = ps4PreTCSerojaMedian.divide(ps4PostTCSerojaMedian);
Map.addLayer(change.select('b1'), {min: 0.8, max: 1.4, palette:['00ffff', 'ffff00', 'ff0000']}, 'Change Image');
```

You should see a similar `Image` to the below figure on your map display. Areas in red correspond to locations where there is a decrease in surface reflectance in the blue band after Tropical Cyclone Seroja. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/tc-seroja-change-image.png" class="workshop-img">
    <figcaption>Change <code>Image</code> showing change in surface reflectance in the blue band after Tropical Cyclone Seroja.</figcaption>
</figure>

We're only interested in damage to buildings. Let's clip our change `Image` to just the building footprint extents to emphasise damage to roofs. To do this we call the `clip()` function on our change `Image` `change` and pass a `Geometry` object which specifies the extents to clip our `Image` by. Here, we're using `buildingFootprints` which stores the outline of buildings in the Microsoft Building Footprints layer. 

```js
// builing damage
var buildingDamage = change.clip(buildingFootprints);
Map.addLayer(buildingDamage.select('b1'), {min: 0.8, max: 1.4, palette:['00ffff', 'ffff00', 'ff0000']}, 'Building Damage');

```

Turn off all layers except the *Building Damage* layer and the *Nearmap post-TC Seroja* layer. Compare the areas in red shades, which indicate a decrease in surface reflectance, to the high-resolution Nearmap `Image`. Do the areas with decreased surface reflectance correspond to buildings with damaged roofs?

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/building-damage-ps4-google-basemap.png" class="workshop-img">
    <figcaption>Building damage using change detection with Planet Scope 4 <code>Image</code>s with Google satellite basemap shown for context. <small>(Google Earth: Imagery &copy;2021 Maxar Technologies, CNES / Airbus, Map data &copy;2021).</small></figcaption>
</figure>

## Mapping Roof Texture - Identifying Damaged Roofs

We have just used Planet Scope 4 `Image`s to detect damaged roofs by comparing pre- and post-cyclone event `Image`s. However, there might be occassions where we do not have pre- and post-event satellite images that we can use for damage mapping. For example, the high-resolution Nearmap `Image` we have been using to inspect damaged roofs is only available after Tropical Cyclone Seroja when Nearmap flew an aeroplane over the impacted regions with a sensor on-board. 

However, we can still detect damaged roofs using the single point-in-time Nearmap `Image` through contrasting the reflectance properties of intact and damaged roofs. We expect damaged roofs to have a rougher texture than intact roofs, which will be smoother. Roofs with a rougher texture will exhibit more variation in reflectance. Let's see if there is a pattern between roof texture and roof damage.

First, let's clip the high-resolution Nearmap `Image` to the roof extents.

```js
// High-resolution roofs
var highResRoof = nmKalbarriSeroja.clip(buildingFootprints);
Map.addLayer(highResRoof, {}, 'Nearmap - high-res roofs');
```

Next, let's convert our high-resolution roof `Image` into a texture `Image` where higher pixel values indicate that part of the `Image` is a rougher surface. Roofs with a rougher texture will appear in red and organge shades on your map display.

```js
// Define a neighborhood with a kernel.
var square = ee.Kernel.square({radius: 4});
var roofTexture = highResRoof.entropy(square).reproject('EPSG:32750', null, 0.5);
Map.addLayer(roofTexture.select('b3'), {min: 3, max: 4.5, palette:['00ffff', 'ffff00', 'ff0000']}, 'Nearmap - roof texture');
```

Explore the roof roughness `Image` on the map display and see if you can spot patterns between roof texture and building damage. 

<details>
  <summary><b>Can you identify any strengths or weaknesses of detecting building damage using a single high-resolution <code>Image</code> compared to pre- and post-<code>change detection</code>?</b></summary>
  <p><br>The finer spatial resolution pixels of the Nearmap <code>Image</code> means that small-scale damage to roofs can be detected which might not be captured in the coarse spatial resolution Planet Scope 4 <code>Image</code>s. However, features on roofs such as solar panels create a rough texture which could be conflated with building damage. If the solar panels were not affected by the cyclone, then roof damage detection using pre- and post-cyclone images for change detection should not be affected be complex roofs. 
  </p>
</details>

<br>

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/roof-texture.png" class="workshop-img">
    <figcaption>Roof texture of a post-Tropical Cyclone Seroja Nearmap <code>Image</code>. Red and orange colours indicate a rougher texture. <small>(Google Earth: Imagery &copy;2021 Maxar Technologies, CNES / Airbus, Map data &copy;2021).</small></figcaption>
</figure>
