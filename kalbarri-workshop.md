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
* Learn techniques to view and explore remote sensing images.
* Learn image analysis techniques to detect change from remote sensing images.
* Understand how remote sensing data can be used for rapid and wide-scale mapping of climatic hazard impacts to infrastructure and property.

## Activities

* Introduction to Tropical Cyclones, the cost of their impacts, and importance of damage mapping. 
* Introduction to workshop data (polygon building footprints, coarse spatial resolution multi-date Planet data, fine spatial resolution Nearmap data).
* Introduction to image analysis techniques to map building damage.
* Discussion of how rapid damage mapping is important to guide responses as coastal areas are more exposed to climatic hazards under climate change.

<br>

The <a href="/kalbarri-workbook.html" target="_blank">Notebook</a> provides a summary of the workshop for use in follow-me style sessions. This is a <a href="https://code.earthengine.google.com/b026c09fe77c7d7955a08ce58a1a8b6e" target="_blank">rescue</a> script in case you lose your work during a workshop. 

There are some example applications to explore educational resources using Google Earth Engine or visualisations of analyses conducted using Google Earth Engine. 

<div class="workshops" id="workshops">
    <div class="container" style="margin-top:30px; margin-bottom:-30px;">
        <div class=row style="">
            <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
                <div class="card border-primary mb-4 h-100">
                    <div class="card-img">
                        <img src="{{site.url}}/assets/images/kalbarri.png" alt="...">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h4 class="card-title">Notebook</h4>
                        <p class="card-text">Notebook instructions for interactive workshop.</p>
                        <a class="btn btn-primary mt-auto align-items-end" href="/kalbarri-workbook.html" target="_blank" role="button">Load</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
                <div class="card border-primary mb-4 h-100">
                    <div class="card-img">
                        <img src="{{site.url}}/assets/images/kalbarri/gfc.png" alt="...">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h4 class="card-title">Global Forest Change</h4>
                        <p class="card-text">Machine learning generated maps of deforestation events.</p>
                        <a class="btn btn-primary mt-auto align-items-end" href="https://glad.earthengine.app/view/global-forest-change#dl=1;old=off;bl=off;lon=20;lat=10;zoom=3;" target="_blank" role="button">Go</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
                <div class="card border-primary mb-4 h-100">
                    <div class="card-img">
                        <img src="{{site.url}}/assets/images/kalbarri/timelapse.png" alt="...">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h4 class="card-title">Timelapse</h4>
                        <p class="card-text">Global video of satellite images to explore how the world is changing.</p>
                        <a class="btn btn-primary mt-auto align-items-end" href="https://earthengine.google.com/timelapse/" target="_blank" role="button">Go</a>
                    </div>
                </div>
            </div>
        </div>
        <div class=row style="">
            <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
                <div class="card border-primary mb-4 h-100">
                    <div class="card-img">
                        <img src="{{site.url}}/assets/images/kalbarri/cloud-to-classroom.png" alt="...">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h4 class="card-title">Cloud to Classroom</h4>
                        <p class="card-text">Range of Earth Engine apps related to Sustainable Development Goals.</p>
                        <a class="btn btn-primary mt-auto align-items-end" href="https://www.cloudtoclassroom.org" target="_blank" role="button">Go</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
                <div class="card border-primary mb-4 h-100">
                    <div class="card-img">
                        <img src="{{site.url}}/assets/images/kalbarri/uhi.png" alt="...">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h4 class="card-title">Urban Heat Islands</h4>
                        <p class="card-text">Global urban heat island explorer.</p>
                        <a class="btn btn-primary mt-auto align-items-end" href="https://yceo.users.earthengine.app/view/uhimap" target="_blank" role="button">Go</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
                <div class="card border-primary mb-4 h-100">
                    <div class="card-img">
                        <img src="{{site.url}}/assets/images/kalbarri/earth-education.png" alt="...">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h4 class="card-title">Google Earth Education</h4>
                        <p class="card-text">Range of resources for using Google Earth toolds for education.</p>
                        <a class="btn btn-primary mt-auto align-items-end" href="https://www.google.com/earth/education/resources/" target="_blank" role="button">Go</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


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

## Working with the GEE Map

We will start the practical exercise by working with the GEE map interface.

### Searching for a Place

