# Getting Started with Create React App

### 1. React oluşturuldu : npx create-react-app breakingbadapp

### 2. Router ve Redux Kuruldu: yarn add react-router-dom @reduxjs/toolkit react-redux

### 3. Router için Provider ayarlandı: import { BrowserRouter as Router, Route } from 'react-router-dom' -> <

### 4. Redux toolkit içerisinde bir store olusturuldu. Store'da reducerler eklendi.

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
