import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreateBlogDto {

    @PrimaryGeneratedColumn()
    blogId:number;
 
    @Column()
    title: string;
 
    @Column()
    content:string;
 
    
}
