export const LoanOngoingOrderData = {
    columns: [
        {
            name: "DATE",
            selector: (row) => row.date,
            sortable: true,
        },
        {
            name: "BORROW",
            selector: (row) => row.borrow,
            sortable: true
        },
        {
            name: "COLLATERAL AMOUNT",
            selector: (row) => row.collateralamount,
            sortable: true
        },
        {
            name: "TERM DAY",
            selector: (row) => row.termday,
            sortable: true
        },
        {
            name: "INTEREST DATE",
            selector: (row) => row.interestrate,
            sortable: true
        },
        {
            name: "TOTAL INTEREST AMOUNT",
            selector: (row) => row.interestamount,
            sortable: true
        },
        {
            name: "REPAYMENT AMOUNT",
            selector: (row) => row.repaymentamount,
            sortable: true
        },
        {
            name: "STATUS",
            selector: (row) => row.status,
            sortable: true,
            cell: (row) => <span className={`${row.status==='CANCLE'?'text-danger':row.status==='COMPLETED'?'text-success':row.status==='UNDER PROCESS'?'text-warning':''}`}>{row.status}</span>
        }
    ],
    rows: [
        {
            date: '06-14 16:31:14',
            borrow: '110 USDT',
            collateralamount: '0.35048829 BNB',
            termday: '7',
            interestrate: '0.001667% / 0.0400%',
            interestamount: '0.520056 USDT',
            repaymentamount: '100.520056',
            status: 'CANCLE'

        },
        {
            date: '06-15 16:31:14',
            borrow: '110 USDT',
            collateralamount: '0.35048829 BNB',
            termday: '7',
            interestrate: '0.001667% / 0.0400%',
            interestamount: '0.520056 USDT',
            repaymentamount: '100.520056',
            status: 'COMPLETED'
        },
        {
            date: '09-18 17:32:15',
            borrow: '100 USDT',
            collateralamount: '	0.35048829 BNB',
            termday: '7',
            interestrate: '0.001667% / 0.0400%',
            interestamount: '0.490056 USDT',
            repaymentamount: '100.490056',
            status: 'UNDER PROCESS'
        },
    ]
}