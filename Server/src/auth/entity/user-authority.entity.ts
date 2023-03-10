import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('user_authority')
export class UserAuthority {
    @PrimaryColumn()
    id: number;

    @Column('int',{name: 'user_id'})
    userId: number;

    @Column('varchar',{name: 'authority_name'})
    authorityName: string;

    @ManyToOne(type=>User, user=>user.authorities)
    @JoinColumn({name: 'user_id'}) //위에있는 user_id로 join할거.
    user: User;
}