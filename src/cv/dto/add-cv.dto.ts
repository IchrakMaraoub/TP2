import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class addCvDto{
@IsNotEmpty()
@IsString()
    firstName: string;
    @IsNotEmpty()
    @IsString()
    lastName: string;
    @IsNotEmpty()
    @IsNumber()
    Age: number;
    @IsNotEmpty()
    @IsString()
    Cin: String;
    @IsNotEmpty()
    @IsString()
    Job: String;
    @IsOptional()
    @IsString()
    Path: String;
}