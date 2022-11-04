export const TransactionData={
    columns:[
        {
            name: "DATE",
            selector: (row) => row.date,
            sortable: true,
            // cell: (row) => <a href="#!" className="fw-bold text-secondary">{row.id}</a>
        },
        {
            name: "TYPE",
            selector: (row) => row.type,
            sortable: true,
            
        },
        {
            name: "ASSET",
            selector: (row) => row.asset,
            sortable: true
        },
        {
            name: "AMOUNT",
            selector: (row) => row.amount,
            sortable: true
        },
        {
            name: "STATUS",
            selector: (row) => row.status,
            cell:(row)=><><span className={`${row.pricecolor?'color-price-up':'color-price-down'}`}>{row.status}</span></>,
            sortable: true
        }
    ],
    rows: [
        {
           date:'2021-07-27 22:06',
           type:'	Deposit',
           asset:'BTC',
           amount:'59.00000000',
           status:'Completed',
           pricecolor:true
        },
        {
            date:'2021-07-28 22:06',
            type:'	Deposit',
            asset:'BNB',
            amount:'459.00000000',
            status:'Completed',
            pricecolor:true
         },
         {
            date:'2021-08-18 13:07',
            type:'	Deposit',
            asset:'USDT',
            amount:'459.00000000',
            status:'Cancle',
            pricecolor:false
         },
         {
            date:'2021-08-21 14:07',
            type:'Withdraw',
            asset:'	USDT',
            amount:'99.00000000',
            status:'	Completed',
            pricecolor:true
         },
         {
            date:'2021-09-01 23:50',
            type:'Deposit',
            asset:'	USDT',
            amount:'323.50000000',
            status:'Completed',
            pricecolor:true
         },
         {
            date:'2021-09-22 22:04',
            type:'Withdraw',
            asset:'USDT',
            amount:'481.90172092',
            status:'Completed',
            pricecolor:true
         }
    ]
}