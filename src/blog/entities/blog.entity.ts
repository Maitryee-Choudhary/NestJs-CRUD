import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blog {

    @PrimaryGeneratedColumn()
    blogId:number;
 
    @Column()
    title: string;
 
    @Column()
    content:string;
 
    
}
