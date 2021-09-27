---
layout: workshops
title: Mangrove Dieback in the Gulf of Carpentaria
---

# Mangrove Dieback in the Gulf of Carpentaria

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/mangrove-gulf-title.png" class="img-fluid">
    <!-- <figcaption><code>Overview</code> image of mangrove dieback in the Gulf of Carpentaria.</figcaption> -->
</figure>

## Learning Objectives:
1. Develop an understanding of the importance of mangroves in the Gulf of Carpentaria for fisheries.
2. Develop an understanding of remote sensing images.
3. Understand the different types of geospatial data (vector, raster, and attributes).
4. Learn basic programming techniques to process and analyse remote sensing images (Google Earth Engine JavaScript API).
5. Develop an understanding of how satellite images can be used to monitor coastal vegetation.


## Activities:

- Introduction to mangroves, the ecosystem services they provide, and how they are susceptible to climatic hazards / change.
- Introduction to the Gulf of Carpentaria case study and the mangrove dieback event.
- Introduction to basic programming techniques and concepts.
- Introduction workshop data (Landsat, why this is such an important resource for Earth observation).
- Use remote sensing images to generate pre- and post-heatwave RGB and NDVI images.
- Map and calculate the area of mangrove dieback in the Gulf of Carpentaria.
- Investigate time series data representing the dieback event and possible recovery.

## Background
- Describe the event and the probable cause.
- The study area of Cox River

Listen to ABC Rural Radio's Charlie McKillop interview David Carter, the CEO of Austral Fisheries about the mangrove dieback event. This interview took place in October 2016.

{{site.url}}/assets/other/Rural-nrn-David-Carter-welcomes-climate-change-inquiry-1010.mp3

## Principles of Earth Observation by Satellite Remote Sensing
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

## Getting Started

### Understanding the Map

Let's start by setting the map so that it shows the Northern Territory, Australia. In the *Search places and datasets* box at the top of GEE, start typing in *NT Australia* and you will see *NT, Australia suggest under *PLACES*. Click on it and the map will centre on the Northern Territory. You can use the zoom tool in the map window to zoom in and out, and click and drag the map to change the view. However, we want to set the location and zoom level in our script so we don't need to keep placing the map by hand.

### Setting the Map Zoom

GEE allows you to control the map in the bottom half of the window using the `Map` object in your javascript code. The `Map` object has many functions which including setting the zoom level, centring the map in a location, and adding layers (images or features) so they can visualised. 

First, let's set the zoom level. Enter the following into your script:
```js
Map.setZoom(6)
```
Before you continue any further, let's save the script. Click the *Save* button at the top of your script and enter the *File Name* as *mangrove-gulf-dieback.js*, and click *OK*. 

Now click the *Run* button. You should see the map zoom into the Northern Territory. The `setZoom` function takes one parameter - a number between 0 and 24. Try changing the number in your script to 0. You should see that the lower the number, the more 'zoomed out' the map is, or it is a larger *map scale*. You can see the map scale in the bottom of the map window. 

Try a higher zoom number e.g. 9, the map will 'zoom in', and the map scale will be relatively smaller. You may need to pan the map around to see where you are in the Northern Territory. You can also switch *Satellite* view and try and even smaller scale with a zoom level of 24. 

### Centre the Map

Now you need to centre the map on the study site of Cox River in the Northern Territory. You will do this by creating a geographic feature, in this case a simple point, and centre the map on this point.

First, let's create the point feature. Add the following as the next line in your script:

```js
var CoxR = ee.Geometry.Point([135.7, -15.1]);
```
This creates an `ee.Geometry.Point` object and saves it in a new variable `CoxR`. When creating this object, you only need to provide one parameter - an array (denoted by the square [ ] brackets) containing two decimal numbers: the longitude and the latitude of the point. As the study site is east of the prime meridian and south of the equator, the longitude value is positive (east) and the latitude is negative (south).

Now you can centre the map window on this location by adding the following line:

```js
Map.centreObject(CoxR, 12);
```
The `Map.centreObject` function takes two parameters - an object zoom on, in this case the CoxR point feature, and a zoom level. The zoom level has the same effect as Map.setZoomLevel you used above but allows you do centre and zoom in one step. Run your script to see the effect on the Map window. It should look similar to the map below:

### Adding a Layer


You can also add layers to overlay on the base map window. Let's add the point you just created:

```js
Map.addLayer(CoxR, {}, "Cox River", true);
```
The `Map.addLayer` function takes 4 parameters: a layer to display (in this case the CoxR point), visualisation parameters between the curly braces which describe how to style the layers (colours etc), a descriptive label that will be used in the map window, and a boolean flag (i.e. true or false) indicating whether the layer is on or not by default (in this case it is on). Click Run and the point should display in the Map window. Click the Layers button in the Map window and you will see it has been added. You can tick the layer off to hide it, or use the slider to change the opacity of the layer.
  
## Working with Images

### Display a Landsat-8 (L8) Image before the Dieback Event

```
var L8 = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2");
L8 = L8.filterBounds(CoxR);
var vis = {"bands":["SR_B4", "SR_B3", "SR_B2"], "min":6000, "max":12000};
var beforeImage = L8.filterDate("2015-04-01", "2015-05-01").first();
Map.addLayer(beforeImage, vis, "before image", false);
```

### Display a L8 Image after the Dieback Event

```
var afterImage = L8.filterDate("2016-04-01", "2016-05-01").first();
Map.addLayer(afterImage, vis, "after image", false);
```

### Remove Clouds from Images

```
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
## Mapping Vegetation

### Mapping Vegetation with the NDVI

```
function calcNDVI(image) {
  var ndvi = image.normalizedDifference(["SR_B5", "SR_B4"]);
  ndvi = ndvi.rename('ndvi');
  return image.addBands(ndvi);
}

var beforeNDVI = calcNDVI(beforeImage).select('ndvi');
var afterNDVI = calcNDVI(afterImage).select('ndvi');
Map.addLayer(beforeNDVI, {}, "before ndvi", false);
Map.addLayer(afterNDVI, {}, "after ndvi", false);

```

### Mapping Vegetation Change Using NDVI Differencing

```
var diffNDVI = afterNDVI.subtract(beforeNDVI);
Map.addLayer(diffNDVI, {min: -0.1, max: 0.1}, "ndvi difference", false);

```

### Mapping Vegetation Loss
```
var vegLoss = diffNDVI.lt(-0.1);
vegLoss = vegLoss.updateMask(vegLoss); // Mask out non-loss pixels
Map.addLayer(vegLoss, {palette: ["ff0000"]}, "vegetation loss", false);
```


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
  xProperty: 'system:time_start',
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