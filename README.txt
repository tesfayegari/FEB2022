HTML Tutorial 

Heading    h1, h2.... h6 
Paragraph  p 
Images     img requires src attibute
Dropdowns  (used mostly with Forms) select requires options 
Text Box   (used mostly with Forms) input attribute type="text"
Buttons    (used mostly with Forms) button, input type="button" 
Links      a requires href attribute for source link 
Video      video requires src also iframe videos like youtube 
Bulletted list  ul requres li (list item )
Number list     ol requres li (list item )
Table           table each row represented by tr and each cell represented by td
New line        br
Horizontal line  hr
Block and Inline elements   div for block and span for inline 


Reference: https://www.w3schools.com/tags/


Cascading style sheet or CSS 

how to use with html 

1. Inline
inside the element by using the style attribute 
example 
<div style="syles goes here"></div>

2. Internal CSS 
mostly used in the head element as style tag 
example 
<head>
........
<style>
Your style goes here 
</style

3. External css 
use link tag in the head section of the html 

<head>
<link rel="stylesheet" href="css link">

How do you write your own css 

selector {
  attrobite1: value1;
  attrobite2: value2;.....
}

selector can be any html element, can be an ID of any html element or can be a class assigned to any element

When a selector is an html element 

element {
  prop: value;...
}
example
p {color: red}

When a selector is a class attribute 
.className {prop: value; ....}

when it is an id attribute selector 
#IDName {prop: value; .....}
#mytable {width: 100;}


