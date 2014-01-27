/**
 * Oggy

 *  ##### Default iterators and functions
 *
 *  Numerous methods in Oggy objects (most notably the [[Enumerable]]
 *  module) let the user pass in a custom iterator, but make it optional by
 *  defaulting to an "identity function" (an iterator that just returns its
 *  argument, untouched). This is the [[Oggy.K]] function, which you'll
 *  see referred to in many places.
 *
 *  Many methods also take it easy by protecting themselves against missing
 *  methods here and there, reverting to empty functions when a supposedly
 *  available method is missing. Such a function simply ignores its potential
 *  arguments, and does nothing whatsoever (which is, oddly enough,
 *  blazing fast). The quintessential empty function sits, unsurprisingly,
 *  at [[Oggy.emptyFunction]] (note the lowercase first letter).
**/
var Oggy;
//@todo remove prototype
var Prototype = Oggy= {

  Version: '0.1',

  ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script\\s*>',
  JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,

  /**
   *  Oggy.emptyFunction([argument...]) -> undefined
   *  - argument (Object): Optional arguments
   *
   *  The [[Oggy.emptyFunction]] does nothing... and returns nothing!
   *
   *  It is used thoughout the framework to provide a fallback function in order
   *  to cut down on conditionals. Typically you'll find it as a default value
   *  for optional callback functions.
  **/
  emptyFunction: function() { },

  /**
   *  Oggy.K(argument) -> argument
   *  - argument (Object): Optional argument...
   *
   *  [[Oggy.K]] is Oggy's very own
   *  [identity function](http://en.wikipedia.org/wiki/Identity_function), i.e.
   *  it returns its `argument` untouched.
   *
   *  This is used throughout the framework, most notably in the [[Enumerable]]
   *  module as a default value for iterators.
   *
   *  ##### Examples
   *
   *      Oggy.K('hello world!');
   *      // -> 'hello world!'
   *
   *      Oggy.K(200);
   *      // -> 200
   *
   *      Oggy.K(Oggy.K);
   *      // -> Oggy.K
  **/
  K: function(x) { return x }
};
