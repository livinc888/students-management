import { Repository } from 'typeorm';
import { Student } from './student.entity';
export declare class StudentsService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    findAll(): Promise<Student[]>;
    create(student: any): Promise<any>;
    update(id: any, student: any): Promise<import("typeorm").UpdateResult>;
    remove(id: any): Promise<import("typeorm").DeleteResult>;
}
