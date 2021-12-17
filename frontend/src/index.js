import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {PageListsMenu, PageList} from "./components"

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  <Router>
    <Routes>
      <Route path="/" element={<PageListsMenu/>}/>
      <Route path="/list">
        <Route path="" element={<PageList />} />
      </Route>
    </Routes>
  </Router>,

  document.getElementById('root')
);

// Dark Mode Switcher
const darkModeSwitch = document.querySelector('#dark-mode-switch');
darkModeSwitch.addEventListener('change', () => {
  if (darkModeSwitch.checked) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

// Drag Drop Tasks & Collections
const collectionContainer = document.querySelector('.taskgroup-container');
const collections = document.querySelectorAll('.taskgroup-card');
const taskContainers = document.querySelectorAll('.task-container');
const tasks = document.querySelectorAll('.task-card');

collections.forEach(card => {
  card.addEventListener('dragstart', e => {
    e.stopPropagation();
    console.log("Dragging " + card.id);
    card.classList.add('dragging','opacity-80');
  })
  card.addEventListener('dragend', e => {
    e.stopPropagation();
    card.classList.remove('dragging', 'opacity-80');
  })
  card.addEventListener('dragover', e => {
    e.preventDefault()
    e.stopPropagation();
    if (!card.classList.contains('dragging')) {
      const draggingCard = document.querySelector('.dragging');
      if (draggingCard !== null && draggingCard.classList.contains('collection-card')) {
        //console.log("Dragging over " + card.id + " " + card.previousSibling);
        if (card.previousSibling === undefined || card.previousSibling === null) {
          collectionContainer.insertBefore(draggingCard, card);
        } else {
          collectionContainer.insertBefore(draggingCard, card.nextSibling);
        }
      }
    }
  })
})

tasks.forEach(card => {
  card.addEventListener('dragstart', e => {
    e.stopPropagation();
    card.classList.add('task-dragging','opacity-80');
    console.log("Current parent of task " + card.id + ": " + card.parentNode.parentNode.parentNode.id)
  })
  card.addEventListener('dragend', e => {
    e.stopPropagation();
    card.classList.remove('task-dragging', 'opacity-80');
    console.log("Dropped parent of task " + card.id + ": " + card.parentNode.parentNode.parentNode.id)
  })
})

taskContainers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    e.stopPropagation();
    const draggingCard = document.querySelector('.task-dragging')
    if (draggingCard !== null && draggingCard.classList.contains('task-card')) {
      const afterElement = getDragAfterElement(container, e.clientY)
      if (afterElement == null) {
        container.appendChild(draggingCard)
      } else {
        container.insertBefore(draggingCard, afterElement)
      }
    }
  })
})

function getDragAfterElement(container, y) {
  const otherTaskCards = [...container.querySelectorAll('.task-card:not(.task-dragging)')]

  return otherTaskCards.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

const labelChecks = document.querySelectorAll('.label-check')
labelChecks.forEach(label => {
  label.addEventListener('click', () => {
    if (label.classList.contains('active')) {
      label.classList.remove('active', 'bg-blue-400')
    } else {
      label.classList.add('active', 'bg-blue-400')
    }
  })
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
