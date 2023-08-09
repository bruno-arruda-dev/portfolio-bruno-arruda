import { IProject } from "../../types/Project"

  export const projects: Record<string, IProject> = {
    otica: {
      name: 'Loja de Óculos',
      description: 'Projeto desenvolvido para uma loja de óculos.',
      github: 'https://github.com/bruno-arruda-dev/loja-de-oculos',
      homepage: 'https://oculos-chi.vercel.app',
      image: '../images/projects/otica.jpeg',
      stacks: ['react', 'javascript']
    },
    sorveteria: {
      name: 'Sorveteria',
      description: 'Projeto desenvolvido para uma sorveteria.',
      github: 'https://github.com/bruno-arruda-dev/sorveteria',
      homepage: 'https://sorveteria-olive.vercel.app',
      image: '../images/projects/otica.jpeg',
      stacks: ['react', 'javascript']
    }
  };
  