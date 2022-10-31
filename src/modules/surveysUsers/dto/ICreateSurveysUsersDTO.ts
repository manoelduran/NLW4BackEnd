

interface ICreateSurveysUsersDTO {
    id?: string;
    user_id: string;
    survey_id: string;
    value?: number | null;
    created_at?: Date;
}

export { ICreateSurveysUsersDTO };