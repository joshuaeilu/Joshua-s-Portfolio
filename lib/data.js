

export const navElements = ["About","Projects","Skills","Testimonials","Contact"];

export const myTestimonials = [
  {
    name: "Alice Johnson",
    title: "Project Manager",
    testimonial: "Working with this team was an absolute pleasure. They delivered exceptional results on time and went above and beyond our expectations.",
    image: "https://example.com/images/alice.jpg",
    date: "2023-05-14"
  },
  {
    name: "Bob Smith",
    title: "Software Engineer",
    testimonial: "The level of professionalism and expertise displayed was outstanding. The project was handled with the utmost care and attention to detail.",
    image: "https://example.com/images/bob.jpg",
    date: "2023-06-22"
  },
  {
    name: "Catherine Lee",
    title: "Designer",
    testimonial: "Their creativity and innovation are second to none. They transformed our vision into a reality with stunning design and flawless execution.",
    image: "https://example.com/images/catherine.jpg",
    date: "2023-07-08"
  },
  {
    name: "David Brown",
    title: "CEO",
    testimonial: "The team’s commitment to excellence is evident in everything they do. They delivered a top-notch product that has significantly boosted our business.",
    image: "https://example.com/images/david.jpg",
    date: "2023-08-03"
  },
  {
    name: "Emily Davis",
    title: "Marketing Specialist",
    testimonial: "Their strategic insights and creative solutions have had a profound impact on our marketing efforts. We couldn’t be happier with the results.",
    image: "https://example.com/images/emily.jpg",
    date: "2023-09-12"
  }
];

export const projects = {
    "Web Development": {
      svg: <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="18" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
    </svg>,
      examples: [
        {
          title: "Personal Portfolio",
          description: "A personal portfolio website to showcase my projects and skills.",
          image: "/code_icon.png",
          technologies: ["HTML", "CSS", "JavaScript", "React"],
          github: "https://github.com/username/portfolio",
          demo: "https://username.github.io/portfolio"
        },
        {
          title: "E-commerce Website",
          description: "An online store for selling products with payment gateway integration.",
          image: "path/to/ecommerce-image.jpg",
          technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
          github: "https://github.com/username/ecommerce",
          demo: "https://username.github.io/ecommerce"
        }
      ]
    },
    "Mobile Development": {
      svg: <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>,
      examples: [
        {
          title: "Weather App",
          description: "A mobile app that shows current weather information based on user location.",
          image: "/josh_img.jpg",
          technologies: ["React Native", "Expo", "OpenWeatherMap API"],
          github: "https://github.com/username/weather-app",
          demo: "https://expo.io/@username/weather-app"
        },
        {
          title: "Fitness Tracker",
          description: "A mobile app to track fitness activities and monitor progress.",
          image: "path/to/fitness-tracker-image.jpg",
          technologies: ["Flutter", "Dart", "Firebase"],
          github: "https://github.com/username/fitness-tracker",
          demo: "https://username.github.io/fitness-tracker"
        }
      ]
    },
    "Coding Projects": {
      svg: <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>,
      examples: [
        {
          title: "Algorithm Visualizer",
          description: "A web application to visualize various algorithms and data structures.",
          image: "path/to/algorithm-visualizer-image.jpg",
          technologies: ["HTML", "CSS", "JavaScript"],
          github: "https://github.com/username/algorithm-visualizer",
          demo: "https://username.github.io/algorithm-visualizer"
        },
        {
          title: "Chat Application",
          description: "A real-time chat application with user authentication and chat rooms.",
          image: "path/to/chat-app-image.jpg",
          technologies: ["Node.js", "Socket.io", "Express", "MongoDB"],
          github: "https://github.com/username/chat-app",
          demo: "https://username.github.io/chat-app"
        }
      ]
    },
    "Tech Experience": {
      svg: <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>,
      examples: [
        {
          title: "Internship at Tech Corp",
          description: "Worked as a software development intern, contributing to various projects.",
          image: "path/to/internship-image.jpg",
          technologies: ["JavaScript", "React", "Node.js"],
          github: null,
          demo: null
        },
        {
          title: "Open Source Contribution",
          description: "Contributed to open source projects, fixing bugs and adding new features.",
          image: "path/to/open-source-image.jpg",
          technologies: ["Python", "Django", "JavaScript"],
          github: "https://github.com/username/open-source",
          demo: null
        }
      ]
    }
  };
export const projectTypes = Object.keys(projects);

  

  
