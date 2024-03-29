import React, {useEffect} from 'react';
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import {useGetUser} from '@/actions/user';
import { Row, Col } from 'reactstrap'

const About = () => {
  const {data, error, loading } = useGetUser();

    useEffect(() => {
      return () => {
        window.__isAboutLoaded = true
      }
    })

    const createFadeInClass = () => {
      if(typeof window !== 'undefined'){
        return window.__isAboutLoaded ? '' : 'fadein'
      }
      return 'fadein';
    }

        return (
            <BaseLayout user={data} loading={loading}>
              <BasePage title='About Me - Alamgir Hossain' className='about-page'>
                <Row className="mt-5">
                  <Col md="6">
                    <div className="left-side">
                      <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
                      <h4 className={`subtitle ${createFadeInClass()}`}>To About Page</h4>
                      <p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about me.</p>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className={`${createFadeInClass()}`}>
                      <p>My name is Alamgir Hossain and I am an experienced software engineer and freelance developer. </p>
                      <p>
                      I love being straightforward with everybody and also being open-minded. Also love walking down the lake sidewalk with full green trees in evening with redness on the sky sunset that reflects on the lake water.
                      </p>
                      <p>
                      Throughout my career, I have acquired advanced technical knowledge and the ability to explain
                      programming topics clearly and in detail.
                      </p>

                    </div>

                    <div className={`${createFadeInClass()}`}>
                      <p>Contact me at roqeb555@gmail.com</p>
                    </div>  
                </Col>
              </Row>
            </BasePage>
          </BaseLayout>
      )
} 

export default About
