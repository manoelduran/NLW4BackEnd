import { SendMailService } from "@modules/surveysUsers/services/SendMailService";
import { Request, Response } from "express";
import { container } from "tsyringe";


class SendMailController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, survey_id } = request.body;
        const sendMailService = container.resolve(SendMailService);
        const newSendMail = await sendMailService.execute({
            survey_id,
            email,
        })
        return response.status(200).json(newSendMail);
    }
};

export { SendMailController };