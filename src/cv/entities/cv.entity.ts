import { userInfo } from "os";
import { Skill } from "src/skill/entities/skill.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('CV')
export class Cv {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column()
    Age: number;
    @Column()
    Cin: String;

    @Column()
    Job: String;

    @Column()
    Path: String;
    @ManyToOne(
        type => User,
        (USER) => USER.cvs)
    user:User
    @ManyToMany(
        type => Skill,
        (SKILL) =>SKILL.cvs,

    )
    skills:Skill[];

}
