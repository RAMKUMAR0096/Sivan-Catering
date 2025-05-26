import { Router } from "express"
import { SendEmail } from "../controller/SendEmail.Controller.js";

const EmailRouter=Router();

EmailRouter.post("/send",SendEmail)

export default EmailRouter