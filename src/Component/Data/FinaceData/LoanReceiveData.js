export const LoanReceiveData = {
    columns: [
        {
            name: "DATE",
            selector: (row) => row.date,
            sortable: true,
        },
        {
            name: "AMOUNT",
            selector: (row) => row.amount,
            sortable: true
        },
        {
            name: "TRANSFER/RECEIVED ID",
            selector: (row) => row.tranfer,
            sortable: true
        },
        {
            name: "STATUS",
            selector: (row) => row.status,
            sortable: true,
            cell: (row) => <span className={`${row.status==='PAID'?'text-danger':row.status==='RECEIVED'?'text-success':''}`}>{row.status}</span>
        }
    ],
    rows: [
       {
        date:'06-14 16:31:14',
        amount:'310 USDT',
        tranfer:'225637822',
        status:'PAID'
       },
       {
        date:'06-15 16:31:14',
        amount:'210 USDT',
        tranfer:'	235637822',
        status:'PAID'
       },
       {
        date:'09-18 17:32:15',
        amount:'100 USDT',
        tranfer:'225637822',
        status:'RECEIVED'
       },
    ]
}