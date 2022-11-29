import { Body, Controller, Get, ParseIntPipe, Post } from '@nestjs/common';
import { Delete, Param, Patch } from '@nestjs/common/decorators';
import { CvService } from './cv.service';
import { addCvDto } from './dto/add-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Cv } from './entities/cv.entity';

@Controller('cv')
export class CvController {
  constructor(private cvService: CvService) {}

 
  @Get()
 async getAllCv() : Promise<Cv[]>{
    return  await this.cvService.getCv();
  }
  @Post ()
  async addCv(
@Body() addCvDto:addCvDto):Promise<Cv>{
  
return await this.cvService.addCv(addCvDto)}
@Patch ()
async updateCv(
@Body() UpdateCvDto:UpdateCvDto,
@Param('id') id:number):Promise<Cv>{
return await this.cvService.updateCv(id,UpdateCvDto);
}
@Delete(':id')
async removeCv(
  @Param('id' , ParseIntPipe) id:number
){
  return await this.cvService.removeCv(id);
}
}


