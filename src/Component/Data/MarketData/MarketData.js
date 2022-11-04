import spotImg1 from '../../../assets/images/coin/ADA.png'
import spotImg2 from '../../../assets/images/coin/BTC.png'
import spotImg3 from '../../../assets/images/coin/DASH.png'
import spotImg4 from '../../../assets/images/coin/COTI.png'
import spotImg5 from '../../../assets/images/coin/ETH.png'
import spotImg6 from '../../../assets/images/coin/SOL.png'
import spotBnb from '../../../assets/images/coin/CAKE.png';
import spotALTSBNB from '../../../assets/images/coin/BNB.png';
import spotALTSBTT from '../../../assets/images/coin/BTS.png';
import spotALTSCNX from '../../../assets/images/coin/CNX.png';
import spotALTSHEGIC from '../../../assets/images/coin/HSR.png';
import spotALTSTRX from '../../../assets/images/coin/TRX.png';
import spotALTSWIN from '../../../assets/images/coin/WTC.png';
import CELR from '../../../assets/images/coin/CVC.png';
import Magic from '../../../assets/images/coin/MATIC.png';
import USDT from '../../../assets/images/coin/USDT.png';
import Gala from '../../../assets/images/coin/GALA.png';
import ADX from '../../../assets/images/coin/ADX.png';
import ARDR from '../../../assets/images/coin/ARDR.png';
import ARK from '../../../assets/images/coin/ARK.png';
import BAT from '../../../assets/images/coin/BAT.png';
import BCH from '../../../assets/images/coin/BCH.png';
import BNB from '../../../assets/images/coin/BNB.png';
import BNT from '../../../assets/images/coin/BNT.png';
import BTC from '../../../assets/images/coin/BTC.png';




export const marketCardData = [
    {
        header: 'Top gainer (24h)',
        coin: 'DF/USDT',
        rate: '0.3165',
        doller: '$0',
        percentag: '+59.10%',
        color: true
    },
    {
        header: 'TOP LOSER (24H)',
        coin: 'XTZDOWN/USDT',
        rate: '2.831',
        doller: '$3',
        percentag: '-40.87%',
        color: false
    },
    {
        header: 'HIGHLIGHT',
        coin: 'USDT/BIDR',
        rate: '14,339',
        doller: '$1',
        percentag: '-0.44% ',
    },
    {
        header: 'GRT/USDT',
        coin: 'DOT/USDT',
        rate: '30.90',
        doller: '$31',
        percentag: '+3.66%',
        color: true
    }
]

export const favoriteSpotData = {


    columns: [
        {
            name: "NAME",
            selector: (row) => row.name,
            cell: row => <> <i className="fa fa-star px-2 fa-lg text-warning" aria-hidden="true"></i> <img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinnamefirst}<span className="text-muted">/{row.coinnamesecond}</span></>,
            sortable: true,
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            maxWidth: '50px',
            minWidth: "150px"
            // cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.id}</a>
        },
        {
            name: "24H CHANGE",
            selector: (row) => row.hchange,
            sortable: true,
            cell:(row)=><><span className="color-price-up">{row.hchange}</span></>
        },
        {
            name: "24H HIGH/24H LOW",
            selector: (row) => row.highandlow,
            sortable: true
        },
        {
            name: "24 VLOLUME",
            selector: (row) => row.volume,
            sortable: true
        },
        {
            name: "MARKET CAP",
            selector: (row) => row.marketcap,
            sortable: true
        },
        {
            name: "ACTIONS",
            selector: (row) => row.aciton,
            sortable: true,
            cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.aciton}</a>

        },

    ],
    rows: [

        {
            image: spotImg1,
            coinnamefirst: 'ADA',
            coinnamesecond:'BNB',
            price: '0.006640 / $2.35',
            hchange: '+7.27%',
            highandlow: '	0.006652 / 0.006168',
            volume: '26,781.66',
            marketcap: '	$75,260.60M',
            aciton: 'Trade'
        },
        {
            image: spotImg2,
            coinnamefirst: 'BTC',
            coinnamesecond:'USDT',
            price: '42,564.39 / $42,350.69',
            hchange: '+1.12%',
            highandlow: '43,200.00 / 40,675.00',
            volume: '	2,603.11M',
            marketcap: '	$801,182.25M',
            aciton: 'Trade'
        },
        {
            image: spotImg3,
            coinnamefirst: 'COTI',
            coinnamesecond:'BNB',
            price: '0.08686 / $2.35',
            hchange: '+3.45%',
            highandlow: '	0.09024 / 0.08345',
            volume: '	36,883.46',
            marketcap: '	$30,298.93M',
            aciton: 'Trade'
        },
        {
            image: spotImg4,
            coinnamefirst: 'COTI',
            coinnamesecond:'BNB',
            price: '0.0018329 / $0.64',
            hchange: '+28.33%',
            highandlow: '	0.0018867 / 0.0013722',
            volume: '	17,935.33',
            marketcap: '	$563.54M',
            aciton: 'Trade'
        },
        {
            image: spotImg5,
            coinnamefirst: 'ETH',
            coinnamesecond:'USDT',
            price: '2,918.14 / $2,916.23',
            hchange: '+4.03%',
            highandlow: '2,979.99 / 2,733.00',
            volume: '	2,079.60M',
            marketcap: '$342,735.73M',
            aciton: 'Trade'
        },
        {
            image: spotImg6,
            coinnamefirst: 'SOL',
            coinnamesecond:'USDT',
            price: '139.15 / $139.22',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Trade'
        },
    ]
}

