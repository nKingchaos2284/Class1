
# Codefellows Project 201

## notes 07

What is the DOM?
The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.

For example, the DOM specifies that the querySelectorAll method in this code snippet must return a list of all the DOM


## CSS Table
Table styling
You can also have a look at the live example on GitHub! One thing you'll notice is that the table does look a bit more readable there — this is because the table you see above on this page has minimal styling, whereas the GitHub version has more significant CSS applied.

Be under no illusion; for tables to be effective on the web, you need to provide some styling information with CSS, as well as good solid structure with HTML. In this module we are focusing on the HTML part; to find out about the CSS part you should visit our Styling tables article after you've finished here.

We won't focus on CSS in this module, but we have provided a minimal CSS stylesheet for you to use that will make your tables more readable than the default you get without any styling. You can find the stylesheet here, and you can also find an HTML template that applies the stylesheet — these together will give you a good starting point for experimenting with HTML tables.

When should you NOT use HTML tables?
HTML tables should be used for tabular data — this is what they are designed for. Unfortunately, a lot of people used to use HTML tables to lay out web pages, e.g. one row to contain the header, one row to contain the content columns, one row to contain the footer, etc. You can find more details and an example at Page Layouts in our Accessibility Learning Module. This was commonly used because CSS support across browsers used to be terrible; table layouts are much less common nowadays, but you might still see them in some corners of the web.