import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BannerText from './bannerText';

import BasicDetailsForm from './basic-details-form';
// import TestForm from '../form/testForm';
// import InstantQuoteForm from '../form/instantQuoteForm';
// import PremiumCalculation from '../form/premiumCalculation';

import { useSelector, useDispatch } from 'react-redux';

const Banner = (props) => {
    console.log('Banner props', props)
    const basicFormSubmitted = data => {
        console.log('basicFormSubmitted', basicFormSubmitted)
    }

    // const formData = useSelector(state => state.healthInsuranceReducer);
    // const currentState = useSelector(state => state.healthInsuranceReducer.current);
    // console.log('currentState', currentState)

    return (
        <section className="banner px-md-5 px-4">
            <Row className="justify-content-between align-items-center">
                <Col md={5}>
                    <BannerText provider={props.provider}/>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <div className="form-container">
                        {/* {   currentState === 0 && */}
                            <BasicDetailsForm formSubmitted={basicFormSubmitted} />
                        {/* } */}
                        {/* <InstantQuoteForm /> */}
                        {/* {   currentState === 1 &&
                            <PremiumCalculation />
                        } */}
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Banner