export const favoritefutureData = {
    columns: [
        {
            name: "NAME",
            selector: (row) => row.name,
            cell: row => <> <i className="fa fa-star px-2 fa-lg text-warning" aria-hidden="true"></i> <img src={row.image} alt="" className="img-fluid avatar mx-1" /> <div style={{width:'100px'}}>{row.coinnamefirst}</div><span className="text-muted" style={{width:'100px'}}>/perpetual</span></>,
            sortable: true,
            minWidth: "250px"
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            maxWidth: '50px',
            minWidth: "150px"
            // cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.id}</a>
        },
        {
            name: "24H CHANGE",
            selector: (row) => row.hchange,
            sortable: true,
            cell:(row)=><><span className="color-price-up">{row.hchange}</span></>
        },
        {
            name: "24H HIGH/24H LOW",
            selector: (row) => row.highandlow,
            sortable: true
        },
        {
            name: "24 VLOLUME",
            selector: (row) => row.volume,
            sortable: true
        },
        {
            name: "MARKET CAP",
            selector: (row) => row.marketcap,
            sortable: true
        },
        {
            name: "ACTION",
            selector: (row) => { },
            sortable: true,
            cell: () =><div className="btn-group" role="group">
            <span className="dtr-data"><a href="#!" title="" className="text-secondary px-1">Data History</a><a href="#!" title="" className="text-secondary">Trade</a></span>
        </div>
        }
    ],
    rows: [

        {
            image: spotImg1,
            coinnamefirst: 'ADAUSDT',
            price: '0.006640 / $2.35',
            hchange: '+7.27%',
            highandlow: '	0.006652 / 0.006168',
            volume: '26,781.66',
            marketcap: '	$75,260.60M'
        },
        {
            image: spotImg2,
            coinnamefirst: 'BTCUSDT',
            price: '42,564.39 / $42,350.69',
            hchange: '+1.12%',
            highandlow: '43,200.00 / 40,675.00',
            volume: '	2,603.11M',
            marketcap: '	$801,182.25M'
        },
        {
            image: spotImg3,
            coinnamefirst: 'COTIUSDT',
            price: '0.08686 / $2.35',
            hchange: '+3.45%',
            highandlow: '	0.09024 / 0.08345',
            volume: '	36,883.46',
            marketcap: '	$30,298.93M'
        },
        {
            image: spotImg4,
            coinnamefirst: 'COTIUSDT',
            price: '0.0018329 / $0.64',
            hchange: '+28.33%',
            highandlow: '	0.0018867 / 0.0013722',
            volume: '	17,935.33',
            marketcap: '	$563.54M'
        },
        {
            image: spotImg5,
            coinnamefirst: 'ETHUSDT',
            price: '2,918.14 / $2,916.23',
            hchange: '+4.03%',
            highandlow: '2,979.99 / 2,733.00',
            volume: '	2,079.60M',
            marketcap: '$342,735.73M'
        },
        {
            image: spotImg6,
            coinnamefirst: 'SOLUSDT',
            price: '139.15 / $139.22',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M'
        },
    ]
}

export const favoriteMarginData = {


    columns: [
        {
            name: "NAME",
            selector: (row) => row.name,
            cell: row => <> <i className="fa fa-star px-2 fa-lg text-warning" aria-hidden="true"></i> <img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinnamefirst}<span className="text-muted">/{row.coinnamesecond}</span></>,
            sortable: true,
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            maxWidth: '50px',
            minWidth: "150px"
            // cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.id}</a>
        },
        {
            name: "24H CHANGE",
            selector: (row) => row.hchange,
            sortable: true,
            cell:(row)=><><span className="color-price-up">{row.hchange}</span></>
        },
        {
            name: "24H HIGH/24H LOW",
            selector: (row) => row.highandlow,
            sortable: true
        },
        {
            name: "24 VLOLUME",
            selector: (row) => row.volume,
            sortable: true
        },
        {
            name: "MARKET CAP",
            selector: (row) => row.marketcap,
            sortable: true
        },
        {
            name: "ACTIONS",
            selector: (row) => row.aciton,
            sortable: true,
            cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.aciton}</a>

        },

    ],
    rows: [
        {
            image: spotImg4,
            coinnamefirst: 'COTI',
            coinnamesecond:'BNB',
            price: '0.0018329 / $0.64',
            hchange: '+28.33%',
            highandlow: '	0.0018867 / 0.0013722',
            volume: '	17,935.33',
            marketcap: '	$563.54M',
            aciton: 'Trade'
        },
        {
            image: spotImg5,
            coinnamefirst: 'ETH',
            coinnamesecond:'USDT',
            price: '2,918.14 / $2,916.23',
            hchange: '+4.03%',
            highandlow: '2,979.99 / 2,733.00',
            volume: '	2,079.60M',
            marketcap: '$342,735.73M',
            aciton: 'Trade'
        },
        {
            image: spotImg6,
            coinnamefirst: 'SOL',
            coinnamesecond:'USDT',
            price: '139.15 / $139.22',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Trade'
        },
    ]
}

