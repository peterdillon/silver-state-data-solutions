const parentContainer = document.getElementById('star-container');
const containerWidth = parentContainer.offsetWidth;
const containerHeight = parentContainer.offsetHeight;
const numDivs = 250;

function createDiv() {
  const div = document.createElement('div');
  div.className = 'child-div';
  return div;
}

function setRandomPosition(div) {
  const divWidth = div.offsetWidth;
  const divHeight = div.offsetHeight;
  const maxX = containerWidth - divWidth;
  const maxY = containerHeight - divHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  const randomSize = Math.floor(Math.random() * (16 - 5 + 1)) + 5;
  const x = (randomSize * 5);
  const blur = (randomSize - 9);
  div.style.left = randomX + 'px';
  div.style.top = randomY + 'px';
  div.style.height = randomSize + 'px';
  div.style.width = randomSize + 'px';
  div.style.transform = 'rotate('+x+'deg)';
  div.style.filter = 'blur('+blur+'px)';
}

for (let i = 0; i < numDivs; i++) {
  const div = createDiv();
  setRandomPosition(div);
  parentContainer.appendChild(div);
}