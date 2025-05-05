import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Suraj",
  lastName: "Phirke",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Design Engineer",
  avatar: "/images/img.jpg",
  location: "Asia/india", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Surajphirke3/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/suraj-phirke/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:surajphirke3@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>WEB Developer & UI/UX designer </>,
  subline: (
    <>
      I'm Suraj, a design engineer at <InlineCode>India</InlineCode>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm Suraj Phirke a passionate full-stack web developer and UI/UX designer with a keen eye for detail and a love for creating smooth, user-centered digital experiences. I specialize in building modern, responsive websites and applications using technologies like HTML, CSS, JavaScript, and frameworks like Next.js. With a strong focus on both design and functionality, I aim to bring ideas to life through clean code and thoughtful design. I'm also a proactive learner and team player, always exploring new technologies and striving to grow in the ever-evolving world of tech.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Suraj Automation",
        timeframe: "2020 - Present",
        role: "junior Design Engineer 2020 - 2022, Design Engineer 2022 - dec 2024",
        achievements: [
          <>
            Designed and implemented a new user interface for the company's flagship product,
            resulting in a 25% increase in user satisfaction scores.
          </>,
          <>
            Collaborated with cross-functional teams to develop a design system that improved
            consistency across all digital products.
          </>,
        ],
        
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "N.S. MEDIA ",
        timeframe: "AUg 2023 - sept 2023 ",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Vidyavardhini's College of Engineering and Technology (2024 - 2027)",
        timeframe: "2024 - 2027",
        degree: "Bachelor of Engineering in Computer Engineering",
        description: <>Bachelor of Engineering in Artificial intelligence and Data Science.</>,
      },
      {
        name: "VIVA College of Diploma,Engineering & Technology (2021 - 2024)",
        description: <>Diploma In Computer Engineering.</>,
      },
      {
        name: "SMG English School (2011 - 2021)",
        description: <>1st To 10th </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Graphic Designing & UI/UX",
        // description: <>Figma, Adobe Photoshop, Adobe Illustrator, Corel Draw</>,
        description: <> Proficient in crafting engaging visuals and seamless user experiences across web and mobile platforms.<br /><br />
        <b>Graphic Designing Tools:</b><br />
        • Adobe Photoshop<br />
        • Adobe Illustrator<br />
        • CorelDRAW<br />
        • Canva<br /><br />
        <b>UI/UX Design Tools:</b><br />
        • Figma<br />
        • Adobe XD<br />
        • PenPot<br />
        
      </>,
                    
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "WEB Development",
        description: <> Experienced in building responsive, high-performance web applications with modern tech stacks.<br /><br />
        <b>Frontend Technologies:</b><br />
        • HTML5<br />
        • CSS3 <br />
        • JavaScript (ES6+)<br />
        • React.js<br />
        • Next.js<br />
        • Tailwind CSS<br /><br />
        <b>Backend Technologies:</b><br />
        • Node.js<br />
        • Express.js<br />
        • Django<br />
        • Firebase<br />
        <br />
        <b>Database & Tools:</b><br />
        • MongoDB<br />
        • Appwrite<br />
        • MySQL<br />
        • PostgreSQL<br />
        • Git & GitHub<br />
        • Vercel / Netlify / Render
      </>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img9.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img8.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img6.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
