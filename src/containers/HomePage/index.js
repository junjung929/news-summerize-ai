import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TagCloud } from 'react-tagcloud';
import Article from '../../components/Article';
import Carousel from '../../components/Carousel';

class HomePage extends Component {
    componentDidMount() {
        console.log("Welcome to Homepage");
    }

    render() {
        // data stack here
        const data = [
            { value: "jQuery", count: 25, foo: "foo" }, { value: "MongoDB", count: 18 },
            { value: "JavaScript", count: 38 }, { value: "React", count: 30 },
            { value: "Nodejs", count: 28 }, { value: "Express.js", count: 25 },
            { value: "HTML5", count: 33 }, { value: "CSS3", count: 20 },
            { value: "Webpack", count: 22 }, { value: "Babel.js", count: 7 },
            { value: "ECMAScript", count: 25 }, { value: "Jest", count: 15 },
            { value: "Mocha", count: 17 }, { value: "React Native", count: 27 },
            { value: "Angular.js", count: 30 }, { value: "TypeScript", count: 15 },
            { value: "Flow", count: 30 }, { value: "NPM", count: 11 },
        ];
        const customRenderer = (tag, size, color) => (
            <span key={tag.value}
                style={{
                    fontSize: `${size}px`,
                    marginLeft: '20px',
                    padding: '3px',
                    display: 'inline-block',
                    color: `${color}`,
                }}>{tag.value}</span>
        );
        return (
            <div>
                <Carousel />

                <h2 className="text-center tag-ment">You might be interested!</h2>
                <TagCloud className="text-center tag-cloud"
                    minSize={12}
                    maxSize={35}
                    tags={data}
                    onClick={tag => alert(`'${tag.value}' was selected!`)}
                    renderer={customRenderer} />
                <div className="home-content-wrapper">
                    <div className="col-md-8 pull-left home-content">
                        <Article />
                    </div>
                    <div className="col-md-4 ">
                        <ul className="list-group">Global
                            <Link className="list-group-item" to="/">HeadLine </Link>
                            <Link className="list-group-item" to="/">HeadLine </Link>
                            <Link className="list-group-item" to="/">HeadLine </Link>
                            <Link className="list-group-item" to="/">HeadLine </Link>
                            <Link className="list-group-item" to="/">HeadLine </Link>
                            <Link className="list-group-item" to="/">HeadLine </Link>
                        </ul>
                    </div>
                    <div className="col-md-4 ">
                        <ul className="list-group">Trend
                            <Link className="list-group-item" to="/">HeadLine </Link>
                            <Link className="list-group-item" to="/">HeadLine </Link>
                            <Link className="list-group-item" to="/">HeadLine </Link>
                            <Link className="list-group-item" to="/">HeadLine </Link>
                            <Link className="list-group-item" to="/">HeadLine </Link>
                            <Link className="list-group-item" to="/">HeadLine </Link>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;