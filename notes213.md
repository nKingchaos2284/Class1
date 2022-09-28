
# Codefellows Project 201

Storing information locally on a user’s computer is a powerful strategy for a developer who is creating something for the Web. In this article, we’ll look at how easy it is to store information on a computer to read later and explain what you can use that for.
Storing information locally on a user’s computer is a powerful strategy for a developer who is creating something for the Web. In this article, we’ll look at how easy it is to store information on a computer to read later and explain what you can use that for.

Adding State To The Web: The “Why” Of Local Storage #
The main problem with HTTP as the main transport layer of the Web is that it is stateless. This means that when you use an application and then close it, its state will be reset the next time you open it. If you close an application on your desktop and re-open it, its most recent state is restored.

More after jump! Continue reading below ↓
Web forms are at the center of every meaningful interaction, so they’re worth getting a firm handle on. Meet Adam Silver’s Form Design Patterns, a practical guide to designing and building forms for the web.

Jump to table of contents ↬
Feature Panel
This is why, as a developer, you need to store the state of your interface somewhere. Normally, this is done server-side, and you would check the user name to know which state to revert to. But what if you don’t want to force people to sign up?

This is where local storage comes in. You would keep a key on the user’s computer and read it out when the user returns.

C Is For Cookie. Is That Good Enough For Me? #
The classic way to do this is by using a cookie. A cookie is a text file hosted on the user’s computer and connected to the domain that your website runs on. You can store information in them, read them out and delete them. Cookies have a few limitations though:

They add to the load of every document accessed on the domain.
They allow up to only 4 KB of data storage.
Because cookies have been used to spy on people’s surfing behavior, security-conscious people and companies turn them off or request to be asked every time whether a cookie should be set.
To work around the issue of local storage — with cookies being a rather dated solution to the problem — the WHATWG and W3C came up with a few local storage specs, which were originally a part of HTML5 but then put aside because HTML5 was already big enough.