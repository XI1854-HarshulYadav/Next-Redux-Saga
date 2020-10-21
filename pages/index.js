import React, {Component, useEffect} from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { useRouter } from 'next/router'

import HealthInsurance from '../components/health-insurance';

import {
  getBannerNotes
} from '../store/data/display/actions';

const Index = () => {

  const router = useRouter();

  useEffect(() => {
    router.push('/HEALTH/RELIGARE');
  }, []);

  return(
    <div></div>
  )

}

export default connect(state => state)(Index)

// class Index extends Component {
//   static async getInitialProps({store}) {
//     console.log('inside')
//     store.dispatch({type: 'SOME_ASYNC_ACTION_REQUEST'})
//     return {staticData: 'Hello world!'}
//   }

//   render() {
//     return (
//       <HealthInsurance />
//     )
//   }
// }

// export default connect(state => state)(Index)