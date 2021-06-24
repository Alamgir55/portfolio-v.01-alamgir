
import axios from 'axios';

export default async function createPortfolio(req, res){
  try {
    const data = req.body;
    await axios.post(process.env.PORTFOLIO_API_URL + '/portfolios', data);
    return res.json({message: 'Portfolio was created!'});
  } catch(e) {
    console.log('We are getting error here')
    return res.status(e.status || 400).end(e.message);
  }
}
