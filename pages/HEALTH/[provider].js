import React, {Component} from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';

import HealthInsurance from '../../components/health-insurance';

import {
  getBannerNotes
} from '../../store/data/display/actions';

const Provider = (props) => {
    console.log('props Provider', props)
    return(
        <HealthInsurance provider={props.query.provider}/>
    )

}

Provider.getInitialProps = async ({query}) => {
    console.log('query', query);
    return {query}
}

export default connect(state => state)(Provider)