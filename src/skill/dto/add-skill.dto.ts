import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class addSkillDto{
@IsNotEmpty()
@IsString()
    designation: string;
}