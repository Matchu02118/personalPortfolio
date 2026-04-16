/*
  EDITABLE CONTENT SECTION
  Replace the text inside each section object below with content from your own portfolio.
  Keep the data-section keys the same unless you also edit the HTML nav buttons.
*/

const sections = {
  about: {
    title: "About Me",
    content: `
      <div class="content-block about-grid">
        <div class="about-text">
          <h4>About Me</h4>
          <p style="text-align: justify;">
            I'm a Bachelor of Science in Computer Engineering graduate with a passion for software maintenance,
            backed by a strong foundation in circuit diagram and flowchart design. I'm knowledgeable in Python,
            HTML, and CSS, with hands-on experience in microcontroller programming, circuit analysis, Linux OS,
            and software troubleshooting. Proficient in Microsoft 365 and Google Workspace for efficient
            documentation, data management, and collaborative work.
          </p>
        </div>
        <div class="about-visual">
          <img src="static/grad-pic-UST-L.png" alt="Graduation photo" />
        </div>
      </div>
    `,
  },
  skills: {
    title: "My Skills",
    content: `
      <div class="skill-grid">
        <article class="skill-card">
          <div class="skill-icon">🍓</div>
          <h5>Raspberry Pi</h5>
          <ul>
            <li>Robotic Projects</li>
            <li><a href="https://pi-hole.net/" target="_blank">Pi-Hole</a></li>
            <li><a href="https://unbound.net/" target="_blank">Unbound</a></li>
          </ul>
        </article>
        <article class="skill-card">
          <div class="skill-icon">🐧</div>
          <h5>Linux</h5>
          <ul>
            <li>Installation</li>
            <li>Configuration</li>
          </ul>
        </article>
        <article class="skill-card">
          <div class="skill-icon">🐍</div>
          <h5>Python</h5>
          <ul>
            <li>Machine Learning</li>
            <li>Automation</li>
            <li>Scripting</li>
          </ul>
        </article>
        <article class="skill-card">
          <div class="skill-icon">🗄️</div>
          <h5>SQL</h5>
          <ul>
            <li>Database Design</li>
            <li>Query Optimization</li>
            <li>Data Manipulation</li>
          </ul>
        </article>
        <article class="skill-card">
          <div class="skill-icon">⌨️</div>
          <h5>CLI Tools</h5>
          <ul>
            <li><a href="https://imagemagick.org/" target="_blank">Image Magick</a></li>
            <li><a href="https://ffmpeg.org/" target="_blank">FFmpeg</a></li>
          </ul>
        </article>
        <article class="skill-card">
          <div class="skill-icon">💼</div>
          <h5>Productivity Apps</h5>
          <ul>
            <li>Google Workspace</li>
            <li>Microsoft 365</li>
            <li>Canva</li>
            <li>Notion</li>
          </ul>
        </article>
      </div>
    `,
  },
  projects: {
    title: "Projects",
    content: `
      <div class="content-block">
        <h4>My Projects</h4>
        <p>
          A selection of applications and hardware projects from my portfolio, including file organizers, automation tools,
          robotics, and calculator utilities.
        </p>
      </div>
      <div id="project-grid" class="project-grid"></div>
    `,
  },
  education: {
    title: "Education",
    content: `
      <div class="content-block">
        <h4>Education</h4>
        <p>
          University of Santo Tomas-Legazpi
          <strong>Bachelor of Science in Computer Engineering</strong>
          (2021 to 2025)
        </p>
      </div>
      <div class="timeline">
        <article class="timeline-item">
          <h5>Computer Engineering Education</h5>
          <p>
            During my years studying Computer Engineering, I developed a strong foundation in both hardware and software disciplines.
            My interest in Linux began when our instructor introduced us to system and network administration tasks—an experience that
            sparked my appreciation for its efficiency and reliability in server and security environments.
          </p>
        </article>
        <article class="timeline-item">
          <h5>Thesis and Practical Projects</h5>
          <p>
            For my thesis, my partner and I developed a robotic device programmed in Python and trained with YOLOv5 custom datasets to identify
            and segregate garbage, combining machine learning and robotics into a practical environmental solution.
          </p>
        </article>
        <article class="timeline-item">
          <h5>Additional Experience</h5>
          <p>
            I also gained experience working with Arduino-based projects like an obstacle-avoiding robot and a flame detection system.
            I contributed to electrical projects such as a multi-voltage power supply and audio amplifier, and I improved my digital systems understanding
            through binary, octal, and hexadecimal number system work.
          </p>
        </article>
      </div>
    `,
  },
  certificates: {
    title: "Certificates",
    content: `
      <div class="content-block">
        <h4>Certificates</h4>
        <p>
          A collection of certificates demonstrating my participation in IT, AI, networking, and web design programs.
        </p>
      </div>
      <div class="certificate-grid">
        <article class="project-card certificate-clickable">
          <img src="static/img/certificates/1.png" alt="Digital Opportunities Using ICT certificate" />
          <h5>Webinar on Digital Opportunities Using ICT</h5>
          <p>Certificate of participation from Knights of Online Marketers.</p>
        </article>
        <article class="project-card certificate-clickable">
          <img src="static/img/certificates/2.png" alt="AIVolution AI Revolution certificate" />
          <h5>AIVolution - AI Revolution</h5>
          <p>Participation certificate for AI learning and future technology discussions.</p>
        </article>
        <article class="project-card certificate-clickable">
          <img src="static/img/certificates/3.png" alt="TESDA Setting Up Computer Networks certificate" />
          <h5>TESDA - Setting Up Computer Networks</h5>
          <p>Official completion certificate for a computer networking course.</p>
        </article>
        <article class="project-card certificate-clickable">
          <img src="static/img/certificates/4.png" alt="freeCodeCamp Responsive Web Design certificate" />
          <h5>freeCodeCamp Responsive Web Design</h5>
          <p>Responsive web design certification demonstrating front-end web development skills.</p>
        </article>
        <article class="project-card certificate-clickable">
          <img src="static/img/certificates/5.png" alt="SoloLearn Introduction to Python certificate" />
          <h5>SoloLearn Introduction to Python</h5>
          <p>Python programming certificate for beginner-level development and automation.</p>
        </article>
      </div>
    `,
  },
  contact: {
    title: "Contact Me",
    content: `
      <div class="content-block">
        <h4>Contact</h4>
        <p>
          Send a message directly to my Outlook account using the same form action from the original portfolio.
        </p>
      </div>
      <div class="contact-grid">
        <article class="contact-card">
          <strong>Primary Email</strong>
          <p><a href="mailto:estorga.carlmathew11@outlook.com">estorga.carlmathew11@outlook.com</a></p>
        </article>
        <article class="contact-card">
          <strong>Secondary Email</strong>
          <p><a href="mailto:estorgacarlmathew@gmail.com">estorgacarlmathew@gmail.com</a></p>
        </article>
        <article class="contact-card">
          <strong>Location</strong>
          <p>Pasay City, Philippines</p>
        </article>
        <article class="contact-card">
          <strong>Available for</strong>
          <p>System Administration, Data Analysis, and technical support work.</p>
        </article>
      </div>
      <form class="contact-form" action="https://formsubmit.co/estorga.carlmathew11@outlook.com" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <div class="form-row">
          <input type="text" name="name" placeholder="Name (Optional)" class="form-input" />
          <input type="email" name="email" placeholder="E-Mail Address" class="form-input" required />
        </div>
        <input type="text" name="subject" placeholder="Email Subject" class="form-input" required />
        <textarea name="message" placeholder="Message Body" rows="4" class="form-textarea" required></textarea>
        <button type="submit" class="submit-button">Submit E-Mail</button>
      </form>
    `,
  },
};

