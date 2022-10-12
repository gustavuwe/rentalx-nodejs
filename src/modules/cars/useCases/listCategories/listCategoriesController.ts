

import { ListCategoriesUseCase } from './listCategoriesUseCase'
class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
    
    handle(request: Request, response: Response): Response {
        const all = categoriesRepository.list();

        return response.json(all);
    }
}

export { ListCategoriesController }