import React, {Component} from 'react';
import { connect } from 'react-redux';

import {
  getBannerNotes
} from '../store/data/display/actions';

class About extends Component {
  static async getInitialProps({store}) {
    console.log('inside')
    store.dispatch({type: 'SOME_ASYNC_ACTION_REQUEST'})
    return {staticData: 'About Page!'}
  }

  render() {
    return <div>{this.props.staticData}</div>
  }
}

export default connect(state => state)(About)