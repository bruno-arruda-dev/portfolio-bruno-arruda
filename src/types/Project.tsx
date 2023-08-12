export interface IProject {
  key?: string | number;
  name: string;
  description: string;
  github?: string;
  homepage?: string;
  image?: string;
  stacks: string[];
  handleUpdateSelectedProject?: (name: string) => void;
}