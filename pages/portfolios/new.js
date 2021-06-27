import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import withAuth from '@/hoc/withAuth'
import { Row, Col } from 'reactstrap';
import PortfolioForm from '@/components/PortfolioForm'
import { useCreatePortfolio } from '@/actions/portfolios';
import Redirect from '@/components/shared/Redirect';

const PortfolioNew = ({user}) => {
    const [createPortfolio, {data, loading, error}] = useCreatePortfolio();
    
    if(data) { return <Redirect to="/portfolios" /> }

        return (
            <BaseLayout user={user} loading={loading}>
              <BasePage header="Create Portfolio">
                <Row>
                  <Col m='8'>
                    <PortfolioForm onSubmit={createPortfolio} />
                    { error && <div className="alert alert-danger">{error}</div> }
                  </Col>
                </Row>
              </BasePage>
            </BaseLayout>
        )
} 

export default withAuth(PortfolioNew)('admin');
