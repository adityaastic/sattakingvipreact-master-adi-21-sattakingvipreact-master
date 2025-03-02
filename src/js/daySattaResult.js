
import '../App.css';
import moment from 'moment';
import { useState, useEffect } from 'react';
import myImage from '../images/new.gif';
import App from '../App';
import FooterDrop from './footerDrop';
import { useLocation } from 'react-router-dom';
const momenttz = require('moment-timezone')
function DaySattaResult({ dayResult }) {
    console.log(dayResult)
    var currentDate = moment(new Date).tz('Asia/Kolkata').format("YYYY-MM-DD")
    var prevDate = moment(new Date).subtract(1, 'days').tz('Asia/Kolkata').format("YYYY-MM-DD")

    const location = useLocation();
    const isDisc = location.pathname.includes('/disclaimer');
    const isContact = location.pathname.includes('/contact');
    const isPrivacy = location.pathname.includes('/privacypolicy');
    const isAbout = location.pathname.includes('/about');
    const [gameResult, setGameResult] = useState([])
    useEffect(() => {
        if (dayResult) {
            setGameResult(dayResult);
        }
    }, [dayResult]);
    return (
        <div>
            {/* <App sectiondata={gameResult} /> */}

            <div className="col-12 daywisereport">

                {
                    (!(isContact || isPrivacy || isDisc || isAbout)) &&
                    (
                        <div className="row">
                            {gameResult && gameResult.length > 0 ? (
                                gameResult.map((result, index) => (
                                    <div key={index} className='game_column col-md-6 col-sm-12' >
                                        <div className='d-flex align-items-center flex-column col-lg-12'>
                                            <h6 className="mb-0 pt-2 fw-bold fs-6">{result?.game_name}</h6>
                                            <p className="mb-0 fs-6 textColor">( {result?.open_time} )</p>
                                            <div className="d-flex align-items-end text-center">
                                                {/* <div>
                                            <span class="">{` { ${result?.prev_date?.result || 'NULL'} }`}</span>
                                        </div> */}
                                                {/* <div>
                                            <img src={myImage} width="20" height="10"></img>
                                        </div> */}
                                                <div>
                                                    <span class="">{result?.curr_date?.result || ''}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p></p>
                            )}
                        </div>
                    )}
                <FooterDrop />
            </div>
        </div>


    );
}

export default DaySattaResult;
