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

## Centre the Map on Cox River

```
var CoxR = ee.Geometry.Point([135.7, -15.1]);
Map.centerObject(CoxR, 12);

```

## Display a Landsat-8 (L8) Image before the Dieback Event

```
var L8 = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2");
L8 = L8.filterBounds(CoxR);
var vis = {"bands":["SR_B4", "SR_B3", "SR_B2"], "min":6000, "max":12000};
var beforeImage = L8.filterDate("2015-04-01", "2015-05-01").first();
Map.addLayer(beforeImage, vis, "before image", false);
```

## Display a L8 Image after the Dieback Event

```
var afterImage = L8.filterDate("2016-04-01", "2016-05-01").first();
Map.addLayer(afterImage, vis, "after image", false);
```

## Remove Clouds from Images

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

## Mapping Vegetation with the NDVI

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

