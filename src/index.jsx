import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


const root = createRoot(document.getElementById('root'));
root.render(<App />);

fetch(kioskUrl)
  .then(res => {
    console.log('✅ Status Code:', res.status);
    return res.text();
  })
  .then(data => {
    console.log('📄 Response starts with:', data.slice(0, 100));
  })
  .catch(err => {
    console.error('❌ Fetch error:', err);
  });