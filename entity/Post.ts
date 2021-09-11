import { Entity,Column, PrimaryGeneratedColumn, BaseEntity, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity("posts")
export class Post extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string
   
    @Column()
    content:string
    
   
    @CreateDateColumn({
        type:'timestamptz',
        default:new Date()
    })
    createdAt:Date

    @UpdateDateColumn({
        type:'timestamptz'
    })
    updatedAt:Date
    
}