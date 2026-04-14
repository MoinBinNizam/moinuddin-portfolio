import { Model } from 'sequelize';
export declare class Project extends Model {
    id: string;
    title: string;
    category: 'ERP' | 'POS' | 'WordPress' | 'React';
    description: string;
    techStack: string[];
    imageUrl?: string;
    liveLink?: string;
    githubLink?: string;
}
export default Project;
//# sourceMappingURL=Project.d.ts.map