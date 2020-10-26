
### ABOUT

Created by Netscape in 1995 as an extension of HTML for Netscape Navigator 2.0, JavaScript had as its main function the manipulation of HTML documents and form validation. Before winning this name so famous nowadays, JavaScript was called Mocha. When it first shipped in beta releases, it was officially called LiveScript and finally, when it was released by Sun Microsystems, was baptized with the name by which it is known today. Because of the similar names, people confuse JavaScript with Java. Although both have the lexical structure of programming, they are not the same language. Different from C, C# and Java, JavaScript is an interpreted language. It means that it needs an "interpreter". In case of JavaScript, the interpreter is the browser.

### CURRENT VERSION

The JavaScript standard is ECMAScript. As of 2012, all modern browsers fully support ECMAScript 5.1. Older browsers support at least ECMAScript 3. As of June 2015 the spec for ES6/ES2015 has been approved. Following the new annual release cycle, ES7/ES2016 has been adopted in June 2016. See the ECMAScript 2016 Language Specification at [Ecma International](http://www.ecma-international.org/ecma-262/7.0/index.html).

A good reference to versions, references and news about JavaScript can be found at the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/JavaScript).

### THE DOM

The Document Object Model (DOM) is an API for HTML and XML documents. It provides a structural representation of the document, enabling you to modify its content and visual presentation by using a scripting language such as JavaScript. See more at [Mozilla Developer Network - DOM](https://developer.mozilla.org/en-US/docs/DOM).

### Conventions

As every language, JavaScript has many code style guides. Maybe the most used and recommended is the [Google Code Style Guide for JavaScript](https://google.github.io/styleguide/javascriptguide.xml), but we recommend you read [Idiomatic.js](https://github.com/rwldrn/idiomatic.js/).

### Linting

Nowadays the best tool for linting your JavaScript code is [JSHint](http://www.jshint.com/). We recommend that whenever possible you verify your code style and patterns with a Lint tool.

### Object Oriented

JavaScript has strong object-oriented programming capabilities, even though some debates have taken place due to the differences in object-oriented JavaScript compared to other languages.

Source: [Introduction to Object-Oriented JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)

### Anonymous Functions

Anonymous functions are functions that are dynamically declared at runtime. They're called anonymous functions because they aren't given a name in the same way as normal functions.

Source: [JavaScript anonymous functions](http://helephant.com/2008/08/23/javascript-anonymous-functions/)

### Functions as First-class Objects

Functions in JavaScript are first class objects. This means that JavaScript functions are just a special type of object that can do all the things that regular objects can do.

Source: [Functions are first class objects in JavaScript](http://helephant.com/2008/08/19/functions-are-first-class-objects-in-javascript/)

### Loose Typing

For many front-end developers, JavaScript was their first taste of a scripting and/or interpretive language. To these developers, the concept and implications of loosely typed variables may be second nature. However, the explosive growth in demand for modern web applications has resulted in a growing number of back-end developers that have had to dip their feet into the pool of client-side technologies. Many of these developers are coming from a background of strongly typed languages, such as C# or Java, and are unfamiliar with both the freedom and the potential pitfalls involved in working with loosely typed variables.

Source: [Understanding Loose Typing in JavaScript](http://blog.jeremymartin.name/2008/03/understanding-loose-typing-in.html)

### Scoping and Hoisting

**Scoping:** In JavaScript, functions are our _de facto_ scope delimiters for declaring vars, which means that usual blocks from loops and conditionals (such as if, for, while, switch and try) DON'T delimit scope, unlike most other languages. Therefore, those blocks will share the same scope as the function which contains them. This way, it might be dangerous to declare vars inside blocks as it would seem the var belongs to that block only.

**Hoisting:** On runtime, all var and function declarations are moved to the beginning of each function (its scope) - this is known as Hoisting. Having said so, it is a good practice to declare all the vars altogether on the first line, in order to avoid false expectations with a var that got declared late but happened to hold a value before - this is a common problem for programmers coming from languages with block scope.

Source: [JavaScript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)

### Function Binding

Function binding is most probably the least of your concerns when beginning with JavaScript, but when you realize that you need a solution to the problem of how to keep the context of this within another function, then you might realize that what you actually need is **Function.prototype.bind()**.

Source: [Understanding JavaScript's Function.prototype.bind](http://coding.smashingmagazine.com/2014/01/23/understanding-javascript-function-prototype-bind/)

### Closure Function

Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created in. It is an important concept to understand as it can be useful during development, like emulating private methods. It can also help to learn how to avoid common mistakes, like creating closures in loops.

Source: [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures/)

### Strict mode

ECMAScript 5's strict mode is a way to opt in to a restricted variant of JavaScript. Strict mode isn't just a subset: it intentionally has different semantics from normal code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.

Source: [MDN - Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode/)

### Immediately-Invoked Function Expression (IIFE)

An immediately-invoked function expression is a pattern which produces a lexical scope using JavaScript's function scoping. Immediately-invoked function expressions can be used to avoid variable hoisting from within blocks, protect against polluting the global environment and simultaneously allow public access to methods while retaining privacy for variables defined within the function.

_This pattern has been referred to as a self-executing anonymous function, but [@cowboy](http://twitter.com/cowboy) (Ben Alman) introduced the term IIFE as a more semantically accurate term for the pattern_.

Source: [Immediately-Invoked Function Expression (IIFE)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)

##### Arindam Paul - JavaScript VM internals, EventLoop, Async and ScopeChains

### GENERAL PURPOSE

*   [jQuery](http://jquery.com/)

jQuery is a fast, small, and feature-rich JavaScript library. Built by [John Resig](https://twitter.com/jeresig).

*   [YUI](http://yuilibrary.com/)

Built by Yahoo!, YUI is a free, open source JavaScript and CSS library for building richly interactive web applications. [New development has stopped since August 29th, 2014](http://yahooeng.tumblr.com/).

*   [ZeptoJS](http://zeptojs.com/)

Zepto is a minimalist JavaScript library for modern browsers with a largely jQuery-compatible API. If you use jQuery, you already know how to use Zepto.

*   [Dojo Toolkit](http://dojotoolkit.org/)

Dojo is a free, open-source JavaScript toolkit for building high performance web applications. Project sponsors include IBM and SitePen.

*   [Underscore.js](http://underscorejs.org/)

Underscore.js is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects.

### MV\*

*   [Backbone.js](http://backbonejs.org/)

Very popular JavaScript client-side framework, built by [@jashkenas](http://twitter.com/jashkenas).

*   [Ember.js](http://emberjs.com/)

Built by [@wycats](http://twitter.com/wycats), jQuery and Ruby on Rails core developer.

*   [Knockout.js](http://knockoutjs.com/)

Simplify dynamic JavaScript UIs by applying the Model-View-View Model (MVVM).

*   [Angular.js](http://angularjs.org/)

Built by Google, Angular.js is like a polyfill for the future of HTML.

*   [Angular](https://angular.io/)

One framework.Mobile & desktop. One way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.

*   [Cappuccino](http://cappuccino.org/)

Cappuccino is an open-source framework that makes it easy to build desktop-caliber applications that run in a web browser.

*   [JavaScript MVC](http://javascriptmvc.com/)

JavaScriptMVC is an open-source framework containing the best ideas in jQuery development.

*   [Meteor](https://www.meteor.com/)

Meteor is an open-source platform for building top-quality web apps in a fraction of the time, whether you're an expert developer or just getting started.

*   [Spice.js](http://spicejs.github.io/spicejs/)

Spice is a super minimal (< 3k) and flexible MVC framework for javascript. Spice was built to be easily added to any existent application and play well with other technologies such as jQuery, pjax, turbolinks, node or whatever else you are using.

*   [Riot.js](http://www.riotjs.com/)

Riot is an incredibly fast, powerful yet tiny client side (MV\*) library for building large scale web applications. Despite the small size all the building blocks are there: a template engine, router, event library and a strict MVP pattern to keep things organized.

*   [CanJS](http://canjs.com/)

CanJS is a JavaScript framework that makes developing complex applications simple and fast. Easy-to-learn, small, and unassuming of your application structure, but with modern features like custom tags and 2-way binding.

### Library

*   [React](http://facebook.github.io/react)

Built by Facebook. React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC.

*   [Vue.js](http://www.vuejs.org/)

Is an MVVM library providing two-way data binding, HTML extended behaviour (through directives) and reactive components. By using native add-ons a developer can also have routing, AJAX, a Flux-like state management, form validation and more. Provides a helpful Chrome extension to inspect components built with Vue.

*   [Handlebars](http://handlebarsjs.com/)

Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.

*   [Dust.js](http://linkedin.github.io/dustjs)

Asynchronous templates for the browser and node.js.

### Animation

*   [GSAP](http://greensock.com/)

GSAP is the fastest full-featured scripted animation tool on the planet. It's even faster than CSS3 animations and transitions in many cases.

*   [Velocity.js](http://julian.com/research/velocity/)

Velocity is an animation engine with the same API as jQuery's $.animate().

*   [Bounce.js](http://bouncejs.com/)

Bounce.js is a tool and JS library that lets you create beautiful CSS3 powered animations.

*   [TweenJS](http://www.createjs.com/tweenjs)

A simple but powerful JavaScript library for tweening and animating HTML5 and JavaScript properties.

*   [Move.js](http://visionmedia.github.io/move.js/)

Move.js is a small JavaScript library making CSS3 backed animation extremely simple and elegant.

*   [Snap.svg](http://snapsvg.io/)

SVG is an excellent way to create interactive, resolution-independent vector graphics that will look great on any size screen.

*   [Rekapi](http://rekapi.com/)

Rekapi is a library for making canvas and DOM animations with JavaScript, as well as CSS @keyframe animations for modern browsers.

*   [Favico.js](http://lab.ejci.net/favico.js/)

Make use of your favicon with badges, images or videos.

*   [Textillate.js](http://jschr.github.io/textillate/)

Textillate.js combines some awesome libraries to provide a ease-to-use plugin for applying CSS3 animations to any text.

*   [Motio](http://darsa.in/motio/)

Motio is a small JavaScript library for simple but powerful sprite based animations and panning.

*   [Anima.js](http://lvivski.com/anima/)

With Anima it's easy to animate over a hundred objects at a time. Each item can have it's mass and viscosity to emulate reallife objects!

  

*   [MelonJS](http://melonjs.org/)

MelonJS is a free, light-weight HTML5 game engine. The engine integrates the tiled map format making level design easier.

*   [ImpactJS](http://impactjs.com/)

ImpactJS is one of the more tested-and-true HTML5 game engines with the initial release all the way back at the end of 2010. It is very well maintained and updated, and has a good-sized community backing it. There exists plenty of documentation - even two books on the subject of creating games with the engine.

*   [LimeJS](http://limejs.com/)

LimeJS is a HTML5 game framework for building fast, native-experience games for all modern touchscreens and desktop browsers.

*   [Crafty](http://craftyjs.com/)

Crafty is a game engine that dates back to late 2010. Crafty makes it really easy to get started making JavaScript games.

*   [Cocos2d-HTML5](http://www.cocos2d-x.org/wiki/Cocos2d-html5)

Cocos2d-html5 is an open-source web 2D game framework, released under MIT License. It is a HTML5 version of Cocos2d-x project. The focus for Cocos2d-html5 development is around making Cocos2d cross platforms between browsers and native application.

*   [Phaser](http://phaser.io/)

Phaser is based heavily on [Flixel](http://www.flixel.org/). It is maintained by Richard Davey ([Photon Storm](http://www.photonstorm.com/)) who has been very active in the HTML5 community for years.

*   [Goo](http://www.goocreate.com/learn)

Goo is a 3D JavaScript gaming engine entirely built on WebGL/HTML5

*   [LycheeJS](http://lycheejs.org/)

LycheeJS is a JavaScript Game library that offers a complete solution for prototyping and deployment of HTML5 Canvas, WebGL or native OpenGL(ES) based games inside the Web Browser or native environments.

*   [Quintus](http://html5quintus.com/)

Quintus is an HTML5 game engine designed to be modular and lightweight, with a concise JavaScript-friendly syntax.

*   [KiwiJS](http://www.kiwijs.org/)

Kiwi.js is a fun and friendly Open Source HTML5 Game Engine. Some people call it the WordPress of HTML5 game engines

*   [PandaJS](http://www.pandajs.net/)

Panda.js is a HTML5 game engine for mobile and desktop with Canvas and WebGL rendering.

*   [Rot.js](https://github.com/ondras/rot.js)

Rot.js is a set of JavaScript libraries, designed to help with a roguelike development in browser environment.

*   [Isogenic](http://www.isogenicengine.com/)

Isogenic is an advanced game engine that provides the most advanced networking and realtime multiplayer functionality available in any HTML 5 game engine. The system is based on entity streaming and includes powerful simulation options and client-side entity interpolation from delta updates.

*   [WhitestormJS](https://github.com/WhitestormJS/whitestorm.js)

Super-fast 3D framework for Web Applications & Games. Based on Three.js. Includes integrated physics support and ReactJS integration.


[Source](https://jstherightway.org/#patterns)
