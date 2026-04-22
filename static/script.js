/*
  Editable Section Content
*/

const sections = {
  about: {
    title: "About Me",
    content: `
      <div class="content-block about-grid">
        <div class="about-text">
          <h4>About Me</h4>
          <p style="text-align: justify;">
            I'm a <span style="font-weight:bold;">Bachelor of Science in Computer Engineering</span> graduate with a passion for software maintenance,
            backed by a strong foundation in circuit diagram and flowchart design. I'm knowledgeable in Python,
            HTML, and CSS, with hands-on experience in microcontroller programming, circuit analysis, Linux OS,
            and software troubleshooting. Proficient in Microsoft 365 and Google Workspace for efficient
            documentation, data management, and collaborative work.
          </p>
        </div>
        <div class="about-visual">
          <img src="static/about-me-pic.png" alt="About Me Pic" />
        </div>
      </div>
    `,
  },
  skills: {
    title: "My Skills",
    content: `
      <div class="skill-grid">
        <article class="skill-card">
          <div class="skill-icon"><i class="fa-brands fa-raspberry-pi"></i></div>
          <h5>Raspberry Pi</h5>
          <ul>
            <li>Robotic Projects</li>
            <li><a href="https://pi-hole.net/" target="_blank">Pi-Hole</a></li>
          </ul>
        </article>
        <article class="skill-card">
          <div class="skill-icon"><i class="fa-brands fa-linux"></i></div>
          <h5>Linux</h5>
          <ul>
            <li>Installation</li>
            <li>Configuration</li>
          </ul>
        </article>
        <article class="skill-card">
          <div class="skill-icon"><i class="fa-brands fa-python"></i></div>
          <h5>Python</h5>
          <ul>
            <li>Machine Learning</li>
            <li>Automation</li>
            <li>Scripting</li>
          </ul>
        </article>
        <article class="skill-card">
          <div class="skill-icon"><i class="fa-solid fa-database"></i></div>
          <h5>SQL</h5>
          <ul>
            <li>Database Design</li>
            <li>Query Optimization</li>
            <li>Data Manipulation</li>
          </ul>
        </article>
        <article class="skill-card">
          <div class="skill-icon"><i class="fa-solid fa-terminal"></i></div>
          <h5>CLI Tools</h5>
          <ul>
            <li><a href="https://imagemagick.org/" target="_blank">Image Magick</a></li>
            <li><a href="https://ffmpeg.org/" target="_blank">FFmpeg</a></li>
          </ul>
        </article>
        <article class="skill-card">
          <div class="skill-icon"><i class="fa-solid fa-suitcase"></i></div>
          <h5>Productivity Apps</h5>
          <ul>
            <li>Google Workspace</li>
            <li>Microsoft 365</li>
            <li>Canva</li>
            <li>Notion</li>
          </ul>
        </article>
        <article class="skill-card">
          <div class="skill-icon"><i class="fa-solid fa-suitcase"></i></div>
          <h5>Software & Tools</h5>
          <ul>
            <li><a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/" target="_blank">PuTTY</a></li>
            <li><a href="https://syncthing.net/" target="_blank">Syncthing</a></li>
            <li><a href="https://unbound.net/" target="_blank">Unbound</a></li>
          </ul>
        </article>
      </div>
    `,
  },
  projects: {
    title: "Projects",
    content: `
      <style>
        .project-filter-container { margin-bottom: 20px; }
        .project-filter-bar { 
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
          cursor: pointer;
          padding: 10px 15px;
          background: rgba(255,255,255,0.05);
          border-radius: 8px;
          transition: background 0.2s ease;
        }
        .project-filter-bar:hover { background: rgba(255,255,255,0.1); }
        .filter-toggle-btn {
          background: none;
          border: none;
          color: inherit;
          font-size: 1rem;
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .filter-toggle-btn.expanded { transform: rotate(180deg); }
        .project-filter-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, margin 0.3s ease;
          max-height: 0;
          opacity: 0;
        }
        .project-filter-list.expanded {
          max-height: 500px;
          opacity: 1;
          margin-top: 15px;
        }
      </style>
          <div class="content-block">
        <h4>My Projects</h4>
        <p>
          A selection of applications and hardware projects from my portfolio, including file organizers, automation tools,
          robotics, and calculator utilities.
        </p>
      </div>
      <div class="project-filter-container">
        <div id="filter-header" class="project-filter-bar">
          <span class="project-filter-label">Filter by skill</span>
          <button id="filter-toggle" class="filter-toggle-btn" aria-label="Toggle filters">
            <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>
        <div id="project-filter-list" class="project-filter-list"></div>
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
      <div id="certificate-grid" class="certificate-grid">
    `,
  },
  contact: {
    title: "Contact Me",
    content: `
      <div class="content-block">
        <h4>Contact</h4>
        <p>
          Send a message directly to my E-Mail.
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
          <p>Entry-level positions in Data Analysis and Junior System Administration.</p>
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

// Editable PROJECT ENTRIES
const projectData = [
  {
    title: "AI Camera-Integrated Waste Collection and Segregation System Using Raspberry Pi",
    description: "Raspberry Pi powered waste collection system that detects and sorts recyclable items.",
    github: "https://github.com/Matchu02118/garbageDetectionSegregation",
    tags: ["Python", "Machine Learning", "Raspberry Pi", "Robotics", "Embedded Systems"],
    images: [
      "static/img/projects/1.jpg",
      "static/img/projects/1-b.jpg",
      "static/img/projects/1-c.jpg",
      "static/img/projects/1-d.jpg"
    ]
  },
  {
    title: "Obstacle Avoiding Robot",
    description: "Arduino mobile robot with sensors for automated obstacle detection and navigation.",
    tags: ["Embedded Systems", "Robotics"],
    images: ["static/img/projects/4.jpg"]
  },
    {
    title: "Multi-Voltage Power Supply",
    description: "A power supply which the output voltage can be 5V, 6V, 9V, and 12V respectively that can be used to meet and provide the correct voltage level to electronic projects.",
    tags: ["Electronics"],
    images: [
      "static/img/projects/8.jpeg",
      "static/img/projects/8-a.jpeg",
      "static/img/projects/8-b.png"
    ]
  },
  {
    title: "Daily Time Record",
    description: "The Excel spreadsheet I created to calculate hours I have left on my On-The-Job Training (OJT) program, which I also used to track my attendance and performance during the internship.",
    tags: ["Microsoft Excel", "Office"],
    images: [
      "static/img/projects/6.png",
      "static/img/projects/6-a.png",
      "static/img/projects/6-b.png"
    ]
  },  
  {
    title: "Olympics Country Medals Mock Data Visualization",
    description: "Performed data cleaning, data analysis, and data visualization on a mock Olympics dataset (from Career Principles) medal count of countries that participated using Microsoft Excel.",
    tags: ["Microsoft Excel", "Data Analysis"],
    images: [
      "static/img/projects/7.png",
      "static/img/projects/7-a.png",
      "static/img/projects/7-b.png",
      "static/img/projects/7-c.png",
    ]
  },
  {
    title: "File Organizer App",
    description: "Desktop application for sorting and managing files by type and folder.",
    github: "https://github.com/Matchu02118/file_organizer",
    tags: ["Python", "PyQt", "App Development"],
    images: [
      "static/img/projects/2.jpg",
      "static/img/projects/2-b.jpg",
      "static/img/projects/2-c.jpg"
    ]
  },
  {
    title: "Scientific Calculator App",
    description: "A MATLAB-based Casio fx-100MS style calculator for math and engineering workflows.",
    tags: ["App Development"],
    images: ["static/img/projects/5.png"]
  }
];

const certificateData = [
  {
    title: "Webinar on Digital Opportunities Using ICT",
    description: "Certificate of participation from Knights of Online Marketers.",
    image: "static/img/certificates/1.png",
    alt: "Digital Opportunities Using ICT certificate"
  },
  {
    title: "AIVolution - AI Revolution",
    description: "Participation certificate for AI learning and future technology discussions.",
    image: "static/img/certificates/2.png",
    alt: "AIVolution AI Revolution certificate"
  },
  {
    title: "TESDA - Setting Up Computer Networks",
    description: "Official completion certificate for a computer networking course.",
    image: "static/img/certificates/3.png",
    alt: "TESDA Setting Up Computer Networks certificate"
  },
  {
    title: "freeCodeCamp Responsive Web Design",
    description: "Responsive web design certification demonstrating front-end web development skills.",
    image: "static/img/certificates/4.png",
    alt: "freeCodeCamp Responsive Web Design certificate"
  },
  {
    title: "SoloLearn Introduction to Python",
    description: "Python programming certificate for beginner-level development and automation.",
    image: "static/img/certificates/5.png",
    alt: "SoloLearn Introduction to Python certificate"
  },
  {
    title: "University of Santo Tomas-Legazpi OJT Certificate",
    description: "On-the-job training certificate from University of Santo Tomas-Legazpi.",
    image: "static/img/certificates/6.png",
    alt: "UST-L OJT Certificate"
  }/*,
  {
    title: "Test Certificate Entry",
    description: "Brief description of the certificate and what it represents.",
    image: "static/img/certificates/example.png",
    alt: "Example Certificate"
  }*/
];

const sectionTitle = document.getElementById("section-title");
const contentWrapper = document.getElementById("dynamic-content");
const taskbarButtons = document.querySelectorAll(".taskbar-btn");
const taskbar = document.getElementById("taskbar");
const imageModal = document.getElementById("image-modal");
const imageModalImg = document.getElementById("image-modal-img");
const imageModalCaption = document.getElementById("image-modal-caption");
const imageModalDescription = document.getElementById("image-modal-description");
const imageModalClose = document.getElementById("image-modal-close");
const projectModal = document.getElementById("project-modal");
const projectModalImage = document.getElementById("project-modal-img");
const projectModalCaption = document.getElementById("project-modal-caption");
const projectModalTags = document.getElementById("project-modal-tags");
const projectModalDescription = document.getElementById("project-modal-description");
const projectModalGithub = document.getElementById("project-modal-github");
const projectModalPrev = document.getElementById("project-modal-prev");
const projectModalNext = document.getElementById("project-modal-next");
const projectModalClose = document.getElementById("project-modal-close");
let hideTimer = null;
let projectAutoIntervals = [];
let currentProjectModalIndex = 0;
let currentProjectModalImageIndex = 0;
let activeProjectFilter = "All";
let isFilterExpanded = false;
let projectCurrentPage = 1;
const projectItemsPerPage = 6;
let certificateCurrentPage = 1;
const certificateItemsPerPage = 6;

function setActiveSection(section) {
  sectionTitle.textContent = sections[section].title;
  contentWrapper.innerHTML = sections[section].content;

  contentWrapper.classList.remove("fade-in");
  void contentWrapper.offsetHeight; // Force reflow
  contentWrapper.classList.add("fade-in");

  taskbarButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.section === section);
  });

  if (section === "certificates") {
    renderCertificateGrid();
    attachCertificateModal();
  }
  if (section === "projects") {
    renderProjectFilterButtons();
    renderProjectGrid();
    attachProjectGrid();
  }
}

function getProjectTags() {
  return Array.from(new Set(projectData.flatMap((project) => project.tags || []))).sort();
}

function setProjectFilter(tag) {
  activeProjectFilter = tag || "All";
  projectCurrentPage = 1;
  renderProjectFilterButtons();
  renderProjectGrid();
}

function changeProjectPage(direction) {
  const filteredProjects =
    activeProjectFilter === "All"
      ? projectData
      : projectData.filter((project) => (project.tags || []).includes(activeProjectFilter));
  const totalPages = Math.ceil(filteredProjects.length / projectItemsPerPage);

  const newPage = projectCurrentPage + direction;
  if (newPage >= 1 && newPage <= totalPages) {
    projectCurrentPage = newPage;
    renderProjectGrid();
  }
}

function goToProjectPage(page) {
  const filteredProjects =
    activeProjectFilter === "All"
      ? projectData
      : projectData.filter((project) => (project.tags || []).includes(activeProjectFilter));
  const totalPages = Math.ceil(filteredProjects.length / projectItemsPerPage);

  if (page >= 1 && page <= totalPages) {
    projectCurrentPage = page;
    renderProjectGrid();
  }
}

function renderProjectFilterButtons() {
  const filterList = document.getElementById("project-filter-list");
  const toggleBtn = document.getElementById("filter-toggle");
  const filterHeader = document.getElementById("filter-header");

  if (!filterList) return;

  if (toggleBtn && filterHeader) {
    // Sync visual state with variable
    if (isFilterExpanded) {
      filterList.classList.add("expanded");
      toggleBtn.classList.add("expanded");
    }
    // Handle toggle click on the whole header bar
    filterHeader.onclick = () => {
      isFilterExpanded = !isFilterExpanded;
      filterList.classList.toggle("expanded", isFilterExpanded);
      toggleBtn.classList.toggle("expanded", isFilterExpanded);
    };
  }

  const tags = ["All", ...getProjectTags()];
  filterList.innerHTML = tags
    .map(
      (tag) => `
        <button type="button" class="project-filter-button ${activeProjectFilter === tag ? "active" : ""}" data-filter="${tag}">
          ${tag}
        </button>
      `
    )
    .join("");

  filterList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => setProjectFilter(button.dataset.filter));
  });
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

function changeCertificatePage(direction) {
  const totalPages = Math.ceil(certificateData.length / certificateItemsPerPage);
  const newPage = certificateCurrentPage + direction;
  if (newPage >= 1 && newPage <= totalPages) {
    certificateCurrentPage = newPage;
    renderCertificateGrid();
  }
}

function goToCertificatePage(page) {
  const totalPages = Math.ceil(certificateData.length / certificateItemsPerPage);
  if (page >= 1 && page <= totalPages) {
    certificateCurrentPage = page;
    renderCertificateGrid();
  }
}

function renderCertificateGrid() {
  const grid = document.getElementById("certificate-grid");
  if (!grid) return;

  // Calculate pagination
  const totalPages = Math.ceil(certificateData.length / certificateItemsPerPage);
  const startIndex = (certificateCurrentPage - 1) * certificateItemsPerPage;
  const endIndex = startIndex + certificateItemsPerPage;
  const certificatesToShow = certificateData.slice(startIndex, endIndex);

  let html = "";

  // Generate certificate cards
  html += certificatesToShow
    .map((cert) => {
      return `
        <article class="project-card certificate-clickable">
          <img src="${cert.image}" alt="${cert.alt}" />
          <h5>${cert.title}</h5>
          <p>${cert.description}</p>
        </article>
      `;
    })
    .join("");

  // Add pagination controls if there are multiple pages
  if (totalPages > 1) {
    html += `<div class="pagination-controls">`;

    // Previous button
    html += `<button class="pagination-btn ${certificateCurrentPage === 1 ? 'disabled' : ''}"
      onclick="changeCertificatePage(-1)" ${certificateCurrentPage === 1 ? 'disabled' : ''}>
      <i class="fa-solid fa-chevron-left"></i>
    </button>`;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      html += `<button class="pagination-btn ${i === certificateCurrentPage ? 'active' : ''}"
        onclick="goToCertificatePage(${i})">${i}</button>`;
    }

    // Next button
    html += `<button class="pagination-btn ${certificateCurrentPage === totalPages ? 'disabled' : ''}"
      onclick="changeCertificatePage(1)" ${certificateCurrentPage === totalPages ? 'disabled' : ''}>
      <i class="fa-solid fa-chevron-right"></i>
    </button>`;

    html += `</div>`;
  }

  grid.innerHTML = html;

  // Re-attach modal listeners
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
  const filteredProjects =
    activeProjectFilter === "All"
      ? projectData
      : projectData.filter((project) => (project.tags || []).includes(activeProjectFilter));

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectItemsPerPage);
  const startIndex = (projectCurrentPage - 1) * projectItemsPerPage;
  const endIndex = startIndex + projectItemsPerPage;
  const projectsToShow = filteredProjects.slice(startIndex, endIndex);

  let html = "";

  if (projectsToShow.length > 0) {
    html += projectsToShow
      .map((project) => {
        const originalIndex = projectData.indexOf(project);
        return `
  <article class="project-card project-card-clickable" data-project-index="${originalIndex}">
    <div class="project-image-wrap">
      <img src="${project.images[0]}" alt="${project.title}" />
    </div>
    <h5>${project.title}</h5>
    <p>${project.description}</p>
  </article>
`;
      })
      .join("");
  } else {
    html = `<div class="empty-state">No matching projects found. Try another filter or select All.</div>`;
  }

  // Add pagination controls if there are multiple pages
  if (totalPages > 1) {
    html += `<div class="pagination-controls">`;

    // Previous button
    html += `<button class="pagination-btn ${projectCurrentPage === 1 ? 'disabled' : ''}"
      onclick="changeProjectPage(-1)" ${projectCurrentPage === 1 ? 'disabled' : ''}>
      <i class="fa-solid fa-chevron-left"></i>
    </button>`;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      html += `<button class="pagination-btn ${i === projectCurrentPage ? 'active' : ''}"
        onclick="goToProjectPage(${i})">${i}</button>`;
    }

    // Next button
    html += `<button class="pagination-btn ${projectCurrentPage === totalPages ? 'disabled' : ''}"
      onclick="changeProjectPage(1)" ${projectCurrentPage === totalPages ? 'disabled' : ''}>
      <i class="fa-solid fa-chevron-right"></i>
    </button>`;

    html += `</div>`;
  }

  grid.innerHTML = html;

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
  projectModalTags.innerHTML = (project.tags || [])
    .map((tag) => `<span class="project-modal-tag">${tag}</span>`)
    .join("");
  projectModalDescription.textContent = project.description;
  projectModalGithub.href = project.github || "#";
  projectModalGithub.style.display = project.github ? "inline-flex" : "none";

  // Show/hide navigation arrows based on image count
  const hasMultipleImages = project.images.length > 1;
  projectModalPrev.style.display = hasMultipleImages ? "block" : "none";
  projectModalNext.style.display = hasMultipleImages ? "block" : "none";

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
    taskbar.classList.add("hidden");
    taskbar.classList.remove("show");
    clearTimeout(hideTimer);
  } else {
    taskbar.classList.remove("hidden");
    taskbar.classList.add("show");
    resetHideTimer();
  }
}

function showTaskbar() {
  taskbar.classList.add("show");
  taskbar.classList.remove("hidden");
}

function hideTaskbar() {
  taskbar.classList.add("hidden");
  taskbar.classList.remove("show");
}

function resetHideTimer() {
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    if (!taskbar.matches(":hover")) {
      hideTaskbar();
    }
  }, 1400);
}

function shouldRevealTaskbarOnTouch(event) {
  if (!event.touches || event.touches.length === 0) return false;
  const touchY = event.touches[0].clientY;
  return touchY > window.innerHeight - 96;
}

function handleTouchStart(event) {
  if (shouldRevealTaskbarOnTouch(event)) {
    showTaskbar();
    resetHideTimer();
  }
}

function handlePointerMove(event) {
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
window.addEventListener("touchstart", handleTouchStart, { passive: true });
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
if (imageModalClose) {
  imageModalClose.addEventListener("click", closeImageModal);
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

taskbarButtons.forEach((button) => {
  button.addEventListener("click", updateSection);
});

setActiveSection("about");
updateTaskbarMode();

/* ==================== PDF VIEWER ==================== */
const pdfWorkerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerSrc;

const pdfModal = document.getElementById("pdf-modal");
const pdfCanvas = document.getElementById("pdf-canvas");
const pdfLoading = document.getElementById("pdf-loading");
const pdfCurrentPage = document.getElementById("pdf-current-page");
const pdfTotalPages = document.getElementById("pdf-total-pages");
const pdfZoomInBtn = document.getElementById("pdf-zoom-in-btn");
const pdfZoomOutBtn = document.getElementById("pdf-zoom-out-btn");
const pdfPrevBtn = document.getElementById("pdf-prev-btn");
const pdfNextBtn = document.getElementById("pdf-next-btn");
const pdfCloseBtn = document.getElementById("pdf-close-btn");
const viewResumeBtn = document.getElementById("view-resume-btn");

let pdfDoc = null;
let currentPage = 1;
let currentZoom = 1.2;
const minZoom = 0.8;
const maxZoom = 3;
const zoomStep = 0.2;

async function renderPage(pageNum) {
  try {
    if (!pdfDoc) {
      console.error("PDF not loaded");
      return;
    }
    
    const page = await pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: currentZoom });
    
    pdfCanvas.width = viewport.width;
    pdfCanvas.height = viewport.height;
    
    const ctx = pdfCanvas.getContext("2d");
    ctx.clearRect(0, 0, pdfCanvas.width, pdfCanvas.height);
    
    const renderTask = page.render({
      canvasContext: ctx,
      viewport: viewport,
    });
    
    await renderTask.promise;
    
    currentPage = pageNum;
    pdfCurrentPage.textContent = pageNum;
    
    // Update zoom button states
    pdfZoomOutBtn.disabled = currentZoom <= minZoom;
    pdfZoomInBtn.disabled = currentZoom >= maxZoom;
    pdfPrevBtn.disabled = pageNum <= 1;
    pdfNextBtn.disabled = pageNum >= pdfDoc.numPages;
    
    // Scroll canvas into view
    pdfCanvas.scrollIntoView({ behavior: "smooth", block: "nearest" });
    
  } catch (error) {
    console.error("Error rendering page:", error);
  }
}

async function loadPDF(url) {
  try {
    pdfLoading.classList.add("show");
    pdfDoc = await pdfjsLib.getDocument(url).promise;
    pdfTotalPages.textContent = pdfDoc.numPages;
    currentPage = 1;
    currentZoom = window.innerWidth <= 720 ? 1.05 : 1.5;
    
    await renderPage(1);
    pdfModal.classList.add("show");
    pdfLoading.classList.remove("show");
  } catch (error) {
    console.error("Error loading PDF:", error);
    alert("Failed to load PDF. Please try downloading instead.");
    pdfLoading.classList.remove("show");
  }
}

function closePDFModal() {
  pdfModal.classList.remove("show");
  pdfDoc = null;
}

viewResumeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loadPDF("static/resume.pdf");
});

pdfZoomInBtn.addEventListener("click", async () => {
  if (!pdfDoc) return;
  if (currentZoom < maxZoom) {
    currentZoom = Math.round((currentZoom + zoomStep) * 10) / 10;
    await renderPage(currentPage);
  }
});

pdfZoomOutBtn.addEventListener("click", async () => {
  if (!pdfDoc) return;
  if (currentZoom > minZoom) {
    currentZoom = Math.round((currentZoom - zoomStep) * 10) / 10;
    await renderPage(currentPage);
  }
});

pdfPrevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    renderPage(currentPage - 1);
  }
});

pdfNextBtn.addEventListener("click", () => {
  if (currentPage < pdfDoc.numPages) {
    renderPage(currentPage + 1);
  }
});

pdfCloseBtn.addEventListener("click", closePDFModal);

// Close on backdrop click
pdfModal.addEventListener("click", (event) => {
  if (event.target === pdfModal || event.target.dataset.closeModal !== undefined) {
    closePDFModal();
  }
});

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  if (!pdfModal.classList.contains("show")) return;
  
  if (event.key === "+" || event.key === "=" || event.key === "ArrowUp") {
    pdfZoomInBtn.click();
  }
  if (event.key === "-" || event.key === "_" || event.key === "ArrowDown") {
    pdfZoomOutBtn.click();
  }
  if (event.key === "Escape") {
    closePDFModal();
  }
  if (event.key === "ArrowLeft") {
    pdfPrevBtn.click();
  }
  if (event.key === "ArrowRight") {
    pdfNextBtn.click();
  }
});
