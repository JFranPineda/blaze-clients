import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const GridFullClient = ({ data }) => {

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [client, setClient] = useState([]);

    useEffect(() => {
        // console.log(data);
        setClient(data);
    }, []);

    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    };

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={client}
                pagination={true}
                paginationPageSize="50">
                <AgGridColumn field="first_name" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="last_name" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="email" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="phone" sortable={true} filter={true}></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default GridFullClient;