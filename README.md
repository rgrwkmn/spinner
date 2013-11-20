#spinner
A JS character spinner for simple loading/processing indication. By default it chooses braille characters at random every 200ms. If there are any accessibility concerns with this (such as if you update the DOM with your spinner characters) please open an issue; I was not able to find any best practices concerning something like this.

If you are looking for a super small snippet version of this, check out my gist from which this developed: https://gist.github.com/rgrwkmn/6938952
 ---
 
##Dependencies
Requires jQuery for its extend function but could easily be modified to not require it. Setup for use with AMD.
 ---
##Options

###callback
A function to run for every spin. The current character is passed as an argument.
###speed
How long in milliseconds to wait between each spin.
###random
Whether or not to select a character at random or in order.
###characters
A string of characters to spin. Comes default with the full set of Braille characters which create a fun effect when chosen at random.
 ---
##Methods

###start(callback)
Start spinning immediately. If a callback is passed it will be set as the callback for each spin, otherwise it will use this.callback if set when creating the spinner.
###stop()
Stop spinning.
 ---
 
##Examples
Simple use with no options.
```javascript
var Spinner = require('spinner');

var spinner = new Spinner();
spinner.start(function(char) {
     console.log(char);
});
//...later
spinner.stop();
```
Declare callback and speed options when creating the Spinner.
```javascript
var spinner = new Spinner({
    speed: 250,
    callback: function(char) {
        console.log(char);
    }
});

spinner.start();
```

Custom characters per instance.
```javascript
var spinner = new Spinner({
    characters: '|/-\\',
    callback: function(char) {
        console.log(char);
    }
})

spinner.start();
```

Method chaining.
```javascript
var spinner = new Spinner().start(function(char) {
    console.log(char);
});
```

More than one character at a time.
```javascript
var spinner = new Spinner({
    characters: ['.', '..', '...', '....'],
    random: false,
    callback: function(chars) {
        console.log('Loading'+char);
    }
}).start();
```

Updating the DOM
```html
<span id="loading-indication">Loading</span>
```

```javascript
var loadingIndication = document.getElementById('loading-indication');
var spinner = new Spinner({
    callback: function(char) {
        loadingIndication.innerHTML('Loading '+char);
    }
}).start();
```
