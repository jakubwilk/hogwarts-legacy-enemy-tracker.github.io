import { useQuery } from '@tanstack/react-query'
import api from 'app/api'
import type { IEnemyCategoryResponse, TQueryOptions } from 'models'

const getCategories = async (): Promise<IEnemyCategoryResponse> => {
  const { data } = await api.get<IEnemyCategoryResponse>('/enemy/categories.json')

  return data
}

export const GET_ENEMY_CATEGORIES_QUERY_KEY = 'GET_ENEMY_CATEGORIES'

export default function useGetCategoriesQuery(options?: TQueryOptions<IEnemyCategoryResponse>) {
  return useQuery({
    queryKey: [GET_ENEMY_CATEGORIES_QUERY_KEY],
    queryFn: getCategories,
    ...options,
  })
}
