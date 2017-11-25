import React, { Component } from 'react';

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: "Home"
        }
    }
    componentDidMount() {
        console.log("props", this.props.category);
    }
    componentDidUpdate() {
        console.log("props", this.props.category);
    }
    renderControllers() {
        return (
            <div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
    renderIndicators() {
        return (
            <ol className="carousel-indicators">{/*  take off ol parent and change function name to renderIndicator when it returns valus using maping  */}
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
        );
    }/* uncomment when renderIndicator is being mapped.
    renderIndicators() {
        return (
            <ol className="carousel-indicators">
                {this.renderIndicator()}
            </ol>
        );
    } */
    renderCarouselContents() {
        let category = this.props.category;
        let itemText;
        switch (category) {
            case undefined:
                itemText = `Welcome to Home page`;
                break;
            default:
                itemText = `Welcome to ${category} category page`;
                console.log('here you go', category);
        }
        return (
            <div className="carousel-inner">{/*  take off div carousel-inner when it returns valus using maping  */}
                <div className="item active">
                    <img src="../src/static/img/tracer-wallpaper-wide.jpg" alt="Los Angeles" style={{ width: "100%" }} />
                    <div className="item-text-wrapper">
                        <h3 className="item-text">{itemText}</h3>
                    </div>
                </div>

                <div className="item">
                    <img src="../src/static/img/tracer-wallpaper-wide.jpg" alt="Chicago" style={{ width: "100%" }} />
                    <div className="item-text-wrapper">
                        <h3 className="item-text">{itemText}</h3>
                    </div>
                </div>

                <div className="item">
                    <img src="../src/static/img/tracer-wallpaper-wide.jpg" alt="New york" style={{ width: "100%" }} />
                    <div className="item-text-wrapper">
                        <h3 className="item-text">{itemText}</h3>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        let divStyle = {
            marginLeft: "-15px",
            marginRight: "-15px",
        }
        let caroucelText = {
            position: "relative",
            width: "100%",
            display: "inline-block",
            verticalAlign: "middle",
            color: "white"

        }
        let imgWrapperStyle = {
            backgroundColor: "grey",
            opacity: 0.7
        }
        return (
            <div style={divStyle} id="myCarousel" className="carousel slide" data-ride="carousel">
                {this.renderIndicators()}

                <div className="carousel-inner">
                    {this.renderCarouselContents()}
                </div>

                {this.renderControllers()}
            </div>
        );

    }
}
export default Carousel;