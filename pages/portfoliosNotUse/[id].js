import React from 'react'
import BaseLayout from '../../components/layouts/BaseLayout'
import {withRouter} from 'next/router'
import axios from 'axios';

class Portfolio extends React.Component {
  static async getInitialProps({query}){
    let post = [];
    try{
      const res = await axios(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
      post = res.data;
    } catch(err){
      console.log(err)
    }
    return {portfolio: post}
  }

  render(){
    const { portfolio } = this.props;
    return (
      <BaseLayout>
        <h1>I am Portfolio page</h1>
        <p>Body: {portfolio.body}</p>
        <p>ID: {portfolio.id}</p>
      </BaseLayout>
    )
  }
}
export default withRouter(Portfolio);

