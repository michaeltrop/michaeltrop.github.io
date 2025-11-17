/* This app can be configured by changing the variables
in this file.

Webscene:
 - copy the webscene that I use: http://www.arcgis.com/home/item.html?id=d0580bb5df3840d384bda44b6ddeb54e
 - remove/add layers with additional data in the Layers group
 - remove/add basemap layers in the Basemap group

Data:
 - replace the trails service url
 - replace the attribute names to the ones in your service
 - remove attributes if they don't make sense for your data
 - Status has hard-coded values Open/Closed (whether the track is open or closed)
 - filterOptions are the attributes that will be used for filtering
    they can be removed in case they are not useful

Colors:
 - change the colors for visualizing the trails
 - for CSS colors check also the variables.scss file - selectedTrail is $orange
*/

export default {
  scene: {
    websceneItemId: "fd792ece8bfb4f45a2f2cd57a250600e"
  },
  data: {
    trailsServiceUrl: "https://services1.arcgis.com/pPBeL25iqasXLMk1/arcgis/rest/services/PCT_Walked/FeatureServer",
    trailAttributes: {
      Day: "Day",
      Date_txt: "Date_txt",
      Date: "Date",
    },
    filterOptions: {
      singleChoice: ["Date"], // have string values
      range: ["Day"] // have numeric values
    }
  },
  colors: {
    defaultTrail: "#db5353",
    selectedTrail: "#f9a352"
  }
};
