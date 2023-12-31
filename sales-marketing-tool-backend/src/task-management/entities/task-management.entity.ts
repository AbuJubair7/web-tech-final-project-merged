import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskManagement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    description: string;
    
    // @Column()   
    // dueDate: string;

    // @Column()   
    // priority: string;

}
