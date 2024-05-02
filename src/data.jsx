import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
} from 'react-icons/fa';


import Work1 from './assets/travel.png';
import Work2 from './assets/modal.png';
import Work3 from './assets/pitsa.png';
import Work4 from './assets/saul.png';
import Work5 from './assets/magazin.png'


export const links = [
  {
    id: 1,
    name: 'Asosiy',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Haqida',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfel',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Aloqa',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Ism : ',
    description: 'Salohidin',
  },

  {
    id: 2,
    title: 'Familiya : ',
    description: 'Saloydinov',
  },

  {
    id: 3,
    title: 'Yosh : ',
    description: 15,
  },

  {
    id: 4,
    title: 'Millati : ',
    description: "O'zbek",
  },
  {
    id: 5,
    title: 'Manzil : ',
    description: 'Andijon viloyati Marhmat tumani',
  },

  {
    id: 6,
    title: 'Telefon : ',
    description: '+998 97-995-02-32',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'thesalohidin@gmail.com',
  },

  {
    id: 8,
    title: 'telegram : ',
    description: '@salokhidinov09',
  },

  {
    id: 10,
    title: 'Til : ',
    description: "O'zbek",
  },
];

export const stats = [
  {
    id: 1,
    no: '6 oy',
    title: 'Tajriba',
  },

  {
    id: 2,
    no: '2',
    title: "Tugallangan <br /> Loyihalar",
  },
];
export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '85',
  },
  {
    id: 3,
    title: 'Css',
    percentage: '75',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '60',
  },

  {
    id: 4,
    title: 'React',
    percentage: '60',
  },
];
export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024 - Hozirgi',
    title: "Hozirda maktabda o'quvchiman <span> 32-maktab </span>",
    desc: "Maktabda o'qishdan  tashqari veb dasturlash bilan shug'ullanaman",
  },
  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023-2024',
    title: 'Frontend <span> dasturlash boyicha </span>',
    desc: " Hozirda 31-Maktabda Front-End dasturlashdan tajribali mentorlardan bilim va tajriba o'rganyabman",
  },
  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022-2023',
    title: " Matematika fani bilan shug'ulanganman <span> Marhamat TURON oquv markazida </span>",
    desc: "O'qishdan tashqari ustachilik bilan shug'illanaman",
  },
  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    title: "Onlayn ta'lim",
    desc: 'Google, w3schoolsrus.github.io, youtube, sammi.ac-- platformalari',
  },
];
export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Traveleja - HTML , CSS',
    app :"https://travelaja-eight.vercel.app/"
  }
  ^
  {
    id: 2,
    img: Work2,
    title: 'Modal - REACT',
    app :"https://modal-lilac.vercel.app/"

  },
  {
    id: 3,
    img: Work3,
    title: 'Context',
    app :"https://my-react-context-mode-app-sv1w.vercel.app/"

  },

  {
    id: 4,
    img: Work4,
    title: 'Creative UI Deasigner - React Js',
    app :"https://ui-designer-virid.vercel.app/"
  },
  {
    id:5,
    img:Work5,
    title:'React-Internet-Magazin',
    app:"https://internet-magazin-eta.vercel.app/"
  }
];