Let’s start by setting the map so that it shows the Kalbarri, Western Australia. In the **Search for places or datasets** box at the top of GEE, start typing in **Kalbarri** and you will see **Kalbarri** suggested under **PLACES**. Click on it and the map will centre on the Kalbarri.

<figure style="margin-left: auto; margin-right: auto; text-align: center">
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-map.png" class="workshop-img">
    <figcaption>The GEE Map centered on Kalbarri</figcaption>
</figure>

In the upper right of the map display are **Map** and **Satellite** buttons. This changes the basemap from Google Maps style to a satellite image. Click on **Satellite** to change the basemap. 

<figure style="margin-left: auto; margin-right: auto; text-align: center">
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-satellite-gee-map.png" class="workshop-img">
    <figcaption>The GEE Map centered on Kalbarri</figcaption>
</figure>

You can use the **Zoom** tool in the map window to zoom in and out, and click and drag the map to change the view. However, we want to set the location and zoom level in our script so the map will always be placed at the study area when we run the script.

Let's start by creating our first script in the code editor. 

GEE allows you to control the map in the bottom half of the window using the `Map` object in your javascript code. The `Map` object has many functions which including setting the zoom level, centring the map in a location, and adding layers (images or features) so they can visualised. 

First, let's set the zoom level. Enter the following into the main code editor window:

```js
Map.setZoom(12);
```

Now click the **Run** button. You should see the map zoom into Kalbarri. The `setZoom()` function takes one parameter - a number between **0** and **24**. Try changing the zoom level in your script to **5** and click **Run** again and your map will zoom out.

<figure style="margin-left: auto; margin-right: auto; text-align: center">
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-map-zoom-out.png" class="workshop-img">
    <figcaption>The GEE Map centered on Kalbarri with a zoom level of 5</figcaption>
</figure>

Before you continue any further, let's save the script. Click the **Save** button and enter the **File Name** as **tc-seroja-building-damage.js** and click *OK*.

*Remember, it is a good idea to save your script after each step so you don't lose any of your work*. 

## Centre the Map

Now you need to centre the map on Kalbarri. You will do this by creating a geographic feature, in this case a simple point, and centre the map on this point.

First, let's create the point feature. Add the following as the next line in your script:

```js
var kalbarriPoint = ee.Geometry.Point([114.16361565669752, -27.71407018883071]);

```
The `ee.Geometry.Point()` function creates a new point feature and saves it in a new variable `kalbarriPoint`. When creating this feature, you only need to provide one parameter: an array (denoted by the square `[ ]` brackets) containing two decimal numbers: the longitude and the latitude of the point. 

Now you can centre the map window on this location by adding the following line to your script:

```js
Map.centerObject(kalbarriPoint, 12);
```
The `Map.centreObject()` function takes two parameters: an object to center on (in this case the `kalbarriPoint` point feature) and a zoom level. The zoom level has the same effect as `Map.setZoomLevel()` function you used above but allows you do the center and zoom in one step. Run your script to see the effect on the Map window. It should look similar to the map below:

<figure style="margin-left: auto; margin-right: auto; text-align: center">
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-map-centre.png" class="workshop-img">
    <figcaption>The GEE Map centred on Kalbarri with a zoom level of 12.</figcaption>
</figure>

*Make sure you click the **Save** button before you move to the next section.*

<br>

# Geographic Data

Now you should be familiar with using the GEE Map, writing simple commands in the code editor, and running these commands. Let's start exploring how we can analyse and view geographic data in Google Earth Engine. 

