import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' };
        this.onSearchInputChange = this.onSearchInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onSearchInputChange(e) {
        this.setState( { term: e.target.value } );
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState( { term: '' } );
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon"><span className="oi oi-magnifying-glass"></span></span>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Search for a City"
                            value={this.state.term}
                            onChange={this.onSearchInputChange} />
                            <span className="input-group-btn">
                                <button className="btn btn-primary" type="submit">Search</button>
                            </span>
                        </div>
                    </div>
                </div> 
            </form>           
        );
    }
}

function mapEventCreatorsToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapEventCreatorsToProps)(SearchBar);