import { NestFactory } from "@nestjs/core";
import { randEmail, randFilePath, randJobTitle, randLastName, randNumber, randPassword, randSequence, randSkill, randUserName } from "@ngneat/falso";
import { AppModule } from "./app.module";
import { CvService } from "./cv/cv.service";
import { Cv } from "./cv/entities/cv.entity";
import { Skill } from "./skill/entities/skill.entity";
import { SkillService } from "./skill/skill.service";
import { User } from "./user/entities/user.entity";
import { UserService } from "./user/user.service";

async function bootstrap () {
    const app = await NestFactory.createApplicationContext(AppModule);
    const userService = app.get(UserService);
    const cvService = app.get(CvService);
    const skillService = app.get(SkillService);
    for (let i=0;i<10;i++){
        const newUser = new User();
        newUser.UserName = randUserName();
        newUser.Email = randEmail();
        newUser.Password = randPassword();
        await userService.addUser(newUser);

        const newCv = new Cv();
        newCv.firstName = randLastName();
        newCv.lastName = randLastName();
        newCv.Age = randNumber();
        newCv.Cin = randSequence();
        newCv.Job = randJobTitle();
        newCv.Path = randFilePath();
        await cvService.addCv(newCv);
        
        const newSkill = new Skill();
        newSkill.designation = randSkill();
        await skillService.addSkill(newSkill);
        newSkill.cvs = [newCv];
    }
    await app.close();
}
bootstrap();


