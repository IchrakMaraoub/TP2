import { IsOptional, IsString } from "class-validator";


export class UpdateUserDto {
    @IsString()
    @IsOptional()
    UserName: string;
    @IsOptional()
    @IsString()
    Email: string;
    @IsOptional()
    @IsString()
    Password: string;
}
