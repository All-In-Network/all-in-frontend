import React from "react";
import PageTitle from "../../../Component/Comman/PageTitle";
import ToDoListExample from "../../../Component/WidgetExample/ToDoList/ToDoListExample";

function ToDoList(){
    return(
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Todo-List' sidebutton={true}/>
            </div>
            <div className="container-xxl">
                <ToDoListExample/>
            </div>
        </>
    )
}
export default ToDoList;