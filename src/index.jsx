import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// (Optional) GLB URL import is fine to keep if you use it elsewhere
//import kioskUrl from 'url:./assets/libs/kiosk_tjhis_time_fr.glb';

console.log('✅ App booting…');
window.addEventListener('error', e => console.log('❌ window error:', e.error || e.message));
window.addEventListener('unhandledrejection', e => console.log('❌ unhandled promise:', e.reason));

const root = createRoot(document.getElementById('root'));
root.render(<App />);