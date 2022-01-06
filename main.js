"use strict";

// Створити сторінку, що показує нумерований список пісень:
const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];
const container = document.querySelector(".container");
const h2 = document.createElement("h2");
h2.textContent = "Створити сторінку, що показує нумерований список пісень:";
container.append(h2);

enterPlayList(playList);

function enterPlayList(playList) {
  const ol = document.createElement("ol");
  playList.map((element) => {
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for (const iterator in element) {
      const li = document.createElement("li");
      li.textContent = `${iterator}: ${element[iterator]}`;
      ul.append(li);
    }
    li.append(ul);
    ol.append(li);
  });
  container.append(ol);
}

// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

const hTask2 = document.createElement("h2");
hTask2.textContent = `Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.`;
container.append(hTask2);

const openBtn = document.querySelector(".open");
openBtn.addEventListener("click", () => {
  const blockWindow = document.querySelector(".block-window");
  blockWindow.classList.add("window-hidden");
});
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  const blockWindow = document.querySelector(".block-window");
  blockWindow.classList.remove("window-hidden");
});

// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

const h2Task3 = document.createElement("h2");
h2Task3.textContent =
  "Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.";
container.append(h2Task3);

const redBtn = document.querySelector(".red");
const orangeBtn = document.querySelector(".orange");
const greenBtn = document.querySelector(".green");

redBtn.addEventListener("click", () => {
    redBtn.classList.add('red-active');
    orangeBtn.classList.remove('orange-active');
    greenBtn.classList.remove('green-active');
});
orangeBtn.addEventListener("click", () => {
    redBtn.classList.remove('red-active');
    orangeBtn.classList.add('orange-active');
    greenBtn.classList.remove('green-active');
});
greenBtn.addEventListener("click", () => {
    redBtn.classList.remove('red-active');
    orangeBtn.classList.remove('orange-active');
    greenBtn.classList.add('green-active');
});
