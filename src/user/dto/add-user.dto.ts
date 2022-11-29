import { IsNotEmpty, IsString } from "class-validator";

export class addUserDto{
@IsString()
@IsNotEmpty()
UserName: string;
@IsNotEmpty()
@IsString()
Email: string;
@IsNotEmpty()
@IsString()
Password: string;
}