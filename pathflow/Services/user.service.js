import { User } from '../models/users.model.js';
import bcrypt from 'bcrypt';

class UserService {

    async findByEmail(email) {
        return User.findOne({ where: { email } });
    }

    async checkEmailRegistered(email) {
        const existingUser = await this.findByEmail(email);
        if (existingUser) {
            throw new Error('The email is already registered');
        }
    }

    async createUser(userData) {
        await this.checkEmailRegistered(userData.email);
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        return User.create({
            ...userData,
            password: hashedPassword
        });
    }

    async findById(id) {
        return User.findByPk(id);
    }
}

export default UserService;
