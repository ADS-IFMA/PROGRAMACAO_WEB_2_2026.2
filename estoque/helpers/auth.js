import jwt from "jsonwebtoken"
import dontenv from 'dotenv'
dontenv.config()

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req, res, next) => {
    // Postman (Authorization > Bearer Token) envia: "Authorization: Bearer <token>"
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.startsWith('Bearer ')
        ? authHeader.slice(7)
        : authHeader
    if(!token){
        return res.status(401).json({message: 'Acesso negado'})
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        req.id = decoded.id
        next()
    } catch (error) {
        return res.status(401).json({message: 'Token inválido'})
    }
}

export default auth