const projectData = [
  {
    title: "AI Camera-Integrated Waste Collection and Segregation System Using Raspberry Pi",
    description: "Raspberry Pi powered waste collection system that detects and sorts recyclable items.",
    github: "https://github.com/Matchu02118/garbageDetectionSegregation",
    images: [
      "static/img/projects/1.jpg",
      "static/img/projects/1-b.jpg",
      "static/img/projects/1-c.jpg",
      "static/img/projects/1-d.jpg"
    ]
  },
  {
    title: "File Organizer App",
    description: "Desktop application for sorting and managing files by type and folder.",
    github: "https://github.com/Matchu02118/file_organizer",
    images: [
      "static/img/projects/2.jpg",
      "static/img/projects/2-b.jpg",
      "static/img/projects/2-c.jpg"
    ]
  },
  {
    title: "Obstacle Avoiding Robot",
    description: "Arduino mobile robot with sensors for automated obstacle detection and navigation.",
    images: ["static/img/projects/4.jpg"]
  },
  {
    title: "Scientific Calculator App",
    description: "A MATLAB-based Casio fx-100MS style calculator for math and engineering workflows.",
    images: ["static/img/projects/5.png"]
  },
  {
    title: "IP Subnet Calculator",
    description: "Network calculator that converts IP and subnet mask values into decimal and binary results.",
    images: ["static/img/projects/3.jpg"]
  }
];

