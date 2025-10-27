import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


import kioskUrl from 'url:./assets/libs/kiosk_tjhis_time_fr.glb';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// debug part 
fetch(kioskUrl)

  .catch((err) => {
    console.error('❌ Fetch error:', err);
  });