export const soptMarkebnb = {


    columns: [
        {
            name: "NAME",
            selector: (row) => row.name,
            cell: row => <> <i className="fa fa-star px-2 fa-lg text-warning" aria-hidden="true"></i> <img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinnamefirst}<span className="text-muted">/{row.coinnamesecond}</span></>,
            sortable: true,
            minWidth: "150px",
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            maxWidth: '50px',
            minWidth: "150px",
            cell: (row) => <a href="#!" className={` ${row.redtext?"text-danger":row.greentext?"text-success":''}`}>{row.price}<span className="text-muted">{row.dollerprice}</span></a>
        },
        {
            name: "24H CHANGE",
            selector: (row) => row.hchange,
            sortable: true,
            cell:(row)=><><span className={`${row.pricedown?"color-price-down":"color-price-up"}`}>{row.hchange}</span></>
        },
        {
            name: "24H HIGH/24H LOW",
            selector: (row) => row.highandlow,
            sortable: true
        },
        {
            name: "24 VLOLUME",
            selector: (row) => row.volume,
            sortable: true
        },
        {
            name: "MARKET CAP",
            selector: (row) => row.marketcap,
            sortable: true
        },
        {
            name: "ACTIONS",
            selector: (row) => row.aciton,
            sortable: true,
            cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.aciton}</a>

        },

    ],
    rows: [

        {
            image: spotImg1,
            coinnamefirst: 'ADA',
            coinnamesecond:'BNB',
            price: '0.006640 /',
            dollerprice:' $2.35',
            hchange: '+7.27%',
            highandlow: '	0.006652 / 0.006168',
            volume: '26,781.66',
            marketcap: '	$75,260.60M',
            aciton: 'Trade'
        },
        {
            image: spotImg5,
            coinnamefirst: 'COTI',
            coinnamesecond:'BNB',
            price: '42,564.39 /',
            dollerprice:' $42,350.69',
            hchange: '+1.12%',
            highandlow: '43,200.00 / 40,675.00',
            volume: '	2,603.11M',
            marketcap: '	$801,182.25M',
            aciton: 'Trade'
        },
        {
            image: spotImg3,
            coinnamefirst: 'COTI',
            coinnamesecond:'BNB',
            price: '0.08686 /',
            dollerprice:' $2.35',
            hchange: '+3.45%',
            highandlow: '	0.09024 / 0.08345',
            volume: '	36,883.46',
            marketcap: '	$30,298.93M',
            aciton: 'Trade'
        },
        {
            image: spotImg4,
            coinnamefirst: 'MATIC',
            coinnamesecond:'BNB',
            price: '0.0018329 /',
            dollerprice:' $0.64',
            hchange: '+28.33%',
            highandlow: '	0.0018867 / 0.0013722',
            volume: '	17,935.33',
            marketcap: '	$563.54M',
            aciton: 'Trade',
            redtext:true
        },
        {
            image: spotBnb,
            coinnamefirst: 'CAKE',
            coinnamesecond:'BNB',
            price: '2,918.14 /',
            dollerprice:'  $2,916.23',
            hchange: '+4.03%',
            highandlow: '2,979.99 / 2,733.00',
            volume: '	2,079.60M',
            marketcap: '$342,735.73M',
            aciton: 'Trade',
            pricedown:true
        },
        {
            image: spotImg6,
            coinnamefirst: 'SOL',
            coinnamesecond:'BNB',
            price: '139.15 /',
            dollerprice:' $139.22',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Trade',
            redtext:true
        },
    ]
}

export const soptMarkeBTC = {


    columns: [
        {
            name: "NAME",
            selector: (row) => row.name,
            cell: row => <> <i className={`fa fa-star px-2 fa-lg ${row.iconcolor?"text-warning":''}`} aria-hidden="true"></i> <img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinnamefirst}<span className="text-muted">/{row.coinnamesecond}</span></>,
            sortable: true,
            minWidth: "150px",
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            maxWidth: '50px',
            minWidth: "150px",
            cell: (row) => <a href="#!" className={` ${row.redtext?"text-danger":row.greentext?"text-success":''}`}>{row.price}<span className="text-muted">{row.dollerprice}</span></a>
        },
        {
            name: "24H CHANGE",
            selector: (row) => row.hchange,
            sortable: true,
            cell:(row)=><><span className={`${row.pricedown?"color-price-down":"color-price-up"}`}>{row.hchange}</span></>
        },
        {
            name: "24H HIGH/24H LOW",
            selector: (row) => row.highandlow,
            sortable: true
        },
        {
            name: "24 VLOLUME",
            selector: (row) => row.volume,
            sortable: true
        },
        {
            name: "MARKET CAP",
            selector: (row) => row.marketcap,
            sortable: true
        },
        {
            name: "ACTIONS",
            selector: (row) => row.aciton,
            sortable: true,
            cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.aciton}</a>

        },

    ],
    rows: [

        {
            image: spotImg1,
            coinnamefirst: 'ADA',
            coinnamesecond:'BNB',
            price: '0.006640 /',
            dollerprice:' $2.35',
            hchange: '-3.46%',
            highandlow: '	0.006652 / 0.006168',
            volume: '26,781.66',
            marketcap: '	$75,260.60M',
            aciton: 'Trade',
            greentext:true,
            pricedown:true
        },
        {
            image: spotBnb,
            coinnamefirst: 'CAKE',
            coinnamesecond:'BNB',
            price: '2,918.14 / ',
            dollerprice:'$2,916.23',
            hchange: '+4.03%',
            highandlow: '2,979.99 / 2,733.00',
            volume: '	2,079.60M',
            marketcap: '$342,735.73M',
            aciton: 'Trade',
        },
       
        {
            image: spotImg3,
            coinnamefirst: 'COTI',
            coinnamesecond:'BNB',
            price: '0.08686 / ',
            dollerprice:'$2.35',
            hchange: '+3.45%',
            highandlow: '	0.09024 / 0.08345',
            volume: '	36,883.46',
            marketcap: '	$30,298.93M',
            aciton: 'Trade'
        },
        {
            image: spotImg4,
            coinnamefirst: 'MATIC',
            coinnamesecond:'BNB',
            price: '0.0018329 /',
            dollerprice:' $0.64',
            hchange: '+28.33%',
            highandlow: '	0.0018867 / 0.0013722',
            volume: '	17,935.33',
            marketcap: '	$563.54M',
            aciton: 'Trade',
        },
        {
            image: spotImg5,
            coinnamefirst: 'COTI',
            coinnamesecond:'BNB',
            price: '42,564.39 /',
            dollerprice:' $42,350.69',
            hchange: '+1.12%',
            highandlow: '43,200.00 / 40,675.00',
            volume: '	2,603.11M',
            marketcap: '	$801,182.25M',
            aciton: 'Trade',
            greentext:true,
        },
        {
            image: spotImg3,
            coinnamefirst: 'MATIC',
            coinnamesecond:'BNB',
            price: '0.0018329 /',
            dollerprice:'  $0.64',
            hchange: '+28.33%',
            highandlow: '	0.0018867 / 0.0013722',
            volume: '	17,935.33',
            marketcap: '	$563.54M',
            aciton: 'Trade',
            redtext:true
        },
       
        {
            image: spotImg6,
            coinnamefirst: 'SOL',
            coinnamesecond:'BNB',
            price: '139.15 /',
            dollerprice:' $139.22',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Trade',
            redtext:true
        },
    ]
}

