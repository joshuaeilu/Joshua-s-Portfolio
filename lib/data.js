

export const navElements = ["About","Projects","Skills","Testimonials","Contact"];

export const myTestimonials = [

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
          title: "Your Grandma's Cookbook",
          description: "Your Grandma's Cookbook is a web app built with Next.js and React.js that lets users explore a collection of family recipes. The app is designed to bring the comfort and nostalgia of homemade meals, with each recipe featuring easy-to-follow instructions and ingredient lists.",
          image: "/gmcb.png",
          technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Shadcdn"],
          github: "https://github.com/joshuaeilu/grandmas-cookbook-release",
          demo: "https://grandmas-cookbook-release.vercel.app/"
        },
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
       
      ]
    }
  };
export const projectTypes = Object.keys(projects);

  

  
