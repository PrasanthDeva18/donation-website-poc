import React from 'react';
import rank1 from '../images/1.jpg'
import rank2 from '../images/2.jpg'
import rank3 from '../images/3.jpg'
import donation from '../images/donation.png'
import food from '../images/food.png'

const DisplayContributors = props => {

    return (
        <div>
            <hr />
            <h3 className="text-center text-dark" style={{ fontFamily: 'monaco' }}><img src={donation} alt="image" style={{ width: 60, height: 50, paddingRight: '5px' }} />Our Contributors<img src={donation} alt="image" style={{ width: 60, height: 50, paddingLeft: '5px' }} /></h3>
            <hr />
            <div className="row mt-5">
                <div className="col-1 text-center"></div>
                <div className="col-1 text-center"></div>
                <div className="col-2 text-center mt-4 card">
                    <img src={rank2} alt="image" style={{ width: 80, height: 70 }}/>
                    <h5 className="text-center mt-1 text-secondary" style={{ fontFamily: 'monaco' }}>{props.name2}</h5>
                </div>
                <div className="col-1 text-center"></div>
                <div className="col-2 text-center card">
                    <img src={rank1} alt="image" style={{ width: 100, height: 90 }} />
                    <h5 className="text-center mt-1 text-warning" style={{ fontFamily: 'monaco' }}>{props.name1}</h5>
                </div>
                <div className="col-1 text-center"></div>
                <div className="col-2 text-center mt-5 card">
                    <img src={rank3} alt="image" style={{ width: 60, height: 55 }}/>
                    <h5 className="text-center mt-1" style={{ fontFamily: 'monaco' }}>{props.name3}</h5>
                </div>
                <div className="col-1 text-center"></div>
            </div>

            <p className="mt-5"></p>
            <hr />
            <h3 className="text-center text-dark" style={{ fontFamily: 'monaco' }}><img src={food} alt="image" style={{ width: 60, height: 50, paddingRight: '5px' }} />Co-Contributors<img src={food} alt="image" style={{ width: 60, height: 50, paddingLeft: '5px' }} /></h3>
            <hr />
            <div className="row mt-5 mb-5">
                <div className="col-1 text-center"></div>
                <div className="col-1 text-center"></div>
                <div className="col-2 text-center mt-4 card">
                    <img src={rank2} alt="image"  style={{ width: 80, height: 70 }} />
                    <h5 className="text-center mt-1 text-secondary" style={{ fontFamily: 'monaco' }}>{props.name5}</h5>
                </div>
                <div className="col-1 text-center"></div>
                <div className="col-2 text-center card">
                    <img src={rank1} alt="image" style={{ width: 100, height: 90 }} />
                    <h5 className="text-center mt-1 text-warning" style={{ fontFamily: 'monaco' }}>{props.name4}</h5>
                </div>
                <div className="col-1 text-center"></div>
                <div className="col-2 text-center mt-5 card">
                    <img src={rank3} alt="image" style={{ width: 60, height: 55 }}  />
                    <h5 className="text-center mt-1" style={{ fontFamily: 'monaco' }}>{props.name6}</h5>
                </div>
                <div className="col-1 text-center"></div>
            </div>
        </div>
    );
};

export default DisplayContributors;
