import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false})
    name : string

    @Column({ nullable: false})
    email: string
    
    @Column({ nullable: false})
    password: string

    @Column({ nullable: false})
    type: string

    
}
