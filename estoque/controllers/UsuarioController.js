import Usuario from '../models/Usuario.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dontenv from 'dotenv';
dontenv.config();

const JWT_SECRET = process.env.JWT_SECRET

class UsuarioController {
    
    salvar = async (req, res) => {
        try{
            const { username, password, nome, categoria } = req.body;

            const salt = await bcrypt.genSalt(10);
            const senhaHash = await bcrypt.hash(password, salt);

            const usuario = await Usuario.create({
                username,
                password: senhaHash,
                nome,
                categoria
            });
            res.status(201).json({ message: 'Usuário criado com sucesso', id: usuario.id });
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    }

    get = async (req, res) => {
        try{
            const usuario = await Usuario.findByPk(req.params.id);
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            res.status(200).json(usuario);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    }


    login = async (req, res) => {
        try{
            let username = req.body.username;
            let password = req.body.password;

            const usuario = await Usuario.findOne({ where: { username } });

            if (!usuario) {
                return res.status(401).json({ message: 'Usuário não encontrado' });
            }

            const isPasswordValid = await bcrypt.compare(password, usuario.password);

            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Senha incorreta' });
            }

            const token = jwt.sign({ id: usuario.id , nome: usuario.nome}, JWT_SECRET, { expiresIn: '1h' });
            console.log('Token gerado: '+token)
            return res.status(200).json({ value: token });

        }catch(error){
            res.status(500).json({ message: error.message });
        }
    }//Fim do Login

}

export default new UsuarioController();