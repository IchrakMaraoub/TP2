import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { CommonModule } from './todo/commonModule/commonModule';
import { DiversModule } from './divers/divers.module';
import { TodoEntity } from './todo/entity/todoEntity';
import { CvModule } from './cv/cv.module';
import { Cv } from './cv/entities/cv.entity';
import { SkillModule } from './skill/skill.module';
import { UserModule } from './user/user.module';
import { Skill } from './skill/entities/skill.entity';
import { User } from './user/entities/user.entity';



@Module({
  imports: [PremierModule, TodoModule, CommonModule, DiversModule, TodoEntity, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'TP2',
    entities: [Cv,Skill,User],
    synchronize: true
  }), CvModule, UserModule, SkillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
