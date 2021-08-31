import { Entity,Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity("products")
export class products extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!:number
   
    @Column()
    name!:string
    
    @Column()
    description!:string
   
    @Column({type:'double'})
    price!:number
   
    @Column({type:'int'})
    quantity!:number

}