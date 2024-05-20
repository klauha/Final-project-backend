import { fakerES as faker } from '@faker-js/faker';
import { User } from '../../entities/user/User-model';
import { AppDataSource } from '../db';


const generateUser = () => {
    const user = new User()
    user.name = faker.person.firstName()
    user.surname = faker.person.lastName()
    user.email = faker.internet.email()
    user.password = "$2b$06$AA6Dew8JctkUNSFNP.9JW.TAwYAg79oK310lgGYIIqxk.5yt.xPPe" // 123456
    return user
}
export const randomUsersSeedDatabase = async() => {
    try {
        await AppDataSource.initialize();
    
        for(let i = 0; i < 99; i++){
            const fakeUser : User = generateUser()
            await User.save(fakeUser);
        }

        await User.save({
            name: 'super',
            surname: 'Admin',
            email: 'superadmin@superadmin.com',
            password: "$2b$06$AA6Dew8JctkUNSFNP.9JW.TAwYAg79oK310lgGYIIqxk.5yt.xPPe", // 123456
            role: {id: 3}
        });

        await User.save({
            name: 'user',
            surname: 'user',
            email: 'user@user.com',
            password: "$2b$06$AA6Dew8JctkUNSFNP.9JW.TAwYAg79oK310lgGYIIqxk.5yt.xPPe", // 123456
            role: {id: 1}
        });

        console.log('---------------------------------------');
        console.log('Los usuarios se han guardado correctamente');
        console.log('---------------------------------------');
    } catch (error) {
        console.log(error);
    } finally {
        await AppDataSource.destroy()
    }
}