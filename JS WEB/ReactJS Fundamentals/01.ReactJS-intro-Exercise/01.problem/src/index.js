
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(App(), document.getElementById('root'));
const rerender = ReactDOM.render;
export default rerender;

