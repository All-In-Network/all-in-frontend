import ProfileImage1 from '../../../assets/images/xs/avatar1.svg';
import ProfileImage2 from '../../../assets/images/xs/avatar2.svg';
import ProfileImage3 from '../../../assets/images/xs/avatar3.svg';
import ProfileImage4 from '../../../assets/images/xs/avatar4.svg';
import ProfileImage5 from '../../../assets/images/xs/avatar5.svg';
import ProfileImage6 from '../../../assets/images/xs/avatar6.svg';
import ProfileImage7 from '../../../assets/images/xs/avatar7.svg';
import ProfileImage8 from '../../../assets/images/xs/avatar8.svg';

export const WinningStreakData = {

    columns: [
        {
            name: " RANKING",
            selector: (row) => row.ranking,
            sortable: true,
            maxWidth: '50px',
            // cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.id}</a>
        },

        {
            name: "USERNAME",
            selector: (row) => row.name,
            cell: row => <> <img src={row.image} alt="" className="img-fluid avatar mx-1" /><h6 className='text-bold'>{row.name}</h6></>,
            sortable: true,
        },
        {
            name: "WINNING STREAK",
            selector: (row) => row.winningstreak,
            sortable: true
        },
        {
            name: "POINTS",
            selector: (row) => row.point,
            sortable: true
        }

    ],
    rows: [
        {
            ranking:'1',
            image:ProfileImage1,
            name:'BirdPK',
            winningstreak:'41',
            point:'158020'
        },
        {
            ranking:'2',
            image:ProfileImage2,
            name:'Xor',
            winningstreak:'37',
            point:'157031'
        },
        {
            ranking:'3',
            image:ProfileImage3,
            name:'HeyShaun',
            winningstreak:'36',
            point:'	134059'
        },
        {
            ranking:'4',
            image:ProfileImage4,
            name:'Mairuo',
            winningstreak:'32',
            point:'	128310'
        },
        {
            ranking:'5',
            image:ProfileImage5,
            name:'Jusutu',
            winningstreak:'33',
            point:'122956'
        },
        {
            ranking:'6',
            image:ProfileImage6,
            name:'Loxley',
            winningstreak:'31',
            point:'122590'
        },
        {
            ranking:'7',
            image:ProfileImage7,
            name:'BoringSheep',
            winningstreak:'30',
            point:'121590'
        },
        {
            ranking:'8',
            image:ProfileImage8,
            name:'InoDore',
            winningstreak:'29',
            point:'120590'
        },
    ]
}