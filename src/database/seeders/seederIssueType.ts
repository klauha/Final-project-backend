import { Department } from "../../entities/departament/Departament-model";
import { IssueType } from "../../entities/issueType/IssueType-model";
import { AppDataSource } from "../db";

export const issueTypeSeedDatabase = async () => {
    try {
      await AppDataSource.initialize();

      const issueType = new IssueType()
      issueType.name = "Errores en el sitio web"
      issueType.description = "problemas de carga, errores de página, problemas de navegación."
      issueType.department.id =  1
      await issueType.save()

    //   const issueType2 = new IssueType()
    //   issueType2.name = "Problemas de integración"
    //   issueType2.description = "errores en la pasarela de pago, problemas con API de terceros."
    //   issueType2.department.id =  1
    //   await issueType2.save()

    //   const issueType3 = new IssueType()
    //   issueType3.name = "Errores de registro o inicio de sesión"
    //   issueType3.description = "problemas para crear una cuenta de usuario nueva, errores al iniciar sesión en una cuenta existente."
    //   issueType3.department.id =  1
    //   await issueType3.save() 

    //   const issueType4 = new IssueType()
    //   issueType4.name = "Problemas con promocione"
    //   issueType4.description = " cupones que no funcionan, descuentos no aplicados correctamente."
    //   issueType4.department.id =  2
    //   await issueType4.save()

    //   const issueType5 = new IssueType()
    //   issueType5.name = "Problemas de seguimiento de ventas"
    //   issueType5.description = " errores en el registro de ventas, discrepancias en los datos de ventas."
    //   issueType5.department.id =  2
    //   await issueType5.save() 

    //   const issueType6 = new IssueType()
    //   issueType6.name = "Devoluciones y reembolsos"
    //   issueType6.description = "problemas con procesos de devolución, reembolsos no procesados."
    //   issueType6.department.id =  3
    //   await issueType6.save()

    //    const issueType7 = new IssueType()
    //   issueType7.name = "Consultas generales de clientes"
    //   issueType7.description = "preguntas sobre productos, políticas de envío."
    //   issueType7.department.id =  3
    //   await issueType7.save() 

    //   const issueType8 = new IssueType()
    //   issueType8.name = "Quejas de clientes sobre la experiencia de compra."
    //   issueType8.description = "problemas con el producto, problemas con la atención recibida."
    //   issueType8.department.id =  3
    //   await issueType8.save() 

    //   const issueType9 = new IssueType()
    //   issueType9.name = "Retrasos en la entrega"
    //   issueType9.description = "paquetes perdidos, retrasos en el envío."
    //   issueType9.department.id =  4
    //   await issueType9.save()

    //    const issueType10 = new IssueType()
    //   issueType10.name = "Problemas con la logística de inventario"
    //   issueType10.description = "discrepancias de stock, productos dañados durante el envío."
    //   issueType10.department.id =  4
    //   await issueType10.save() 

    //   const issueType11 = new IssueType()
    //   issueType11.name = "Consultas de seguimiento de envíos"
    //   issueType11.description = "clientes que buscan información sobre el estado de su pedido."
    //   issueType11.department.id =  4
    //   await issueType11.save()
      
    //   const issueType12 = new IssueType()
    //   issueType12.name = "Problemas con pagos"
    //   issueType12.description = "transacciones fallidas, pagos duplicados."
    //   issueType12.department.id =  5
    //   await issueType12.save()
      
    //   const issueType13 = new IssueType()
    //   issueType13.name = "Consultas sobre facturas y pagos"
    //   issueType13.description = "clientes que necesitan asistencia con sus facturas, disputas de cargos."
    //   issueType13.department.id =  5
    //   await issueType13.save()
      
    //   const issueType14 = new IssueType()
    //   issueType14.name = "Problemas con la contabilidad"
    //   issueType14.description = " errores en registros financieros, discrepancias en balances."
    //   issueType14.department.id =  5
    //   await issueType14.save()
      

    } catch (error) {
        console.log(error);
    } finally {
        await AppDataSource.destroy()
    }
}