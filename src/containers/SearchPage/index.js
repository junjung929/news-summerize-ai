import React, { Component } from 'react';
import AutoTags from '../../components/AutoTags';
import Article from '../../components/Article';

class SearchPage extends Component {
    
    render() {
        return (
            <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                <AutoTags />
                <Article />
            </div>
        )
    }
}
export default SearchPage;