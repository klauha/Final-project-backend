import { Department } from "../../entities/departament/Departament-model";
import { AppDataSource } from "../db";

export const departamentsSeedDatabase = async () => {
    try {
      await AppDataSource.initialize();
  
      const departament1 = new Department();
      departament1.name = "Departamento de Desarrollo/IT"
      await departament1.save();

      const departament2 = new Department();
      departament2.name = "Departamento de Martketing"
      await departament2.save()

      const departament3 = new Department();
      departament3.name = "Departamento de Atención al cliente"
      await departament3.save();
  
      const departament4= new Department();
      departament4.name = "Departamento de Contabilidad"
      await departament4.save();
   
      const departament5= new Department();
      departament5.name = "Departamento de Logística"
      await departament5.save();
   
  
      console.log('---------------------------------------');
      console.log('Los departamentos se han guardado correctamente');
      console.log('---------------------------------------');
    } catch (error) {
      console.log(error);
    } finally {
      await AppDataSource.destroy()
    }
  }