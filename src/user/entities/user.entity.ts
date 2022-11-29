import { CvService } from "src/cv/cv.service";
import { Cv } from "src/cv/entities/cv.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('USER')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    UserName: string;
  
    @Column()
    Email: string;
 
    @Column()
    Password: String;
    @OneToMany(
        type => Cv,
        (CV) =>CV.user,
    )
    cvs:Cv[];

}
