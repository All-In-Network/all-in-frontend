import React from 'react';
import BigCalendar from '../../Component/App/Calender/BigCalendar';
import PageTitle from '../../Component/Comman/PageTitle';

function Calendar() {
        return (<>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle="Calendar" sidebutton={true} Calendermodal={true}/>
            </div>
            <div className='container-xxl'>
                <BigCalendar />
            </div>
        </>
        )
    }
export default Calendar;

