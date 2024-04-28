import { Role } from "../../entities/role/Role-model";
import { AppDataSource } from "../db";

const roleSeedDatabase = async () => {
    try {
      await AppDataSource.initialize();
  
      const roleUser = new Role();
      roleUser.id = 1;
      roleUser.title = "user"
      await roleUser.save();
  
      const roleAdmin = new Role();
      roleAdmin.id = 2;
      roleAdmin.title = "admin"
      await roleAdmin.save();
  
      const roleSuperAdmin = new Role();
      roleSuperAdmin.id = 3;
      roleSuperAdmin.title = "super_admin"
      await roleSuperAdmin.save();
  
      console.log('---------------------------------------');
      console.log('Los roles se han guardado correctamente');
      console.log('---------------------------------------');
    } catch (error) {
      console.log(error);
    } finally {
      await AppDataSource.destroy()
    }
  }
  const launchSeeder = async () => {
    await roleSeedDatabase();
   
  }
  
  launchSeeder();