export const soptMarketALTS = {


    columns: [
        {
            name: "NAME",
            selector: (row) => row.name,
            cell: row => <> <i className="fa fa-star px-2 fa-lg text-warning" aria-hidden="true"></i> <img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinnamefirst}<span className="text-muted">/{row.coinnamesecond}</span></>,
            sortable: true,
            minWidth: "200px",
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            maxWidth: '50px',
            minWidth: "150px",
            cell: (row) => <a href="#!" className={` ${row.redtext?"text-danger":row.greentext?"text-success":''}`}>{row.price}<span className="text-muted">{row.dollerprice}</span></a>
        },
        {
            name: "24H CHANGE",
            selector: (row) => row.hchange,
            sortable: true,
            cell:(row)=><><span className={`${row.pricedown?"color-price-down":"color-price-up"}`}>{row.hchange}</span></>
        },
        {
            name: "24H HIGH/24H LOW",
            selector: (row) => row.highandlow,
            sortable: true
        },
        {
            name: "24 VLOLUME",
            selector: (row) => row.volume,
            sortable: true
        },
        {
            name: "MARKET CAP",
            selector: (row) => row.marketcap,
            sortable: true
        },
        {
            name: "ACTIONS",
            selector: (row) => row.aciton,
            sortable: true,
            cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.aciton}</a>

        },

    ],
    rows: [

        {
            image: spotALTSBNB,
            coinnamefirst: 'ADA',
            coinnamesecond:'BNB',
            price: '0.006640 /',
            dollerprice:' $2.35',
            hchange: '+7.27%',
            highandlow: '	0.006652 / 0.006168',
            volume: '26,781.66',
            marketcap: '	$75,260.60M',
            aciton: 'Trade'
        },
        {
            image: spotALTSBTT,
            coinnamefirst: 'COTI',
            coinnamesecond:'BNB',
            price: '42,564.39 /',
            dollerprice:' $42,350.69',
            hchange: '+1.12%',
            highandlow: '43,200.00 / 40,675.00',
            volume: '	2,603.11M',
            marketcap: '	$801,182.25M',
            aciton: 'Trade',
            redtext:true
        },
        {
            image: spotALTSCNX,
            coinnamefirst: 'COTI',
            coinnamesecond:'BNB',
            price: '0.08686 /',
            dollerprice:' $2.35',
            hchange: '+3.45%',
            highandlow: '	0.09024 / 0.08345',
            volume: '	36,883.46',
            marketcap: '	$30,298.93M',
            aciton: 'Trade',
            redtext:true
        },
        {
            image: spotALTSHEGIC,
            coinnamefirst: 'MATIC',
            coinnamesecond:'BNB',
            price: '0.0018329 /',
            dollerprice:' $0.64',
            hchange: '+28.33%',
            highandlow: '	0.0018867 / 0.0013722',
            volume: '	17,935.33',
            marketcap: '	$563.54M',
            aciton: 'Trade',
          
        },
        {
            image: spotALTSTRX,
            coinnamefirst: 'CAKE',
            coinnamesecond:'BNB',
            price: '2,918.14 /',
            dollerprice:'  $2,916.23',
            hchange: '+4.03%',
            highandlow: '2,979.99 / 2,733.00',
            volume: '	2,079.60M',
            marketcap: '$342,735.73M',
            aciton: 'Trade',
        },
        {
            image: spotALTSWIN,
            coinnamefirst: 'SOL',
            coinnamesecond:'BNB',
            price: '139.15 /',
            dollerprice:' $139.22',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Trade',
            greentext:true,
        },
    ]
}

