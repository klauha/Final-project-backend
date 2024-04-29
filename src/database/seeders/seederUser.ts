import { fakerES as faker } from '@faker-js/faker';
import { User } from '../../entities/user/User-model';
import { AppDataSource } from '../db';


const generateUser = () => {
    const user = new User()
    user.name = faker.person.firstName()
    user.surname = faker.person.lastName()
    user.email = faker.internet.email()
    user.password = "123456"
    return user
}
export const randomUsersSeedDatabase = async() => {
    try {
        await AppDataSource.initialize();
    
        for(let i = 0; i < 99; i++){
            const fakeUser : User = generateUser()
            await User.save(fakeUser);
        }
    } catch (error) {
        console.log(error);
    } finally {
        await AppDataSource.destroy()
    }
}