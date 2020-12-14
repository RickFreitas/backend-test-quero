import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Course } from './course.entity';

@Entity()
export class Campus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  city: string;

  @OneToMany(() => Course, (course) => course.campus)
  course: Course[];
}
