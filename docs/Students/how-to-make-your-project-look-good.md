---
sidebar_position: 3
---

# Project Design Basics

## Why it matters?

You may have no design training or experience, and of course, your goal at Get Coding is not to become a designer. However, there are two important reasons why you should strive to learn the basics of good design.

1. You’ll be judged by the appearance of your projects. Even if your code is impeccable, if your project doesn’t look great, it could distract potential employers from fully appreciating your wonderful code.
2. You will work with designers. Once you score a job, it’s very likely you will be handed designs and asked to make them a reality. If you understand core design concepts, you’ll be better able to code designs, provide better feedback to designers, and ultimately make everyone’s life easier (including your own).

<figure>

![Fig 1.](/img/ui/Fig.01.png)

<figcaption>
In terms of content, these two UIs are identical (same copy, buttons, inputs, etc.). Hopefully this helps illustrate just how important design choices are. From the colors you choose, to how you lay things out, to what you choose to emphasize, it all makes an enormous difference to how usable and attractive your project will be.
</figcaption>
</figure>


## Before You Start

When beginning a project, before writing a single line of code, you should do a little research, and answer a couple important questions.

### Who Is Your Audience?

Nothing is more important than this question, and it should drive everything you do. From what platforms you develop on, to what colors you use, to how the project operates, every decision should assist in giving your target user the fastest, easiest, and best looking experience possible.

### Mobile, Desktop, or Both?

What platform would your audience want to use your application on? While some circumstances may call for a desktop only project, most often a mobile version will be required. If so, <b>BUILD THE MOBILE VERSION FIRST</b>. If you get something working within the limitations of mobile, then it should be relatively easy to get it working on desktop. It’s so much harder to adapt things when moving in the other direction, so make things easy on yourself and just don’t do it.

### Make User Testing Part of the Process

It’s critical that throughout the development of your project, you test it with people who represent your target audience. If you’re developing a children’s game, give it to children to play! If you’re building an event planning tool, let a wedding planner test it! Your target audience, and ONLY your target audience, will give you the feedback you need to make your project operate as efficiently as possible.

<b>Pro Tip:</b> Friends or family members may be reluctant to give you an honest opinion if they don’t like something about your project. When asking for feedback, if possible, tell them the work is not yours, and they’re free to give whatever feedback they want. If they know it’s your work, at least reiterate that you will not be offended if they don’t like something about it. The only feedback that can improve your work is honest feedback, so you have to be willing to hear both the good and the bad.

## Build a Solid Design Foundation

Simply put, don’t attempt to reinvent the wheel. The idea here is for you to build competent looking projects, not to be on the bleeding edge of design and interaction. Don’t worry about using canned color schemes, icon libraries, suggested font pairings, or pre-built elements. Rely on suggestions and assets from professional designers so you can focus your efforts on writing great code.

### Color

Think of your project as a brand. What color would define your brand? Is your project a utility or e-commerce app? Blue might be a good choice. Is it a children’s game? Perhaps something more playful like purple or orange. Start with a single color that makes sense for your project, and then plug that color into a color scheme generator. Choose more vibrant colors for playful apps, more muted colors for utility apps, but limit the palette to about 2-4 colors. Define what elements get what colors (i.e. one color for primary buttons, another for secondary buttons) and keep it consistent across the entire project.

<figure>

![Fig 2](/img/ui/Fig.02.png "Fig 02")

<figcaption>
Even if you’ve made solid design choices throughout your UI, a bad color scheme will ruin it all!

</figcaption>
</figure>

Additional Resources:
- <a href="https://www.canva.com/colors/color-palette-generator/"> Canva Palette Generator </a>
- <a href="https://color.adobe.com/create/color-wheel"> Adobe Color Wheel </a>
- <a href="https://m3.material.io/styles/color/overview"> Google Material Design Color System </a>

### Font

Again, what fonts make sense for your “brand”? Consult online resources and grab a font pairing. Using one bolder font for headers and titles, and a simpler font for body text usually yields the best results. But whatever you pick, make sure it’s easy to read. Even if your brand calls for something “fancy”, don’t pick anything that requires even a little extra thought to understand. It should be instantly readable to anyone.

<figure>

![Figure 3](/img/ui/Fig.03.png "Fig 03")

<figcaption>
To the left, we have a header font that takes considerable effort to read, paired with an overused font that doesn’t match the style of the header at all. To the right, we have two easy to read fonts that look visually consistent, with increased line spacing in the body that makes for even easier reading.
</figcaption>
</figure>

Additional Resources:

- Tons of free fonts available at <a href="https://fonts.google.com/">Google Fonts.</a>
- Great article with more info on fonts, and a bunch of nice font pairings <a href="https://elementor.com/blog/font-pairing/?utm_source=google&utm_medium=cpc&utm_campaign=11138809851&utm_term=&gclid=CjwKCAiA5sieBhBnEiwAR9oh2oSCAvhx0C3Z2quga63lFePzfPkr1WQI0i-KvaDWW2pvHaVEwFVMrRoChb0QAvD_BwE">here</a>.

