import { Model } from 'sequelize';
export declare class Skill extends Model {
    id: string;
    name: string;
    category: 'Frontend' | 'Backend' | 'Tools';
    iconName?: string;
}
export default Skill;
//# sourceMappingURL=Skill.d.ts.map