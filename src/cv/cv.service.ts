import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import {addCvDto } from './dto/add-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Cv } from './entities/cv.entity';

@Injectable()
export class CvService {
  constructor(
    @InjectRepository(Cv)
    private CvRepository: Repository<Cv>,
  ){}
  async getCv(): Promise<Cv[]> {
    return await this.CvRepository.find();
  }
async addCv (Cv:addCvDto) : Promise<Cv>{
  return this.CvRepository.save(Cv);  
}

async updateCv(id:number,Cv:UpdateCvDto): Promise<Cv>{
  const  newcv = await this.CvRepository.preload({
    id,
    ...Cv
  });
  return await this.CvRepository.save(newcv);
if(!newcv)
{
  throw new NotFoundException('le cv n existe pas ');
}}
 async removeCv(id : number) {
  
  return await this.CvRepository.delete(id);
 }
 
}
