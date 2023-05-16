---
layout: workshops
title: Geospatial Data
---

# Introduction to Geospatial Data

<figure style="margin-left: auto; margin-right: auto; text-align: center;">
    <img src="{{site.url}}/assets/images/kalbarri-title.png" class="img-fluid" style="min-width:100%">
</figure>

This workshop will provide an introduction to geospatial data. It will focus on satellite images including how they are captured and how they can be used to monitor changes on the Earth's surface. The workshop will conclude by demonstrating a workflow using satellite images to detect buildings that were damaged by Tropical Cyclone Seroja in Kalbarri, Western Australia. 

<p></p>

# Activity 1: Geospatial Data

Google Timelapse presents a video-like visualisation of images of the Earth captured by satellites from 1984 to the present day.  

Head to Google Timelapse to visualise change in conditions on the Earth’s surface over time using satellite images.

<a class="btn btn-primary" href="https://earthengine.google.com/timelapse/" target="_blank" role="button">Go to Google Timelapse</a>

Tasks:

* Search for Joondalup to visualise urban development in North Perth since 1984.
* Explore case studies in the sidebar.
* Use the search tool to explore how other locations have changed since 1984. 

Consider what is driving the changes in land use and land cover that you can see. Also, consider the consequences of the change you can see for the environment, people, and economies.  

**As you're exploring geospatial data in Google Timelapse, note down ideas and suggestions that explain *Why is geospatial data valuable and how can it be used?***

<p></p>

# Activity 2: Characteristics of Geospatial Data

**For each of the following geospatial datasets, identify their spatial, temporal, and thematic resolution.**

**Suggest a potential application or use for each dataset.**

* <a href="https://global-surface-water.appspot.com/map" target="_blank">Global Surface Water Explorer</a>
* <a href="https://www.wri.org/applications/aqueduct/water-risk-atlas" target="_blank">Water Risk Atlas</a>
* <a href="https://www.cloudtoclassroom.org/urbanization" target="_blank">Nightlights and Urbanisation</a>
* <a href="https://yceo.users.earthengine.app/view/uhimap" target="_blank">Urban Heat Island Explorer</a>
* <a href="https://www.cloudtoclassroom.org/australian-fires" target="_blank">Australian Bushfires</a>
* <a href="https://fews.net/" target="_blank">FEWSNET</a>

<p></p>

# Activity 3: Satellite Images

**Sketch spectral signatures for the following land cover classes:**

* Buildings
* Grass
* Trees
* Roads
* Bare earth
* Water
* Sand

Clicking the following buttons will open Google Earth Engine apps that will let you click on a map to generate spectral signature charts for the clicked location. If you click on a tree, a spectral signature chart illustrating the reflectance of light in blue, green, red, and near infrared wavelengths off the tree will be generated.

You can explore generating spectral signatures with Sentinel-2 (10 m spatial resolution) and Planet (3 m spatial resolution). See if the spectral signatures for different land cover types are similar across teh datasets. Would you expect them to be?

<a class="btn btn-primary" href="https://jmad1v07.users.earthengine.app/view/s2-spectral-signatures" target="_blank" role="button">Sentinel-2 Spectral Signature Explorer</a>

<p></p>

<a class="btn btn-primary" href="https://jmad1v07.users.earthengine.app/view/planet-spectral-signatures" target="_blank" role="button">Planet Spectral Signature Explorer</a>

<p></p>

# Activity 4: Building Damage in Kalbarri

**Design a workflow to detect damaged buildings following Tropical Cyclone Seroja using satellite images.**

Use the following Google Earth Engine apps which let you visualise Sentinel-2 and Planet images before and after Tropcial Cyclone Seroja impacted Kalbarri to see if you can spot the signature of building damage in the images. Can you think of a way to automatically detect damaged buildings from these images?

As you're exploring the images in the apps, consider the following questions:

*What do we hypothesise the spectral signature of a damaged building / roof to be? How will this differ from an undamaged roof?*

*What are the characteristics of satellite images that we require for this task (spatial, temporal, and thematic / radiometric resolutions)?*

Spectral signature explorers:

<a class="btn btn-primary" href="https://jmad1v07.users.earthengine.app/view/tc-seroja-s2-spectral-signatures" target="_blank" role="button">TC Seroja Sentinel-2 Spectral Signature Explorer</a>

<p></p>

<a class="btn btn-primary" href="https://jmad1v07.users.earthengine.app/view/tc-seroja-planet-spectral-signatures" target="_blank" role="button">TC Seroja Planet Spectral Signature Explorer</a>

<p></p>

Split screen explorers:

<a class="btn btn-primary" href="https://jmad1v07.users.earthengine.app/view/tc-seroja-s2-bands-split-screen" target="_blank" role="button">TC Seroja Sentinel-2 Split Screen Explorer</a>

<p></p>

<a class="btn btn-primary" href="https://jmad1v07.users.earthengine.app/view/tc-seroja-planet-bands-split-screen" target="_blank" role="button">TC Seroja Planet Split Screen Explorer</a>

<p></p>

# Wrap Up - Change Detection

Open the following app to visualise the results of change detection analysis to identify buildings damaged by Tropical Cyclone Seroja in Kalbarri.

<a class="btn btn-primary" href="https://jmad1v07.users.earthengine.app/view/tc-seroja-building-damage" target="_blank" role="button">Change Detection - Building Damage in Kalbarri</a>