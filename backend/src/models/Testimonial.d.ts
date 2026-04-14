import { Model } from 'sequelize';
export declare class Testimonial extends Model {
    id: string;
    clientName: string;
    clientCompany?: string;
    rating: number;
    message: string;
    projectId?: string;
}
export default Testimonial;
//# sourceMappingURL=Testimonial.d.ts.map