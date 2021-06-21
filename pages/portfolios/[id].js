import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import {useRouter} from 'next/router'
import {useGetUser} from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios'


const Portfolio = ({portfolio}) => {
  const {data: dataU, loading: loadingU } = useGetUser();

    return (
      <BaseLayout user={dataU} loading={loadingU}>
        <BasePage header="Portfolio Details">
          {
            JSON.stringify(portfolio)
          } 
        </BasePage>
      </BaseLayout>
    )
}

//<---This is serverSide Rendering ---->

// export async function getServerSideProps({query}){
//   const json = await new PortfolioApi().getById(query.id);
//   const portfolio = json.data;

//   return {props: {portfolio}};
// }


//<---This is staticSide Rendering ---->

// This function is excuted at the build time static rendering
export async function getStaticPaths(){
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;

  // Get the paths we want pre-render base on portfolio ID
  const paths = portfolios.map(portfolio => {
    return {
      params: {id: portfolio._id}
    }
  });
  return { paths, fallback: false };
}

export async function getStaticProps({params}){
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: {portfolio}}
}

export default Portfolio;