const sectionTitle = document.getElementById("section-title");
const contentWrapper = document.getElementById("dynamic-content");
const taskbarButtons = document.querySelectorAll(".taskbar-btn");
const heroButtons = document.querySelectorAll(".hero-btn");
const taskbar = document.getElementById("taskbar");
const imageModal = document.getElementById("image-modal");
const imageModalImg = document.getElementById("image-modal-img");
const imageModalCaption = document.getElementById("image-modal-caption");
const imageModalDescription = document.getElementById("image-modal-description");
const imageModalClose = document.getElementById("image-modal-close");
const projectModal = document.getElementById("project-modal");
const projectModalImage = document.getElementById("project-modal-img");
const projectModalCaption = document.getElementById("project-modal-caption");
const projectModalDescription = document.getElementById("project-modal-description");
const projectModalGithub = document.getElementById("project-modal-github");
const projectModalPrev = document.getElementById("project-modal-prev");
const projectModalNext = document.getElementById("project-modal-next");
const projectModalClose = document.getElementById("project-modal-close");
let hideTimer = null;
let projectAutoIntervals = [];
let currentProjectModalIndex = 0;
let currentProjectModalImageIndex = 0;

function setActiveSection(section) {
  sectionTitle.textContent = sections[section].title;
  contentWrapper.innerHTML = sections[section].content;
  contentWrapper.classList.add("fade-in");
  window.requestAnimationFrame(() => {
    contentWrapper.classList.remove("fade-in");
  });

  taskbarButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.section === section);
  });
  heroButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.section === section);
  });

  if (section === "certificates") {
    attachCertificateModal();
  }
  if (section === "projects") {
    renderProjectGrid();
    attachProjectGrid();
  }
}

function attachCertificateModal() {
  const certCards = document.querySelectorAll(".certificate-clickable");
  certCards.forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img");
      const title = card.querySelector("h5")?.textContent || "Certificate image";
      const description = card.querySelector("p")?.textContent || "";
      openImageModal(img.src, title, description);
    });
  });
}

function renderProjectGrid() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  clearProjectIntervals();
  grid.innerHTML = projectData
    .map((project, index) => {
      return `
        <article class="project-card project-card-clickable" data-project-index="${index}">
          <div class="project-image-wrap">
            <img src="${project.images[0]}" alt="${project.title}" />
          </div>
          <h5>${project.title}</h5>
          <p>${project.description}</p>
          ${project.github ? `
            <p class="muted">GitHub available for this project.</p>
          ` : ""}
        </article>
      `;
    })
    .join("");

  const cards = grid.querySelectorAll(".project-card-clickable");
  cards.forEach((card) => {
    const index = Number(card.dataset.projectIndex);
    const project = projectData[index];
    if (!project) return;
    card.addEventListener("click", () => openProjectModal(index, 0));
    if (project.images.length > 1) {
      startProjectImageCycle(card, project.images);
    }
  });
}

function attachProjectGrid() {
  // Kept for compatibility if any extra project grid attachments are required later.
}

function startProjectImageCycle(card, images) {
  let activeIndex = 0;
  const imgNode = card.querySelector("img");
  if (!imgNode) return;

  const interval = setInterval(() => {
    activeIndex = (activeIndex + 1) % images.length;
    imgNode.style.opacity = "0";
    setTimeout(() => {
      imgNode.src = images[activeIndex];
      imgNode.style.opacity = "1";
    }, 250);
  }, 2000);

  projectAutoIntervals.push(interval);
}

function clearProjectIntervals() {
  projectAutoIntervals.forEach((interval) => clearInterval(interval));
  projectAutoIntervals = [];
}

