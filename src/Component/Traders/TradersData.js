import Avatar1 from '../../assets/images/xs/avatar1.svg';
import Avatar2 from '../../assets/images/xs/avatar1.svg';
import Avatar3 from '../../assets/images/xs/avatar1.svg';
import Avatar4 from '../../assets/images/xs/avatar1.svg';
export const TradersListData={
    title:"Leaders List",
    columns:[
        {
            name: "Trader Nickname",
            selector:(row)=>row.nickname,
            sortable: true,
            cell:row=><><img className="avatar rounded-circle" src={row.image} alt="" /> <span className="fw-bold ms-1">{row.nickname}</span></>,
            minWidth:"250px"
        },
        {
            name: "Total Profit",
            selector: (row)=>row.totalprofit,
            sortable: true
        },
        {
            name: "Active Days",
            selector: (row)=>row.activedays,
            sortable: true
        },
        {
            name: "Followers Equity",
            selector: (row)=>row.followersequity,
            sortable: true
        },
        {
            name: "Followers",
            selector: (row)=>row.followers,
            sortable: true
        },
        {
            name: "",
            selector: (row)=>{},
            sortable: true,
            cell:()=><div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success"></i></button>
                    </div>
        }
    ],
    rows:[
        {
            nickname: "Degen1",
            image:Avatar1,
            totalprofit: "$ 200",
            activedays:"20 Days",
            followersequity:"$ 200",
            followers:"30",
        },
        {
            nickname: "Degen2",
            image:Avatar1,
            totalprofit: "$ 100",
            activedays:"50 Days",
            followersequity:"$ 200",
            followers:"30",
        },{
            nickname: "Degen3",
            image:Avatar1,
            totalprofit: "$ 500",
            activedays:"52 Days",
            followersequity:"$ 200",
            followers:"30",
        },{
            nickname: "Degen4",
            image:Avatar1,
            totalprofit: "$ 600",
            activedays:"10 Days",
            followersequity:"$ 400",
            followers:"30",
        },
    ]
}