import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// ✅ correct relative path from src/index.jsx
import kioskUrl from 'url:./assets/libs/kiosk_tjhis_time_fr.glb';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// (Optional) Debug fetch: show status and first bytes
fetch(kioskUrl)
  .then((res) => {
    console.log('✅ Status Code:', res.status);
    return res.arrayBuffer();
  })
  .then((buf) => {
    const firstBytes = Array.from(new Uint8Array(buf.slice(0, 16)))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join(' ');
    console.log('📄 First 16 bytes:', firstBytes);
  })
  .catch((err) => {
    console.error('❌ Fetch error:', err);
  });
