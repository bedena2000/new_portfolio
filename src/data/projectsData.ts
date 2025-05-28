// Eccomerce-react
import eccomerce_1 from '@/assets/projects/ecommerce/ecommerce_1.png';
import eccomerce_2 from '@/assets/projects/ecommerce/ecommerce_2.png';
import eccomerce_3 from '@/assets/projects/ecommerce/ecommerce_3.png';
import eccomerce_4 from '@/assets/projects/ecommerce/ecommerce_4.png';
import eccomerce_5 from '@/assets/projects/ecommerce/ecommerce_5.png';
import eccomerce_6 from '@/assets/projects/ecommerce/ecommerce_6.png';

// Barbershop
import barbershop_1 from '@/assets/projects/barbershop/barbershop-1.png';
import barbershop_2 from '@/assets/projects/barbershop/barbershop-2.png';


import type { ProjectItem } from '@/types/index.ts';

export const projectsData: ProjectItem[] = [

  {
    id: 1,
    title: 'Project 1',
    projectName: '_eccomerce-react',
    description: 'Ecommerce project, when you can check items and add them to cart',
    images: [
      eccomerce_1,
      eccomerce_2,
      eccomerce_3,
      eccomerce_4,
      eccomerce_5,
      eccomerce_6
    ],
    url: 'eccomercetestreact.netlify.app',
    tags: ['javascript', 'React'],
    githubLink: 'https://github.com/bedena2000/ECommerce_React',
  },

  {
    id: 2,
    title: 'Project 2',
    projectName: '_barbershop',
    description: 'Barbershop project',
    images: [barbershop_1, barbershop_2],
    url: 'https://portfolio-barbershop.netlify.app/team',
    tags: ['javascript', 'HTML',]
  }



];