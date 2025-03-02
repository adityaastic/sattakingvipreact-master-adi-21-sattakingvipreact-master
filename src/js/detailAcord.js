import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState } from 'react';

function DetailAccordian() {
    const [activeKeys, setActiveKeys] = useState({});

    const handleToggle = (key) => {
        setActiveKeys(prevKeys => ({
            ...prevKeys,
            [key]: !prevKeys[key]
        }));
    };

    return (
        <div className="detailAcord pt-5 marg">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className={`accordion-button ${activeKeys['collapseOne'] ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => handleToggle('collapseOne')}
                            aria-expanded={activeKeys['collapseOne']}
                            aria-controls="collapseOne"
                        >
                            How i can Play Satta or Satta king Game online or offline and who are Khaiwals ?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className={`accordion-collapse collapse ${activeKeys['collapseOne'] ? 'show' : ''}`}
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <p>In Satta Ruler, different numbers are composed on slips, out of which the lottery comes out the handiest exact number. Individuals bet on the chose number somewhere in the range of 00 and 99. Assume your picked number has been pronounced. Thus, you'll be compensated the lottery sum and qualified for "Satta Lord". On the off chance that not, you'll lose all the sum which you had wagered. The window for the launch of the arbitrary number is pre-set through the organization. Prior, Satta Lord was restricted to be performed generally, for example "khaiwal" used to gather the wagering sum from individuals and used to area the best for them. Subsequently, it was extremely rushed and time taking. Presently, after digitization, when everything was going on the web. Satta Lord Games has additionally decided to go advanced. You can now play it on various sites. In spite of the fact that individuals like to play on the web, the conventional strategy is as yet alive. khaiwal is still there to assist with putting down the bet.</p>
                            <p>Satta Ruler is a basic game wherein you have little command over the outcome.A Khaiwal is somebody who goes about as a go-between for speculators and game administrators. According to the Satta Ruler, these Khaiwals are the main individuals. These Khaiwal assume a fundamental part in gathering cash from neighborhood players and conveying it to the companyThey additionally give speculators generally relevant data and vital game updates. He was the person who enlightened the player regarding his favorable luck after he accurately anticipated the Satta Ruler number. All you need to do currently is find a Khaiwal in your space, surmise an irregular number somewhere in the range of 0 and 99, store the bet into Khaiwal's record, and sit tight for the result.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className={`accordion-button ${activeKeys['collapseTwo'] ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => handleToggle('collapseTwo')}
                            aria-expanded={activeKeys['collapseTwo']}
                            aria-controls="collapseTwo"
                        >
                            How to win an amount in Satta king Game and how much i can earn ?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className={`accordion-collapse collapse ${activeKeys['collapseTwo'] ? 'show' : ''}`}
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <p>
                                Ascertaining benefit or lottery rewards is much the same as wandering off in fantasy land, and we suggest that individuals cease from participating in such exercises. The sum at last relies upon your bet and the sort of wagered you did. Assume you put down a bet for 'haroop', and you will receive 9x consequently. Essentially, on the off chance that you put down a bet for 'Jodi', your triumphant sum will be 90x of your wagering sum. At last, your triumphant sum will be increased by 9 or 90. Furthermore, we should accept you put 10 rupees on the bet. This would win 90 rupees in the event that it were set for "haroop" or 900 assuming they set it for"Jodi". There is no restriction on the quantity of rewards; it is altogether up to your gamble resilience.
                                Besides, you can put any sum according to your gamble resilience and as large as could really be expected. In layman's language, the more you can risk, the more you can make. So you can win a limitless sum by simply playing the right number and winning.
                                Rather than wagering all of their cash on a solitary number, a decent card shark utilizes methodology and chooses a couple of numbers with a high likelihood of showing up. Betting is a verifiable truth that it is the least difficult method for bringing in cash, and it is likewise unlawful. Also, there are a lot a bigger number of instances of individuals failing than succeeding. Thus, indeed, you can become well off by playing Satta Ruler, however the possibilities are thin, and the gamble factor is unreasonably high. Indeed, the Satta ruler game can make you affluent. What's more, perhaps of the main calculate the round of betting is karma.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className={`accordion-button ${activeKeys['collapseThree'] ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => handleToggle('collapseThree')}
                            aria-expanded={activeKeys['collapseThree']}
                            aria-controls="collapseThree"
                        >
                            What are Types of the best Satta king games ?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className={`accordion-collapse collapse ${activeKeys['collapseThree'] ? 'show' : ''}`}
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <p>There are no particular kinds of Satta Lord games, so this is a misconception. The different types of Satta Lord are the main thing that recognizes it from the names of various Indian urban communities or Divine beings. Gali Satta Lord, Faridabad Satta Ruler, Delhi Satta Ruler, Satta Market, and Desawar Satta Lord are the absolute most famous Satta Ruler games. As of late, the quantity of individuals playing the Satta Lord game has expanded. The notoriety of a portion of these Satta Lord Games has all the earmarks of being higher than that of others. The text has previously referenced the different sorts of Satta Ruler games. The Satta Lord and numerous other internet games have profited from the lockdown. It's not about the cash when individuals attempt to figure the Satta Lord numbers. When new game outcomes become accessible, we will be quick to carry them to you. The game administrator was very much aware that the Satta Ruler Faridabad game essentially affected the Satta Lord's prominence. The most famous game is Satta Ruler Desawar, in which individuals overall bet huge amounts of cash. The game is run out of Dubai and is viewed as one of the most dependable Satta games in which karma, as opposed to forecast, has a major impact. In any event, when they are not performing, they check the Satta Lord records outlines consistently to guarantee they are precise. Satta Ruler Gali, Satta Lord Desawar, Satta Lord Faridabad, Ghaziabad Satta Ruler and other well known Satta Ruler games have different outcome declaration times. Because of its trustworthiness and a large number of other positive highlights not found in different games, Satta Ruler Faridabad is turning out to be progressively famous. Many individuals have utilized our graphs to foster winning procedures while playing the game.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button
                            className={`accordion-button ${activeKeys['collapseFour'] ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => handleToggle('collapseFour')}
                            aria-expanded={activeKeys['collapseFour']}
                            aria-controls="collapseFour"
                        >
                            What is the difference between Satta Matka and Satta King?
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className={`accordion-collapse collapse ${activeKeys['collapseFour'] ? 'show' : ''}`}
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <p>There is a lot of confusion around people regarding Satta Matka and Satta King. They are no different. Satta matka is the traditional number-based game, and Satta King was the title used to give to the winner of any Satta. However, throughout time, people became so fond of the title that they called the game Satta King. Nowadays, people are more aware of Satta King than Satta Matka.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button
                            className={`accordion-button ${activeKeys['collapseFive'] ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => handleToggle('collapseFive')}
                            aria-expanded={activeKeys['collapseFive']}
                            aria-controls="collapseFive"
                        >
                            How do you play Satta king?
                        </button>
                    </h2>
                    <div
                        id="collapseFive"
                        className={`accordion-collapse collapse ${activeKeys['collapseFive'] ? 'show' : ''}`}
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <p>Satta Lord is a basic game wherein you have little command over the result. You should pick a number somewhere in the range of 0 and 99 to make the disentanglement more regular. A Khaiwal is somebody who goes about as a go-between for players and game administrators. According to the Satta Lord, these Khaiwals are the main individuals. These Khaiwal assume a fundamental part in gathering cash from neighborhood players and conveying it to the companyThey likewise furnish card sharks with all appropriate data and essential game updates. He was the person who enlightened the card shark regarding his favorable luck after he accurately anticipated the Satta Lord number. WHO will deliver the number at explicit stretches. You are delegated Satta Lord when your number is drawn from the Satta Matka. The Khaiwal will gather the organization's announced winning sum and send it to you by means of your favored installment strategy. It's as simple as that. All you need to do currently is find a Khaiwal in your space, surmise an irregular number somewhere in the range of 0 and 99, store the bet into Khaiwal's record, and hang tight for the outcome.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button
                            className={`accordion-button ${activeKeys['collapseSix'] ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => handleToggle('collapseSix')}
                            aria-expanded={activeKeys['collapseSix']}
                            aria-controls="collapseSix"
                        >
                            Satta King Game is Addiction or not ?
                        </button>
                    </h2>
                    <div
                        id="collapseSix"
                        className={`accordion-collapse collapse ${activeKeys['collapseSix'] ? 'show' : ''}`}
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <p>Friends, assuming that your betting compulsion is causing you issues, you can stop.
                                You can then rapidly dispose of it. Your family is more vital to you, so you invest more energy with them. You likewise attempt to be more associated with their euphoria and distress. Before all else, your betting compulsion will blur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailAccordian;
