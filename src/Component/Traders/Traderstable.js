import React from 'react'
import DataTable from 'react-data-table-component'
import { TradersListData } from './TradersData'

function TradersTable() {
  return (
    <div className="card mb-3">
      <DataTable
        title="Datatable"
        columns={TradersListData.columns}
        data={TradersListData.rows}
        defaultSortField="title"
        pagination
        subHeaderComponent={() => {
          return <input type="text" />
        }}
        selectableRows={false}
        className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
        highlightOnHover
      />
    </div>
  )
}

export default TradersTable
