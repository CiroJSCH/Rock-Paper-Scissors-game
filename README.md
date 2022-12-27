# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_

### Screenshot

![desktop design](https://i.postimg.cc/7YCLQgtY/Captura-de-pantalla-2022-12-27-141212.png)
![mobile design](https://i.postimg.cc/TPvhbp92/Captura-de-pantalla-2022-12-27-141327.png)
![mobile design](https://i.postimg.cc/05XQftfB/Captura-de-pantalla-2022-12-27-141433.png)

### Links

- [Solution URL](https://github.com/CiroJSCH/Rock-Paper-Scissors-game)
- [Live Site URL](https://cirojsch.github.io/Rock-Paper-Scissors-game/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Frontend tool

### What I learned

How to make a modal window using React

```jsx
const Modal = ({isOpen, setIsOpen}) => {

  if (!isOpen) return null;
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <h2>RULES</h2>
        <img src={rules} alt="Rules" className="modal__rules"/>
        <img src={close} alt="Close button" onClick={() => setIsOpen(false)} className="modal__close"/>
      </div>
    </>
  )
}
```

### Useful resources

- [Resource 1](https://steemit.com/hive-133716/@jfdesousa7/learn-how-to-create-a-modal-popup-with-reactjs-aprende-a-crear-un-modal-popup-con-reactjs) - How to create a modal with React.JS

## Author ✒

Proyecto desarrollado por **Ciro Schapert**

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ciro-schapert-557813238/)
