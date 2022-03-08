import { Request, Response } from 'express'

import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController {
  private listCategoriesUseCase: ListCategoriesUseCase

  constructor(listCategoriesUseCase: ListCategoriesUseCase) {
    this.listCategoriesUseCase = listCategoriesUseCase
  }

  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute()

    return response.json(all)
  }
}

export { ListCategoriesController }
