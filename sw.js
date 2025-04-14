// Change this to your repository name
var GHPATH = '/debathlon';
 
// Choose a different app prefix name
var APP_PREFIX = 'dblpwa_';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_01';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
    `${GHPATH}/`,
    `${GHPATH}/analytics-frame.html`,
    `${GHPATH}/html5/data/css/output.min.css`,
    `${GHPATH}/html5/data/js/5fkAbeU0uCU.js`,
    `${GHPATH}/html5/data/js/5wNVHBsuJWM.js`,
    `${GHPATH}/html5/data/js/6ozLbybpM2k.js`,
    `${GHPATH}/html5/data/js/data.js`,
    `${GHPATH}/html5/data/js/frame.js`,
    `${GHPATH}/html5/data/js/paths.js`,
    `${GHPATH}/html5/lib/scripts/bootstrapper.min.js`,
    `${GHPATH}/html5/lib/scripts/frame.desktop.min.js`,
    `${GHPATH}/html5/lib/scripts/frame.mobile.min.js`,
    `${GHPATH}/html5/lib/scripts/slides.min.js`,
    `${GHPATH}/html5/lib/stylesheets/desktop.min.css`,
    `${GHPATH}/html5/lib/stylesheets/mobile-fonts/open-sans-bold.woff`,
    `${GHPATH}/html5/lib/stylesheets/mobile-fonts/open-sans-light.woff`,
    `${GHPATH}/html5/lib/stylesheets/mobile-fonts/open-sans-regular.woff`,
    `${GHPATH}/html5/lib/stylesheets/mobile.min.css`,
    `${GHPATH}/index.html`,
    `${GHPATH}/meta.xml`,
    `${GHPATH}/story.html`,
    `${GHPATH}/story_content/6BUHlxpv47R.js`,
    `${GHPATH}/story_content/frame.xml`,
    `${GHPATH}/story_content/thumbnail.jpg`,
    `${GHPATH}/story_content/triggers.js`,
    `${GHPATH}/story_content/user.js`,
    `${GHPATH}/mobile/icon-512x512.png`,
    `${GHPATH}/mobile/icon-362x362.png`,
]

