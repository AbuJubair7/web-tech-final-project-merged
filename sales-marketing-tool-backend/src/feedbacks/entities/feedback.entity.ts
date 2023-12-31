import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Feedback {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;
    
    @Column()
    description: string;

    @Column()
    title: string;

    @Column()
    rating: number;

    @Column()
    date: string;
}
