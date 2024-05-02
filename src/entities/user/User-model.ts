
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, BaseEntity, JoinColumn, OneToMany } from "typeorm";
import { Role } from "../role/Role-model";
import { Issue } from "../issue/Issue-model";



@Entity("users")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 25 })
    name!: string;

    @Column({ type: "varchar", length: 50, nullable: true })
    surname!: string;

    @Column({ type: "varchar", length: 255, unique: true })
    email!: string;

    @Column({ type: "varchar", length: 255 })
    password!: string;

    // @ManyToOne(() => Role, role => role.users)
    // role_id!: Role;
    @ManyToOne(() => Role, role => role.users)
    @JoinColumn({ name: 'role_id' })
    role!: Role;

    @OneToMany(() => Issue, issue => issue.user)
    issues!: Issue[];

    @Column({ type: "boolean", default: true })
    is_active!: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updated_at!: Date;
}