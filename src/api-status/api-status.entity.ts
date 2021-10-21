import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ApiStatusEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    response:string;

    @Column()
    status:number;
}
