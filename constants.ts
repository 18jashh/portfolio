import { Project, Skill, ExperienceItem } from './types';

export const PROJECTS: Project[] = [
  {
    title: 'CampusConnect',
    category: 'Design',
    description: 'An app that streamlines student–faculty communication through announcements, events, and chat systems.',
    details: [
      'Designed a user-centric interface that simplifies navigation and information discovery for students and faculty.',
      'Developed high-fidelity prototypes to test and validate communication flows and user interactions.',
      'Focused on creating a clean, accessible UI that reduces clutter and improves the overall user experience.'
    ],
    takeaways: [
        'Learned the importance of user feedback in iterating on UI designs.',
        'Gained experience in creating scalable design systems in Figma.',
        'Understood the challenges of designing for multiple user roles (students vs. faculty).'
    ],
    role: 'Designer & Prototype Developer',
    tools: 'Figma, Flutter (concept)',
    focus: 'Intuitive communication flow and clean UI',
    imageUrl: 'https://assets.skyfilabs.com/images/blog/good-computer-science-projects-for-beginners.webp',
    liveUrl: 'https://example.com/campusconnect',
  },
  {
    title: 'KickoffPro',
    category: 'Design',
    description: 'Helps coaches and players manage team schedules and performance stats.',
    details: [
        'Conducted user research with players and coaches to identify key pain points in team management.',
        'Designed intuitive dashboards for tracking performance metrics and managing schedules.',
        'Created wireframes and prototypes to visualize the user journey and improve collaboration features.'
    ],
    takeaways: [
        'Emphasized data visualization to make complex stats easy to understand.',
        'Improved skills in user research and synthesizing feedback into actionable design changes.',
    ],
    role: 'UI/UX Designer & Researcher',
    tools: 'Figma, Miro',
    focus: 'Improving scheduling flow and collaboration experience',
    imageUrl: 'https://www.atees.org/blog/wp-content/uploads/2019/06/shutterstock-1199480788.png',
    liveUrl: 'https://example.com/kickoffpro',
  },
  {
    title: 'TurfNation',
    category: 'Design',
    description: 'A platform for players to book turfs and organize local matches.',
    details: [
        'Simplified the booking process into a few simple steps, reducing user friction.',
        'Designed a sporty and energetic interface that aligns with the target audience.',
        'Developed a component-based design system in Figma for consistency and scalability.'
    ],
    takeaways: [
        'Focused on mobile-first design to cater to users booking on the go.',
        'Learned to balance a vibrant, energetic UI with clear, intuitive usability.'
    ],
    role: 'UX/UI Designer',
    tools: 'Figma, Adobe XD',
    focus: 'Simplifying booking flow and creating a sporty, energetic interface',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShD_A_KeNpryyWok2qinVo6nTo0elEe0T0Sg&s',
    liveUrl: 'https://example.com/turfnation',
  },
  {
    title: 'Restorely',
    category: 'Tech',
    description: 'A web app for buying and selling refurbished devices with trust and transparency.',
    details: [
        'Designed a trustworthy and transparent user interface for buying and selling refurbished electronics.',
        'Developed a responsive front-end concept using HTML and CSS, focusing on clarity and ease of use.',
        'Implemented features like device grading and seller reviews to build user confidence.'
    ],
    takeaways: [
        'Gained hands-on experience with responsive web design using HTML and CSS.',
        'Understood the importance of building user trust through transparent UI elements.',
    ],
    role: 'Product Designer & Frontend Developer (concept)',
    tools: 'Figma, HTML, CSS',
    focus: 'Trust, clarity, and responsive layouts',
    imageUrl: 'https://timesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com/Blog_Page_On_Computer_Science_Project_Ideas_ae8cbb3736.webp',
    githubUrl: 'https://github.com/18jashh',
    liveUrl: 'https://example.com/restorely',
  },
  {
    title: 'Habitify',
    category: 'Tech',
    description: 'A minimalist app to help users track and build healthy habits.',
    details: [
        'Designed a clean, minimalist user experience to help users focus on building habits.',
        'Conceptualized a motivational system with daily streaks and visual rewards.',
        'Prototyped the core functionality and user interface using Figma.'
    ],
    takeaways: [
        'Explored principles of behavioral design to encourage user engagement and motivation.',
        'Learned to prioritize features for a Minimum Viable Product (MVP) concept.',
    ],
    role: 'Concept Designer & Developer',
    tools: 'Figma, React Native (concept)',
    focus: 'Clean UX, motivational visuals, and daily streak system',
    imageUrl: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/125619170/original/0fe954169f6b297c529814fe6d672d3c1b35fb61/do-projects-related-to-computer-science.jpg',
    githubUrl: 'https://github.com/18jashh',
    liveUrl: 'https://example.com/habitify',
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'Design',
    items: ['UI/UX Design', 'Prototyping', 'Visual Design', 'Wireframing', 'User Research'],
  },
  {
    category: 'Development',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React (basic)', 'Tailwind CSS'],
  },
  {
    category: 'Tools',
    items: ['Figma', 'Adobe XD', 'GitHub', 'VS Code', 'Notion', 'Miro'],
  },
  {
    category: 'Soft Skills',
    items: ['Problem-solving', 'Team Collaboration', 'Creativity', 'Communication'],
  },
];

export const EDUCATION: ExperienceItem[] = [
    {
        title: 'B.Tech in Computer Engineering',
        institution: 'K. K. Wagh College of Engineering, Nashik',
        period: 'Expected 2026',
        description: [
            'Pursuing a Bachelor’s degree with interests in UI/UX design, web development, and digital product innovation.',
            'Building strong skills in both technical problem-solving and creative design thinking.'
        ]
    },
    {
        title: 'Higher Secondary Education (12th Grade – Science Stream)',
        institution: 'R. Y. K. College of Science, Nashik',
        period: 'Completed: 2022',
        description: [
            'Specialized in Physics, Chemistry, and Mathematics, developing analytical and logical reasoning abilities.'
        ]
    },
    {
        title: 'Secondary Education (10th Grade)',
        institution: 'Guru Gobind Singh Public School, Nashik',
        period: 'Completed: 2020',
        description: [
            'Developed an early interest in computers, creativity, and technology through school projects and competitions.'
        ]
    }
];

export const RESUME_HIGHLIGHTS = [
    'Strong foundation in both design principles and front-end development.',
    'Experienced in building high-fidelity prototypes and responsive user interfaces.',
    'A curious and quick learner with hands-on experience from diverse academic and personal projects.',
];

export const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/in/18jashgohil/',
    github: 'https://github.com/18jashh',
};