export const soptMarketFAIT= {


    columns: [
        {
            name: "NAME",
            selector: (row) => row.name,
            cell: row => <> <i className={`fa fa-star px-2 fa-lg ${row.iconcolor?"text-warning":''}`} aria-hidden="true"></i> <img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinnamefirst}<span className="text-muted">/{row.coinnamesecond}</span></>,
            sortable: true,
            minWidth: "150px",
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            maxWidth: '50px',
            minWidth: "150px",
            cell: (row) => <a href="#!" className={` ${row.redtext?"text-danger":row.greentext?"text-success":''}`}>{row.price}<span className="text-muted">{row.dollerprice}</span></a>
        },
        {
            name: "24H CHANGE",
            selector: (row) => row.hchange,
            sortable: true,
            cell:(row)=><><span className={`${row.pricedown?"color-price-down":"color-price-up"}`}>{row.hchange}</span></>
        },
        {
            name: "24H HIGH/24H LOW",
            selector: (row) => row.highandlow,
            sortable: true
        },
        {
            name: "24 VLOLUME",
            selector: (row) => row.volume,
            sortable: true
        },
        {
            name: "MARKET CAP",
            selector: (row) => row.marketcap,
            sortable: true
        },
        {
            name: "ACTIONS",
            selector: (row) => row.aciton,
            sortable: true,
            cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.aciton}</a>

        },

    ],
    rows: [

        {
            image: spotImg1,
            coinnamefirst: 'ADA',
            coinnamesecond:'BTC',
            price: '0.006640 /',
            dollerprice:' $2.35',
            hchange: '-3.46%',
            highandlow: '	0.006652 / 0.006168',
            volume: '26,781.66',
            marketcap: '	$75,260.60M',
            aciton: 'Trade',
            greentext:true,
            pricedown:true
        },
        {
            image: spotImg1,
            coinnamefirst: 'ADA',
            coinnamesecond:'GBP',
            price: '0.006640 /',
            dollerprice:' $2.35',
            hchange: '+0.27%',
            highandlow: '	0.006652 / 0.006168',
            volume: '26,781.66',
            marketcap: '	$75,260.60M',
            aciton: 'Trade',
            greentext:true,
            pricedown:true
        },
        {
            image: spotBnb,
            coinnamefirst: 'CAKE',
            coinnamesecond:'BTC',
            price: '2,918.14 /',
            dollerprice:'  $2,916.23',
            hchange: '+4.03%',
            highandlow: '2,979.99 / 2,733.00',
            volume: '	2,079.60M',
            marketcap: '$342,735.73M',
            aciton: 'Trade',
          
        },
        {
            image: CELR,
            coinnamefirst: 'CELR',
            coinnamesecond:'USDT',
            price: '42,564.39 /',
            dollerprice:' $42,350.69',
            hchange: '+1.12%',
            highandlow: '43,200.00 / 40,675.00',
            volume: '	2,603.11M',
            marketcap: '	$801,182.25M',
            aciton: 'Trade',
            redtext:true
        },
        {
            image: spotImg3,
            coinnamefirst: 'COTI',
            coinnamesecond:'BTC',
            price: '0.08686 /',
            dollerprice:' $2.35',
            hchange: '+3.45%',
            highandlow: '	0.09024 / 0.08345',
            volume: '	36,883.46',
            marketcap: '	$30,298.93M',
            aciton: 'Trade'
        },
        {
            image: spotImg3,
            coinnamefirst: 'COTI',
            coinnamesecond:'USDT',
            price: '0.08686 /',
            dollerprice:' $2.35',
            hchange: '+3.45%',
            highandlow: '	0.09024 / 0.08345',
            volume: '	36,883.46',
            marketcap: '	$30,298.93M',
            aciton: 'Trade',
        },
        {
            image: spotImg2,
            coinnamefirst: 'DOT',
            coinnamesecond:'BTC',
            price: '0.0018329 /',
            dollerprice:' $0.64',
            hchange: '+28.33%',
            highandlow: '	0.0018867 / 0.0013722',
            volume: '	17,935.33',
            marketcap: '	$563.54M',
            aciton: 'Trade',
          
        },
       
        {
            image: spotImg4,
            coinnamefirst: 'ETH',
            coinnamesecond:'BTC',
            price: '139.15 /',
            dollerprice:' $139.22',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Trade',
            iconcolor:true,
            greentext:true,
        },
        {
            image: spotImg4,
            coinnamefirst: 'ETH',
            coinnamesecond:'EUR',
            price: '139.15 /',
            dollerprice:' $139.22',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Trade',
            iconcolor:true,
            greentext:true,
        },
        {
            image: spotImg4,
            coinnamefirst: 'ETH',
            coinnamesecond:'USDT',
            price: '139.15 /',
            dollerprice:' $139.22',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Trade',
            iconcolor:true,
            greentext:true,
        },
    ]
}

