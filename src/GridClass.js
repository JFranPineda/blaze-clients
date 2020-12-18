import React, { Component } from "react";
import GridClient from './GridClient';


class GridClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: 0
        };
    }

    componentDidMount() {
        const apiUrl = `http://localhost:3000/clients`;
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
                    <h1 className="grid-header">No Clients Found</h1>
                ) : (
                        <div className="grid-box">
                            <GridClient data={this.state.data} />

                        </div>
                    )}
            </div>
        );
    }
}

export default GridClass;