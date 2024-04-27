import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../User-model";


@Entity("roles")
export class Role extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({ name: "name", unique: true})
    name!: string;

    @OneToMany(() => User, user => user.role)
    users!: User[];
}