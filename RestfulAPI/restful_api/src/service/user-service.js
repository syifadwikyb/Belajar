import {registerUserValidation} from "../validation/user-validation.js";
import {validate} from "../validation/validation.js";
import {prismaClient} from "../application/database.js";
import {responseError} from "../error/response-error.js";
import bcrypt from "bcrypt"

const register = async (request) => {
    const user = validate(registerUserValidation, request);

    const countUser = await prismaClient.user.count({
        where: {
            username: user.username
        }
    })

    if (countUser === 1) {
        throw new responseError(400, "User already exists");
    }

    user.password = await bcrypt.hash(user.password, 12);

    return prismaClient.user.create ({
        data: user,
        select: {
            username: true,
            name: true
        }
    })
}

export default {register}