Geographic data is used to describe entities (e.g. a road) or phenomena (e.g. a bushfire) that have a position in space (i.e. on the Earth's land surface).

Geographic data consists of two pieces of information:

1. Locational information that describes where the data is located on the Earth's land surface (e.g. a pair of latitude and longitude values describing the location of a point).
2. Attribute information that describes the characteristics, entities, or phenomenon occurring at a location (e.g. the name of a city associated with a latitude and longitude pair for the city's location).

There are two main approaches to representing geographic data: raster data and vector data.

## Raster

Raster data represent geographic features or phenomena by splitting the Earth's land surface into a grid of regular sized cells (pixels) and assigning a value to each pixel. Pixel values can be continuous (e.g. values representing precipitation) or categorical (e.g. values that represent a land cover type). 

The dimensions of a pixel relative to distance on the Earth’s land surface determines the complexity and detail of spatial features that can be resolved in raster data. A pixel that represents a 1 km x 1 km footprint on the Earth’s surface will not be able to represent an individual tree or a single building.

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/raster-data.png" class="workshop-img">
    <figcaption>Raster data - each pixel has a value that corresponds to a geographic entity or phenomenon such as land cover in the example here.</figcaption>
</figure>

### Images

In Google Earth Engine, raster data is stored as an `Image`. An `Image` is a special data structure that can have one or more bands (a band is an array of pixels with values) and some properties that tell us about the data in the bands (e.g. data source, date of image creation). This information about the data is called metadata. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/gee-image.png" class="workshop-img-small">
    <figcaption>The multiple bands of a <code>Image</code> in Google Earth Engine (source: Google Earth Engine)</figcaption>
</figure>

Let's explore an `Image` in Google Earth Engine. Run the following code:

```js
// Planet Scope 4 Image
var ps4Img = ee.Image("users/jmad1v07/morethanmaps/ps4-median-composite");
print(ps4Img);
```

This loads a <a href="https://www.planet.com/products/planet-imagery/" target="_blank">Planet Scope 4</a> image into the variable `ps4Img`. Passing this variable to the `print()` function displays the `Image` metadata. You should see that the Planet Scope 4  `Image` that you have just loaded has four bands. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-ps4-image.png" class="workshop-img">
    <figcaption>Printing PS4 metadata to the console.</figcaption>
</figure>

You will notice the first line of the code snippet you just executed contains two forward slashes `//` followed by some text. This is a called a comment in JavaScript. Comments are are useful for writing your own descriptions about what is happening in the script, or excluding lines of code from being executed.

However, we're working with geographic data so it make sense to display it on a map. The following code block does that for us. 

You will see we create a variable called `ps4VisParams` which contains some instructions to describe how we want to visualise our data. Here, we're doing to display an RGB image which is similar to what we see with our eyes. Google Earth Engine comes with a helpful `addLayer()` function that we can use to pass our data and visualisation parameters to; this function will add the data to the map. Here, in the `ps4VisParams` variable we're specifying which bands of the Planet Scope 4 `Image` will be displayed using the red, green, and blue colour channels on our display. 

```js
// Center the map and zoom in on Kalbarri
Map.centerObject(kalbarriPoint, 16);

ps4Img = ps4Img.divide(10000); 
var ps4VisParams = {
  'bands': ['b3', 'b2', 'b1'],
  'min':-0.0198,
  'max':0.2067
};
Map.addLayer(ps4Img, ps4VisParams, 'PS4 Image');
```

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-ps4-image-map.png" class="workshop-img">
    <figcaption>Viewing the PS4 Image on the Map display.</figcaption>
</figure>

*Remember, it is a good idea to save your script after each step so you don't lose any of your work*. 

### ImageCollections

An `ImageCollection` in Google Earth Engine is a stack of `Image`s; it provides a structure to group together and organise related `Image`s. For example, you could create an `ImageCollection` that stores all the Kalbarri `Image`s captured by the Planet satellite over a 6 month period. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/image-collection.png" class="workshop-img">
    <figcaption><code>ImageCollection</code> data structure in Google Earth Engine (source: Google Earth Engine)</figcaption>
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

*Make sure you click the **Save** button before you move to the next section.*

#### Reduce

We can also summarise all the `Image`s in an `ImageCollection`; we use [`reduce()`](https://developers.google.com/earth-engine/guides/reducers_intro) operations to perform these summaries. For example, we can compute the average value for each pixel, in each band, for all `Image`s in an `ImageCollection`. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/gee-reduce-image-collections.png" class="workshop-img">
    <figcaption>Illustration of reducing an <code>ImageCollection</code> in Google Earth Engine (source: Google Earth Engine).</figcaption>
</figure>

The pattern for reducing an `ImageCollection` should be familiar. We use the `.` operator to call the relevant `reduce()` function on the `ImageCollection`. Here, we'll use the `.median()` reducer to compute median pre-Tropical Cyclone Seroja `Image`. 

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

You should see the median Planet Scope 4 `Image` of pre-Tropical Cyclone Seroja `Image`s added to the map and available under the *Layers* selector. The median `Image` should also be printed on your *Console* with four bands. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-pre-image-reducer-results.png" class="workshop-img">
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
    <img src="{{site.url}}/assets/images/kalbarri/vector-data.png" class="workshop-img">
    <figcaption>Vector data: point, lines, and polygons for representing geographic features.</figcaption>
</figure>

Along with coordinates that represent the position of the geometric feature, vector data also stores non-spatial attribute information which describe characteristics of the geographic phenomenon or entity represented by the geometry feature.

*Make sure you click the **Save** button before you move to the next section.*

### Geometry

In Google Earth Engine a [`Geometry`](https://developers.google.com/earth-engine/guides/geometries) object is used to represent geographic coordinates for vector data. We can create a list of coordinates and pass them into a constructor function to create `Geometry` objects that we can draw on the map or use in geometric operations (e.g. create buffers around points, measure distance between points).

Let's create a `Point` `Geometry` object in Kalbarri. You should see a marker appear on the map at the location specified by the coordinate pair. Zoom in on the cricket oval and you should see a blue point.  

```js
// Vector data - point
var kalbarriPoint =  ee.Geometry.Point([114.16361565669752, -27.71407018883071]);
print('Kalbarri Point:', kalbarriPoint);
Map.addLayer(kalbarriPoint, {color: 'blue'}, 'Point');
```

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-display-point.png" class="workshop-img">
    <figcaption>Display a <code>Point</code> <code>Geometry</code> object on the map.</figcaption>
</figure>

### Feature

`Geometry` objects help us store geographic coordinates, but what about attribute information that describes the location? For example, if we have a `Point` object describing the location of a town on the Earth's surface we might also want attribute information that tells us the name of the town or the population of the town. In Google Earth Engine we use `Feature`s to combine geographic information in `Geometry` objects with non-spatial attribute information in `Dictionary` objects. 

`Dictionary` objects which consist of name:value pairs (e.g. `{name: 'Kalbarri'}`). A `Feature` in Google Earth Engine contains a `Geometry` object in a `geometry` property and a `Dictionary` object of attributes in a `properties` property. 

We can create a `Feature` in Google Earth Engine using the `ee.Feature()` constructor function. 

```js
// 7. Feature
// Features combine geographic coordinates with a Dictionary object of Feature properties. 
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

You should see the outline of the building footprints in Kalbarri appear on the map.

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-feature-collection-building-footprints.png" class="workshop-img">
    <figcaption><code>FeatureCollection</code> of Microsoft building footprints in Kalbarri.</figcaption>
</figure>

*Make sure you click the **Save** button before you move to the next section.*

<br>

# Remote Sensing

The Planet Scope 4 `Image`s that you have been working with store data that is recorded by sensors on satellites that are observing the Earth. 

As satellites orbit the Earth, they monitor the same location on the land surface across time and capture information about land surface conditions. This information can be used to track changes in properties of the Earth's land surface (e.g. land cover change or vegetation health) and identify how ecosystems are responding to climatic change and hazard events. 

The process of using sensors to capture information about the Earth's land surface is remote sensing. Let's explore some core remote sensing concepts so that we can understand how the Planet Scope 4 `Image`s are created and contain useful information for detecting change caused by climatic events. 

## Remote Sensing Concepts

### Spectral Reflectance

Remote sensors on satellites measure electromagnetic energy reflected or emitted by objects on the Earth's land surface. The sensor that produces Planet Scope 4 `Image`s is a passive sensor; this means it measures the energy of sunlight reflected by objects. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-satellite-remote-sensing.png" class="workshop-img-small">
    <figcaption>Simple model of passive satellite remote sensing.</figcaption>
</figure>

Most often, when monitoring the Earth's surface using remote sensing images, we want `Image` pixels to have units of surface reflectance. Surface reflectance is the ratio of energy of incoming solar radiation to reflected solar radiation as measured by a sensor at the Earth's surface. Reflectance has values between 0 (no incoming solar radiation is reflected) to 1 (all incoming solar radiation is reflected). The roughness and albedo of an object determine how much radiation is reflected (e.g. polar ice caps have a high albedo and thus have high surface reflectance). 

When conditions on the Earth's surface change, levels of surface reflectance change. Imagine looking at a scene before and after a flood, after a flood you can see water is present where previously there was land. The reason you can detect this change with your eyes is because there is a difference in light reflected off the scene in areas of flood-driven change. The same principle applies when monitoring the land surface using satellite-based sensors; a change in surface reflectance indicates a change on the land surface. This allows us to detect change such as deforestation events or damage caused by tropical cyclones. 

<details>
  <summary><b>Why is surface reflectance used to monitor land surface objects as opposed to a more direct measure of energy levels at the sensor?</b></summary>
  <p><br>Some days are brighter than others, this means that solar illumination conditions are different and levels of reflected energy off land surface objects at the sensor will be different. However, the land surface object will not have changed and it is change in land surface objects that we seek to monitor. If the reflective properties of an object do not change, the ratio of incoming to reflected light should be the same even if the energy of incoming light changes. Thus, using surface reflectance to monitor land surface objects avoids conflating change in illumination conditions with actual changes in land surface objects.</p>
</details>

<br>

Remote sensors measure electromagnetic energy reflected by Earth surface features. Electromagnetic energy travels through the atmosphere and space as waves that are characterised by wavelength and frequency. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/EMS-Introduction_earthdata-nasa.jpeg" class="workshop-img">
    <figcaption>Electromagnetic spectrum. Source: <a href="https://earthdata.nasa.gov/learn/backgrounders/remote-sensing" target="_blank">NASA</a>.</figcaption>
</figure>

Features on the Earth's land surface have different reflectance characteristics at different wavelengths. Think about smooth bright white roofs; these roofs are reflecting lots incoming light across red, green, and blue visible wavelengths which is why the roof is white (reflectance across the visible spectrum) and bright (lots of incoming energy reflected). The same principle also explains why vegetation appears green; healthy vegetation reflects more green light and absorbs more red and blue light. 

Remote sensors measure reflectance in different spectral wavelengths. This allows us to distinguish features on the Earth's surface based on their varying reflectance across wavelengths. Our eyes can only sense reflected energy in the visible spectrum; however, remote sensors can sense over a wider range of the electromagnetic spectrum (e.g. infrared). 

Sensing reflectance across the electromagnetic spectrum increases our capacity to monitor important and interesting properties of Earth surface features. For example, water absorbs near-infrared radiation so appears `darker' compared to the land surface. Green vegetation is reflective in near-infrared wavelengths (as near-infrared radiation reflects off the internal structure of leaves).

### Image Bands

Let's explore how surface reflectance in different wavelengths is represented in the Planet Scope 4 `Image`s we have been visualising on the map.

Head to the *Inspector* tab next to the *Console* in the upper right of the code editor. When the *Inspector* tab is selected you can click on the map display and values in `Image`s at the location you clicked will be printed.

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/inspector-tab.png" class="workshop-img">
    <figcaption><em>Inspector</em> tab.</figcaption>
</figure>

Click at a location on the map and look in the *Inspectors* tab. Under the *PS4 Image - pre-TC Seroja* `Image` you should see four numbers printed against properties labelled `b1`, `b2`, `b3`, and `b4`. These numbers are the surface reflectance values recorded by the sensor in different wavelengths:

* `b1`: blue visible light
* `b2`: green visible light
* `b3`: red visible light
* `b4`: near-infrared light

`b1`, `b2`, `b3`, and `b4` are the names of `Image` bands. Surface reflectance values for the same location but different wavelengths are stored in a separate band. Each band is a raster dataset - values are stored in pixels.

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-reflectance-values.png" class="workshop-img">
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
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-ps4-blue-band-reflectance.png" class="workshop-img">
    <figcaption>Surface reflectance values in the blue band of a Planet Scope 4 <code>Image</code>.</figcaption>
</figure>

As mentioned above, different surfaces have different levels of reflectance at different wavelengths. In other words, different surface objects have different spectral reflectance characteristics which we can use to distinguish objects or features in a satellite image.

Use the *Layers* selector to bring the image *PS4 Image - pre-TC Seroja* onto the map display. Then head to the *Inspector* tab, click on a water pixel, and then click on the chart symbol next to the layer name. This will allow you visualise pixel values in a bar chart. 

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/inspector-graph.png" class="workshop-img">
    <figcaption>Turn on the <em>Inspector</em> chart to visualise pixel values in a bar chart.</figcaption>
</figure>

<br>

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-water-spectral-reflectance.png" class="workshop-img">
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

*Make sure you click the **Save** button before you move to the next section.*

# Mapping Building Damage

You have learned about how we can represent real world features and phenomenon using geographic data, programming tools to manipulate and analyse geographic data, and how satellite images can be used to monitor change on the Earth's surface. Let's pull all these skills together to map the location of damaged buildings after Tropical Cyclone Seroja impacted Kalbarri in April 2021.

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
  <p><br>We might expect there to be a decrease in surface reflectance compared to it's pre-damaged state. The cyclone damage will make the roof surface rougher, incoming solar radiation will be reflected equally in all directions with less energy being directly reflected to the satellite-sensor. This will be our working hypothesis. We'll expect that damaged roofs will show a decrease in surface reflectance compared to their pre-damaged state and undamaged roofs will have similar levels of surface reflectance before and after the storm.
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
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-tc-seroja-change-image.png" class="workshop-img">
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
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-building-damage-ps4-google-basemap.png" class="workshop-img">
    <figcaption>Building damage using change detection with Planet Scope 4 <code>Image</code>s with Google satellite basemap shown for context. <small>(Google Earth: Imagery &copy;2021 Maxar Technologies, CNES / Airbus, Map data &copy;2021).</small></figcaption>
</figure>

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-building-damage-ps4-google-basemap-zoom.png" class="workshop-img">
    <figcaption>Zoom in on building damage using change detection with Planet Scope 4 <code>Image</code>s with Google satellite basemap shown for context. <small>(Google Earth: Imagery &copy;2021 Maxar Technologies, CNES / Airbus, Map data &copy;2021).</small></figcaption>
</figure>

*Make sure you click the **Save** button before you move to the next section.*

## Mapping Roof Texture - Identifying Damaged Roofs

We have just used Planet Scope 4 `Image`s to detect damaged roofs by comparing pre- and post-cyclone event `Image`s. However, there might be occassions where we do not have pre- and post-event satellite images that we can use for damage mapping. For example, the high-resolution Nearmap `Image` we have been using to inspect damaged roofs is only available after Tropical Cyclone Seroja when Nearmap flew an aeroplane over the impacted regions with a sensor on-board. 

However, we can still detect damaged roofs using the single point-in-time Nearmap `Image` through contrasting the reflectance properties of intact and damaged roofs. We expect damaged roofs to have a rougher texture than intact roofs, which will be smoother. Roofs with a rougher texture will exhibit more variation in reflectance. Let's see if there is a pattern between roof texture and roof damage.

First, let's clip the high-resolution Nearmap `Image` to the roof extents.

```js
// High-resolution roofs
var highResRoof = nmKalbarriSeroja.clip(buildingFootprints);
Map.addLayer(highResRoof, {}, 'Nearmap - high-res roofs');
```

Next, let's convert our high-resolution roof `Image` into a texture `Image` where higher pixel values indicate that part of the `Image` is a rougher surface. Roofs with a rougher texture will appear in red and orange shades on your map display.

```js
// Compute roof roughness
var square = ee.Kernel.square({radius: 4});
var roofTexture = highResRoof.entropy(square).reproject('EPSG:32750', null, 0.5);
Map.addLayer(roofTexture.select('b3'), {min: 3, max: 4.5, palette:['00ffff', 'ffff00', 'ff0000']}, 'Nearmap - roof texture');
```

Explore the roof roughness `Image` on the map display and see if you can spot patterns between roof texture and building damage. 

<details>
  <summary><b>Can you identify any strengths or weaknesses of detecting building damage using a single high-resolution <code>Image</code> compared to pre- and post-<code>Image</code> change detection?</b></summary>
  <p><br>The finer spatial resolution pixels of the Nearmap <code>Image</code> means that small-scale damage to roofs can be detected which might not be captured in the coarse spatial resolution Planet Scope 4 <code>Image</code>s. However, features on roofs such as solar panels create a rough texture which could be conflated with building damage. If the solar panels were not affected by the cyclone, then roof damage detection using pre- and post-cyclone images for change detection should not be affected be complex roofs. 
  </p>
</details>

<br>

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri/kalbarri-roof-texture.png" class="workshop-img">
    <figcaption>Roof texture of a post-Tropical Cyclone Seroja Nearmap <code>Image</code>. Red and orange colours indicate a rougher texture. <small>(Google Earth: Imagery &copy;2021 Maxar Technologies, CNES / Airbus, Map data &copy;2021).</small></figcaption>
</figure>
