(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";!function(){function i(i){var t=$("div#timeline_container li"),a=$(i);t.removeClass("active"),a.addClass("active"),o.stop().animate({scrollTop:a.offset().top-a.height()},e,o.stop)}function t(i){var t=$("div#timeline_container li"),n=t.index($("div#timeline_container li.active"))+i,s=void 0,c=$(t[n]),l=t.length;n>0&&n<l&&!c.hasClass("hidden")?(t.removeClass("active"),c.addClass("active"),o.stop().animate({scrollTop:c.offset().top-c.height()},e)):(t.removeClass("active"),s=n<0?l-1:0,$(t[s]).addClass("active"),0===s?o.stop().animate({scrollTop:0},e):o.stop().animate({scrollTop:a.height()},e))}var e=300,o=$("html,body"),a=$(document);a.on("keydown",function(i){40===i.which?t(1):38===i.which&&t(-1)}),$("div#timeline_container").on("click","li",function(){i($(this))})}();

},{}]},{},[1]);