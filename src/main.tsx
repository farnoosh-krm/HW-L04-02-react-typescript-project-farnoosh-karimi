import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './features/store.ts'
import { ReminderProvider } from './components/Reminder/ReminderContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ReminderProvider>
        <App />
      </ReminderProvider>
    </Provider>
  </StrictMode>,
)
