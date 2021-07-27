import React, { Component } from "react";
import GridCommits from './GridCommits'

class CommitsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 0
        };
    }

    componentDidMount() {
        const apiUrl = `https://api.github.com/repos/JFranPineda/blaze-clients/commits`;
        const fetchData = fetch(apiUrl)
            .then(result => {
                return result.json();
            })
            .then(data => {
                // console.log(data);
                this.setState({ data: data, status: 1 });
                return data;
            }, console.error);
    }

    render() {
        return (
            <div>
                {this.state.status === 0 ? (
                    <h1 className="grid-header">Loading...</h1>
                ) : (
                    <div className="grid-box">
                        <GridCommits data={this.state.data} />
                    </div>
                )}
            </div>
        );
    }
}

export default CommitsTable;