import React from 'react'
import './App.css'
import { GiGhostAlly,GiClockwork } from 'react-icons/gi';

import {MdOutlinePrivacyTip} from 'react-icons/md';
import { ImEarth} from 'react-icons/im';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import { BsCloudUploadFill} from 'react-icons/bs';

function MiddlePage() {
    return (
        <>
            <article className='ar1'>
                <div className="paras">
                    <h1 className='cert'>CERTIFIED TRANSLATION BENEFITS</h1>
                    <h1>THE REPID TRANSLATION DIFFERENCE </h1>
                    <h5>
                        Each translation is provided with a certificate that verifies and certifies <br />
                        <span>the accuracy of translated documents .</span>
                    </h5>
                </div>
                <div className="lo0">
                    <div className="m1">
                        <div className="mm1">
                            <div className="hhh">
                                <GiGhostAlly size={60} className="bs"/>
                                <h4>Professional Human<br />Translators</h4>


                            </div>
                            <div className="hp">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Reiciendis non, doloribus esse, fugit cumque nemo omnis .
                            </div>

                        </div>
                        <div className="mm1">
                            <div className="hhh">
                                <GiClockwork size={60}  className="bs"/>
                                <h4>Fastest Turnaround<br />Times</h4>

                            </div>
                            <div className="hp">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Reiciendis non, doloribus esse, fugit cumque nemo omnis .
                            </div>

                        </div>
                        <div className="mm1">
                            <div className="hhh">
                                <ImEarth size={60} className="bs"/>
                                <h4>Accepted Worldwide with <br />Word-for-Word Accuracy</h4>

                            </div>
                            <div className="hp">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Reiciendis non, doloribus esse, fugit cumque nemo omnis .
                            </div>

                        </div>
                    </div>
                    <div className="m2">
                        <div className="mm2">
                            <div className="hhh">
                                <BsCloudUploadFill size={60} className="bs"/>
                                <h4>Professional Human<br />Translators</h4>


                            </div>
                            <div className="hp2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Reiciendis non, doloribus esse, fugit cumque nemo omnis .
                            </div>

                        </div>
                        <div className="mm2">
                            <div className="hhh">
                                <MdOutlinePrivacyTip size={60} className="bs"/>
                                <h4>Fastest Turnaround<br />Times</h4>

                            </div>
                            <div className="hp">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Reiciendis non, doloribus esse, fugit cumque nemo omnis .
                            </div>

                        </div>
                        <div className="mm2">
                            <div className="hhh">
                                <AiOutlineUsergroupAdd size={60}  className="bs"/>
                                <h4>Accepted Worldwide with <br />Word-for-Word Accuracy</h4>

                            </div>
                            <div className="hp">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Reiciendis non, doloribus esse, fugit cumque nemo omnis .
                            </div>

                        </div>
                    </div>
                </div>

            </article>
        </>
    )
}

export default MiddlePage