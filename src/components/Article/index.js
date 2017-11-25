import React, { Component } from 'react';

class Article extends Component {
    renderArticle() {
        let i = 0;
        return (
            <div>
                <div key={i++} className="news-wrapper">
                    <div className="img-wrapper col-xs-3">
                        <img className="news-img" alt="article img" src="../../../src/static/img/tracer-wallpaper-wide.jpg" />
                    </div>
                    <div className="content-wrapper col-xs-8">
                        <div className="news-content">
                        </div>
                    </div>
                </div>
                <div key={i++} className="news-wrapper">
                    <div className="img-wrapper col-xs-3">
                        <img className="news-img" alt="article img" src="../../../src/static/img/tracer-wallpaper-wide.jpg" />
                    </div>
                    <div className="content-wrapper col-xs-8">
                        <div className="news-content">
                            <p>dfasdfasdfdsfadsfkamsdkfmaskdfmaksdfmkadsmfkeam kamefi ajif jaei fai jfia ejifa eifaji iaj fi</p>
                        </div>
                    </div>
                </div>
                <div key={i++} className="news-wrapper">
                    <div className="img-wrapper col-xs-3">
                        <img className="news-img" alt="article img" src="../../../src/static/img/tracer-wallpaper-wide.jpg" />
                    </div>
                    <div className="content-wrapper col-xs-8">
                        <div className="news-content">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="article-wrapper">
                {this.renderArticle()}
            </div>
        );
    }
}

export default Article;