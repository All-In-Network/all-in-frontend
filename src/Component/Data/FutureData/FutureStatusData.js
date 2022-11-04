import ETH from '../../../assets/images/coin/ETH.png';
import DGD from '../../../assets/images/coin/DGD.png';
import DOGE from '../../../assets/images/coin/DOGE.png';
import ADA from '../../../assets/images/coin/ADA.png';
import BNB from '../../../assets/images/coin/BNB.png';
import SOL from '../../../assets/images/coin/SOL.png';

export const FutureStatusOpenOrderData = {
    columns: [
        {
            name: "DATE",
            selector: (row) => row.date,
            sortable: true
        },
        {
            name: "PAIR",
            selector: (row) => row.name,
            cell: row => <><img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinfirstname}<span className="text-muted">/{row.coinsecondname}</span></>,
            sortable: true,
            minWidth:'200px'

        },
        {
            name: "TYPE",
            selector: (row) => row.type,
            sortable: true
        },
        {
            name: "SIDE",
            selector: (row) => row.side,
            sortable: true,
            cell:(row)=><><span className={`${row.pricecolor?'color-price-up':'color-price-down'}`}>{row.side}</span></>
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true
        },
        {
            name: "AMOUNT",
            selector: (row) => row.amount,
            sortable: true
        },
        {
            name: "ACTION",
            selector: (row) => {},
            sortable: true,
            cell: () => <div className="btn-group" role="group" aria-label="Basic outlined example">
                <a type="button" href='/product-detail' className="btn btn-outline-secondary"><i className="icofont-edit text-success"></i></a>
                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
            </div>
        }
    ],
    rows: [
        {
            date:'09-18 17:32:15',
            image:ETH,
            coinfirstname: 'ETH',
            coinsecondname: 'USDT',
            type: 'Limit',
            side: 'buy',
            price:'2774.00',
            amount: '0.000378',
            pricecolor:true
        },
        {
            date:'09-18 17:32:15',
            image:DGD,
            coinfirstname: 'DGD',
            coinsecondname: 'USDT',
            type: 'Limit',
            side: 'Sell',
            price:'35.00',
            amount: '0.000005',
            pricecolor:false
        },
        {
            date:'09-20 13:32:15',
            image:DOGE,
            coinfirstname: 'DOGE',
            coinsecondname: 'USDT',
            type: 'Limit',
            side: 'Sell',
            price:'0.2040',
            amount: '0.203900',
            pricecolor:false
        },
        {
            date:'09-21 13:32:15',
            image:ADA,
            coinfirstname: '',
            coinsecondname: 'USDT',
            type: 'Limit',
            side: 'Sell',
            price:'	3.500',
            amount: '0.000001',
            pricecolor:false
        },
        {
            date:'09-21 13:32:15',
            image:BNB,
            coinfirstname: 'BNB',
            coinsecondname: 'USDT',
            type: 'Limit',
            side: 'Sell',
            price:'415.00',
            amount: '0.000041',
            pricecolor:false
        },
    ]
}

export const FutureStatusOrederHistoryData = {
    columns: [
        {
            name: "DATE",
            selector: (row) => row.date,
            sortable: true
        },
        {
            name: "PAIR",
            selector: (row) => row.name,
            cell: row => <><img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinfirstname}<span className="text-muted">/{row.coinsecondname}</span></>,
            sortable: true,
            minWidth:'200px'

        },
        {
            name: "TYPE",
            selector: (row) => row.type,
            sortable: true
        },
        {
            name: "SIDE",
            selector: (row) => row.side,
            sortable: true,
            cell:(row)=><><span className={`${row.pricecolor?'color-price-up':'color-price-down'}`}>{row.side}</span></>
        },
        {
            name: "AVERAGE",
            selector: (row) => row.avarage,
            sortable: true
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true
        },
        {
            name: "EXECUTED",
            selector: (row) => row.executed,
            sortable: true
        },
        {
            name: "AMount",
            selector: (row) => row.amount,
            sortable: true
        }
    ],
    rows: [
        {
            date:'09-17 08:34:14',
            image:SOL,
            coinfirstname:'SOL',
            coinsecondname:'USDT',
            side:'Buy',
            avarage:'147.04',
            price:'Market',
            executed:'0.76',
            amount:'0.71',
            pricecolor:true

        },
        {
            date:'09-18 08:52:04',
            image:ETH,
            coinfirstname:'ETH',
            coinsecondname:'USDT',
            type:'Market',
            side:'Buy',
            avarage:'3,439.20',
            price:'Market',
            executed:'0.0111',
            amount:'0.0111',
            pricecolor:true

        },
        {
            date:'09-18 17:31:11',
            image:SOL,
            coinfirstname:'SOL',
            coinsecondname:'USDT',
            type:'Market',
            side:'Sell',
            avarage:'160.33',
            price:'Market',
            executed:'0.75',
            amount:'0.75',
            pricecolor:false
        },
        {
            date:'09-18 17:32:15',
            image:ETH,
            coinfirstname:'ETH',
            coinsecondname:'USDT',
            type:'Market',
            side:'Sell',
            avarage:'3,487.50',
            price:'Market',
            executed:'0.0110',
            amount:'0.0110',
            pricecolor:false
        }
    ]
}

export const FutureStatusTradeHistoryData = {
    columns: [
        {
            name: "DATE",
            selector: (row) => row.date,
            sortable: true
        },
        {
            name: "PAIR",
            selector: (row) => row.name,
            cell: row => <><img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinfirstname}<span className="text-muted">/{row.coinsecondname}</span></>,
            sortable: true,
            minWidth:'200px'

        },
        {
            name: "SIDE",
            selector: (row) => row.side,
            sortable: true,
            cell:(row)=><><span className={`${row.pricecolor?'color-price-up':'color-price-down'}`}>{row.side}</span></>
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true
        },
        {
            name: "EXECUTED",
            selector: (row) => row.executed,
            sortable: true
        },
        {
            name: "FEE",
            selector: (row) => row.fee,
            sortable: true
        }
    ],
    rows: [
        {
            date:'09-17 08:34:14',
            image:SOL,
            coinfirstname:'SOL',
            coinsecondname:'USDT',
            side:'Buy',
            price:'Market',
            executed:'0.76',
            amount:'0.71',
            fee:'0.00076000 SOL',
            pricecolor:true

        },
        {
            date:'09-18 08:52:04',
            image:ETH,
            coinfirstname:'ETH',
            coinsecondname:'USDT',
            side:'Buy',
            price:'Market',
            executed:'0.0111',
            amount:'0.0111',
            fee:'0.00001110 ETH',
            pricecolor:true

        },
        {
            date:'09-18 17:31:11',
            image:SOL,
            coinfirstname:'SOL',
            coinsecondname:'USDT',
            side:'Sell',
            price:'Market',
            executed:'0.75',
            amount:'0.75',
            fee:'0.12024750 USDT',
            pricecolor:false
        },
        {
            date:'09-18 17:32:15',
            image:ETH,
            coinfirstname:'ETH',
            coinsecondname:'USDT',
            side:'Sell',
            price:'Market',
            executed:'0.0110',
            amount:'0.0110',
            fee:'0.03836250 USDT',
            pricecolor:false

        }
    ]
}