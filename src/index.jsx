import React from 'react';
import { createRoot } from 'react-dom/client';

// ✅ Use the npm jquery package (recommended)
import $ from 'jquery';
window.jQuery = window.jQuery || $;
window.$ = window.$ || $;

// ✅ Import turn.js so it attaches to window.jQuery
import './assets/libs/turn.js';

import App from './App';

console.log('✅ App booting…');
window.addEventListener('error', e => console.log('❌ window error:', e.error || e.message));
window.addEventListener('unhandledrejection', e => console.log('❌ unhandled promise:', e.reason));

const root = createRoot(document.getElementById('root'));
root.render(<App />);
