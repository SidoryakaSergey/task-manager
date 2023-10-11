import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import taskReducer from './redux/taskReducer';
import App from './App';

const store = createStore(taskReducer);
Modal.setAppElement('#root');

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
