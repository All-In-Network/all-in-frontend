import React from "react"; import DataTable from "react-data-table-component";
import { WinningStreakData } from "../Data/BattleData/BattleData";
;

function WinningStreak() {
    return (
        <div className="col-xl-7">
            <div className="card no-bg">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0 align-items-center">
                    <h6 className="mb-0 fw-bold ">Winning Streak</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                            <div id="myDataTable_filter" className="dataTables_filter">
                                <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                            </div>
                        </div>
                    </div>
                    <DataTable
                        title={WinningStreakData.title}
                        columns={WinningStreakData.columns}
                        data={WinningStreakData.rows}
                        defaultSortField="title"
                        selectableRows={false}
                        highlightOnHover={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default WinningStreak;