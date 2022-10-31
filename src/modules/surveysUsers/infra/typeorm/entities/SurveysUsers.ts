import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity("surveys_users")
class SurveysUsers {

    @PrimaryColumn()
    id?: string;

    @Column()
    user_id: string;

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