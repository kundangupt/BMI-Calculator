const h = document.getElementById("#height"). value;
const w = document.getElementById("#Weight"). value;

const bim = w/(h/100*h/100);

const total = bmi.tofixed(2);

document.getElementById("#result").innerHTML = total; 