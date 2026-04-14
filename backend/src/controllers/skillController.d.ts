import type { Request, Response } from 'express';
export declare const getAllSkills: (req: Request, res: Response) => Promise<void>;
export declare const createSkill: (req: Request, res: Response) => Promise<void>;
export declare const updateSkill: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteSkill: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=skillController.d.ts.map