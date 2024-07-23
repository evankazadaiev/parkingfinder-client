import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/common/assets/index.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// async function enableMocking() {
//     const { worker } = await import('./mocks/browser')
//
//     // `worker.start()` returns a Promise that resolves
//     // once the Service Worker is up and ready to intercept requests.
//     return worker.start({
//         quiet: true,
//         onUnhandledRequest: "bypass"
//     })
// }

// enableMocking().then(() => {
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
// });
