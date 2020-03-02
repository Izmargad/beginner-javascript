## The DOM: Element Properties and Methods

If we do `console.dir` after selecting an element then we can see that the selected element is actually an object and we can see the object properties.

    const h2 = document.querySelector('h2');
    console.dir(h2); 
    
    //Output - We get many properties

We can use these properties as either *getters or setters.*

e.g *Getter:* `console.log(h2.textContent); // I am an h2.`

*Setter:* `h2.textContent = 'new h2 content';`

**Difference between *textContent* and *innerText:***

Suppose we have the following HTML:

    <h2>
     I am a heading.
     <style>
      h2 {
       color: red;   
      }
     </style>
    </h2>

In JavaScript:

    const heading = document.querySelector('h2');
    
    console.log(heading.textContent); // I am a heading. h2 {color: red; }
    console.log(heading.innerText); // I am a heading.

Other example for above:

HTML:

    <h2>
     I am a heading.
     <span>
      I am hidden!
     </span>
    </h2>
    
    
    // We hide the span by display:none
    <style>
     h2 span {
      display: none; 
     }
    </style>

JavaScript:

    console.log(heading.textContent); // I am a heading. ↵ I am hidden!
    console.log(heading.innerText); // I am a heading.

*innerText is aware of CSS styling.*

*innerHTML:*

    console.log(heading.innerHTML); // I am a heading. ↵ <span>I am hidden!</span>

*outerHTML:*

    console.log(heading.*outerHTML*); // <h2> I am a heading. <span>I am hidden!</span> <h2>

Example:

To add pizza(🍕) at the end:

-

    pizzaList.textContent = `${pizzaList.textContent} 🍕`;

But the above method becomes slow for long text.

- Instead we can use `insertAdjacentText`:

    pizzaList.insertAdjacentText('beforeend', 🍕)

**Element vs node:**

Element: wrapped inside tags

Node: can be anything

    <p> //node //element
     "Hey" //node
     "there" //node
    </p> //node //element

**Element properties & methods:** [https://developer.mozilla.org/en-US/docs/Web/API/Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

**Node properties & methods:** [https://developer.mozilla.org/en-US/docs/Web/API/Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)
