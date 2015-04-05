# ftween.js 

A fork of Soledad Penadés' tween.js library : https://github.com/tweenjs/tween.js
 
**JavaScript tweening engine for easy animations**  

Super simple, fast and easy to use tweening engine which incorporates optimised Robert Penner's equations.

## Changes from the original tween.js

`ftween.js` has been created to power the `fTween` plugin for [Superpowers, the extensible HTML5 2D+3D game engine](http://sparklinlabs.com).  

The following functionalities have been added:

- In addition to numbers, the tweened properties in the `from` object may be objects that contain numbers (typically like `Vector3`), .

- Similarly, the properties' values inside such nested object in the `to` object may be numbers, strings or arrays.

- The properties in the `to` object may be dynamic. It means that their name may match the name of a couple of getter/setter functions (on the `from` object) which name begins by "get" or "set" and have the fourth letter uppercase. Ie: the `position` property will call the `getPosition()` and `setPosition()` functions.

- Relative tween: passing `true` to the `isRelative()` function (default is `false`) will consider number values in the `to` object as relative (in addition to string values that are always considered relative).

- Pause/resume a tween: `pause()`, `onPause( fn )`, `resume()`, `onResume( fn )`, `isPaused()` (returns the paused state).

- `duration()` function. The duration can still be passed as the second argument of `to()`.

- `onLoopComplete()` function and callback. The callback is called every times the tween completes while `repeat >= 1`, passing the number of repeats left as first argument.

```javascript
	var MyObject = function( position ) {
		var _position = position || { x:0, y:0, z:0 };

		this.getPosition = function() {
			return _position;
		};
		this.setPosition = function( position ) {
			_position = position;
		};
	};

	var myInstance = new MyObject( { x:-5, y:-5, z:-5 } );

	var tween = new FTWEEN.Tween( myInstance )
	.to( { position: { x: 10, y: 5 } } )
	.isRelative( true )
	.duration( 5000 )
	.onUpdate( function() {
		console.log( "New position is: ", this.getPosition() );
	} )
	.start();

	// This will tween the position from {-5,-5,-5} to {5,0,-5}.
```

Otherwise, ftween.js works exactly like the original tween.js, so be sure to [check its readme](https://github.com/tweenjs/tween.js/blob/master/README.md) (with many examples) and [its user guide](https://github.com/tweenjs/tween.js/blob/master/docs/user_guide.md).

## Installation

From npm: 

	npm install ftween.js

Then from your code: 

	var FTWEEN = require("ftween.js");

Or get the development and minified files from the `src` and `build` folder.
