const profileData = 
{
    name: "Saif Riaz",
    languages: ["English", "العربية", "Français", "اردو"],
    skills: {
      softSkills: ["Communication", "Problem-solving", "Teamwork"],
      hardSkills: ["Python Programming", "Data Structures & Algorithms", "Web Development"]
    },
    projects: [
      { title: "Blockchain System", date: "2024-08-09" },
      { title: "Client-Server Application", date: "2024-09-11" },
      { title: "Linked List Manager", date: "2024-08-02" }
    ],
    certifications: [
      { name: "Certified Data Analyst", platform: "Coursera", year: 2023 },
      { name: "Blockchain Fundamentals", platform: "Udemy Academy", year: 2023 },
      { name: "Agile Methodologies", platform: "YouTube", year: 2024 }
    ],
    education: {
      degree: "Bachelor's Degree in Computer Science",
      university: "Information Technology University",
      years: "2022-2026",
      hackathons: [
        "Hackathon 2023 Winner – Smart City Solutions",
        "Side Project: Weather App (Python & Django)"
      ]
    },
    contact: {
      email: "saifriaz1234@gmail.com",
      phone: "03184478052",
      socialMedia: [
        { platform: "Instagram", url: "https://www.instagram.com/" },
        { platform: "GitHub", url: "https://github.com/Saif3256/Web-development-Assingment-1" }
      ]
    }
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    const data = profileData;
  
    document.querySelector(".profile-header h1").textContent = `Welcome to ${data.name}'s Professional Profile`;
  
    
    const languageSelector = document.querySelector(".language-selector");
    languageSelector.innerHTML = data.languages.map(lang => `<a href="?lang=${lang.toLowerCase()}">${lang}</a>`).join(" | ");
  
    
    document.querySelector(".soft-skills ul").innerHTML = data.skills.softSkills.map(skill => `<li>${skill}</li>`).join("");
    document.querySelector(".hard-skills ul").innerHTML = data.skills.hardSkills.map(skill => `<li>${skill}</li>`).join("");
  
    
    document.querySelector("#projects ul").innerHTML = data.projects.map(proj => `<li><strong>${proj.title}:</strong> <span>${proj.date}</span></li>`).join("");
  
    
    document.querySelector("#certifications ul").innerHTML = data.certifications.map(cert => `<li>${cert.name} – ${cert.platform} <span>(${cert.year})</span></li>`).join("");
  
   
    const educationSection = document.querySelector("#education");
    educationSection.innerHTML = `
      <h2 style="text-align: center;">Education</h2>
      <p>${data.education.degree} – ${data.education.university} <span>(${data.education.years})</span></p>
      <p>Hackathons & Side Projects</p>
      <ul>
        ${data.education.hackathons.map(hack => `<li>${hack}</li>`).join("")}
      </ul>
    `;
  
    
    const contactSection = document.querySelector(".contact-container");
    contactSection.innerHTML = `
      <h2>Contact</h2>
      <p>Email: ${data.contact.email}</p>
      <p>Phone no: ${data.contact.phone}</p>
      ${data.contact.socialMedia.map(social => `<a href="${social.url}" target="_blank">${social.platform}</a>`).join(" | ")}
    `;
  });
  