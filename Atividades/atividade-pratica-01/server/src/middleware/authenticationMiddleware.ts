import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export class AuthMiddleware {


    async handle(req: Request, res: Response, next: NextFunction) {

        try {
            
            const authorization = req.headers['authorization'].split(' ');
            const bearer = authorization[0];
            const prefix = authorization[1];
            const token = authorization[2];

            console.log({ bearer, prefix, token });

            if ( prefix !== process.env.JWT_HEADER_KEY) {
                return res.status(401)
                        .send({
                            warning: "Unauthorized access!!!"
                        })
            }

            const tokenIsValid = jwt.verify(token, 
                    process.env.JWT_SECRET_KEY);

            if ( tokenIsValid ) {
                return next();
            } else {
                return res.status(401).send({
                    message: "Token de acesso inválido!"
                })
            }

        } catch (error) {
            return res.status(401).send(error);
        }

    }        

}