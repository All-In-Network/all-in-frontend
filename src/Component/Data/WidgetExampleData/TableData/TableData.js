import Avatar1 from '../../../../assets/images/xs/avatar1.svg';
import Avatar2 from '../../../../assets/images/xs/avatar2.svg';
import Avatar3 from '../../../../assets/images/xs/avatar3.svg';
import Avatar4 from '../../../../assets/images/xs/avatar4.svg';
export const LeadersListData={
    title:"Leaders List",
    columns:[
        {
            name: "LEADER NAME",
            selector:(row)=>row.leadername,
            sortable: true,
            cell:row=><><img className="avatar rounded-circle" src={row.image} alt="" /> <span className="fw-bold ms-1">{row.leadername}</span></>,
            minWidth:"250px"
        },
        {
            name: "PROJECT",
            selector: (row)=>row.project,
            sortable: true
        },
        {
            name: "TOTAL TASK",
            selector: (row)=>row.totaltask,
            sortable: true
        },
        {
            name: "EMAIL",
            selector: (row)=>row.email,
            sortable: true
        },
        {
            name: "PROJECT ASSIGNED",
            selector: (row)=>row.projectassigned,
            sortable: true
        },
       
        {
            name: "STATUS",
            selector: (row)=>{},
            sortable: true,
            cell:row=><span className="badge bg-success">{row.status}</span>
        },
        {
            name: "ACTION",
            selector: (row)=>{},
            sortable: true,
            cell:()=><div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success"></i></button>
                        <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                    </div>
        }
        
    ],
    rows:[
        {
            leadername:"Phil Glover",
            image:Avatar1,
            project:"Gob Geeklords",
            totaltask:"2 Task",
            email:"PhilGlover@gmail.com",
            projectassigned:"18/03/21",
            status:"Working",
        },
        {
            leadername:"Robert Anderson",
            image:Avatar3,
            project:"Rhinestone",
            totaltask:"5 Task",
            email:"RobertAnderson@gmail.com",
            projectassigned:"14/01/21",
            status:"Working",
        },
        {
            leadername:"Ryan Randall",
            image:Avatar2,
            project:"Fast Cad",
            totaltask:"8 Task",
            email:"RyanRandall@gmail.com",
            projectassigned:"14/01/21",
            status:"Working",
        },
        {
            leadername:"Ryan Stewart",
            image:Avatar2,
            project:"Social Geek Made",
            totaltask:"15 Task",
            email:"RyanStewart@gmail.com",
            projectassigned:"13/01/21",
            status:"Working",
        },
        {
            leadername:"Sally Graham",
            image:Avatar1,
            project:"Practice to Perfect",
            totaltask:"9 Task",
            email:"SallyGraham@gmail.com",
            projectassigned:"13/01/21",
            status:"Working",
        },
        {
            leadername:"Victor Rampling",
            image:Avatar4,
            project:"Practice to Perfect",
            totaltask:"7 Task",
            email:"VictorRampling@gmail.com",
            projectassigned:"18/06/21",
            status:"Working",
        },
        {
            leadername:"Joan Dyer",
            image:Avatar1,
            project:"Box of Crayons",
            totaltask:"5 Task",
            email:"joandyer@gmail.com",
            projectassigned:"23/02/21",
            status:"Working",
        }
    ]
}