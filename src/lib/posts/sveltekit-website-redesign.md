---
slug: 'sveltekit-website-redesign'
title: 'Building a NEW site: feat. SvelteKit v.1'
date: '2022-12-28'
categories:
  - 'sveltekit'
  - 'markdown'
coverImage: 'images/svelte-thumb.webp'
excerpt: Bae, wake up... SvelteKit v.1 just dropped. Let's build!
---

(**note**: this article is still in progress but this should serve as my first thoughts on this build process)

---

So for as long as I have been programming I have always wanted to design and build my own website and host it under **malcolmpeterson.com**, but anytime I would start I would always find myself in over my head as I would have so many ideas but not really enough time or energy to follow through with them.

## Svelte has entered the chat

Earlier this year I worked on an internal project called [Textmoji](textmoji.app) that used Svelte and found the syntax and dev experience refreshing (hot reloading is great, state management, the way Svelte handles 2 way binding is actually kind of cool, Svelte stores vs useState react, no prop drilling, etc). While working on new features and code reviews one day I found out that its big brother, Sveltekit, had just hit its official 1.0 release so I was already primed and ready to jump in. But for others who weren’t drinking the koolaid that begs the question…what is Svelte kit and why would anyone use it?

## Why SvelteKit?

So there is an article that the Svelte team wrote about what SvelteKit is and what it can do (link) but to summarize why I wanted to use it, it came down to a few things:

1. I wanted something that was fast. Svelte is a compiler so its heavy lifting is done on build and not at runtime. It only loads what you need. We are aiming for greens across the board with page insights.
2. Something that I would be simple to start to build with and deploy.
3. I needed a new blog. I wanted to use markdown files because of how simple it would potentially be.
4. I really did enjoy working in Svelte and wanted to explore a full stack framework that built ontop of it ( I dont think next is going anywhere but it doesnt hurt to tinker with something else).
5. It was new and shiny. I wanted to get my hands on something that everyone wasn’t already an expert in and figure it out for myself.

I had some time off work, and a few article with some tutorials on how to approach this. So I figured I would attempt to tackle this as a project to have done by the new year. So I was off to read some documentation.

## Humble beginnings

I started by running the **create Svelte app** cli command in the terminal and the handy startup script guides you through that process pretty smoothly. The config was pretty easy as well. I just needed preprocess (npm command) and to add the lang attribute to my style tags like: **`<style lang=“scss”></style>`** to enable SCSS and MDservX for markdown files for the blog posts (more on that later).

When attempting to design something myself, my approach is simple…start by throwing styling on the page and hope something sticks. After an hour trying (and failing) to solidify the front page layout, I ultimately decided to lean heavily on josh w (link) and matt fs (link) page as inspiration in the end I came up with this:

![first pass at front page design](images/sveltekit-redesign/screenshot.png)

My objective for the sites purpose was simple: put my personality on display through design and blog posts as well as show off some work I had been a part of. I also wanted to go a different way when ti came to color palette. I usually just go barebones white background but I accidentally typed something and it vscode suggested ‘blanched almond’ so just used it as a placeholder color but it ultimately stuck. Last thing to do was drum up a quick logo design. Once the logo, layout and the color palette were finalized it was pretty smooth sailing for me design wise.

At this time I would like to also say I am NOT a designer but I tried hard to keep the website within good practice. I even asked some design friends in a discord and made some changes based off of the feedback (so basically feel free to roast it so I can make it better). So all that was left was to start working on the website logic and hook up the blog.

## So how do we build this?

SvelteKit has a folder based directory system where all paths are dictated by folder structure instead of file structure (as it was done before it hit 1.0). It satisfied my need to have a solid and easy to read folder structure as well since. Each page has a +page.Svelte file to display data on the front end and others may have a +page.js file in order to grab data in its load function and pass it into the page to be displayed or manipulated. Pretty much one file grabs the data the other displays (for lack of better phrasing). That leaves each route’s layout.Svelte file. This file is just that, the layout for all the files in that route and you can see there is a slot element in there as well. This is where your dynamic pages load utilizing the shared layout.

Passing down props is pretty simple as well as you declare them in the script element at the top of the page and then pass them accordingly. However, if the data you need can only be loaded on the server (like for example querying a database or using a secret key), you can name it +page.server.js instead. Both would do the same thing, however the naming difference makes it much easier on a quick glance to identify what runs where.

## Markdown files… in SvelteKit?

There was one problem I ran into while working through this and it was that markdown wasn’t natively supported and thats where MDserX comes in. With this you use md files but you can do things like leverage custom components within them as well. So for instance, I am working an a post and I want to have a info-block component. I can just make that component like I normally would and then import it just like I would anywhere else in the application. Also I wanted to make a "Featured" blog post appear at the top of the blog's front page, so in order to do this I just simply added a metadata tag that has the value of a boolean and if it is true (in this case I just named it "Featured") then it will render it with the custom featured-post component I made. 

## Back End stuff

One cool thing about Sveltekit is it also lets you build an API of sorts that leverages your route endpoints (that you add directly into the route folder). I thought this would be pretty cool as well because in the future I may want to use a tagging system and being able to display all posts related to specific tag would be helpful as the blog grows. In the interim I leaned heavily on the tutorial at matt f(link) to handle a custom url route purely for cosmetic reasons.

## Wrapping Up

Ok so I was a little impatient with the time constraints (I heavily neglected my wife and dog throughout this process so im owing them some quality time for sure) and because of this the code (mostly styling) could use some cleaning, and I plan on ripping out any of the javascript that I was using in order to mock up components to style BUT I am pretty proud of the outcome. Not bad for a 2 1/2 days work.

### [But can you pet the dog?!](https://twitter.com/CanYouPetTheDog?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)

I also snuck in a cheek little easter egg where you can pet dog.First I just have a hover style that changes the opacity of one image so that you can see the other and also there are a set of functions that calculates how long you “pet” Lupin for. It introduces client side javascript but I think it’s worth it in the end.

![easter egg demo](images/sveltekit-redesign/easter-egg.gif)

## Next up:

I am planning on cleaning up the code, and making a branch strictly for those who just want a template for a Sveltekit app complete with comments and a good readme to provide guidance and insight. I have already started working on the documentation and hopefully that will be up sooner rather than later. In the meantime feel free to open up pull requests on this post or the page in itself if you see something that needs correcting (fully open to criticism), or maybe you want to just use my page as a starting off point now rather than later? This is all free to use, go crazy!

## Would I do it all again?

Yea! I think Svelte / Sveltekit is pretty smooth and ultimately it was the most fun I have had while working on a personal project in awhile. I would suggest anyone who is curious about it to give it a chance.