export const soptMarketETF= {


    columns: [
        {
            name: "NAME",
            selector: (row) => row.name,
            cell: row => <> <i className={`fa fa-star px-2 fa-lg ${row.iconcolor?"text-warning":''}`} aria-hidden="true"></i> <img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinnamefirst}<span className="text-muted">/{row.coinnamesecond}</span></>,
            sortable: true,
            minWidth: "250px",
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            maxWidth: '50px',
            minWidth: "150px",
            cell: (row) => <a href="#!" className={` ${row.redtext?"text-danger":row.greentext?"text-success":''}`}>{row.price}<span className="text-muted">{row.dollerprice}</span></a>
        },
        {
            name: "24H CHANGE",
            selector: (row) => row.hchange,
            sortable: true,
            cell:(row)=><><span className={`${row.pricedown?"color-price-down":"color-price-up"}`}>{row.hchange}</span></>
        },
        {
            name: "24H HIGH/24H LOW",
            selector: (row) => row.highandlow,
            sortable: true
        },
        {
            name: "24 VLOLUME",
            selector: (row) => row.volume,
            sortable: true
        },
        {
            name: "MARKET CAP",
            selector: (row) => row.marketcap,
            sortable: true
        },
        {
            name: "ACTIONS",
            selector: (row) => row.aciton,
            sortable: true,
            cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.aciton}</a>

        },

    ],
    rows: [

        {
            image: spotImg1,
            coinnamefirst: 'ADADOWN',
            coinnamesecond:'USDT',
            price: '0.006640 /',
            dollerprice:' $2.35',
            hchange: '-3.46%',
            highandlow: '	0.006652 / 0.006168',
            volume: '26,781.66',
            marketcap: '	$75,260.60M',
            aciton: 'Trade',
            greentext:true,
            pricedown:true
        },
        {
            image: spotBnb,
            coinnamefirst: 'CAKE',
            coinnamesecond:'USDT',
            price: '2,918.14 /',
            dollerprice:'  $2,916.23',
            hchange: '+4.03%',
            highandlow: '2,979.99 / 2,733.00',
            volume: '	2,079.60M',
            marketcap: '$342,735.73M',
            aciton: 'Trade',
          
        },
       
        {
            image: CELR,
            coinnamefirst: 'CELR',
            coinnamesecond:'USDT',
            price: '42,564.39 /',
            dollerprice:' $42,350.69',
            hchange: '+1.12%',
            highandlow: '43,200.00 / 40,675.00',
            volume: '	2,603.11M',
            marketcap: '	$801,182.25M',
            aciton: 'Trade',
            redtext:true
        },
        {
            image: spotImg3,
            coinnamefirst: 'COTI',
            coinnamesecond:'USDT',
            price: '0.08686 /',
            dollerprice:' $2.35',
            hchange: '+3.45%',
            highandlow: '	0.09024 / 0.08345',
            volume: '	36,883.46',
            marketcap: '	$30,298.93M',
            aciton: 'Trade'
        },
        {
            image: spotImg2,
            coinnamefirst: 'COTI',
            coinnamesecond:'USDT',
            price: '0.08686 /',
            dollerprice:' $2.35',
            hchange: '+3.45%',
            highandlow: '	0.09024 / 0.08345',
            volume: '	36,883.46',
            marketcap: '	$30,298.93M',
            aciton: 'Trade',
           
        },
        {
            image: spotImg4,
            coinnamefirst: 'ETH',
            coinnamesecond:'USDT',
            price: '139.15 /',
            dollerprice:' $139.22',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Trade',
            iconcolor:true,
            greentext:true,
        },
        {
            image: Magic,
            coinnamefirst: 'ETH',
            coinnamesecond:'USDT',
            price: '0.00315 /',
            dollerprice:' $139.22',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Trade',
            redtext:true
        },
        {
            image: spotImg6,
            coinnamefirst: 'SOL',
            coinnamesecond:'USDT',
            price: '139.15 /',
            dollerprice:' $139.22',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Trade',
            redtext:true
        },
        {
            image: USDT,
            coinnamefirst: 'SOL',
            coinnamesecond:'USDT',
            price: '72.15 /',
            dollerprice:' $139.22',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Trade',
            redtext:true
        },

    ]
}

