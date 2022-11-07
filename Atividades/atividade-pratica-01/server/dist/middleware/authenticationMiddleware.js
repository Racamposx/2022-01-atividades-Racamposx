"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthMiddleware {
    async handle(req, res, next) {
        try {
            const authorization = req.headers['authorization'].split(' ');
            const bearer = authorization[0];
            const prefix = authorization[1];
            const token = authorization[2];
            console.log({ bearer, prefix, token });
            if (prefix !== process.env.JWT_HEADER_KEY) {
                return res.status(401)
                    .send({
                    warning: "Unauthorized access!!!"
                });
            }
            const tokenIsValid = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
            if (tokenIsValid) {
                return next();
            }
            else {
                return res.status(401).send({
                    message: "Token de acesso inválido!"
                });
            }
        }
        catch (error) {
            return res.status(401).send(error);
        }
    }
}
exports.AuthMiddleware = AuthMiddleware;
