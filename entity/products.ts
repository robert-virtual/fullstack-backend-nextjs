import { Entity,Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity("products")
export class products extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id:number
   
    @Column()
    name:string
    
    @Column()
    description:string
   
    @Column({type:'float'})
    price:number
   
    @Column({type:'int'})
    quantity:number

}