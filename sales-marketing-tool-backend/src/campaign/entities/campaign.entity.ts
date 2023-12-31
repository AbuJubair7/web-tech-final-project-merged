import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Campaign {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    desc: string;
    
    @Column()   
    mailTemplateId: string;

    @Column()   
    recipientListId: string;

    @Column()   
    date: string;
    
}
