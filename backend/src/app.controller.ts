import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { StudentsService } from './students/students.service';

@Controller('students')
export class StudentsController {

  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Post()
  create(@Body() student: any) {
    return this.studentsService.create(student);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() student: any) {
    return this.studentsService.update(id, student);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.studentsService.remove(id);
  }

}