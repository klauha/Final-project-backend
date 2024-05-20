import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Department } from "../departament/Departament-model";
import { Issue } from "../issue/Issue-model";

@Entity("issue_types")
export class IssueType extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 255, unique: true, nullable: false })
    name!: string;

    @Column({ type: "text", nullable: true })
    description!: string;

    @OneToMany(() => Issue, issue => issue.issue_type)
    issues!: Issue[];

    // @OneToMany(() => Department, department => department.issueTypes)
    // departments!: Department[];

    @ManyToOne(() => Department, department => department.issueTypes)
    @JoinColumn({ name: 'departmentId' })
    department!: Department;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updated_at!: Date;
}