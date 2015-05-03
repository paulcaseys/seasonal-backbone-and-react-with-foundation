
/**
 * Filename: js/app/AppInit
 *
 * initialises the views
 *
 */
//


// require js: defines the required js libraries and app files
define([

  // required libraries
  'jquery',
  'underscore',
  'backbone',

  // required app router
  'App.Router',

  // required models
  'App.Models.ConfigModel',
  'App.Models.StateModel',
  'App.Models.StateMenuModel',
  'App.Models.GalleryModel',

  // required collection
  'App.Collections.GalleryCollection',

  // required views
  'jsx!App.Views.HomePageView',
  'jsx!App.Views.HelpPageView',
  'jsx!App.Views.ExamplePageView',



// require js: defines instances
], function($, _, Backbone, Router, ConfigModel, StateModel, StateMenuModel, GalleryModel, GalleryCollection, HomePageView, HelpPageView, ExamplePageView){




    // initialises various  app views
    var initialize = function(){

      // initialises the app configuration (eg: App.Models.ConfigModel.browserRatioNum)
      App.Models.ConfigModel = new ConfigModel();

      // initialises the state controller
      App.Models.PageStateModel = new StateModel();

      // initialises the state controller for the menu
      App.Models.PageStateMenuModel = new StateMenuModel();

      // initialises the feature details
      App.Models.GalleryModel = new GalleryModel();
      App.Collections.GalleryCollection = new GalleryCollection();

      // initialises the views onto the page
      App.Views.HomePageView = new HomePageView();
      App.Views.HelpPageView = new HelpPageView();
      App.Views.ExamplePageView = new ExamplePageView();

      // initialises the router
      Router.initialize();

      // calls eventlisteners in the view, as an example
      App.Views.HomePageView.trigger("testCall");
      App.Views.HelpPageView.trigger("testCall");
      App.Views.ExamplePageView.trigger("testCall");

      // hides the loading div (if it exists)
      if ($("#loading-page").length > 0){
        $("#loading-page").hide();
      }


    };




    // require js: defines function/s to be accessed by require js
    return {
      initialize: initialize
    };


});
