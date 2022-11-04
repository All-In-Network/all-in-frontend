import AE from '../../../assets/images/coin/AE.png';
import BLOCK from '../../../assets/images/coin/BLOCK.png';
import BTM from '../../../assets/images/coin/BTM.png';
import KMD from '../../../assets/images/coin/KMD.png';

export const UpcommingListData = {

    columns: [
        {
            name: "PROJECT",
            selector: (row) => row.name,
            cell: row => <><img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinfirstname}<span className="text-muted">{row.coinsecondname}</span></>,
            sortable: true,
           
        },
        {
            name: "STAGE",
            selector: (row) => row.total,
            sortable: true,
            cell: (row) => <a href="#!" className=''>{row.stagefirstname}<span className="text-muted">{row.stagesecondname}</span></a>

        },
        {
            name: "START DATE",
            selector: (row) => row.startdate,
            sortable: true
        },
        {
            name: "END DATE",
            selector: (row) => row.enddate,
            sortable: true
        },
        {
            name: "GOAL",
            selector: (row) => row.goal,
            sortable: true
        },
        {
            name: "ACTION",
            selector: (row) => row.btcvalue,
            cell:(row)=><button type="submit" className="btn btn-light-success" data-bs-toggle="modal" data-bs-target="#icoModal">Click to Apply</button>,
            sortable: true
        }
    ],
    rows: [
        {
          image:AE,
          coinfirstname:'AE',
          coinsecondname:'Cardano',
          stagefirstname:'IDO',
          stagesecondname:'starts in 40 minutes',
          startdate:'Oct 12, 2021',
          enddate:'Oct 12, 2021',
          goal:'$100,000',
        },
        {
            image:BLOCK,
            coinfirstname:'BLOCK',
            coinsecondname:'OASIS',
            stagefirstname:'IDO',
            stagesecondname:'starts in in 23 hours',
            startdate:'Oct 13, 2021',
            enddate:'Oct 14, 2021',
            goal:'$110,000',
          },
          {
            image:BTM,
            coinfirstname:'BTM',
            coinsecondname:'STRP',
            stagefirstname:'IDO',
            stagesecondname:'starts in in 4 days',
            startdate:'Oct 16, 2021',
            enddate:'Oct 17, 2021',
            goal:'$150,000',
          },
          {
            image:KMD,
            coinfirstname:'KMD',
            coinsecondname:'IONX',
            stagefirstname:'IDO',
            stagesecondname:'starts in in 8 days',
            startdate:'Oct 20, 2021',
            enddate:'Oct 21, 2021',
            goal:'$310,000',
          },
    ]
}