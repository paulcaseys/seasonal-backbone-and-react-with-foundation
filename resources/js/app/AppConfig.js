
/**
 * Filename: js/app/AppConfig
 *
 * defines the app paths and initialises the app
 *
 */
//
/*jslint browser: true, devel: true */

// APP STRUCTURE
// defines the app structure
var App = {};
App.Views = {};
App.Models = {};
App.Collections = {};
App.Data = {};


// DATA SERVICES
// define data service paths
App.Data.GalleryData = 'resources/data/GalleryData.json' + '?ver=' + ((new Date()).getTime());


// CONSOLE FIX
// Avoid `console` errors in browsers that lack a console (from html5 boilerplate)
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());



// APP CONFIG
(function () {
    'use strict';

require.config({
    baseUrl: ".",
    paths: {
            'jquery': "resources/js/libs/jquery/jquery-1.9.1",
            'backbone': "resources/js/libs/backbone/backbone-min",
            'underscore':   'resources/js/libs/underscore/underscore-min',
            'json':         'resources/js/libs/json2/json2',

            // react
            'text': 'resources/js/libs/react/text',
            'jsx': "resources/js/libs/react/jsx",
            'JSXTransformer': 'resources/js/libs/react/JSXTransformer',
            'react': 'resources/js/libs/react/react-with-addons',


            // jquery easing
            'jquery.easing': 'resources/js/libs/jquery/jquery.easing',

            // modernizr (html5 conditional and tag correction)
            'modernizr':    'resources/js/libs/modernizr/modernizr.min',

            // cosmos image loading (image loading and rescaler)
            'cosmosimageloader':    'resources/js/libs/cosmos/cosmos-image-loader.1.01',

            // cosmos data (rapid form and data service)
            'cosmosdata':    'resources/js/libs/cosmos/cosmos-data.1.01.min',

            // foundation
            'foundation':           'resources/js/libs/foundation',
            'foundationtopbar':     'resources/js/libs/foundation/jquery.foundation.topbar',
            'foundationapp':        'resources/js/libs/foundation/app',

            // foundation
            'tweenlite':        'resources/js/libs/tweenlite/TweenLite.min',
            'easepack':         'resources/js/libs/tweenlite/EasePack.min',
            'cssplugin':        'resources/js/libs/tweenlite/CSSPlugin.min',

            // video-js (html5 video player, with swf fallback for old browsers)
            'videojs':          'resources/js/libs/video-js/video.min',

            // paths to app initialiser
            'AppInit':                              'resources/js/app/AppInit',

            // paths to app router (routes hash URIs)
            'App.Router':                       'resources/js/app/Router',

            // paths to the config model (for constants)
            'App.Models.ConfigModel':           'resources/js/app/models/ConfigModel',

            // paths to state PAGE/PANEL model (tells which state to transition to)
            'App.Models.StateModel':            'resources/js/app/models/StateModel',

            // paths to state MENU model (tells which menu item to select)
            'App.Models.StateMenuModel':            'resources/js/app/models/StateMenuModel',

            // paths to views
            'App.Views.HomePageView':           'resources/js/app/views/HomePageView',
            'App.Views.HelpPageView':           'resources/js/app/views/HelpPageView',
            'App.Views.HelpPanelView':          'resources/js/app/views/HelpPanelView',
            'App.Views.ExamplePageView':        'resources/js/app/views/ExamplePageView',

            // paths to collections
            'App.Collections.GalleryCollection':  'resources/js/app/collections/GalleryCollection',

            // paths to models
            //'App.Models.ExampleModel':            'resources/js/app/models/ExampleModel'
            'App.Models.GalleryModel':          'resources/js/app/models/GalleryModel'


        },

        // dependancies for certain javascript files
        shim: {
            'underscore': {
                exports: '_'
            },
            'backbone': {
                deps: ["underscore", "jquery"],
                exports: "Backbone"
            },
            'modernizr': {
                deps: ["jquery"]
            },
            'jquery.easing': {
                deps: ["jquery"]
            },
            'cosmosimageloader': {
                deps: ["jquery"],
                exports: "cosmosimageloader"
            },
            'foundationtopbar': {
                deps: ["jquery"],
                exports: "foundationtopbar"
            },
            'foundationapp': {
                deps: ["jquery", "foundationtopbar"],
                exports: "foundationapp"
            },
            'tweenlite': {
                deps: ["cssplugin", "easepack"],
                exports: "tweenlite"
            },
            'videojs': {
                deps: ["jquery"],
                exports: "videojs"
            }

    },
});


//libs
    require([


        // paths to common libraries
        'jquery',
        'backbone',
        'underscore',
        'json',

        // jquery easing
        'jquery.easing',

        // modernizr (html5 conditional and tag correction)
        'modernizr',

        // cosmos image loading (image loading and rescaler)
        'cosmosimageloader',

        // cosmos data (rapid form and data service)
        'cosmosdata',

        // foundation
        'tweenlite',
        'easepack',
        'cssplugin',

        // video-js (html5 video player, with swf fallback for old browsers)
        'videojs',

        // react.js for views
        'react',

        // paths to app initialiser
        'AppInit',

        // paths to app router (routes hash URIs)
        'App.Router',

        // paths to the config model (for constants)
        'App.Models.ConfigModel',

        // paths to state PAGE/PANEL model (tells which state to transition to)
        'App.Models.StateModel',

        // paths to state MENU model (tells which menu item to select)
        'App.Models.StateMenuModel',

        // paths to views
        'jsx!App.Views.HomePageView',
        'jsx!App.Views.HelpPageView',
        'jsx!App.Views.HelpPanelView',
        'jsx!App.Views.ExamplePageView',

        // paths to collections
        'App.Collections.GalleryCollection',

        // paths to models
        //'App.Models.ExampleModel',
        'App.Models.GalleryModel',



        ],
        function () {
            var $ = require("jquery"),
            // the startmodule is defined on the same script tag of data-main.
            // example: <script data-main="main.js" data-start="pagemodule/main" src="vendor/require.js"/>
            startModuleName = $("script[data-main][data-start]").attr("data-start");
            
            if (startModuleName) {
                require([startModuleName], function (startModule) {
                    $(function () {
                        var fn = $.isFunction(startModule) ? startModule : startModule.initialize;
                        if (fn) { fn(); }
                    });
                });
            }
            
        });

} ());