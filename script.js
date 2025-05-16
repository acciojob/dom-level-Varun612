//your JS code here. If required.
const el = document.getElementById('level');
let level=0;
let currEl=el;
while(currEl) {
	level++;
	currEl = currEl.parentElement
}
alert(`The level of the element is: ${level}`);