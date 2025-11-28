import { useQuery } from '@tanstack/react-query'
import { api } from 'app/index'
import type { IEnemyEntryResponse, TQueryOptions } from 'models'

export const GET_ENEMIES_QUERY_KEY = 'GET_ENEMIES'

const getEnemies = async (): Promise<IEnemyEntryResponse> => {
  const { data } = await api.get<IEnemyEntryResponse>('/enemy/enemies.json')

  return data
}

export default function useGetEnemiesQuery(options: TQueryOptions<IEnemyEntryResponse> = {}) {
  return useQuery({
    queryKey: [GET_ENEMIES_QUERY_KEY],
    queryFn: getEnemies,
    ...options,
  })
}
