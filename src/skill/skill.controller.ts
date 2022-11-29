import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SkillService } from './skill.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';
import { addSkillDto } from './dto/add-skill.dto';

@Controller('skill')
export class SkillController {
 
  constructor(private skillService: SkillService) {}

 
  @Get()
 async getAllCv() : Promise<Skill[]>{
    return  await this.skillService.getSkill();
  }
  @Post ()
  async addCv(
@Body() addSkillDto:addSkillDto):Promise<Skill>{
  
return await this.skillService.addSkill(addSkillDto)}
@Patch ()
async updateCv(
@Body() UpdateSkillDto:UpdateSkillDto,
@Param('id') id:number):Promise<Skill>{
return await this.skillService.updateSkill(id,UpdateSkillDto);
}
@Delete(':id')
async removeSkill(
  @Param('id' , ParseIntPipe) id:number
){
  return await this.skillService.removeSkill(id);
}
  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillService.create(createSkillDto);
  }

  @Get()
  findAll() {
    return this.skillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillService.update(+id, updateSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillService.remove(+id);
  }
}
