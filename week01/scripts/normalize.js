const navbutton = document.querySelector("#ham-btn")
const navlinks = document.querySelector("#nav-bar")

navbutton.addEventListener("click", () => {
    navbutton.classList.toggle("show");
    navlinks.classList.toggle("show");
});

const today = new Date();
const year = today.getFullYear();
document.querySelector("#date").textContent = `© ${year} 🌲 Moses John Godwin 🌲 Nigeria`;
const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modified: ${lastModified}`


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
        completed: false
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
        completed: false
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
        completed: false
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
        completed: false
    }
]

// 1️⃣ Select existing elements from your HTML
const allBtn = document.querySelector(".one");
const cseBtn = document.querySelector(".two");
const wddBtn = document.querySelector(".three");
const parentDiv = document.querySelector(".parent");
const totalCredit = document.querySelector("#totalCredit");

// 2️⃣ Create a new div to hold courses dynamically
const courseContainer = document.createElement("div");
courseContainer.id = "courseContainer";
parentDiv.insertBefore(courseContainer, totalCredit); 
// This puts it just before the totalCredit <p> tag

// 3️⃣ Function to display courses dynamically
function displayCourses(courseList) {
    // Clear any old data
    courseContainer.innerHTML = "";

    // Loop through courses and create paragraphs
    courseList.forEach(course => {
        const p = document.createElement("p");
        p.textContent = `${course.subject} ${course.number} - ${course.title}`;

        // Highlight completed courses differently
        if (course.completed) {
            p.style.color = "green"; // You can use your site color here
            p.style.fontWeight = "bold";
        } else {
            p.style.color = "black";
        }

        courseContainer.appendChild(p);
    });

    // Calculate total credits
    const total = courseList.reduce((sum, course) => sum + course.credits, 0);
    totalCredit.textContent = `Total Credits: ${total}`;
}

// 4️⃣ Add event listeners to buttons
allBtn.addEventListener("click", () => displayCourses(courses));
cseBtn.addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "CSE")));
wddBtn.addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "WDD")));

// 5️⃣ Display all courses when page loads
displayCourses(courses);
