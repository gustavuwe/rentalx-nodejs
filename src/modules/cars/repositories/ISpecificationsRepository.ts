import { Specification } from "../model/Specification";


interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    
    create({ description, name }: ICreateSpecificationDTO): void; // void não retorna nada
    findByName(name: string): Specification; // retorna uma spcificação se ele encontrar
}

export { ISpecificationsRepository, ICreateSpecificationDTO }