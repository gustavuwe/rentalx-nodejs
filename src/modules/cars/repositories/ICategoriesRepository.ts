import { Category } from '../model/Category';


interface ICreateCategoryDTO {
    name: string;
    description: string;
}


interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreateCategoryDTO):void; // void é pra não retornar nada
}

export { ICategoriesRepository, ICreateCategoryDTO }