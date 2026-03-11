import { StudentsService } from './students/students.service';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    findAll(): Promise<import("./students/student.entity").Student[]>;
    create(student: any): Promise<any>;
    update(id: number, student: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
