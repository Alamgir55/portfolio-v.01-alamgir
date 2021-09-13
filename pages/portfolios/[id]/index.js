import React from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import {useGetUser} from '@/actions/user';
import {formatDate} from 'helpers/functions'
import PortfolioApi from '@/lib/api/portfolios'


const Portfolio = ({portfolio}) => {
  const {data: dataU, loading: loadingU } = useGetUser();

    return (
      <BaseLayout navClass="transparent" user={dataU} loading={loadingU}>
        <BasePage
          indexPage
          noWrapper
          title={`${portfolio.title} - Alamgir Hossain`}
          metaDescription={portfolio.description}>
        <div className="portfolio-detail">
          <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner page-cover">
              <h1 class="cover-heading">{portfolio.title}</h1>
              <p class="lead dates">{formatDate(portfolio.startDate)} - {formatDate(portfolio.endDate) || 'Present'}</p>
              <p class="lead info mb-0">{portfolio.jobTitle} | {portfolio.company} | {portfolio.location} </p>
              <p class="lead">{portfolio.description}</p>
              <p class="lead">
                <a href={portfolio.companyWebsite} target="_" class="btn btn-lg btn-secondary">Visit Company</a>
              </p>
            </main>
          </div>
        </div>
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

