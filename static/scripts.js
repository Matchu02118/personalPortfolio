// Navbar
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');

      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  window.addEventListener('load', updateActiveLink);


  window.addEventListener('scroll', updateActiveLink);
  window.addEventListener('load', updateActiveLink);

// Skills Section
document.addEventListener("DOMContentLoaded", () => {
  const skillItems = document.querySelectorAll(".skillItem");
  skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
  });
});

// Project Section
const projectImages = {
  0: [
    "static/img/projects/1.jpg",
    "static/img/projects/1-b.jpg",
    "static/img/projects/1-c.jpg",
    "static/img/projects/1-d.jpg"
  ],
  1: [
    "static/img/projects/2.jpg",
    "static/img/projects/2-b.jpg",
    "static/img/projects/2-c.jpg"
  ],
  2: [
    "static/img/projects/3.jpg"
  ],
  3: [
    "static/img/projects/4.jpg"
  ],
  4:[
    "static/img/projects/5.png"
  ]
};

// Project metadata
const projects = [
  {
    img: "static/img/projects/1.jpg",
    title: "AI Camera Waste Segregation",
    desc: "Raspberry Pi powered waste collection system.",
    link: "https://github.com/Matchu02118/garbageDetectionSegregation"
  },
  {
    img: "static/img/projects/2.jpg",
    title: "File Organizer App",
    desc: "Desktop app for sorting and managing files.",
    link: "https://github.com/Matchu02118/file_organizer"
  },
  {
    img: "static/img/projects/3.jpg",
    title: "IP Subnetting App",
    desc: "Made using Python's PyQt6 library."
  },
  {
    img: "static/img/projects/4.jpg",
    title: "Obstacle Avoiding Robot",
    desc: "Arduino-based project."
  },
  {
    img: "static/img/projects/5.png",
    title: "Scientific Calculator App",
    desc: "A virtual Casio fx-100ms calculator. Made using MATLAB"
  }
];

let currentIndex = 0;
let imageCycleIndex = 0;
let imageCycleInterval = null;

function renderProjects() {
  const display = document.querySelector(".project-display");
  display.innerHTML = "";

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  const prev = projects[prevIndex];
  const current = projects[currentIndex];
  const next = projects[nextIndex];

  display.innerHTML = `
    <div class="project-card dimmed position-relative overflow-hidden">
      <img src="${prev.img}" alt="${prev.title}" class="img-fluid w-100">
      <div class="project-overlay text-light p-3">
        <h5>${prev.title}</h5>
      </div>
    </div>
    <div class="project-card active position-relative overflow-hidden">
      <img id="active-project-img" src="${current.img}" alt="${current.title}" class="img-fluid w-100 fade-anim">
      <div class="project-overlay text-light p-3">
        <h5>${current.title}</h5>
        <p class="small">${current.desc}</p>
        ${current.link ? `
          <div class="d-flex project-src align-items-center justify-content-center gap-2 mt-2">
            <a href="${current.link}" target="_blank" class="text-light text-decoration-none d-flex align-items-center gap-2">
              <i class="fa-brands fa-github fs-5"></i>
              <span>GitHub</span>
              <i class="fa-solid fa-arrow-up-right-from-square link-icon fs-6"></i>
            </a>
          </div>
  `: ""}
      </div>
    </div>
    <div class="project-card dimmed position-relative overflow-hidden">
      <img src="${next.img}" alt="${next.title}" class="img-fluid w-100">
      <div class="project-overlay text-light p-3">
        <h5>${next.title}</h5>
      </div>
    </div>
  `;
  startImageCycle(currentIndex);
}

function startImageCycle(index) {
  clearInterval(imageCycleInterval);
  imageCycleIndex = 0;

  const imgElement = document.getElementById("active-project-img");
  const images = projectImages[index] || [];

  if (images.length <= 1 || !imgElement) return;

  imageCycleInterval = setInterval(() => {
    imageCycleIndex = (imageCycleIndex + 1) % images.length;
    imgElement.style.opacity = 0;
    setTimeout(() => {
      imgElement.src = images[imageCycleIndex];
      imgElement.style.opacity = 1;
    }, 400);
  }, 3500);
}

function nextProject() {
  const display = document.querySelector(".project-display");
  const activeCard = display.querySelector(".project-card.active");

  activeCard.classList.add("slide-out-left");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % projects.length;
    renderProjects();

    const newActive = display.querySelector(".project-card.active");
    newActive.classList.add("slide-in-right");

    setTimeout(() => newActive.classList.remove("slide-in-right"), 600);
  }, 600);
}

function prevProject() {
  const display = document.querySelector(".project-display");
  const activeCard = display.querySelector(".project-card.active");

  activeCard.classList.add("slide-out-right");

  setTimeout(() => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    renderProjects();

    const newActive = display.querySelector(".project-card.active");
    newActive.classList.add("slide-in-left");

    setTimeout(() => newActive.classList.remove("slide-in-left"), 600);
  }, 600);
}

document.addEventListener("DOMContentLoaded", renderProjects);
