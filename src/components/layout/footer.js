import React from 'react';
import moment from 'moment';

export default() => (
    <div className="container">
        <hr />
        <footer>
            <p>© EduListing.com 2013&ndash;{moment().format("YYYY")}</p>
    		<p className="small">
    			<a target="_blank" href="/legal/termsandconditions"><i className="fa fa-info-circle"></i> Terms and Conditions of Use</a>
    			&nbsp;
    			&nbsp;
    			&nbsp;
    			<a target="_blank" href="/legal/privacypolicy"><i className="fa fa-info-circle"></i> Privacy Policy</a>
    		</p>
        </footer>
    </div>
);
