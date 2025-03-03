import logo from "./images/satta-king-logo.png";
import "./App.css";
import moment from "moment";
import "moment-timezone";
import React, { useState, useEffect } from "react";
// import Banner from './banner';
import Disclaimer from "./js/disclaimer";
import ContactUs from "./js/contact";
import PrivacyPolicy from "./js/privacy";
import AboutUs from "./js/about";
import { useLocation } from "react-router-dom";
import trackVisitor from "./utilities/tracker";
import DaySattaResult from "./js/daySattaResult";
import AdvertisementComponent from "./utilities/advertismentComponent";
import { Helmet } from "react-helmet";
const momenttz = require("moment-timezone");


function App() {
  const todayDate = moment().format("lll");
  var currentDate = moment().tz("Asia/Kolkata").format("YYYY-MM-DD");
  var prevDate = moment()
    .subtract(1, "days")
    .tz("Asia/Kolkata")
    .format("YYYY-MM-DD");
  const currentTime = moment().format("HH:mm");
  const [data, setData] = useState([]); // State to store data fetched from backend
  const [datagame, setDataFor] = useState([]); // State to store processed data for display

  const location = useLocation();
  const isDisc = location.pathname.includes("/disclaimer");
  const isContact = location.pathname.includes("/contact");
  const isPrivacy = location.pathname.includes("/privacypolicy");
  const isAbout = location.pathname.includes("/about");
  useEffect(() => {
    trackVisitor();
  }, []);

  useEffect(() => {
    fetch("https://api.sattakingvip.co.in/getData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        game_name: "",
        curr_date: currentDate,
        prev_date: prevDate,
        open_time: "market_sunday_time_open",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        // Sort data based on open_time
        const sortedData = json.sort((a, b) => {
          const timeA = moment(a.open_time, "HH:mm");
          const timeB = moment(b.open_time, "HH:mm");
          return timeA.diff(timeB);
        });

        // Set sorted data into state
        setData(sortedData);
      })
      .catch((error) => console.error(error));
  }, [currentDate, prevDate]);

  // useEffect(() => {
  //   if (data?.length > 0) {
  //     // Convert current time to a moment object for comparison
  //     const currentMoment = moment(currentTime, "HH:mm");

  //     // Process and filter the data
  //     const processedData = data.map((item) => {
  //       const itemTime = moment(item.open_time, "HH:mm");
  //       const resultAvailable = item?.curr_date?.result ? true : false;

  //       return {
  //         gameName: item.game_name,
  //         result: resultAvailable ? item?.curr_date?.result : "wait",
  //         openTime: item.open_time,
  //         isAvailable: resultAvailable,
  //         itemTime: itemTime,
  //       };
  //     });

  //     // Sort the processed data by open_time
  //     const sortedProcessedData = processedData.sort((a, b) => {
  //       return a.itemTime.diff(b.itemTime);
  //     });

  //     // Separate records into those with available results and those with "wait"
  //     const availableResults = sortedProcessedData.filter(
  //       (item) => item.isAvailable
  //     );
  //     const upcomingRecords = sortedProcessedData.filter(
  //       (item) => !item.isAvailable
  //     );

  //     // Determine the records to display
  //     let recordsToDisplay = [];

  //     if (availableResults.length > 0) {
  //       // Show available results and include records up to the next upcoming record
  //       recordsToDisplay = [...availableResults];

  //       const lastAvailableIndex = sortedProcessedData.indexOf(
  //         availableResults[availableResults.length - 1]
  //       );
  //       const nextRecord = sortedProcessedData[lastAvailableIndex + 1];
  //       if (nextRecord) {
  //         recordsToDisplay.push(nextRecord);
  //       }
  //     } else {
  //       // No available results, show up to 3 upcoming records with "wait"
  //       recordsToDisplay = [...upcomingRecords.slice(0, 3)];
  //     }

  //     // Ensure only 3 records are shown
  //     if (recordsToDisplay.length > 3) {
  //       // Remove the oldest record if more than 3 records are present
  //       recordsToDisplay = recordsToDisplay.slice(-3);
  //     }

  //     // Update state with the processed and limited data
  //     setDataFor(recordsToDisplay);

  //     // Debugging log
  //   }
  // }, [data, currentTime]);


  useEffect(() => {
    if (data?.length > 0) {
      const currentMoment = moment(currentTime, "HH:mm");
  
      const processedData = data.map((item) => {
        const itemTime = moment(item.open_time, "HH:mm");
        const resultAvailable = item?.curr_date?.result ? true : false;
  
        return {
          gameName: item.game_name,
          result: resultAvailable ? item?.curr_date?.result : "wait",
          openTime: item.open_time,
          isAvailable: resultAvailable,
          itemTime: itemTime,
        };
      });
  
      const sortedProcessedData = processedData.sort((a, b) =>
        a.itemTime.diff(b.itemTime)
      );
  
      const availableResults = sortedProcessedData.filter((item) => item.isAvailable);
      const upcomingRecords = sortedProcessedData.filter((item) => !item.isAvailable);
  
      let recordsToDisplay = [];
  
      if (availableResults.length > 0) {
        recordsToDisplay = [...availableResults];
  
        const lastAvailableIndex = sortedProcessedData.indexOf(
          availableResults[availableResults.length - 1]
        );
        const nextRecord = sortedProcessedData[lastAvailableIndex + 1];
        if (nextRecord) {
          recordsToDisplay.push(nextRecord);
        }
      } else {
        recordsToDisplay = [...upcomingRecords.slice(0, 3)];
      }
  
      if (recordsToDisplay.length > 3) {
        recordsToDisplay = recordsToDisplay.slice(-3);
      }
  
      // Move "wait" items to the top
      recordsToDisplay.sort((a, b) => (a.result === "wait" ? -1 : 1));
  
      setDataFor(recordsToDisplay);
    }
  }, [data, currentTime]);
  
  return (
    <div className="App">
      {/* seo setup start */}
      <Helmet>
        <title></title>
        <meta name="description" content="sattakingvip" />
        <meta
          name="Keywords"
          content="sattakingvip, sattakingreal, satta king real, sattaking real, Satta King, Satta King live result, Satta king online result, Satta king online, Satta king result today, Gali result, Desawar result, Faridabad result, Gaziyabad result, Satta matka king, Satta Bazar, Black satta king, Satta king 2017, satta king 2018, Gali Leak Number, Gali Single Jodi, Black Satta Result, Desawar Single Jodi, Satta king up, Satta king desawar, Satta king gali, Satta king 2019 chart, Satta baba king, Satta king chart, Gali live result, Disawar live result, Satta Number, Matka Number, Satta.com, Satta Game, Gali Number, Delhi Satta king,"
        />
        <link rel="canonical" href="https://sattakingvip.co.in" />
      </Helmet>
      {/* seo setup end */}
      <div class="button-container col-12">
        <div className="row">
          <a href="/" class=" col-md-4 col-sm-12">
            Satta king
          </a>
          <a href="/" class=" col-md-4 col-sm-12">
            Satta King 786
          </a>
          <a href="https://www.gali-result.co/" class=" col-md-4 col-sm-12">
            Gali Result
          </a>
        </div>
        {/* //rounded-button */}
      </div>
      <marquee className="marqu"></marquee>
      <div class="satta-kingg-res">
        <h2>SUPER FAST KING LIVE RESULT</h2>
        <a href="/" target="_blank"></a>
        <div align="center">
          <a href="/" target="_blank"></a>
          <a href="">
            <img src={logo} className="img" alt="sattaking" width="100%" />
          </a>
        </div>
        <h4> www.sattaking-vip.co.in </h4>

        <h3>SUPER FAST SATTA RESULT,SATTA KING 786</h3>
      </div>
      <div className="col-12 text-center header-heading">
        <h6>SATTA KING, SATTAKING, SATTA RESULT</h6>
        <a href="/">
          <h1>SATTAKING-VIP.CO.IN</h1>
        </a>
      </div>
      {/* <Banner /> */}
      <div className="banner text-white sattaReal">
        <h5 className="">{todayDate}</h5>
        {/* {gamedata.map((game, index) => (
          game.game_name == 'MORNING STAR' || game.game_name == 'DEV DARSHAN' ? (<div key={index} className="game ">
            <h3>{game.game_name}</h3>
            <h5>{game?.curr_date?.result || '--'}</h5>
          </div>) : ''
        ))} */}

        {datagame?.map((todayData, index) => (
          <div key={index}>
            <h3 className="">{todayData?.gameName}</h3>
            <h5 className="text-center blinking-text">
              {todayData?.result || "wait"}
            </h5>
          </div>
        ))}
      </div>
      <AdvertisementComponent type="odd" />
      <DaySattaResult dayResult={data} />

      {isDisc && <Disclaimer style={{ display: "none" }} />}
      {isContact && <ContactUs style={{ display: "none" }} />}
      {isPrivacy && <PrivacyPolicy style={{ display: "none" }} />}
      {isAbout && <AboutUs style={{ display: "none" }} />}
    </div>
  );
}

export default App;
