import component from './component';
import styles from './main.css';

var element = component('Hello MOTO');

element.className = styles.redButton;
document.body.appendChild(element);
