import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor(

    @InjectRepository(User)
    private userRepoistory: Repository<User>

  ){}

  create(createUserDto: CreateUserDto) {
    return this.userRepoistory.save(createUserDto);
  }

  findAll(): Promise<User []>{
    return this.userRepoistory.find();
  }

  findOne(id: number): Promise<User | null> {
    return  this.userRepoistory.findOneBy({id});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepoistory.update(id,updateUserDto);
  }
  
  findByEmail(email: string): Promise<User | null> {
    return this.userRepoistory.findOne({where : {email:email}});
  }

  remove(id: number) {
    return this.userRepoistory.delete({id});
  }
}
