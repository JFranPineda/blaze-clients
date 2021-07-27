import React, { useState, useEffect, useLayoutEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const GridCommits = ({ data }) => {

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [commits, setCommits] = useState([]);

    useLayoutEffect(() => {
        const dataCommits = data && data.map(element => (element.commit));
        if (dataCommits) {
            const rawData = dataCommits.map(el => (
                {
                    name: el.author && el.author.name,
                    email: el.author && el.author.email,
                    message: el.message,
                    date: el.author && el.author.date
                }
            ));
            setCommits(rawData);
        }
    }, []);

    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    };

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 850 }}>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={commits}
                pagination={true}
                paginationPageSize="50">
                <AgGridColumn field="name" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="email" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="message" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="date" sortable={true} filter={true}></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default GridCommits;