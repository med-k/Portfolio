import { Skill } from './skill';
import { Link } from './link';
import { Language } from './language';
import { Education } from './education';
import { Experience } from './experience';
export class User {
  id!: number;
  name!: string;
  email!: string;
  picture!: string;
  about!: String;
  age!: number;
  address!: string;
  motivation!: string;
  educations: Education[] = [];
  languages: Language[] = [];
  experiences: Experience[] = [];
  links: Link[] = [];
  skills: Skill[] = [];
}
