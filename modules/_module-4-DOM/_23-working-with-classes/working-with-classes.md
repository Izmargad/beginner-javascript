## The DOM: Working with Classes

Another common thing we do in JavaScript is adding and removing classes.
Understanding how to work with classes in the DOM is essential if one wishes to: add, remove, toggle and check for classes on an element.

When an element is selected there is a classList.

With a lot of JS interaction, a lot of it comes down to adding and removing classes.

**The *classList:***

The classList API works very similar to jQuery’s class
manipulation functions.

```javascript
var elem = document.querySelector('#sandwich
');
// Add a class
elem.classList.add('turkey');
// Remove a class
elem.classList.remove('tuna');
// Toggle a class
// (Add the class if it's not already on the
element, remove it if it is.)
elem.classList.toggle('tomato');
// Check if an element has a specific class
if (elem.classList.contains('mayo')) {
console.log('add mayo!');
}
```

**The *className:***

You can use className to get all of the classes on an element
as a string, add a class or classes, or completely replace or
remove all classes.

```javascript
var elem = document.querySelector('div');
// Get all of the classes on an element
var elemClasses = elem.className;
// Add a class to an element
elem.className += ' vanilla-js';
// Completely replace all classes on an elem
ent
elem.className = 'new-class';
```
