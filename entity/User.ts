import { Entity,Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity("usuarios")
export class User extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string
   
    @Column()
    name:string
    
    @Column({unique:true})
    email:string
   
    @Column({type:'text',select:false})
    password:string
   
    @Column({type:'date',default:new Date()})
    createdAt:Date
    
}