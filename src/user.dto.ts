import * as z from "zod"

export const userDataZod = z.object(
    {
    email : z.string(),
    username : z.string().min(5).regex(/[0-9]/),
    password : z.string().min(8).regex(/[A-Z]/).regex(/[a-z]/).regex(/[^A-Za-z0-9]/)
}
)