import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import {
    getBannerNotes
} from '../../store/data/display/actions';

const BannerText = (props) => {
    console.log('Header props', props)
    const dispatch = useDispatch();
    const notes = useSelector(state => state.displayContentReducer.notes);
    console.log('notes', notes);

    // useEffect(() => {
    //     dispatch(getBannerNotes({
    //         provider: props.provider
    //     }))
    // }, []);

    return (
        <React.Fragment>
            { notes?.length > 0 &&
                <>
                    <h1 className="mb-4 text-md-left text-center">
                        {/* Secure your Health with Care Health Insurance at less than Rs 500* per month */}
                        {notes[0]?.title}
                    </h1>
                    <p className="banner-text">
                        {/* Clix Capital has tied-up with leading health insurer, Care Health Insurance, to bring you customized health insurance products for your unique healthcare needs. So, your search for the right health insurance stops here! Buy health policy at an affordable premium rate* of less than Rs 500 per month with only a few clicks online. */}
                        {notes[0]?.description}
                    </p>
                    <p className="more text-center mb-5 d-md-none">View More</p>
                </>
            }
        </React.Fragment>
    );
}

export default connect(state => state)(BannerText);