function openProjectModal(projectIndex, imageIndex = 0) {
  if (!projectModal || !projectModalImage || !projectModalCaption || !projectModalDescription || !projectModalGithub) return;
  const project = projectData[projectIndex];
  if (!project) return;

  currentProjectModalIndex = projectIndex;
  currentProjectModalImageIndex = imageIndex;
  projectModalImage.src = project.images[imageIndex];
  projectModalCaption.textContent = project.title;
  projectModalDescription.textContent = project.description;
  projectModalGithub.href = project.github || "#";
  projectModalGithub.style.display = project.github ? "inline-flex" : "none";
  projectModal.classList.add("open");
}

function changeProjectModalImage(step) {
  const project = projectData[currentProjectModalIndex];
  if (!project || project.images.length <= 1) return;
  currentProjectModalImageIndex = (currentProjectModalImageIndex + step + project.images.length) % project.images.length;
  const nextSource = project.images[currentProjectModalImageIndex];
  projectModalImage.style.opacity = "0";
  setTimeout(() => {
    projectModalImage.src = nextSource;
    projectModalImage.style.opacity = "1";
  }, 250);
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove("open");
}

function openImageModal(src, caption, description = "") {
  if (!imageModal || !imageModalImg || !imageModalCaption || !imageModalDescription) return;
  imageModalImg.style.opacity = "0";
  imageModalImg.src = src;
  imageModalImg.onload = () => {
    imageModalImg.style.opacity = "1";
  };
  imageModalCaption.textContent = caption;
  imageModalDescription.textContent = description;
  imageModal.classList.add("open");
}

function closeImageModal() {
  if (!imageModal) return;
  imageModal.classList.remove("open");
}

function updateSection(event) {
  const selected = event.currentTarget.dataset.section;
  if (!selected) return;
  setActiveSection(selected);
}

function isMobileNavbar() {
  return window.innerWidth <= 720 || window.matchMedia("(pointer: coarse)").matches;
}

function updateTaskbarMode() {
  if (isMobileNavbar()) {
    taskbar.classList.add("no-autohide");
    showTaskbar();
    clearTimeout(hideTimer);
  } else {
    taskbar.classList.remove("no-autohide");
    resetHideTimer();
  }
}

function showTaskbar() {
  taskbar.classList.add("show");
  taskbar.classList.remove("hidden");
}

function hideTaskbar() {
  if (taskbar.classList.contains("no-autohide")) return;
  taskbar.classList.add("hidden");
  taskbar.classList.remove("show");
}

function resetHideTimer() {
  if (taskbar.classList.contains("no-autohide")) return;
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    if (!taskbar.matches(":hover")) {
      hideTaskbar();
    }
  }, 1400);
}

function handlePointerMove(event) {
  if (taskbar.classList.contains("no-autohide")) return;
  if (window.innerHeight - event.clientY < 120) {
    showTaskbar();
    resetHideTimer();
    return;
  }

  if (!taskbar.matches(":hover")) {
    resetHideTimer();
  }
}

window.addEventListener("mousemove", handlePointerMove);
window.addEventListener("touchstart", showTaskbar);
window.addEventListener("touchend", resetHideTimer);
window.addEventListener("resize", updateTaskbarMode);
taskbar.addEventListener("mouseenter", showTaskbar);
taskbar.addEventListener("mouseleave", resetHideTimer);
if (imageModal) {
  imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal || event.target.dataset.closeModal !== undefined) {
      closeImageModal();
    }
  });
}
if (projectModalClose) {
  projectModalClose.addEventListener("click", closeProjectModal);
}
if (projectModal) {
  projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal || event.target.dataset.closeModal !== undefined) {
      closeProjectModal();
    }
  });
}
if (projectModalPrev) {
  projectModalPrev.addEventListener("click", () => changeProjectModalImage(-1));
}
if (projectModalNext) {
  projectModalNext.addEventListener("click", () => changeProjectModalImage(1));
}
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImageModal();
    closeProjectModal();
  }
  if (projectModal && projectModal.classList.contains("open")) {
    if (event.key === "ArrowUp") {
      changeProjectModalImage(-1);
    }
    if (event.key === "ArrowDown") {
      changeProjectModalImage(1);
    }
  }
});

[...taskbarButtons, ...heroButtons].forEach((button) => {
  button.addEventListener("click", updateSection);
});

setActiveSection("about");
updateTaskbarMode();
