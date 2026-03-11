import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {

  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  findAll() {
    return this.studentRepository.find();
  }

  create(student) {
    return this.studentRepository.save(student);
  }

  update(id, student) {
    return this.studentRepository.update(id, student);
  }

  remove(id) {
    return this.studentRepository.delete(id);
  }

}