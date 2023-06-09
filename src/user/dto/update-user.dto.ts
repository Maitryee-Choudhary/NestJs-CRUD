import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsString, IsNotEmpty} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsString()
    name:string;

    @IsEmail()
    email:string;

    @IsNotEmpty()
    password: string;
}
