import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface Context {
    prisma: PrismaClient,
    user: {
        id: string,
    }
}

interface ValidatedReq {
    user: {
        sub: string,
    }
}

export function createContext(req: ValidatedReq): Context {
    return {
        prisma,
        user: {
            id: req.user.sub,
        },
    }
}
