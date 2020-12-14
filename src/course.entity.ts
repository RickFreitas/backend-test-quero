import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { University } from './university.entity';
import { Campus } from './campus.entity';
import { Offer } from './offer.entity';

@Entity()
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

  @OneToMany(() => Offer, (offer) => offer.course)
  offer: Offer[];
}
