import React from "react";
import PageTitle from "../../../Component/Comman/PageTitle";
import BasicTable from "../../../Component/WidgetExample/Table Example/BasicTable";
import HoverableTable from "../../../Component/WidgetExample/Table Example/HoverableTable";
import StripedTable from "../../../Component/WidgetExample/Table Example/StripedTable";
import TableDataTable from "../../../Component/WidgetExample/Table Example/TableDataTable";
import VariantsTable from "../../../Component/WidgetExample/Table Example/VariantsTable";

function TableExample() {
    return (<>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Tables' sidebutton={true} />
            </div>
            <div className="container-xxl">
                <div className="row align-item-center">
                    <div className="col-md-12">
                        <BasicTable />
                        <VariantsTable />
                        <StripedTable />
                        <HoverableTable />
                        <TableDataTable />
                    </div>
                </div>
            </div>
        </>
    )
}
export default TableExample;
