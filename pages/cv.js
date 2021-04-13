import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import {useGetUser} from '@/actions/user';


const Cv = () => {
  const {data, error, loading } = useGetUser();

      return (
          <BaseLayout user={data} loading={loading}>
            <BasePage>
                <h1>I am Cv's Page</h1>
            </BasePage>
          </BaseLayout>
          
      )
} 

export default Cv
