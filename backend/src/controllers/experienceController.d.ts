import type { Request, Response } from 'express';
export declare const getAllExperience: (req: Request, res: Response) => Promise<void>;
export declare const createExperience: (req: Request, res: Response) => Promise<void>;
export declare const updateExperience: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteExperience: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=experienceController.d.ts.map