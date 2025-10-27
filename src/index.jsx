// src/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

// 1) jQuery first
import $ from 'jquery';
window.jQuery = window.jQuery || $;
window.$ = window.$ || $;

// 2) Then the plugin
import './assets/libs/turn.js';

// 3) Sanity check (DEV ONLY)
console.log('jQuery?', typeof window.jQuery);              // -> "function"
console.log('turn attached?', !!(window.jQuery?.fn?.turn)); // -> true

import App from './App';
createRoot(document.getElementById('root')).render(<App />);

