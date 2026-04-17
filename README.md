# Lab: Task Manager

## Overview
A Task Manager application built with React that allows users to add, complete, and search tasks. Demonstrates the use of `useRef`, `useId`, and `useContext` hooks.

## Setup

1. Fork and clone this repo
2. Run `npm install`
3. Run `npm run server` to start the backend at `http://localhost:6001`
4. In another terminal, run `npm run dev` to start the app at `http://localhost:5173`
5. Run `npm run test` to run the test suite

## Features

- **View all tasks** — tasks are fetched from the backend and displayed on page load via `useContext`
- **Add a new task** — fill out the form and click Add Task to POST a new task to the backend; `useId` is used for accessible label/input linking
- **Mark as complete** — click Complete on any task to PATCH it on the backend and toggle its completed state; click Undo to reverse
- **Search tasks** — type in the search bar to filter tasks by title in real time using `useRef`

## Hooks Used

- `useContext` — global state management via `TaskProvider` and `TaskContext`
- `useId` — generates unique IDs for accessible form inputs
- `useRef` — persists a reference to the search input without causing re-renders

## Component Structure

- `main.jsx` — wraps `App` in `TaskProvider`
- `TaskContext.jsx` — provides `tasks`, `addTask`, and `toggleComplete` to the component tree
- `App` — renders `TaskForm` and `SearchBar`
- `TaskForm` — controlled form that calls `addTask` on submit
- `SearchBar` — search input using `useRef`, renders `TaskList` with filtered query
- `TaskList` — consumes context, filters tasks by query, renders task items with toggle button

## Technologies

- React
- Vite
- JSON Server