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


REST API 
https://social.technet.microsoft.com/wiki/contents/articles/35796.sharepoint-2013-using-rest-api-for-selecting-filtering-sorting-and-pagination-in-sharepoint-list.aspx

entry to SharePoint REST API (/_api)
https://siteCollectionUrl/_api/

Site data 

https://siteCollectionUrl/_api/site

Web (Root web)
https://siteCollectionUrl/_api/web

Get all lists 

https://siteCollectionUrl/_api/web/lists

One list by title 

https://siteCollectionUrl/_api/web/lists/getbytitle('ListName')

Example list title Customers
https://siteCollectionUrl/_api/web/lists/getbytitle('Customers')


Items in a Customers list (Default 100 items)
https://siteCollectionUrl/_api/web/lists/getbytitle('Customers')/items

More Examples

See below examples:

Filter by Title

 /_api/web/lists/getbytitle('infolist')/items?$filter= Employee eq ‘parth'

Filter by ID:  

/_api/web/lists/getbytitle('infolist')/items?$filter=ID eq 2

Filter by Date

  /_api/web/lists/getbytitle('infolist')/items?$filter=Start_x0020_Date le datetime'2016-03-26T09:59:32Z'

Multiple Filters

  /_api/web/lists/getbytitle('infolist')/items?$filter=( Modified le datetime'2016-03-26T09:59:32Z') and (ID eq 2)

Title name starts with the letter P

/_api/web/lists/getbytitle('infolist')/items?$filter=startswith(Title,‘P’)

Return all items from the'infolist'list modified in May

/_api/web/lists/getbytitle('infolist')/items? $filter=month(Modified) eq 5

 