export const feutureMarketUSD = {


    columns: [
        {
            name: "NAME",
            selector: (row) => row.name,
            cell: row => <> <i className="fa fa-star px-2 fa-lg text-warning" aria-hidden="true"></i> <img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinnamefirst}<span className="text-muted">/perpetual</span></>,
            sortable: true,
            minWidth: "250px"
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            maxWidth: '50px',
            minWidth: "150px",
            cell: (row) => <a href="#!" className={` ${row.redtext?"text-danger":row.greentext?"text-success":''}`}>{row.price}<span className="text-muted">{row.dollerprice}</span></a>
        },
        {
            name: "24H CHANGE",
            selector: (row) => row.hchange,
            sortable: true,
            cell:(row)=><><span className="color-price-up">{row.hchange}</span></>
        },
        {
            name: "24H HIGH/24H LOW",
            selector: (row) => row.highandlow,
            sortable: true
        },
        {
            name: "24 VLOLUME",
            selector: (row) => row.volume,
            sortable: true
        },
        {
            name: "MARKET CAP",
            selector: (row) => row.marketcap,
            sortable: true
        },
        {
            name: "ACTIONS",
            selector: (row) => row.aciton,
            sortable: true,
            cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.aciton}</a>

        },

    ],
    rows: [

        {
            image: spotImg1,
            coinnamefirst: 'ADA',
            price: '0.006640 /',
            dollerprice:' $2.35',
            hchange: '+7.27%',
            highandlow: '	0.006652 / 0.006168',
            volume: '26,781.66',
            marketcap: '	$75,260.60M',
            aciton: 'Data HistoryTrade',
            redtext:true
        },
        {
            image: spotImg2,
            coinnamefirst: 'BTC',
            price: '42,564.39 /',
            dollerprice:' $42,350.69',
            hchange: '+1.12%',
            highandlow: '43,200.00 / 40,675.00',
            volume: '	2,603.11M',
            marketcap: '	$801,182.25M',
            aciton: 'Data HistoryTrade'
        },
        {
            image: spotImg3,
            coinnamefirst: 'COTI',
            price: '0.08686 /',
            dollerprice:' $2.35',
            hchange: '+3.45%',
            highandlow: '	0.09024 / 0.08345',
            volume: '	36,883.46',
            marketcap: '	$30,298.93M',
            aciton: 'Data HistoryTrade'
        },
        {
            image: spotImg4,
            coinnamefirst: 'COTI',
            price: '0.0018329 /',
            dollerprice:' $0.64',
            hchange: '+28.33%',
            highandlow: '	0.0018867 / 0.0013722',
            volume: '	17,935.33',
            marketcap: '	$563.54M',
            aciton: 'Data HistoryTrade'
        },
        {
            image: spotImg5,
            coinnamefirst: 'ETH',
            price: '2,918.14 /',
            dollerprice:' $2,916.23',
            hchange: '+4.03%',
            highandlow: '2,979.99 / 2,733.00',
            volume: '	2,079.60M',
            marketcap: '$342,735.73M',
            aciton: 'Data HistoryTrade',
            greentext:true,
        },
        {
            image: spotImg6,
            coinnamefirst: 'SOL',
            price: '139.15 /',
            dollerprice:' $139.22',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Data HistoryTrade',
            redtext:true
        },
    ]
}

export const feutureMarketCOIN = {


    columns: [
        {
            name: "NAME",
            selector: (row) => row.name,
            cell: row => <> <i className="fa fa-star px-2 fa-lg text-warning" aria-hidden="true"></i> <img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinnamefirst}<span className="text-muted">/perpetual</span></>,
            sortable: true,
            minWidth: "250px"
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            maxWidth: '50px',
            minWidth: "150px",
            cell: (row) => <a href="#!" className={` ${row.redtext?"text-danger":row.greentext?"text-success":''}`}>{row.price}<span className="text-muted">{row.dollerprice}</span></a>
        },
        {
            name: "24H CHANGE",
            selector: (row) => row.hchange,
            sortable: true,
            cell:(row)=><><span className="color-price-up">{row.hchange}</span></>
        },
        {
            name: "24H HIGH/24H LOW",
            selector: (row) => row.highandlow,
            sortable: true
        },
        {
            name: "24 VLOLUME",
            selector: (row) => row.volume,
            sortable: true
        },
        {
            name: "MARKET CAP",
            selector: (row) => row.marketcap,
            sortable: true
        },
        {
            name: "ACTIONS",
            selector: (row) => row.aciton,
            sortable: true,
            cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.aciton}</a>

        },

    ],
    rows: [

        {
            image: spotImg1,
            coinnamefirst: 'ADA',
            price: '0.006640 /',
            dollerprice:' $2.35',
            hchange: '+7.27%',
            highandlow: '	0.006652 / 0.006168',
            volume: '26,781.66',
            marketcap: '	$75,260.60M',
            aciton: 'Data HistoryTrade',
            redtext:true
        },
        {
            image: spotImg2,
            coinnamefirst: 'BTC',
            price: '42,564.39 /',
            dollerprice:' $42,350.69',
            hchange: '+1.12%',
            highandlow: '43,200.00 / 40,675.00',
            volume: '	2,603.11M',
            marketcap: '	$801,182.25M',
            aciton: 'Data HistoryTrade'
        },
        {
            image: spotImg3,
            coinnamefirst: 'COTI',
            price: '0.08686 /',
            dollerprice:' $2.35',
            hchange: '+3.45%',
            highandlow: '	0.09024 / 0.08345',
            volume: '	36,883.46',
            marketcap: '	$30,298.93M',
            aciton: 'Data HistoryTrade'
        },
        {
            image: spotImg4,
            coinnamefirst: 'COTI',
            price: '0.0018329 /',
            dollerprice:' $0.64',
            hchange: '+28.33%',
            highandlow: '	0.0018867 / 0.0013722',
            volume: '	17,935.33',
            marketcap: '	$563.54M',
            aciton: 'Data HistoryTrade'
        },
        {
            image: spotImg5,
            coinnamefirst: 'ETH',
            price: '2,918.14 /',
            dollerprice:' $2,916.23',
            hchange: '+4.03%',
            highandlow: '2,979.99 / 2,733.00',
            volume: '	2,079.60M',
            marketcap: '$342,735.73M',
            aciton: 'Data HistoryTrade',
            greentext:true,
        },
        {
            image: spotImg6,
            coinnamefirst: 'SOL',
            price: '139.15 /',
            dollerprice:' $139.22',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Data HistoryTrade',
            redtext:true
        },
    ]
}

