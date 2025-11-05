const navbutton = document.querySelector("#ham-btn");
const navlinks = document.querySelector("#nav-bar");

navbutton.addEventListener("click", () => {
    navbutton.classList.toggle("show");
    navlinks.classList.toggle("show");
});
const today = new Date();
const year = today.getFullYear();
document.querySelector("#date").textContent = `© ${year} 🌲 Moses John Godwin 🌲 Lagos, Nigeria`

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modified: ${lastModified}`;


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    }
]

// ======== DOM ELEMENTS ========
const container = document.querySelector(".parent");
const allBtn = document.querySelector("#all-btn");
const wddBtn = document.querySelector("#wdd-btn");
const cseBtn = document.querySelector("#cse-btn");

// ======== FUNCTION TO DISPLAY COURSES ========
function displayCourses(courseList) {
    container.innerHTML = ""; // Clear previous content

    courseList.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course-card");

        // Completed courses get a special background
        courseDiv.style.backgroundColor = course.completed ? "lightgreen" : "lightcoral";
        courseDiv.style.border = "1px solid var(--accent1)";
        courseDiv.style.padding = "10px";
        courseDiv.style.borderRadius = "8px";
        courseDiv.style.marginBottom = "10px";

        courseDiv.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p><b>Credits:</b> ${course.credits}</p>
            <p><b>Certificate:</b> ${course.certificate}</p>
            <p><b>Description:</b> ${course.description}</p>
            <p><b>Technologies:</b> ${course.technology.join(", ")}</p>
            <p><b>Status:</b> ${course.completed ? "✅ Completed" : "❌ Not Completed"}</p>
        `;

        container.appendChild(courseDiv);
    });
}

// ======== FILTER FUNCTIONS ========
allBtn.addEventListener("click", () => displayCourses(courses));
wddBtn.addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "WDD")));
cseBtn.addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "CSE")));

// ======== INITIAL DISPLAY ========
displayCourses(courses);