---
layout: workshops
title: Mangrove Dieback in the Gulf of Carpentaria
---

# Mangrove Dieback in the Gulf of Carpentaria

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/mangrove-gulf-title.png" class="img-fluid">
    <!-- <figcaption><code>Overview</code> image of mangrove dieback in the Gulf of Carpentaria.</figcaption> -->
</figure>

## Background
- Describe the event and the probable cause.
- The study area of Cox River

Listen to ABC Rural Radio's Charlie McKillop interview David Carter, the CEO of Austral Fisheries about the mangrove dieback event. This interview took place in October 2016.

{{site.url}}/assets/other/Rural-nrn-David-Carter-welcomes-climate-change-inquiry-1010.mp3

## Learning Objectives
1. Develop an understanding of the importance of mangroves in the Gulf of Carpentaria for fisheries.
2. Develop an understanding of remote sensing images.
3. Understand the different types of geospatial data (vector, raster, and attributes).
4. Learn basic programming techniques to process and analyse remote sensing images (Google Earth Engine JavaScript API).
5. Develop an understanding of how satellite images can be used to monitor coastal vegetation.


## Activities
- Introduction to mangroves, the ecosystem services they provide, and how they are susceptible to climatic hazards / change.
- Introduction to the Gulf of Carpentaria case study and the mangrove dieback event.
- Introduction to basic programming techniques and concepts.
- Introduction workshop data (Landsat, why this is such an important resource for Earth observation).
- Use remote sensing images to generate pre- and post-heatwave RGB and NDVI images.
- Map and calculate the area of mangrove dieback in the Gulf of Carpentaria.
- Investigate time series data representing the dieback event and possible recovery.

# Principles of Satellite Remote Sensing
- Major EO satellite platforms - Landsat, MODIS, Sentinel, Planet, Worldview
- Spatial and Temporal Resolution
- Spectral Reflectance
- Image bands
- Vegetation Indices

## The Landsat Satellites
- Brief History
- Landsat 8
- Future (L9)


In this workshop, you will use Google Earth Engine (GEE) to map the extent of mangrove dieback in the Gulf of Carpentaria.

