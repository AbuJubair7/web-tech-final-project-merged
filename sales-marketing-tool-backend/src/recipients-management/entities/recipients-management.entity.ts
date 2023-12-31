import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RecipientsManagement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
    
    @Column()
    category: string;

    @Column()
    name: string;
}
