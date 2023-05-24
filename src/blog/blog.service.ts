import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private blogRepoistory: Repository<Blog>
  ){}

  create(createBlogDto: CreateBlogDto) {
    return this.blogRepoistory.save(createBlogDto);
  }

  findAll(): Promise<Blog[]>{
    return this.blogRepoistory.find();
  }

  findOne(id: number): Promise<Blog | null> {
    return  this.blogRepoistory.findOneBy({blogId: id});
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return this.blogRepoistory.update({blogId:id},updateBlogDto);
  }
  

  remove(id: number) {
    return this.blogRepoistory.delete({blogId:id});
  }
}
