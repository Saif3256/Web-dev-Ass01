

const data = {
    aboutMe: {
        en: "I am Saif Riaz, a passionate developer with a strong foundation in full-stack web development, cloud computing, and artificial intelligence. My journey in technology has fueled my desire to create efficient, scalable, and user-friendly applications. I thrive in collaborative environments, where I can combine my problem-solving skills with creativity to bring innovative ideas to life. Constantly seeking to learn and grow, I am dedicated to making a meaningful impact through my work in the tech industry.",
        ur: "میں سیف ریاض ہوں، ایک پرجوش ڈویلپر جس کی بنیاد فل اسٹیک ویب ڈویلمنٹ، کلاؤڈ کمپیوٹنگ اور مصنوعی ذہانت میں مضبوط ہے۔ ٹیکنالوجی میں میرا سفر موثر، قابل توسیع اور صارف دوست ایپلیکیشنز بنانے کی میری خواہش کو آگے بڑھا چکا ہے۔میں سیف ریاض ہوں، مکمل اسٹیک ویب ڈویلپمنٹ، کلاؤڈ کمپیوٹنگ، اور مصنوعی ذہانت میں مضبوط بنیاد کے ساتھ ایک پرجوش ڈویلپر ہوں۔ ٹکنالوجی میں میرے سفر نے موثر، توسیع پذیر، اور صارف دوست ایپلی کیشنز بنانے کی میری خواہش کو ہوا دی ہے۔ میں باہمی تعاون کے ماحول میں ترقی کرتا ہوں، جہاں میں اپنے مسائل کو حل کرنے کی صلاحیتوں کو تخلیقی صلاحیتوں کے ساتھ جوڑ کر اختراعی خیالات کو زندہ کر سکتا ہوں۔ مسلسل سیکھنے اور بڑھنے کی کوشش میں، میں ٹیک انڈسٹری میں اپنے کام کے ذریعے بامعنی اثر ڈالنے کے لیے وقف ہوں۔",
        fr: "Je m'appelle Saif Riaz, un développeur passionné avec de solides bases dans le développement Web full-stack, le cloud computing et l'intelligence artificielle. Mon parcours technologique a alimenté mon désir de créer des applications efficaces, évolutives et conviviales. Je m'épanouit dans des environnements collaboratifs, où je peux combiner mes compétences en résolution de problèmes avec ma créativité pour donner vie à des idées innovantes. Cherchant constamment à apprendre et à grandir, je m'engage à avoir un impact significatif grâce à mon travail dans l'industrie technologique.",
        ar: "أنا سيف رياض، مطور متحمس ولدي أساس قوي في تطوير الويب الشامل والحوسبة السحابية والذكاء الاصطناعي. لقد عززت رحلتي في مجال التكنولوجيا رغبتي في إنشاء تطبيقات فعالة وقابلة للتطوير وسهلة الاستخدام. أنا أزدهر في البيئات التعاونية، حيث يمكنني الجمع بين مهاراتي في حل المشكلات والإبداع لجلب الأفكار المبتكرة إلى الحياة. أسعى باستمرار للتعلم والنمو، وأنا ملتزم بإحداث تأثير مفيد من خلال عملي في صناعة التكنولوجيا."
    },
    skills: [
        { title: "Communication", description: "Strong communication skills, both written and verbal." },
        { title: "Problem-solving", description: "Ability to analyze problems and find effective solutions." },
        { title: "Teamwork", description: "Collaborates effectively in team environments." },
        { title: "Python Programming", description: "Proficient in Python with experience in data analysis and scripting." },
        { title: "Data Structures & Algorithms", description: "Deep understanding of algorithms, time complexity, and optimization." },
        { title: "Web Development", description: "Experienced in full-stack web development (HTML, CSS, JS, React, etc.)." }
    ],
    projects: [
        { title: "Blockchain System", description: "A blockchain-based system that ensures secure data sharing and storage.", img: "Images/Card-1.png", date: "August 2024" },
        { title: "Client-Server Application", description: "A C-based application to manage file storage and client-server communication.", img: "Images/Card-2.png", date: "September 2024" },
        { title: "Linked List Manager", description: "A C++ program to perform various linked list operations such as reverse, sum, etc.", img: "Images/Card-3.png", date: "July 2024" }
    ],
    certifications: [
        { title: "Certified Data Analyst", description: "Completed certification in data analysis from Coursera in 2023.", img: "Images/Card-4.png" },
        { title: "Python Specialization", description: "Finished Udemy course on Python fundamentals in 2023.", img: "Images/Card-5.png" },
        { title: "Machine Learning", description: "Learned Machine Learning through Coursera in 2024.", img: "Images/Card-6.png" }
    ],
    education: "Bachelor's Degree in Computer Science – Information Technology University (2022-2026)",
    
};
document.addEventListener('DOMContentLoaded', () => {
    // Get the language select element
    const languageSelect = document.getElementById('language-select');
    
    const aboutTextElement = document.getElementById('about-text');
    const skillsContainer = document.getElementById('skills-container');
    const projectsContainer = document.getElementById('projects-container');
    const certificationsContainer = document.getElementById('certifications-container');
    const educationElement = document.getElementById('education-content');
    const videoContainer = document.getElementById('video-container');

    // Function to update about text based on selected language
    function updateAboutText(language) {
        aboutTextElement.textContent = data.aboutMe[language];
    }

    // Initial load with default language (English in this case)
    updateAboutText(languageSelect.value);

    // Language change event
    languageSelect.addEventListener('change', () => {
        updateAboutText(languageSelect.value);
    });

    // Populate Skills
    data.skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.classList.add('card');
        skillCard.innerHTML = `
            <div class="card-content">
                <h3>${skill.title}</h3>
                <p>${skill.description}</p>
            </div>
        `;
        skillsContainer.appendChild(skillCard);
    });

    // Populate Projects
    data.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('card');
        projectCard.innerHTML = `
            <img src="${project.img}" alt="${project.title}">
            <div class="card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span class="date-time">${project.date}</span>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Populate Certifications
    data.certifications.forEach(certification => {
        const certCard = document.createElement('div');
        certCard.classList.add('card');
        certCard.innerHTML = `
            <img src="${certification.img}" alt="${certification.title}">
            <div class="card-content">
                <h3>${certification.title}</h3>
                <p>${certification.description}</p>
            </div>
        `;
        certificationsContainer.appendChild(certCard);
    });

    // Populate Education
    educationElement.textContent = data.education;
});
