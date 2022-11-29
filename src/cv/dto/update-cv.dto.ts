import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateCvDto {

    @IsString()
    @IsOptional()
    firstName: string;
    @IsOptional()
    @IsString()
    lastName: string;
    @IsOptional()
    @IsNumber()
    Age: number;
    @IsOptional()
    @IsString()
    Cin: String;
    @IsOptional()
    @IsString()
    Job: String;
    @IsOptional()
    @IsString()
    Path: String;
}