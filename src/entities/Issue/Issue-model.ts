
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { IssueType } from "../IssueType/IssueType-model";
import { User } from "../user-model";
import { Department } from "../Departament/Departament-model";
import { EstadoDeIncidencia } from "../../database/migrations/1714209683768-issues";

@Entity("issues")
export class Issue {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 255, nullable: false })
    title!: string;

    @Column({ type: "text", nullable: true })
    description!: string;

    @Column({ type: "enum", enum: EstadoDeIncidencia, default: EstadoDeIncidencia.ABIERTA, nullable: false })
    status!: EstadoDeIncidencia;

    @ManyToOne(() => IssueType, { nullable: false })
    @JoinColumn({ name: "issue_type_id" })
    issue_type!: IssueType;

    @ManyToOne(() => User, { nullable: true })
    @JoinColumn({ name: "user_id" })
    user_id!: User;

    @ManyToOne(() => Department, { nullable: true })
    @JoinColumn({ name: "department_id" })
    department!: Department;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updated_at!: Date;
}

