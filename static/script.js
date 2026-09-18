/*
  Editable Section Content
*/

const sections = {
  about: {
    content: `
      <div class="content-block about-grid">
        <div class="about-text">
          <h4>About Me</h4>
          <p style="margin-top: 10px;">
            I'm a Detail-oriented Computer Engineer focused on Linux systems administration, Embedded Systems, and Data Analysis. Skilled in Microcontroller Programming, Circuit Diagram Design, and Machine Learning. I have a strong foundation in both hardware and software disciplines, with experience in Raspberry Pi and Arduino-based projects. I am passionate about leveraging technology to solve real-world problems and continuously expanding my knowledge in the field of computer engineering.
          </p>
        </div>
        <div class="about-visual">
          <img src="static/about-me-pic.png" alt="About Me Pic" />
        </div>
      </div>
    `,
  },
  skills: {
    content: `
    <div class="content-block">
        <h4>My Skills</h4>
      </div>
      <div class="skill-grid">
        <article class="skill-card">
          <div class="skill-icon"><i class="fa-brands fa-raspberry-pi"></i></div>
          <h5>Raspberry Pi</h5>
          <ul>
            <li>Embedded Systems</li>
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
            <li>OneNote</li>
          </ul>
        </article>
      </div>
    `,
  },
  projects: {
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
    content: `
      <div class="content-block">
        <h4>Work Experience</h4>
      </div>
      <div class="timeline">
        <article class="timeline-item timeline-item-current">
          <span class="timeline-marker" aria-hidden="true"></span>
          <div class="timeline-card">
            <div class="timeline-header">
              <div>
                <span class="timeline-status">Current role</span>
                <h4>Insurance Processor</h4>
              </div>
              <span class="timeline-company">Accenture</span>
            </div>
            <div class="timeline-meta">
              <i class="fa-regular fa-calendar"></i>
              <span>April 2026 - Present</span>
            </div>
            <ul>
              <li>Verified health and dental insurance eligibility by evaluating submitted legal documentation from corporate clients and enrolling employees.</li>
              <li>Developed a custom Excel automation tool tailored to the workflow, significantly boosting processing speed and reducing errors.</li>
            </ul>
          </div>
        </article>
        <article class="timeline-item">
          <span class="timeline-marker" aria-hidden="true"></span>
          <div class="timeline-card">
            <div class="timeline-header">
              <div>
                <span class="timeline-status">Internship</span>
                <h4>Computer Engineering Intern</h4>
              </div>
              <span class="timeline-company">University of Santo Tomas-Legazpi</span>
            </div>
            <div class="timeline-meta">
              <i class="fa-regular fa-calendar"></i>
              <span>March 2025 - May 2025</span>
            </div>
            <ul>
              <li>Provided technical support and troubleshooting for organization-wide hardware and software.</li>
              <li>Resolved network and device issues, including printer maintenance, preventive care, and system configurations.</li>
            </ul>
          </div>
        </article>
      </div>
    `,
  },
  certificates: {
    content: `
      <div class="content-block">
        <h4>Certificates</h4>
      </div>
      <div id="certificate-grid" class="certificate-grid">
    `,
  },
  contact: {
    content: `
      <div class="contact-intro">
        <div class="contact-intro-copy">
          <span class="contact-kicker">Let's connect</span>
          <h4>Contact Me</h4>
          <p>Have a project, opportunity, or technical question? Send a message and I'll get back to you as soon as I can.</p>
        </div>
        <div class="contact-status">
          <i class="fa-solid fa-signal"></i>
          <span>Open to opportunities</span>
        </div>
      </div>
      <div class="contact-grid">
        <article class="contact-card">
          <div class="contact-card-icon"><i class="fa-solid fa-envelope"></i></div>
          <div>
            <strong>Primary Email</strong>
            <span class="contact-card-label">Best for direct inquiries</span>
          </div>
          <p><a href="mailto:estorga.carlmathew11@outlook.com">estorga.carlmathew11@outlook.com</a></p>
        </article>
        <article class="contact-card">
          <div class="contact-card-icon"><i class="fa-solid fa-at"></i></div>
          <div>
            <strong>Secondary Email</strong>
            <span class="contact-card-label">A second way to reach me</span>
          </div>
          <p><a href="mailto:estorgacarlmathew@gmail.com">estorgacarlmathew@gmail.com</a></p>
        </article>
        <article class="contact-card">
          <div class="contact-card-icon"><i class="fa-solid fa-location-dot"></i></div>
          <div>
            <strong>Location</strong>
            <span class="contact-card-label">Based in the Philippines</span>
          </div>
          <p>Pasay City, Philippines</p>
        </article>
        <article class="contact-card">
          <div class="contact-card-icon"><i class="fa-solid fa-code"></i></div>
          <div>
            <strong>Available for</strong>
            <span class="contact-card-label">Let's build something useful</span>
          </div>
          <p>Entry-level positions in Data Analysis, Junior System Administration, and General IT work.</p>
        </article>
      </div>
      <form class="contact-form" action="https://formsubmit.co/estorga.carlmathew11@outlook.com" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <div class="contact-form-heading">
          <div>
            <span class="contact-kicker">Message desk</span>
            <h5>Start a conversation</h5>
          </div>
          <i class="fa-regular fa-paper-plane"></i>
        </div>
        <div class="form-row">
          <label class="form-field">
            <span>Name <small>Optional</small></span>
            <input type="text" name="name" placeholder="Your name" class="form-input" />
          </label>
          <label class="form-field">
            <span>E-mail address</span>
            <input type="email" name="email" placeholder="you@example.com" class="form-input" required />
          </label>
        </div>
        <label class="form-field">
          <span>Subject</span>
          <input type="text" name="subject" placeholder="What would you like to discuss?" class="form-input" required />
        </label>
        <label class="form-field">
          <span>Message</span>
          <textarea name="message" placeholder="Tell me a little about it..." rows="4" class="form-textarea" required></textarea>
        </label>
        <button type="submit" class="submit-button">
          <span>Send message</span>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
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
    tags: ["Machine Learning", "Robotics", "Embedded Systems", "Electronics"],
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
    tags: ["Robotics", "Electronics"],
    images: [
      "static/img/projects/4.jpg", 
      "static/img/projects/4-a.jpg"
    ]
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
    tags: ["Microsoft Excel"],
    images: [
      "static/img/projects/6.png",
      "static/img/projects/6-a.png",
      "static/img/projects/6-b.png"
    ]
  },  
  {
    title: "File Organizer App",
    description: "Desktop application for sorting and managing files by type and folder.",
    github: "https://github.com/Matchu02118/file_organizer",
    tags: ["Apps"],
    images: [
      "static/img/projects/2.jpg",
      "static/img/projects/2-b.jpg",
      "static/img/projects/2-c.jpg"
    ]
  },
  {
    title: "Scientific Calculator App",
    description: "A MATLAB-based Casio fx-100MS style calculator for math and engineering workflows.",
    tags: ["Apps"],
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
const backToHeroButton = document.getElementById("back-to-hero");
const imageModal = document.getElementById("image-modal");
const imageModalImg = document.getElementById("image-modal-img");
const imageModalCaption = document.getElementById("image-modal-caption");
const imageModalDescription = document.getElementById("image-modal-description");
const imageModalClose = document.getElementById("image-modal-close");
const projectModal = document.getElementById("project-modal");
const projectModalImage = document.getElementById("project-modal-img");
const projectModalThumbnails = document.getElementById("project-modal-thumbnails");
const projectModalThumbnailsPrev = document.getElementById("project-modal-thumbnails-prev");
const projectModalThumbnailsNext = document.getElementById("project-modal-thumbnails-next");
const projectModalCaption = document.getElementById("project-modal-caption");
const projectModalTags = document.getElementById("project-modal-tags");
const projectModalDescription = document.getElementById("project-modal-description");
const projectModalGithub = document.getElementById("project-modal-github");
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
          <div class="certificate-image-wrap">
            <img src="${cert.image}" alt="${cert.alt}" />
            <button class="card-expand-button" type="button" aria-label="Open certificate preview">
              <i class="fa-solid fa-expand"></i>
            </button>
          </div>
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
      <button class="card-expand-button" type="button" aria-label="Open project preview">
        <i class="fa-solid fa-expand"></i>
      </button>
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
  projectModalThumbnails.innerHTML = project.images
    .map(
      (image, index) => `
        <button type="button" class="project-modal-thumbnail ${index === imageIndex ? "active" : ""}" data-image-index="${index}" aria-label="View image ${index + 1}">
          <img src="${image}" alt="${project.title} image ${index + 1}" />
        </button>
      `
    )
    .join("");
  projectModalThumbnails.querySelectorAll(".project-modal-thumbnail").forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      selectProjectModalImage(Number(thumbnail.dataset.imageIndex));
    });
  });
  const hasThumbnailNavigation = project.images.length >= 4;
  projectModalThumbnailsPrev.style.display = hasThumbnailNavigation ? "grid" : "none";
  projectModalThumbnailsNext.style.display = hasThumbnailNavigation ? "grid" : "none";
  projectModalTags.innerHTML = (project.tags || [])
    .map((tag) => `<span class="project-modal-tag">${tag}</span>`)
    .join("");
  projectModalDescription.textContent = project.description;
  projectModalGithub.href = project.github || "#";
  projectModalGithub.style.display = project.github ? "inline-flex" : "none";

  projectModal.classList.add("open");
}

function selectProjectModalImage(imageIndex) {
  const project = projectData[currentProjectModalIndex];
  if (!project || imageIndex < 0 || imageIndex >= project.images.length) return;

  currentProjectModalImageIndex = imageIndex;
  projectModalImage.style.opacity = "0";
  setTimeout(() => {
    projectModalImage.src = project.images[imageIndex];
    projectModalImage.style.opacity = "1";
  }, 250);

  projectModalThumbnails.querySelectorAll(".project-modal-thumbnail").forEach((thumbnail, index) => {
    thumbnail.classList.toggle("active", index === imageIndex);
  });
}

function changeProjectModalImage(step) {
  const project = projectData[currentProjectModalIndex];
  if (!project || project.images.length <= 1) return;
  const nextIndex = (currentProjectModalImageIndex + step + project.images.length) % project.images.length;
  selectProjectModalImage(nextIndex);
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
  document.querySelector(".dynamic-shell")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

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
if (projectModalThumbnailsPrev) {
  projectModalThumbnailsPrev.addEventListener("click", () => {
    projectModalThumbnails.scrollBy({ left: -140, behavior: "smooth" });
  });
}
if (projectModalThumbnailsNext) {
  projectModalThumbnailsNext.addEventListener("click", () => {
    projectModalThumbnails.scrollBy({ left: 140, behavior: "smooth" });
  });
}
if (projectModal) {
  projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal || event.target.dataset.closeModal !== undefined) {
      closeProjectModal();
    }
  });
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

backToHeroButton?.addEventListener("click", () => {
  document.querySelector(".hero-panel")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

setActiveSection("about");

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
  pdfModal.classList.add("show");
  pdfLoading.classList.remove("error");
  pdfLoading.textContent = "Loading...";
  pdfLoading.classList.add("show");

  try {
    pdfDoc = await pdfjsLib.getDocument(url).promise;
    pdfTotalPages.textContent = pdfDoc.numPages;
    currentPage = 1;
    currentZoom = window.innerWidth <= 720 ? 1.05 : 1.5;
    
    await renderPage(1);
    pdfLoading.classList.remove("show");
  } catch (error) {
    console.error("Error loading PDF:", error);
    pdfLoading.textContent = "Unable to load the resume. Please close this window and try again.";
    pdfLoading.classList.add("error");
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
