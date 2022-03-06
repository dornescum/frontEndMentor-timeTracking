import Tabs from './tabs.js';
import data from './data.json' assert { type: "json" };

console.log(data);

const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
console.log(monthly);

const tabs = new Tabs(document.querySelector('.tabs'));

tabs.init();