export const newListing = {


    columns: [
        {
            name: "NAME",
            selector: (row) => row.name,
            cell: row => <> <i className="fa fa-star px-2 fa-lg text-warning" aria-hidden="true"></i> <img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinnamefirst}<span className="text-muted">/GALA</span></>,
            sortable: true,
            minWidth: "250px"
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            maxWidth: '50px',
            minWidth: "150px",
            cell: (row) => <a href="#!" className="text-success">{row.price}</a>
        },
        {
            name: "24H CHANGE",
            selector: (row) => row.hchange,
            sortable: true,
            cell:(row)=><><span className="color-price-up">{row.hchange}</span></>
        },
        {
            name: "24H HIGH/24H LOW",
            selector: (row) => row.highandlow,
            sortable: true
        },
        {
            name: "24 VLOLUME",
            selector: (row) => row.volume,
            sortable: true
        },
        {
            name: "ACTIONS",
            selector: (row) => row.aciton,
            sortable: true,
            cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.aciton}</a>

        },

    ],
    rows: [

        {
            image: Gala,
            coinnamefirst: 'GALA',
            price: '$0.09',
            hchange: '+2.20%',
            highandlow: '223.32M',
            volume: '$648.18M',
            aciton: 'DetailTrade',
        }
    ]
}

export const AllCripto = {


    columns: [
        {
            name: "NAME",
            selector: (row) => row.name,
            cell: row => <><img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinnamefirst}<span className="text-muted">{row.coinnamesecond}</span></>,
            sortable: true,
            minWidth: "150px",
        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            maxWidth: '50px',
            minWidth: "150px",
            cell: (row) => <a href="#!" className={` ${row.redtext?"text-danger":row.greentext?"text-success":''}`}>{row.price}<span className="text-muted">{row.dollerprice}</span></a>
        },
        {
            name: "24H CHANGE",
            selector: (row) => row.hchange,
            sortable: true,
            cell:(row)=><><span className={`${row.pricedown?"color-price-down":"color-price-up"}`}>{row.hchange}</span></>
        },
        {
            name: "24H HIGH/24H LOW",
            selector: (row) => row.highandlow,
            sortable: true
        },
        {
            name: "24 VLOLUME",
            selector: (row) => row.volume,
            sortable: true
        },
        {
            name: "MARKET CAP",
            selector: (row) => row.marketcap,
            sortable: true
        },
        {
            name: "ACTIONS",
            selector: (row) => row.aciton,
            sortable: true,
            cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.aciton}</a>

        },

    ],
    rows: [

        {
            image: spotImg1,
            coinnamefirst: 'ADA',
            coinnamesecond:'Cardano',
            dollerprice:' $2.25',
            hchange: '-3.46%',
            highandlow: '	0.006652 / 0.006168',
            volume: '26,781.66',
            marketcap: '	$75,260.60M',
            aciton: 'Detail Trade',
        },
        {
            image: ADX,
            coinnamefirst: 'ADX',
            coinnamesecond:'Adex',
            dollerprice:'	$0.46',
            hchange: '+4.03%',
            highandlow: '2,979.99 / 2,733.00',
            volume: '	2,079.60M',
            marketcap: '$342,735.73M',
            aciton: 'Detail Trade',
        },
       
        {
            image: ARDR,
            coinnamefirst: 'ARDR',
            coinnamesecond:'Ardor',
            dollerprice:'$0.28',
            hchange: '+3.45%',
            highandlow: '	0.09024 / 0.08345',
            volume: '	36,883.46',
            marketcap: '	$30,298.93M',
            aciton: 'Detail Trade'
        },
        {
            image: ARK,
            coinnamefirst: 'ARK',
            coinnamesecond:'Ark',
            dollerprice:' $1.51',
            hchange: '-1.97%',
            highandlow: '	0.0018867 / 0.0013722',
            volume: '	17,935.33',
            marketcap: '	$563.54M',
            aciton: 'Detail Trade',
            pricedown:true
        },
        {
            image: BAT,
            coinnamefirst: 'BAT',
            coinnamesecond:'Attention Token',
            dollerprice:'$0.65',
            hchange: '+1.12%',
            highandlow: '43,200.00 / 40,675.00',
            volume: '	2,603.11M',
            marketcap: '	$801,182.25M',
            aciton: 'Detail Trade',
        },
        {
            image: BCH,
            coinnamefirst: 'BCH',
            coinnamesecond:'Bitcoin Cash',
            dollerprice:' $511.30',
            hchange: '+28.33%',
            highandlow: '	0.0018867 / 0.0013722',
            volume: '	17,935.33',
            marketcap: '	$563.54M',
            aciton: 'Detail Trade',
        },
       
        {
            image: BNB,
            coinnamefirst: 'BNB',
            coinnamesecond:'BNB',
            dollerprice:'	$355.80',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Detail Trade',
        },
        {
            image: BNT,
            coinnamefirst: 'BNT',
            coinnamesecond:'Bancor',
            dollerprice:'	$3.60',
            hchange: '+28.33%',
            highandlow: '	0.0018867 / 0.0013722',
            volume: '	17,935.33',
            marketcap: '	$563.54M',
            aciton: 'Detail Trade',
            redtext:true
        },
       
        {
            image: BTC,
            coinnamefirst: 'BTC',
            coinnamesecond:'Bitcoin',
            dollerprice:' 	$44,090.69',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Detail Trade',
        },
        {
            image: CELR,
            coinnamefirst: 'CVC',
            coinnamesecond:'Civic',
            dollerprice:'$0.43',
            hchange: '+5.83%',
            highandlow: '144.22 / 128.15',
            volume: '	743.07M',
            marketcap: '	$743958.07M',
            aciton: 'Detail Trade',
        },
    ]
}


