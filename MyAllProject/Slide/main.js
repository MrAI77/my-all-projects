new Swiper('.cardw', {
    loop: true,
    spaceBetween:30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        },
    }
  });
  const express = require('express');
  const app = express();
  const port = 3000;
  
  // Обслуживаем статические файлы из текущей директории
  app.use(express.static(__dirname));
  
  // Запускаем сервер
  app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
  });
  