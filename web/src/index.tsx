import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Nui, { EventListener } from './Nui';

const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

function isEnvBrowser(): boolean {
  return isDevelopment;
}

if (isDevelopment) {
  window.Nui = Nui;
  setTimeout(() => {
    console.log('[Development] Triggering appearance UI');
    window.dispatchEvent(
      new MessageEvent('message', {
        data: { 
          type: 'appearance_display', 
          payload: { asynchronous: false } 
        },
      })
    );
  }, 1000);
}

if (isEnvBrowser()) {
  const root = document.getElementById('root');
  root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  root!.style.backgroundSize = 'cover';
  root!.style.backgroundRepeat = 'no-repeat';
  root!.style.backgroundPosition = 'center';
}

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <EventListener />
  </React.StrictMode>,
);
