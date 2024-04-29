



import { IssueType } from "../../entities/issueType/IssueType-model";
import { AppDataSource } from "../db";

export const issueTypeSeedDatabase = async () => {
    try {
      await AppDataSource.initialize();
  
      const issueType = new IssueType()
      issueType.name = "Errores en el sitio web"
      issueType.description = "problemas de carga, errores de página, problemas de navegación."
      issueType.department="0"
      await issueType.save()

    