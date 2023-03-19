const myInterval = setInterval(function () {
  const h1 = document.querySelector("h1");

  const num = +h1.textContent.replace("%", "");

    const itna = 100-num;

  document.querySelector(".blur").style.filter = `blur(${5*(itna/100)}px)`;
 h1.style.opacity = `${itna/100}`;
 
 
  console.log(num);
  if (num < 100) h1.textContent = `${num + 1}%`;
  else {
    myStopFunction();
  }
  console.log(num);
}, 10);

function myStopFunction() {
  clearInterval(myInterval);
}
