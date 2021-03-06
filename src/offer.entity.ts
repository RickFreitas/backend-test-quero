import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Course } from './course.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  fullPrice: number;

  @Column({ type: 'float' })
  price_with_discount: number;

  @Column({ type: 'float' })
  discount_percentage: number;

  @Column()
  start_date: string;

  @Column()
  enrollment_semester: string;

  @Column()
  enabled: boolean;

  @ManyToOne(() => Course, (course) => course.offer)
  course: Course;
}
