import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './header';
import Banner from './banner';

class HealthInsurance extends React.PureComponent {

    // static async getInitialProps({ store }) {
    //     console.log('inside')
    //     store.dispatch({ type: 'SOME_ASYNC_ACTION_REQUEST' })
    //     return { staticData: 'Hello world!' }
    // }

    render() {
        console.log('HealthInsurance props', this.props.provider)
        return (
            <Container fluid className="mt-md-5 mt-4 px-0">
                <Header provider={this.props.provider} />
                <Banner provider={this.props.provider}/>
                {/* <InsurancePlanDetail />
                <InsurancePartnerDetail />
                <CalculatePremiumCta />
                <FAQs /> */}
            </Container>
        )
    }
}

export default HealthInsurance;