### Buttons, Forms, & Other UI Elements

Try to stay away from gimmicks, but make sure you’re using modern methods and styles when building project elements. Need a button, dropdown, or list? Don’t build just anything. View websites and apps from top brands, or hit up design websites for inspiration on the best way to style the elements you need.

<figure>

![Figure 4](/img/ui/Fig.04.png "Fig 04")

<figcaption>
These UI elements are functionally the same, but the right examples are preferable given their modern styling.
</figcaption>
</figure>

Additional Resources:

<a href="https://www.dribbble.com"> Dribbble </a> is a great place to view sample work from designers, and get ideas on how to tackle individual UI elements, or entire screens/pages.

### Iconography

Iconography can help a user quickly find things within your UI, inform a user what something does, and inject some personality into your designs. With that said, using a hodge-podge of icon styles and sizes can make things messy, and give an impression that things were just “thrown together”. Always strive to use icons that have the same style (i.e. filled vs outlined) and same weight (i.e. thin lines vs thick lines). 


<figure>

![Figure 5](/img/ui/Fig.05a.png "Fig 05a")

<figcaption>
A collection of icons looks much cleaner and polished if the line weight, fill and style match across all icons.
</figcaption>
</figure>

Additionally, unless your icon is a universally understood symbol (i.e triangle for “Play”), you’ll almost always want to pair your icons with text to give your user context.

<figure>

![Figure 5b](/img/ui/Fig.05b.png "Fig 05b")

<figcaption>
Sometimes a feature or section cannot be easily described with a universally understood symbol. If there could be any doubt what the icon means, then be explicit and add a title.
</figcaption>
</figure>

Unless you’re able to build your own icons in applications like Adobe Photoshop or Figma, it’s best to grab icons from pre-built libraries.

Font Libraries:

- <a href="https://fonts.google.com/icons"> Google Icons </a>
- <a href="https://feathericons.com/"> Feather Icons </a>
- <a href="https://ionic.io/ionicons/"> Ionicons </a>
- <a href="https://thenounproject.com/"> The Noun Project (payment required for some things) </a>

## Core Concepts

### Hierarchy

It’s impossible for a user to focus on every element on screen at once. It’s critical to guide their eyes, allowing them to quickly scan the UI, and focus on the important things first. 

Elements like header text and primary action buttons should stand out immediately. Things like secondary actions should be more subdued, so they can be focused on when or if the user needs to.

Hierarchy can be achieved using a few different concepts, and while some of this may seem obvious, these simple ideas are often not adhered to.

<figure>

![Figure 6](/img/ui/Fig.06.png "Fig 06")

<figcaption>The example on the left doesn’t use size, weight, color, space, or alignment to guide the user's eye through the UI. As a result, a user would have no idea what to focus on, or what to do first. Conversely, the example on the right takes the eye on a journey over the import elements, and makes it clear to the user what they should do.
</figcaption>
</figure>

### Size

This is the most obvious to any user. Large text or buttons will command attention

<figure>

![Figure 7](/img/ui/Fig.07.png "Fig 07")

<figcaption>When everything is the same size, the eye doesn’t know where to go. On the right, the header, primary button, and navigation icons stick out due to their size.
</figcaption>
</figure>

### Color / Contrast

Bold colors and high levels of contrast between elements and their background will demand attention. It’s also important to use enough contrast to meet accessibility standards, so that any user will be able to see and read text within your UI.

<figure>

![Figure 8](/img/ui/Fig.08.png "Fig 08")

<figcaption>Avoid dark colors on top of dark colors, and light on top of light. When in doubt, check color choices with an accessibility test like <a href="https://webaim.org/resources/contrastchecker/">this</a>.
</figcaption>
</figure>

### Space

Space is important for two reasons. Firstly, things that are closer together will be assumed to be related. So placing things with correct proximity will help create digestible “chunks” of content.

<figure>

![Figure 9a](/img/ui/Fig.09a.png "Fig 09a")

<figcaption>On the left, one could rightfully assume that all text and buttons are related, since the content is equally spaced. However, look to the right, and you can better see how the different sections relate to one another.
</figcaption>
</figure>

Secondly, using a lot of white space gives content and elements room to breath. This again allows the user to better scan your design, but also helps create a more premium feel.

<figure>

![Figure 9b](/img/ui/Fig.09b.png "Fig 09b")

<figcaption>These two examples are identical save for the padding and margin values used. By simply adding generous amounts of white space, the UI becomes significantly easier to digest, and more aesthetically pleasing.
</figcaption>
</figure>

<b>Pro Tip:</b> Use the Google 8 Point Grid system for spacing and sizing elements. Use measurements of 2px, 4px, 8px, 16px , 24px ,32px and so on. This will a) help keep things consistent, and b) allow for quick decision making. Not sure how far to space two sections of the UI? Try 24px. Not enough? Jump to 32px. You’ll always have a clear go-to when you need to add or subtract space, instead of just trying some random number picked out of thin air.

