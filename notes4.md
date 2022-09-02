
### Class 4 HTML and wireframing ###

Wireframing is a lay out of the structure of the website

   - it can be achieved by...
      1. digitally
      2. manually
      So what is HTML?
HTML is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on. For example, take the following line of content:

My cat is very grumpy
If we wanted the line to stand by itself, we could specify that it is a paragraph by enclosing it in paragraph tags:

<p>My cat is very grumpy</p>
Copy to Clipboard
Anatomy of an HTML element
Let's explore this paragraph element a bit further.

paragraph element including opening tag, content reading 'my cat is very grumpy', and a closing tag
The main parts of our element are as follows:

The opening tag: This consists of the name of the element (in this case, p), wrapped in opening and closing angle brackets. This states where the element begins or starts to take effect — in this case where the paragraph begins.
The closing tag: This is the same as the opening tag, except that it includes a forward slash before the element name. This states where the element ends — in this case where the paragraph ends. Failing to add a closing tag is one of the standard beginner errors and can lead to strange results.
The content: This is the content of the element, which in this case, is just text.
The element: The opening tag, the closing tag, and the content together comprise the element.
Elements can also have attributes that look like the following:

Paragraph opening tag with a class attribute highlighted: class=editor-note
Attributes contain extra information about the element that you don't want to appear in the actual content. Here, class is the attribute name and editor-note is the attribute value. The class attribute allows you to give the element a non-unique identifier that can be used to target it (and any other elements with the same class value) with style information and other things.
      
<!DOCTYPE html>
<html>
<head>
	<title>Fruit</title>
</head>
<body>
	<h1>Favorite Fruit</h1>
	<ul>
		<li>Bananas</li>
		<li>Oranges</li>
	</ul>
</body>
</html>

In the above example, I've created an HTML list and added our fruit to it.

The list is specified using the <ul> tag and each list item is nested inside using the <li> tag.

The <ul> element represents an unordered list. This is because the items are listed in no particular order. This results in identical bullet points being prefixed to each item in the list.


### [Main/Table of Contents](https://nkingchaos2284.github.io/reading-notes/)
