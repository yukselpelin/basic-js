const reviews = [
    {
      id: 1,
      name: 'Breaking Bad',
      img: "./images/1.jpg",
      text: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    },
    {
      id: 2,
      name: 'Shelock',
      img: "./images/2.jpg",
      text: 'The quirky spin on Conan Doyles iconic sleuth pitches him as a "high-functioning sociopath" in modern-day London. Assisting him in his investigations: Afghanistan War vet John Watson, whos introduced to Holmes by a mutual acquaintance.',
    },
    {
      id: 3,
      name: 'Game of Thrones',
      img: "./images/3.jpg",
      text: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    },
    {
      id: 4,
      name: 'Prison Break',
      img: "./images/4.jpg",
      text: 'A structural engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence by breaking themselves out from the inside.',
    },
  ];
  // select items
  const img = document.getElementById('tv-img');
  const seriesname = document.getElementById('seriesname');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    showSerie();
  });
  
  // show serie based on item
  function showSerie() {
    const item = reviews[currentItem];
    img.src = item.img;
    seriesname.textContent = item.seriesname;
    info.textContent = item.text;
  }
  // show next serie
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showSerie();
  });
  // show prev serie
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showSerie();
  });
  // show random serie
  randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showSerie();
  });