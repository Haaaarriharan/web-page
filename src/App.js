import React from 'react'
import './App.css'
import { TiTickOutline } from 'react-icons/ti';
import { AiOutlineArrowRight ,AiFillStar } from 'react-icons/ai';
import { FcCdLogo } from 'react-icons/fc';
import { FcDvdLogo, FcWiFiLogo } from 'react-icons/fc';
import MiddlePage from './MiddlePage'


function App() {
    return (
        <>
            <article className='fullpage'>
                <header className='header'>
                    <div className='head1'>
                        <h4>100% USCIS ACCEPTANCE GUARANTEE </h4>
                        <h1 className='hh'>CERTIFIED  TRANSLATION  SERVICES</h1>
                        <h1 className='hh1'>FOR  DOCUMENTS  AND  CERTIFICATES </h1>

                    </div>
                    <div className="head2">
                        <h4>
                            ONLY <span className='spans'>$24.99 </span>PER PAGE

                        </h4>
                        <div className='head21'>
                            <p><TiTickOutline className='lo' />Fastest Turnaround Times,Delivery within 24 hours </p>
                            <p><TiTickOutline className='lo' />Accepted Worldwide with Word-for-Word Accuracy </p>
                            <p><TiTickOutline className='lo' />Translation and Rushed Mail Option Available</p>
                            <p><TiTickOutline className='lo' />24/7 Customer Suport </p>
                        </div>
                        <button className='button1'>ORDER TRANSLATION NOW <AiOutlineArrowRight className='ai' /></button>
                    </div>
                    <div className="logoname">
                        <div className="logo1">

                            <div className="para1">
                                <div className="cmlo">
                                    <FcCdLogo size={60}/>
                                </div>
                                <p>US Citizenship<br />
                                    and immigration <br />
                                    Services
                                </p>
                            </div>
                        </div>
                        <div className="logo2">

                            <div className="para1">
                                <div className="cmlo">
                                    <FcDvdLogo  size={60}/>
                                </div>
                                <p>US Citizenship<br />
                                    and immigration <br />
                                    Services
                                </p>
                            </div>
                        </div>
                        <div className="logo3">

                            <div className="para1">
                                <div className="cmlo">
                                    <FcWiFiLogo  size={60}/>
                                </div>
                                <p>US Citizenship<br />
                                    and immigration <br />
                                    Services
                                </p>
                            </div>
                        </div>
                        <div className="logo4">

                            <div className="para">
                                <div className="cmlo">
                                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                </div>
                                <p>US Citizenship<br />
                                    and immigration <br />
                                    Services
                                </p>
                            </div>
                        </div>
                    </div>


                </header>
                <MiddlePage />

            </article>
        </>
    )
}

export default App