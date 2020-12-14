import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Course } from './course.entity';

@Entity()
export class University {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'float' })
  score: number;

  @Column()
  logo_url: string;

  @OneToMany(() => Course, (course) => course.university)
  course: Course[];
}
