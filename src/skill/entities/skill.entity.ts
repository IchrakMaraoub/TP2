import { Cv } from "src/cv/entities/cv.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('SKILL')
export class Skill {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    designation: string;
    @ManyToMany(
    type => Cv,
    (CV) =>CV.skills,
    )
    cvs:Cv[];
  
}
