import React, { Component } from 'react';
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
                    margin: '3px',
                    padding: '3px',
                    display: 'inline-block',
                    color: `${color}`,
                }}>{tag.value}</span>
        );
        const tagStyle = {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5%",
            marginBottom: "5%",
            width: "80%"
        }
        return (
            <div>
                <Carousel />

                <TagCloud className="text-center"
                    style={tagStyle}
                    minSize={12}
                    maxSize={35}
                    tags={data}
                    onClick={tag => alert(`'${tag.value}' was selected!`)}
                    renderer={customRenderer} />
                <div className="col-md-8 pull-left">
                    <Article />
                </div>
                <div className="col-md-3">
                    <ul className="list-group">Global
                        <li className="list-group-item">HeadLine</li>
                        <li className="list-group-item">HeadLine</li>
                        <li className="list-group-item">HeadLine</li>
                        <li className="list-group-item">HeadLine</li>
                        <li className="list-group-item">HeadLine</li>
                        <li className="list-group-item">HeadLine</li>
                        <li className="list-group-item">HeadLine</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HomePage;