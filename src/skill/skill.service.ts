import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addSkillDto } from './dto/add-skill.dto';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private SkillRepository: Repository<Skill>,
  ){}
  async getSkill(): Promise<Skill[]> {
    return await this.SkillRepository.find();
  }
async addSkill(Skill:addSkillDto) : Promise<Skill>{
  return this.SkillRepository.save(Skill);  
}

async updateSkill(id:number,Skill:UpdateSkillDto): Promise<Skill>{
  const  newskill = await this.SkillRepository.preload({
    id,
    ...Skill
  });
  return await this.SkillRepository.save(newskill);
if(!newskill)
{
  throw new NotFoundException('le cv n existe pas ');
}}
 async removeSkill(id : number) {
  
  return await this.SkillRepository.delete(id);
 }


  create(createSkillDto: CreateSkillDto) {
    return 'This action adds a new skill';
  }

  findAll() {
    return `This action returns all skill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} skill`;
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
