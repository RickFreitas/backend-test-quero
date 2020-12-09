import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { University } from './university.entity';
import { Campus } from './campus.entity';

@Entity({ name: 'courses' })
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  kind: string;

  @Column()
  level: string;

  @Column()
  shift: string;

  @ManyToOne(() => University, (university) => university.course)
  university: University;

  @ManyToOne(() => Campus, (campus) => campus.course)
  campus: Campus;
}
