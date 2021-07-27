import React, { Component } from "react";
import GridFullClient from './GridFullClient';


class GridFullClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: 0
        };
    }

    componentDidMount() {
        const apiUrl = `http://localhost:3000/clients/all`;
        const fetchData = fetch(apiUrl)
            .then(result => {
                return result.json();
            })
            .then(data => {
                // console.log(data);
                this.setState({ data: data, clients: data.length });
                return data;
            }, console.error);
    }

    render() {
        return (
            <div>
                {this.state.clients === 0 ? (
                    <h1 className="grid-header">Loading...</h1>
                ) : (
                    <div className="grid-box">
                        <GridFullClient data={this.state.data} />

                    </div>
                )}
            </div>
        );
    }
}

export default GridFullClass;