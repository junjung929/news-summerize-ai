import React, { Component } from 'react';
import AutoTags from '../../components/AutoTags';
import Article from '../../components/Article';
import Carousel from '../../components/Carousel';

class SearchPage extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }
    componentWillMount(){
        const { category } = this.props.match.params;
        console.log(category);
    }
    render() {
        const { category } = this.props.match.params;
        return (
            <div>
            <Carousel category={category} />
            <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                <AutoTags />
                <Article />
            </div>
            </div>
        )
    }
}
export default SearchPage;