<figure>

![Figure 10](/img/ui/Fig.10.png "Fig 10")

<figcaption>Everything in this UI is spaced at 8, 24, 32, or 48px.
</figcaption>
</figure>

### Alignment

Things that are aligned will be easier for the eye to scan and process. The more things you can have sharing visual “planes”, the cleaner your UI will appear. Because of this, left alignment of body text and other elements is often preferable. Depending on the context, a line or two of text can look nice centered, but never center a paragraph of text!

<figure>

![Figure 11](/img/ui/Fig.11.png "Fig 11")

<figcaption>When placing content, imagine lines running down the page on the edges of any element on screen. The goal is to have as few lines as possible.
</figcaption>
</figure>

### Weight

Icons, text, and other elements that have thick lines will stand out against thinner elements (i.e. bold vs regular text)

<figure>

![Figure 12](/img/ui/Fig.12.png "Fig 12")

<figcaption>
Vary the weight of text and elements in your UI to make the most important aspects stand out against secondary elements or body text.
</figcaption>
</figure>

### Consistency

When starting your project, clearly define your color scheme, fonts, spacing and styles for things like buttons, forms, etc., and then reuse those same styles throughout the entire design. Even if only on a subconscious level, users will notice things like buttons changing size or color from one screen to the next. Maintaining a consistent style throughout your design is critical to giving it a professional and polished feel.

<figure>

![Figure 13](/img/ui/Fig.13.png "Fig 13")

<figcaption>In the example on the left, we have inconsistent form styles, inconsistent use of rounded vs hard corners, inconsistent padding, etc.. While it technically still works, it lacks the polish of the right example, which uses consistent styling throughout.</figcaption>
</figure>

### Simplicity

When it comes to UI design, it’s almost always the case that less is more. On any given screen in your UI, it should be immediately obvious to the user what the primary actions are, and what the user should do. Put another way, when your user first opens your project, they should be able to easily answer these questions:

- What does it do?
- What does it want me to do?
- What do I do first?
- What happens next?

<figure>

![Figure 14](/img/ui/Fig.14.png "Fig 14")

<figcaption>It should be clear to the user what order they should do things in, and what they should do first. On the right, a large dark color button screams for attention. On the left, there are multiple buttons styled exactly the same, all calling for attention. At a glance, it’s not possible for the user to know what to do first.</figcaption>
</figure>

In order to keep things simple and straightforward, it’s often better to break a workflow over multiple screens/sections, versus packing everything together. It may seem counter intuitive, but a user will get less frustrated by multiple simple steps, versus one complicated step. Think of how your average checkout process breaks personal info, shipping info, payment info, and confirmation steps out over multiple screens, rather than cramming all of those things together.

## Core Elements

The goal of this UI/UX crash course is to give you some simple, high level concepts to help you design. However, some UI elements turn up in so many Get Coding projects that they warrant a little more detailed discussion.

### Navigation

![Figure 15](/img/ui/Fig.15.png "Fig 15")

- Put links/buttons in familiar (and in the case of mobile, easy to reach) locations
- Give links descriptive versus generic names
- Ensure navigation choices are ordered to put the most critical links first
- Ensure your navigation layouts make sense for the platform (Often you will need a different style of navigation for mobile versus desktop)

### Buttons

![Figure 16](/img/ui/Fig.16.png "Fig 16")

- Use modern styling (no gross drop shadows and gradients)
- Use consistent styling throughout entire design
- Use clear labeling (user should have no doubt what happens when they click)
- Use hierarchy (primary vs secondary buttons)

### Forms

![Figure 17](/img/ui/Fig.17.png "Fig 17")

- Use modern and consistent styling
- Titles for forms should always be visible (don’t only use text inside the form)
- Ensure your forms have default, selected, inactive, or error styles when necessary

### Tables

![Figure 18](/img/ui/Fig.18.png "Fig 18")

- Use modern styling
- Don’t draw every line. Use space, color, and weight to help chunk up data
- Use alternating shading on very long/ text heavy rows
- Only include the necessary data (does a number actually need to show 7 decimal places?)
- Left align all table contents to make it easier to scan and read

### Cards

![Figure 19](/img/ui/Fig.19.png "Fig 19")

- Effective and aesthetically pleasing way to chunk data together, especially on a greyscale or colored background.
- Use consistent styling (corner radius, padding, etc.) throughout design

## Closing Thoughts

There is so much to learn and keep up on in the realm of UI design, so if all this feels a little overwhelming, that’s understandable. It’s encouraged that as you build your project, you refer back to these design concepts to make sure you’re following good practices. 

But when in doubt, perhaps the best thing you can do to help you build efficient and beautiful projects is to look to world class apps and websites for inspiration as often as you can. Allow the work of professional designers to guide your hand in making design choices, so you can focus your efforts on writing fantastic code.

