
import axios from 'axios';
import { useApiHandler } from '@/actions';

const createPortfolio = (data) => axios.post('/api/v1/portfolios', data, {timeout: 10000});

export const useCreatePortfolio = () => useApiHandler(createPortfolio);

