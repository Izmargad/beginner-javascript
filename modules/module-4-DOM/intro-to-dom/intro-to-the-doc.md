## The DOM: Intro to the document

JavaScript is used in all kinds of places. The most popular way we get introduced to JS is through web browser.

When we view HTML in the browser, the browser turns the HTML into the DOM: Document Object Model. We can see the DOM in the Elements tab in Dev Tools.

We can interact with the DOM like listening for clicks, add/remove elements from the DOM, fetch new data, play music and video etc. using JavaScript.

**The *window:***

- Global scope of browser
- All global variables are stored.
- Helpful properties like `location, innerWidth` present on *window* object.
- It is everything about the currently open window including the browser bar, tabs, scrollbars etc.

**The *document:***

- Responsible for everything from `<html>` to `</html>`
- Not concerned with tabs, scrollbar, browser bar etc.

**The *navigator:***

- Higher level than window.
- gives info about the browser and the device that it's on
- things like webcam, audio access, battery level, GPS and other device specific features live on navigator.
