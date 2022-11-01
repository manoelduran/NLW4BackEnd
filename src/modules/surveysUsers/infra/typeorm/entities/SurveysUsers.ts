import { Survey } from "@modules/survey/infra/typeorm/entities/Survey";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity("surveys_users")
class SurveysUsers {

    @PrimaryColumn()
    id?: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: "user_id"})
    user: User;

    @ManyToOne(() => Survey)
    @JoinColumn({name: "survay_id"})
    survey: Survey;
    
    @Column()
    survey_id: string;

    @Column()
    value: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        };
    };
};

export { SurveysUsers };