You can sign up for Google Earth Engine here: [https://earthengine.google.com/signup/](https://earthengine.google.com/signup/) 

Load Google Earth Engine in your web browser at: [https://code.earthengine.google.com](https://code.earthengine.google.com)

Earth engine supports two basic types (or models) of spatial information: geographic features (also known as vector data), and image data (also known as gridded or raster data). Geographic features or vector data can represent spatial phenomenon using points, lines, or a polygon. 

# Introduction to GEE

Google Earth Engine (GEE) is a geospatial analysis platform that runs on Google Cloud. Using Google Earth Engine you can access and analyse large amounts of geospatial data and satellite images from your web browser. 

Google Earth Engine is advancing our capacity to monitor and understand changes in Earth systems due to climate change and human development through making it easier for scientists to unlock insights from big archives of satellite data. 

If you haven't used GEE before, you will first need to sign up for Google Earth Engine here: [https://earthengine.google.com/signup/](https://earthengine.google.com/signup/) 

Google Earth Engine programs comprise a series of statements written in **JavaScript**. These statements describe how to get the data you want to work with, what analysis you want to perform on the data, and how you want to see the results (e.g. a map or chart). 

Load Google Earth Engine in your web browser at: [https://code.earthengine.google.com](https://code.earthengine.google.com) and login with the email and password you used during registration.

<figure style="margin-left: auto; margin-right: auto; text-align: center">
    <img src="{{site.url}}/assets/images/code_editor_diagram.png" class="workshop-img">
    <figcaption>Google Earth Engine code editor (source: Google Earth Engine Developers Guide)</figcaption>
</figure>

In this workshop you will be focussing on the GEE components:

* **Code Editor**: where you write your JavaScript statements.
* **Map**: the web map used to visualise and create spatial data.
* **Search for datasets or places**: the web map used to visualise and create spatial data.
* **Scripts manager**: for managing your own collection of JavaScript files in GEE.
* **Save the script**: click this button to save your script.
* **Run the script**: click this button when you would like to run your script.
* **Console output**: any results and other information from your script will appear here.
* **Geometry Tools**: digitise vector features to use in your Google Earth Engine programs.
* **Zoom**: zoom the map in and out
* **Layer Manager**: click this button to see and control the layers you added to your map.

<!----------------------------------------------------------------------------->

# Working with the Map

## Searching for a Place

Let's start by setting the map so that it shows the Northern Territory, Australia. In the **Search for places or datasets** box at the top of GEE, start typing in **NT Australia** and you will see **NT, Australia** suggested under **PLACES**. Click on it and the map will centre on the Northern Territory. You can use the **Zoom** tool in the map window to zoom in and out, and click and drag the map to change the view. However, we want to set the location and zoom level in our script so the map will placed at the study area when we run the script.

## Setting the Zoom Level

GEE allows you to control the map in the bottom half of the window using the `Map` object in your javascript code. The `Map` object has many functions which including setting the zoom level, centring the map in a location, and adding layers (images or features) so they can visualised. 

First, let's set the zoom level. Enter the following into the main code editor window:
```js
Map.setZoom(6)
```
Before you continue any further, let's save the script. Click the **Save** button and enter the **File Name** as **mangrove-gulf-dieback.js** and click *OK*.

*Remember, it is a good idea to save your script after each step so you don't lose any of your work*. 

Now click the **Run** button. You should see the map zoom into the Northern Territory. The `setZoom` function takes one parameter - a number between **0** and **24**. Try changing the number in your script to 0. You should see that the lower the number, the more *zoomed out* the map is.  You can find the map scale at the bottom of the map window. 

Try a higher zoom number e.g. 9 and the map will *zoom in*. See what happens to the map scale. You may need to drag the map around to see where you are in the Northern Territory. You can also switch to **Satellite** view in the top right hand corner of the map window, and then try and even smaller scale with a zoom level of 24.  

## Centring the Map

Now you need to centre the map on the study site of Cox River in the Northern Territory. You will do this by creating a geographic feature, in this case a simple point, and centre the map on this point.

First, let's create the point feature. Add the following as the next line in your script:

```js
var CoxR = ee.Geometry.Point([135.7, -15.1]);
```
This creates an `ee.Geometry.Point` object and saves it in a new variable `CoxR`. When creating this object, you only need to provide one parameter - an array (denoted by the square `[ ]` brackets) containing two decimal numbers: the longitude and the latitude of the point. As the study site is east of the prime meridian and south of the equator, the longitude value is positive (east) and the latitude is negative (south).

Now you can centre the map window on this location by adding the following line:

```js
Map.centreObject(CoxR, 12);
```
The `Map.centreObject` function takes two parameters - an object to center on, in this case the CoxR point feature, and a zoom level. The zoom level has the same effect as Map.setZoomLevel you used above but allows you do the center and zoom in one step. Run your script to see the effect on the Map window. It should look similar to the map below:

## Mapping Layers

You can also add layers to overlay on the base map window. Let's add the point you just created:

```js
Map.addLayer(CoxR, {}, "Cox River", false);
```
The `Map.addLayer` function takes 4 parameters: a layer to display (in this case the CoxR point), visualisation parameters between the curly braces `{}` which describe how to style the layers (colours etc), a descriptive label that will be used in the map window, and a boolean flag (i.e. true or false) indicating whether the layer is on or not by default (in this case it is off). 

Click **Run** and then click the **Layers** button in the map window and you will see it has been added as a layer. To display the layer, click the tick box next to **Cox River** and the point should display. Move the slider next to the layer to change the *opacity* (or transparency)  for the displayed layer.

## Summary

At the end of this section, your script should look similar to the one below; however, you will notice the first line contains two forward slashes `//` followed by some text. This is a called a *comment* in JavaScript. Comments are are useful for writing your own descriptions about what is happening in the script, or excluding lines of code from being executed. You will see that the 2nd line containing the `Map.setZoom(24)` is also *commented out* because we set the map zoom using the `Map.centerObject()` function so it is no longer necessary. Adjust your code to match the script below.

```js
// Working with the Map
// Map.setZoom(24);
var CoxR = ee.Geometry.Point([135.7, -15.1]);
Map.centerObject(CoxR, 12);
Map.addLayer(CoxR, {}, "Cox River", false); 
```
Make sure you click the **Save** button frequently. As you follow the steps below, keep appending the code to the end of the same script.
  
<!----------------------------------------------------------------------------->
# Working with Images

## Filtering a Collection

GEE provides large collections of images from many different satellites. You will be working with images captured from the Landsat-8 satellite. You can access a collection in GEE using the `ee.ImageCollection{}` function and provide the name of the collection. Add the following into your script (and include the comment too):

```js
// Working with Images
var L8 = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2");
``` 
The `ee.ImageCollection{}` function takes one parameter: a string representing the collection you would like to use. The reference to this collection is stored in the variable `L8` so we can use it throughout the script.

Landsat-8 has been collecting about 750 images of the globe every day since launch in February 2013. You will therefore need to filter this large collection to the location and dates of the dieback event. Do this using the `filterBounds()` function on the collection:

```js
L8 = L8.filterBounds(CoxR);
``` 
The `filterBounds()` function takes one parameter: an object that has a geographic extent. In this case, we can use the point feature we already used to position the map on the Cox River. Notice how we reuse the variable `L8` rather than creating a new variable. It makes our script easier to follow.

Now filter the dates of the collection using a similar function `filterDate()` to retrieve a single image over the Cox River:

```js
var beforeImage = L8.filterDate("2015-04-01", "2015-05-01").first();
``` 

The `filterDate()` function takes a start date and end date, and returns all images that were captured on or after the start date but before the end date. In this case, a single day was chosen before the mangrove dieback event occurred. 

The `filterDate()` function returns a reduced `ee.ImageCollection` containing just the images between the required dates. In our case, there will be only one image in the collection, so we can easily select this by appending the `first()` function after the `filterDate()` function. The `first()` function returns an `ee.Image` object which we save in a new variable `beforeImage`. 

Note how we *chained* the two functions together like this in a single line - it makes your script simpler and easier to read by avoiding unnecessary variables to save intermediate results.

## Displaying an Image Before the Dieback Event

Now you have an `ee.Image()`, let's display it on the map. But first we need to set some visualisation parameters so GEE knows how to display the image.

```js
var vis = {"bands":["SR_B4", "SR_B3", "SR_B2"], "min":6000, "max":12000};

```
The above line defines a set of visualisation parameter that the `Map.addLayer()` understands. It includes which bands from the image should be used for the red, green and blue colour channels (in this case bands 4, 3, and 2), and the minimum and maximum pixel values to *stretch* the image to (in this case 6000 and 12000). We save these in the variable `vis` so we can easily reuse them. Now we can add the image to the map using the `Map.addLayer()` function you used before:

```js
Map.addLayer(beforeImage, vis, "before image", false);
```

Click **Run** and then click the **Layers** button in the map window, and click the tick box next to **before image**. The image should display as shown below:

TODO: before image

## Displaying an Image After the Dieback Event
We can now repeat the above code to display an image exactly one year later, after the dieback event. The code is very similar except for the dates used to filter the image collection:

```js
var afterImage = L8.filterDate("2016-04-01", "2016-05-01").first();
Map.addLayer(afterImage, vis, "after image", false);
```

Click **Run** and then click the **Layers** button in the map window, and click the tick box next to both the **before image** and the **after image**. Use the slider next to the after image to see the changes between the two images. Can you see any impacts on the mangroves near the mouth of the Cox River?

## Removing Clouds from Images

Your may have noticed that there are clouds present in the images displayed. Clouds can present a problem when trying to analyse images from satellites so we need to exclude pixels that are affected. Landsat provides a *quality assurance* (QA) band with the image that we can use for this. First, copy the following code into your script.

```js
function removeCloud(image) {
  // Bit 0 - Fill, 1 - Dilated Cloud, 2 - Cirrus, 3 - Cloud, 4 - Cloud Shadow
  var qaMask = image.select('QA_PIXEL').bitwiseAnd(parseInt('11111', 2)).eq(0);
  return image.updateMask(qaMask);
}
```

The above code creates a `function` called `removeCloud` that takes one parameter (an image) and returns that image with cloudy pixels removed. A `function` is a way of writing a piece of code that can be reused in your script. We won't go into the details of how the cloud is removed by this function but ask your instructor if you would like to know more.

Now we have a function to remove cloud, we can apply it to our before and after images and add them to the map. 

```js
beforeImage = removeCloud(beforeImage);
afterImage = removeCloud(afterImage)
Map.addLayer(beforeImage, vis, "before image - cloud free", false);
Map.addLayer(afterImage, vis, "after image - cloud free", false);

```
Click **Run**. Turn on the new layers (using the **Layers** button) and see the effect of the `removeCloud()` function has had on both images.

## Summary

The code from this section is summarised below. Check to make sure your code is similar, and remember to click the **Save** button before continuing to the next section.

```js
// Working with Images
var L8 = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2");
L8 = L8.filterBounds(CoxR);

var beforeImage = L8.filterDate("2015-04-01", "2015-05-01").first();
var vis = {"bands":["SR_B4", "SR_B3", "SR_B2"], "min":6000, "max":12000};
Map.addLayer(beforeImage, vis, "before image", false);

var afterImage = L8.filterDate("2016-04-01", "2016-05-01").first();
Map.addLayer(afterImage, vis, "after image", false);

function removeCloud(image) {
  // Bit 0 - Fill, 1 - Dilated Cloud, 2 - Cirrus, 3 - Cloud, 4 - Cloud Shadow
  var qaMask = image.select('QA_PIXEL').bitwiseAnd(parseInt('11111', 2)).eq(0);
  return image.updateMask(qaMask);
}

beforeImage = removeCloud(beforeImage);
afterImage = removeCloud(afterImage)
Map.addLayer(beforeImage, vis, "before image - cloud free", false);
Map.addLayer(afterImage, vis, "after image - cloud free", false);
```

# Mapping Changes to Vegetation

## Mapping Vegetation

Vegetation has a unique reflectance signature compared to other surfaces on the earth. The diagram below shows the amount of sunlight reflected by different surfaces across part of the electromagnetic spectrum. 

TODO: Image

You can see above that vegetation reflects very little blue and red light, while reflecting more green light (and why we generally see vegetation as green). The red light is absorbed by chlorophyll in the leaves and is critical for photosynthesis. However, vegetation strongly reflects near-infrared light due to the cell structure in the leaves. We can't see this near-infrared light with our eyes, but the Landsat satellite can detect this. 

We can use this characteristic contrast between the strong absorption in the red region with the strong reflectance in the near-infrared (or NIR) region to detect pixels that are more likely to be vegetation. We do this with a simple formula known as the Normalised Difference Vegetation Index, or NDVI. The formula is:

*NDVI = (NIR - red) / (NIR + red)*

The top line of this formula is the contrast between the NIR band and red band in an image. The larger this number, the more likely a pixel is vegetation. The bottom line normalises the value so that the NDVI will always range between a minimum of -1 and a maximum of +1. Pixels with negative NDVI values are very unlikely to contain vegetation, where as larger positive values are more likely to contain vegetation. 

Let's write a function to calculate the NDVI for an image:

```js
// Mapping Changes to Vegetation
function calcNDVI(image) {
  var ndvi = image.normalizedDifference(["SR_B5", "SR_B4"]);
  ndvi = ndvi.set("system:time_start", image.get("system:time_start"));
  return ee.Image(ndvi);
}
```

The above function takes one parameter - an image. We then use the `normalizedDifference()` function provided by GEE to easily calculate a new NDVI image. We just need to provide a list containing the names of the NIR and red bands in the image - in this case the NIR band is `SR_B5` and the red band is `SR_B4`. The new band is saved to the `ndvi` variable. The `ndvi.set()` and `ndvi.get()` functions are used to copy the date of the original image (`"system:time_start"`) to the new ndvi image. This will be important later when we are analysing the mangrove dieback and recovery through time.

Now we can calculate the NDVI from the image before the dieback event, and after the dieback event by calling the `calcNDVI` function, and add the results to the map:
```js
var beforeNDVI = calcNDVI(beforeImage).select('ndvi');
var afterNDVI = calcNDVI(afterImage).select('ndvi');
Map.addLayer(beforeNDVI, {}, "before ndvi", false);
Map.addLayer(afterNDVI, {}, "after ndvi", false);

```

Click **Run** and then click the **Layers** button in the map window, and click the tick box next to both the **before ndvi** and the **after ndvi**. Use the slider next to the **after ndvi** image to see the changes between the two images. Can you see any how the NDVI decreases where there were impacts on the mangroves near the mouth of the Cox River?



## Mapping Vegetation Change Using NDVI Differencing

```
var diffNDVI = afterNDVI.subtract(beforeNDVI);
Map.addLayer(diffNDVI, {min: -0.1, max: 0.1}, "ndvi difference", false);

```

## Mapping Vegetation Loss
```
var vegLoss = diffNDVI.lt(-0.1);
vegLoss = vegLoss.updateMask(vegLoss); // Mask out non-loss pixels
Map.addLayer(vegLoss, {palette: ["ff0000"]}, "vegetation loss", false);
```

# Analysing Mangrove Dieback

## Defining the Mangrove Zone

```
var coastline = ee.FeatureCollection("USDOS/LSIB/2017")
  .filterMetadata("COUNTRY_NA", "equals", "Australia");
Map.addLayer(coastline, {}, "coastline", false);

var distFromCoast = coastline.distance(5000);
Map.addLayer(distFromCoast, {min: 0, max: 5000}, "distance from coast", false);

var mangroveZone = distFromCoast.lte(1500);

```

## Mapping Mangrove Dieback

```
var mangroveLoss = vegLoss.updateMask(mangroveZone);
Map.addLayer(mangroveLoss, {palette: ["ff0000"]}, "mangroveLoss", true);

```

## Calculating the Area of Mangrove Dieback

```
var lossPixels = mangroveLoss.reduceRegion({
  reducer: ee.Reducer.count(), 
  geometry: beforeImage.geometry(),
  scale: 30,
  maxPixels: 50000000
});
lossPixels = ee.Number(lossPixels.get('ndvi'));
print("Mangrove Loss Pixels", lossPixels)

var pixelArea = ee.Number(30).pow(2).divide(ee.Number(1000).pow(2));
var lossArea = lossPixels.multiply(pixelArea);
print("Mangrove Loss Area (km2)", lossArea);
```

## Exploring Mangrove NDVI through time

- Place a point featurecollection on the map.

```
L8 = L8.map(removeCloud);
L8 = L8.map(calcNDVI);

var chart = ui.Chart.image.seriesByRegion({
  imageCollection: L8.select('ndvi'),
  regions: geometry,
  reducer: ee.Reducer.mean(),
  scale: 30,
  xProperty: 'system:time_st
});
        

chart = chart .setOptions({
  title: 'NDVI Time Series',
  hAxis: {title: 'Date', titleTextStyle: {italic: false, bold: true}},
  vAxis: {title: 'NDVI', titleTextStyle: {italic: false, bold: true}},
  interpolateNulls: true // Fill in values that may be missing due to cloud
});

print(chart);

```
- Add two more point and rerun.

{% include open-embed.html %}