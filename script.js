
document.querySelector('button').addEventListener('mouseover', function(e) {
    const maxX = window.innerWidth - e.target.offsetWidth;
    const maxY = window.innerHeight - e.target.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    e.target.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
  
  const audio = new Audio('audio/loud.mp3'); // replace 'audio/loud.mp3' with the path to your audio file

  document.querySelector('button').addEventListener('click', function() {
    document.body.innerHTML = '';
    document.body.style.backgroundImage = 'url(images/negr.jpg)';
    
    for (let i = 0; i < 40; i++) {
      const text = document.createElement('div');
      text.className = 'flashing-text';
      text.textContent = 'You Are Gay!', "GAY!";
      text.style.left = `${Math.random() * 100}vw`;
      text.style.top = `${Math.random() * 100}vh`;
      document.body.appendChild(text);
    }
  
    audio.play();
  });