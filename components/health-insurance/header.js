import React from 'react';

const Header = (props) => {

    return (
        <header className="px-md-5 px-4">
            <div className="logo float-left">
                <img src='/images/logo.svg' alt="Clix" />
            </div>
            <div className="partner-logo float-right pr-5">
                <img src="/images/care-hi-logo.svg" alt="Care Health Insurance" />
            </div>
            <div className="clearfix"></div>
        </header>
    );
    
}

Header.getInitialProps = async ({query}) => {
    console.log('query', query);
    return {query}
}

export default Header;