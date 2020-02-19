## The DOM: Selecting elements on the page

**Where to load JavaScript if we are selecting elements on the page?**

Always load it before the closing *body* tag (`</body>`). It is because, we need to have all elements before we start selecting them in JavaScript. We get `null` if we try to grab elements placing the `<script>` tag in the *head* because the elements are not yet created when the JavaScript is run.

*Other option: (to use in `<head>` tag)*

- use defer and async
- we can listen for the `DOMContentLoaded` event and then try to select elements from the page.

*Best way:* Load the JS before the `</body>` tag.

- **querySelector:** Returns first match

        const p = document.querySelector('p');

- **querySelectorAll:** Returns all matches as a *NodeList (like array but without array helper functions)*

        const p = document.querySelectorAll('p');

In **querySelector and querySelectorAll,** the argument we pass is nearly similar to CSS Selectors.

We can use things like:

- `.item` (element with class of item) or `div.item` (div with class of item) etc.
- **Parent-child selector:** *e.g. to grab images inside div with class item*

    `const img = document.querySelector('.item img');`

    <div class="items">
    	<div class="item item1">
    		<img src="http://img1.com" >
    	</div>
    	<div class="item">
    		<img src="http://img2.link" >
    	</div>
    </div>
    

In above HTML, suppose if we want just the first item and find the image inside of the item.

We have 2 options:

1. `document.querySelector('item img');`
2. 

    const item1 = document.querySelector('.item1');
    const item1Img = item1.querySelector(img); //important

*Note:* We also have dated/old ways of selecting elements from DOM like `getElementById`, `getElementsByClassName`, `getElementsByTagName` etc.