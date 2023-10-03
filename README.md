# Startupz Landing Page

---

## Approach, summary

The whole webiste is built with React, split in 8 different sections (.src/sections) with 4 different single components (.src/sections/single_components)implemented in the sections.

Bootstrap has been used, specifically, bootstrap components, re-styled and changed to fit the original mockup.
Bootstrap grid and classes have been used.

Every single component, button or link has a functionality except for the mail box, it needs of course backend implementation.

The animations are a combination of css styling and single functions inside `Animations.js` exported to single sections or component.

## App

`App.js` is the entry point of the application and represents the root component.
Two sets of data (featuresData1 and featuresData2) are defined, each containing information about a set of features.
These data sets include titles, descriptions, images, and feature lists, these data sets featuresData1 and featuresData2 are passed as props to the `Features` component to display the sets of features on the webpage.

After the featuresData sets, the App component proceeds to render various sections of the webpage, providing the structure and content for the entire application.

## Navbar

The `Navbar` is the first React component,it's the navigation bar for the website.

After the main logo, there are two links to "Startups" and "Work with us!" as well as a "Contact" link that triggers a special animation handled by addBuzz.js animation.

## Herostart

The `Herostart` component is the section that serves as the main hero section for the website.
It uses animation slideUp, slideRight, slideLeft from Animation.js module and also rotate-in class to the h1 title, which is the only animation that isn't based on javascript but only on css.
All four animations start upon page load, creating a great user experience.

## Features

The `Features` component section component used to display a set of features on the webpage.
It is thought to receive data through props, allowing to customize the content and appearance of the feature section.
This component includes the title, description, image, and a set of features (in App.js) that can be dynamically generated based on the provided data. The Singlefeature component is used here to render individual features.
The .map function iterates over the features array provided in the featuresData prop.
This component is extremely customizable, moreover, consistent in its layout and scalable.

## Singlefeature

The `Singlefeature` component represents the single feature within the feature section.
It is designed to receive feature data through props, including feature number and text.
This component applies a slide-down animation effect to the features as the user scrolls down the page and the features are visible.

### Hero1

The `Hero1` is the section component that reapeats twice in the website, once with a chat assistant.
The component includes two thumbs-up images positioned on either side of the title and optionally a chat assistant.

The chat assistant is displayed or not thanks to conditional rendering.
You can control whether to display the chat assistant by passing the showChatAssistant prop in App.js.
If showChatAssistant prop is true or at least present, the chat assistant is rendered; otherwise, it remains hidden.

## Chatassistant

The `Chatassistant` component is rendered inside the first Hero1 section component.
The component includes an "X" button (close button) that users can click to hide the chat assistant.

Utilizing jQuery, the component adds an interactive behavior to the button. When clicked, it triggers an action that hides the chat assistant by applying the "hidden" CSS class to its container.

## Works

The `Works` component is a React component that serves as a section to showcase a collection of works by startupz and it's made of four cards (singlecard.js) components.

As the user scrolls down the page, the four cards appear from right and left thanks to the animations.
Each card displays client name, client description, and an image representing the project and a link to the client's website.

## Singlecard

The `Singlecard` component is a single card showing a work for a specific client, displayed in the `Works` section.

By providing the `titleColor` prop, you can easily choose which color to apply to the title.
`slide` prop makes choosing the slide direction from the parent component.

## Hero2

The `Hero2` component is the last hero on the pagehas two images on the left and right sides of the section.
The button labeled "See current openings" is directs the user to the company's job listings on LinkedIn.

## Getintouch

The `Getintouch` component provides a section for users to raise inquiries to the company by an email form.

The email form is implemented as the `Emailus` component.
The design of this section includes a background of a rocket.

## Emailus

The `Emailus` component is a thought to allow the user to send messages to the company.

The component includes several form fields, each serving a specific purpose:

"Name" and "Email" form are present, as well as a "Message" field as a text area where the user can compose their messages.
All of the fields are required, ensuring that users provide all of them when submitting the form with the button at the bottom.

## Footer

The `Footer` component contains all the company's info and gives the ability to connect with the organization on social media platforms.
Icons for Twitter, LinkedIn, and Instagram are provided, each linking to the organization's respective social media profiles.

To organize content and achieve a well-structured layout, the footer uses a grid system with bootstrap's columns and flexbox.

Buttons and social media icons are all working.
"Send us an email" link within the contact information section is interactive. When clicked, it scrolls up to "Getintouch" section and triggers a buzz animation effect on the Email form.

## Animations

In `Animation.js` there are four main animations: slideRight, slideLeft, slideUp, and slideDown, which are designed to apply animations when elements become visible in the viewport as the user scrolls down the page, or simply just when the element is visible.

The code relies is based on jQuery to select and manipulate DOM elements.

To see if the element is visible these functions use the $(window).scrollTop() and $(this).offset().top methods to calculate the position of elements and the current scroll position. If an element's position is within a specified offset from the current position, it adds the 'active' class to trigger CSS animations.

addBuzz.js function is also another animation, which adds and removes the '.buzz' class using setTimeout, to create a buzzing animation effect on a specified element.
Additionally, not in the animation.js file, there are 2 more animation, rotateIn, used for the title and hidden, which are mainly css animations.
