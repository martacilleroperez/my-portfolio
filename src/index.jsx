import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import App from "./App";





console.log('✅ App booting…');
window.addEventListener('error', e => console.log('❌ window error:', e.error || e.message));
window.addEventListener('unhandledrejection', e => console.log('❌ unhandled promise:', e.reason));

const root = createRoot(document.getElementById('root'));
root.render(<App />);
