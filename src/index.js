import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QuizProvider } from './contexts/QuizContext';

import App from './components/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);
