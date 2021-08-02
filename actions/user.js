
import useSWR from 'swr'
import {fetcher} from './index';

export const useGetUser = () => {
  const  { data, error, ...rest } = useSWR('/api/auth/me', fetcher);
  return {data, error, loading: !data && !error, ...rest};
}
