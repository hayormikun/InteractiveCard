# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Interactive card details form solution](#frontend-mentor---interactive-card-details-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](screenshot.png)

### Links

- Solution URL: [InteractiveCard](https://github.com/hayormikun/InteractiveCard)
- Live Site URL: [interactive-card-tawny](https://interactive-card-tawny.vercel.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Next.js](https://nextjs.org/) - React framework
- [Tailwindcss](https://tailwindcss.com/) - Css Framework
- [React Hook Form](https://react-hook-form.com/) - Form Validation

### What I learned

While working on this project, I encountered issues with styling the input field border with linear gradient color. In order to solve this issue, i learnt how to style input field borders using the linear-gradient property. My method of solving this issue is highlighted in the code snippet below. 

```JSX
<span
              className={
                errors.cardHolder
                  ? ''
                  : 'grad h-fit active:outline-none focus:outline-none rounded-md w-[99.6%] p-0 m-0'
              }
            >
              <input
                className={
                  errors.cardHolder
                    ? 'm-[1px] p-2 w-[99.5%] rounded-md border border-redError active:border-redError focus:border-redError active:outline-none focus:outline-none'
                    : 'm-[1px] p-2 w-[99.5%] rounded-md border border-darkGrayViolet active:border-none focus:border-none active:outline-none focus:outline-none'
                }
                type="text"
                {...register('cardHolder')}
                placeholder="e.g. Jane Appleseed"
              />
```
```css
.grad:active, .grad:focus, .grad:focus-visible, .grad:focus-within {
    border: 1px solid;
    -webkit-background-image: linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%));
    -moz-background-image: linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%));
    -o-background-image: linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%));
    background-image: linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%));

    background-origin: border-box;
    background-clip: content-box, border-box;
}
```

### Continued development

I would love to focus more on web apps that are more user centric. Making interaction between users and the web apps more interesting and seamless.


### Useful resources

- [css tricks](https://css-tricks.com/css3-gradients/) - This amazing article gave me in-depth knowledge of how CSS gradients work. It had code snippet and visual respresntation of the output.
- [[React context]](https://reactjs.org/docs/context.html) - This is an amazing article to understand how the context api works in. I used the react context api to pass the user information to the card in order to display the card information in real-time. I'd recommend it to anyone who is not familiar with this concept.


## Author

- Website - [Favour Akomolafe](https://www.your-site.com)
- Frontend Mentor - [@hayormikun](https://www.frontendmentor.io/profile/hayormikun)
- Twitter - [@FavorAkomolafe](https://www.twitter.com/FavorAkomolafe)
