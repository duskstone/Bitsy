import React from 'react';

class EverydayFinds extends React.Component {
    render(){
        return (
            <div>
                <div className="ef-header-div">
                    <h1 className="ef-header-title">Find things you'll love. Support independent sellers. Only on Bitsy.</h1>
                </div>
                <div className="ef-2box-div">
                    <div className="ef-box1">
                        <div className="ef-box1-child-1">
                            <span>
                                <h1 className="ef-box1-sent">Send some</h1>
                            </span>
                                <h1 className="ef-box1-sent">pixel love</h1>
                                <h1 className="ef-box1-sent">from any</h1>
                                <h1 className="ef-box1-sent">distance.</h1>
                            <span>
                                <h2 className="ef-box1-sent2">Shop prints  ></h2>
                            </span>
                        </div>
                        <div className="ef-box1-child-2">
                            <img className="mountain-sunset" src={window.mountainSunset} alt="bkg-box1" />
                        </div>
                    </div>
                    <div className="ef-box2">
                        <div className="ef-box2-child-1">
                            <div className="ef-box2-gchild-1">
                                <h2 className="ef-box2-sent ef-box2-sent-topline">Art inspired</h2>
                                <h2 className="ef-box2-sent">by your</h2>
                                <h2 className="ef-box2-sent">favorite</h2>
                                <h2 className="ef-box2-sent">classics.</h2>
                                <span>
                                    <h3 className="ef-box2-sent-lastline">Check em out ></h3>
                                </span>
                            </div>
                            <div className="ef-box2-gchild-2">
                                <img className="dratini" src={window.dratini} alt="bkg-box1-child2" />
                            </div>
                        </div>
                        <div>
                            <button className="ef-box2-child-2">Ready to unlock some original concept art and more  ></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EverydayFinds;