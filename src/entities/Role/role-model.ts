import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../user/User-model";



@Entity("roles")
export class Role extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({ name: "title", unique: true})
    title!: string;

    @OneToMany(() => User, user => user.role)
    users!: User[];
}