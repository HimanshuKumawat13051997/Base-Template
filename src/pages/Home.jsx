import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import CustomCursor from '../components/CustomCursor';
import Quote_Generator from '../components/Images/Quote_Generator.png';
import Todo_App from '../components/Images/Todo_App.png';
import Youtube from '../components/Images/Youtube.png';
import ResumeBuilder from '../components/Images/ResumeBuilder.png';
import EcommercePage from '../components/Images/EcommercePage.png';
import Repositorylisting from '../components/Images/Repositorylisting.png';
import EmployeeDashboard from '../components/Images/EmployeeDashboard.png';
import profileimage from '../components/Images/profileimage.png';
import aboutimage from '../components/Images/aboutimage.jpg';

function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = 'Himanshu Kumawat';
        setIsLoading(false);
        document.body.classList.remove('loaded');
    }, []);

    const user = {
        hero: {
            name: 'Himanshu Kumawat',
            strings: ['Web Developer', 'Gamer', 'Pharmacist'],
            avatar: profileimage,
        },
        about: {
            title: 'Web Developer',
            description:
                'As a MERN developer, I have honed my skills in JavaScript. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with others to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.',
            avatar: aboutimage,
        },
        projects: [
            {
                title: 'Quote Generator',
                description: 'Our quote generator app delivers daily doses of wisdom, motivation, and insight to elevate your day.',
                techStack: ['React', 'Tailwind'],
                image: Quote_Generator,
                link: 'https://advice-generator-silk-one.vercel.app/',
            },
            {
                title: 'Subscriber Management',
                description:
                    'The app provides a wat to find the subscriber through different end points and with the help of id. Wait for some time as server takes time to load.',
                techStack: ['Nodejs', 'Expressjs', 'Bootstrap'],
                image: Youtube,
                link: 'https://get-youtube-subscriber-4t0t.onrender.com/',
            },
            {
                title: 'Todo-App',
                description: 'Provides a seamless experience for task management. The app is reponsive and helps in managing your task perfectly.',
                techStack: ['React', 'Bootstrap', 'CSS', 'Local Storage'],
                image: Todo_App,
                link: 'https://todo-app-seven-theta-90.vercel.app/',
            },
            {
                title: 'Resume-Builder',
                description:
                    'The app provides different templates to make a perfect resume for professionals only. User can excess the made resumes and can download it.',
                techStack: ['React', 'Material UI', 'jsPDF', 'Local Storage', 'Redux'],
                image: ResumeBuilder,
                link: 'https://resume-builder-almabetter-gold.vercel.app/',
            },
            {
                title: 'Repository-Listing',
                description:
                    'Gives access to different user repository that are present on git RestAPI. Enter names like mojombo defunkt pjhyett wycats to get details of user',
                techStack: ['CSS', 'Vanilla Js', 'Bootstrap'],
                image: Repositorylisting,
                link: 'https://himanshukumawat13051997.github.io/Github-Repository-Listing/',
            },
            {
                title: 'Product Page',
                description:
                    'Simple product page that contains Navbar, crousel when clicked on images and cart that changes when increased or decreased',
                techStack: ['CSS', 'HTML', 'VanillaJs'],
                image: EcommercePage,
                link: 'https://ecommerce-product-page-main-weld.vercel.app/',
            },
            {
                title: 'Employee Dashboard',
                description: 'Simple Employee Dashboard made using React and Chartjs',
                techStack: ['React', 'Chartjs', 'CSS'],
                image: EmployeeDashboard,
                link: 'https://mockup-application-phi.vercel.app/',
            },
        ],
        skills: [
            {
                name: 'HTML',
                percentage: 85,
            },
            {
                name: 'CSS',
                percentage: 85,
            },
            {
                name: 'TailWindCSS',
                percentage: 90,
            },
            {
                name: 'Bootstrap',
                percentage: 70,
            },
            {
                name: 'React',
                percentage: 75,
            },
            {
                name: 'Nodejs',
                percentage: 75,
            },
            {
                name: 'Expressjs',
                percentage: 70,
            },
            {
                name: 'MongoDB',
                percentage: 73,
            },
            {
                name: 'Material UI',
                percentage: 70,
            },
            {
                name: 'Vanilla Js',
                percentage: 85,
            },
        ],
        contact: {
            address: 'Jhunjhunu, Rajasthan',
            contactEmail: 'himanshukumawat13051997@gmail.com',
            phoneNumber: 8619351178,
        },
    };

    return (
        <div>
            <CustomCursor />
            <Header />
            <Hero props={user.hero} />
            <About props={user.about} />
            <Skills props={user.skills} />
            <Projects props={user.projects} />
            {/* <Services props={filteredServices} /> */}
            {/* <Timeline props={user.timeline} /> */}
            {/* <Testimonial props={filteredTestimonials} /> */}
            <Contact props={user.contact} />
        </div>
    );
}

export default Home;
