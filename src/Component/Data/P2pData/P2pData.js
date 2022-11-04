export const p2pBuyUsdtData = {
    columns: [
        {
            name: "ADVERTISER",
            selector: (row) => row.symbol,
            sortable: true,
            cell: (row) => <>
                <div className="d-flex align-items-center">
                    <div className="avatar xs rounded-circle no-thumbnail">{row.symbol}</div>
                    <span className="mx-1 fs-6">{row.coinName}</span>
                    {
                        row.icon?<i className="icofont-badge fs-5 text-warning"></i>:null

                    }
                </div>
                <div className="d-flex align-items-center">
                    <span className="text-muted small mx-1">{row.orders}</span>
                    <span className="text-muted small mx-1">{row.completion}</span>
                </div>
            </>,
            minWidth:'400px'

        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            minWidth:'50px'
        },
        {
            name: "LIMIT/AVAILABLE",
            selector: (row) => row.executed,
            sortable: true,
            cell: (row) => <>
                <div className="d-flex align-items-center">
                    <span className="text-muted small mx-1 min-width-5">Available</span>
                    <span className="mx-1">{row.availabel}</span>
                </div><br></br>
                <div className="d-flex align-items-center">
                    <span className="text-muted small mx-1 min-width-55">Limit</span>
                    <span className="mx-1">{row.limit}</span>
                </div>
            </>,
            minWidth:'400px'
        },
        {
            name: "PAYMENT",
            selector: (row) => row.executed,
            sortable: true,
            cell: (row) => <>
           
            {
                row.upi?<span className="badge bg-light text-dark mx-1">UPI</span>:null
            }
            {
                row.imps?<span className="badge bg-light color-light-success mx-1">IMPS</span>:null
            }
            {
                row.paytm?<span className="badge bg-light color-santa-fe  mx-1">Paytm</span>:null
            }
            {
                row.phonepay?<span className="badge bg-light color-lavender-purple mx-1">Phonepe</span>:null
            }
            {
                row.gpay?<span className="badge bg-light color-lightblue mx-1">GPay</span>:null
            }
            {
                row.banktransfer?<span className="badge bg-light color-careys-pink mx-1">Bank Transfer</span>:null
            }
            
            </>,
            minWidth:'250px'
        },
        {
            name: "TRADE",
            selector: (row) => row.executed,
            sortable: true,
            cell:()=><button type="button" className="btn btn-light-success text-uppercase" data-bs-toggle="modal" data-bs-target="#buy">Buy USDT</button>,
            minWidth:'100px'

        },

    ],
    rows: [
        {
            symbol: 'B',
            coinName: 'BHARATH COINS',
            icon:false,
            orders: '333 orders',
            completion: '100% completion',
            price: '3,516,819.99 INR',
            availabel: '527.15 USDT',
            limit: '₹41,296.00 - ₹41,296.93',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:true,
            banktransfer:false
        },
        {
            symbol: 'B',
            coinName: 'BIG SELLER',
            icon:true,
            orders: '154 orders',
            completion: '100% completion',
            price: '3,516,819.99 INR',
            availabel: '599.65 USDT',
            limit: '₹46,976.00 - ₹46,976.58',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:false,
            gpay:false,
            banktransfer:false
        },
        {
            symbol: 'C',
            coinName: 'cryptokumar',
            icon:false,
            orders: '1302 orders',
            completion: '99.54% completion',
            price: '3,516,819.99 INR',
            availabel: '6,892.94 USDT',
            limit: '₹30,000.00 - ₹100,000.58',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:false,
            gpay:false,
            banktransfer:false
        },
        {
            symbol: 'D',
            coinName: 'deadguy',
            icon:true,
            orders: '254 orders',
            completion: '100% completion',
            price: '3,516,819.99 INR',
            availabel: '1,943.47 USDT',
            limit: '₹50,000.00 - ₹152,251.43',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:true,
            banktransfer:false
        },
        {
            symbol: 'F',
            coinName: 'FIRNAS',
            icon:false,
            orders: '324 orders',
            completion: '94.19% completion',
            price: '3,516,819.99 INR',
            availabel: '1,805.00 USDT',
            limit: '₹50,000.00 - ₹141,175.00',
            upi: false,
            imps:false,
            paytm:false,
            phonepay:false,
            gpay:false,
            banktransfer:true
        },
        {
            symbol: 'M',
            coinName: 'MONU SHUKLA',
            icon:true,
            orders: '669 orders',
            completion: '94.49% completion',
            price: '3,516,819.99 INR',
            availabel: '2,236.19 USDT',
            limit: '₹10,000.00 - ₹175,205.48',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:false,
            banktransfer:false
        },
        {
            symbol: 'S',
            coinName: 'Satoshistacker',
            icon:false,
            orders: '541 orders',
            completion: '80.24% completion',
            price: '3,516,819.99 INR',
            availabel: '118.46 USDT',
            limit: '₹9,275.00 - ₹9,275.41',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:true,
            banktransfer:false
        },

    ]
}

export const p2pBuyBtcData = {
    columns: [
        {
            name: "ADVERTISER",
            selector: (row) => row.symbol,
            sortable: true,
            cell: (row) => <>
                <div className="d-flex align-items-center">
                    <div className="avatar xs rounded-circle no-thumbnail">{row.symbol}</div>
                    <span className="mx-1 fs-6">{row.coinName}</span>
                    {
                        row.icon?<i className="icofont-badge fs-5 text-warning"></i>:null

                    }
                </div>
                <div className="d-flex align-items-center">
                    <span className="text-muted small mx-1">{row.orders}</span>
                    <span className="text-muted small mx-1">{row.completion}</span>
                </div>
            </>,
            minWidth:'400px'

        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            minWidth:'50px'
        },
        {
            name: "LIMIT/AVAILABLE",
            selector: (row) => row.executed,
            sortable: true,
            cell: (row) => <>
                <div className="d-flex align-items-center">
                    <span className="text-muted small mx-1 min-width-5">Available</span>
                    <span className="mx-1">{row.availabel}</span>
                </div><br></br>
                <div className="d-flex align-items-center">
                    <span className="text-muted small mx-1 min-width-55">Limit</span>
                    <span className="mx-1">{row.limit}</span>
                </div>
            </>,
            minWidth:'400px'
        },
        {
            name: "PAYMENT",
            selector: (row) => row.executed,
            sortable: true,
            cell: (row) => <>
           
            {
                row.upi?<span className="badge bg-light text-dark mx-1">UPI</span>:null
            }
            {
                row.imps?<span className="badge bg-light color-light-success mx-1">IMPS</span>:null
            }
            {
                row.paytm?<span className="badge bg-light color-santa-fe  mx-1">Paytm</span>:null
            }
            {
                row.phonepay?<span className="badge bg-light color-lavender-purple mx-1">Phonepe</span>:null
            }
            {
                row.gpay?<span className="badge bg-light color-lightblue mx-1">GPay</span>:null
            }
            {
                row.banktransfer?<span className="badge bg-light color-careys-pink mx-1">Bank Transfer</span>:null
            }
            
            </>,
            minWidth:'250px'
        },
        {
            name: "TRADE",
            selector: (row) => row.executed,
            sortable: true,
            cell:()=><button type="button" className="btn btn-light-success text-uppercase" data-bs-toggle="modal" data-bs-target="#buy">Buy USDT</button>,
            minWidth:'100px'

        },

    ],
    rows: [
        {
            symbol: 'A',
            coinName: 'Alon',
            icon:true,
            orders: '541 orders',
            completion: '100% completion',
            price: '3,516,819.99 INR',
            availabel: '527.15 USDT',
            limit: '₹41,296.00 - ₹41,296.93',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:true,
            banktransfer:false
        },
        {
            symbol: 'B',
            coinName: 'BHARATH COINS',
            icon:false,
            orders: '154 orders',
            completion: '100% completion',
            price: '3,516,819.99 INR',
            availabel: '599.65 USDT',
            limit: '₹46,976.00 - ₹46,976.58',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:false,
            gpay:false,
            banktransfer:false
        },
        {
            symbol: 'C',
            coinName: 'cryptokumar',
            icon:false,
            orders: '1302 orders',
            completion: '99.54% completion',
            price: '3,516,819.99 INR',
            availabel: '6,892.94 USDT',
            limit: '₹30,000.00 - ₹100,000.58',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:false,
            gpay:false,
            banktransfer:false
        },
        {
            symbol: 'F',
            coinName: 'FIRNAS',
            icon:true,
            orders: '254 orders',
            completion: '100% completion',
            price: '3,516,819.99 INR',
            availabel: '1,943.47 USDT',
            limit: '₹50,000.00 - ₹152,251.43',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:true,
            banktransfer:false
        },
        {
            symbol: 'M',
            coinName: 'MONU SHUKLA',
            icon:true,
            orders: '324 orders',
            completion: '94.19% completion',
            price: '3,516,819.99 INR',
            availabel: '1,805.00 USDT',
            limit: '₹50,000.00 - ₹141,175.00',
            upi: false,
            imps:false,
            paytm:false,
            phonepay:false,
            gpay:false,
            banktransfer:true
        },
        {
            symbol: 'M',
            coinName: 'MONU SHUKLA',
            icon:true,
            orders: '669 orders',
            completion: '94.49% completion',
            price: '3,516,819.99 INR',
            availabel: '2,236.19 USDT',
            limit: '₹10,000.00 - ₹175,205.48',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:false,
            banktransfer:false
        },
        {
            symbol: 'N',
            coinName: 'Navv',
            icon:true,
            orders: '541 orders',
            completion: '80.24% completion',
            price: '3,516,819.99 INR',
            availabel: '118.46 USDT',
            limit: '₹9,275.00 - ₹9,275.41',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:true,
            banktransfer:false
        },
        {
            symbol: 'S',
            coinName: 'Starshig',
            icon:true,
            orders: '541 orders',
            completion: '80.24% completion',
            price: '3,516,819.99 INR',
            availabel: '118.46 USDT',
            limit: '₹9,275.00 - ₹9,275.41',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:true,
            banktransfer:false
        },

    ]
}

export const p2pSellUsdtData = {
    columns: [
        {
            name: "ADVERTISER",
            selector: (row) => row.symbol,
            sortable: true,
            cell: (row) => <>
                <div className="d-flex align-items-center">
                    <div className="avatar xs rounded-circle no-thumbnail">{row.symbol}</div>
                    <span className="mx-1 fs-6">{row.coinName}</span>
                    {
                        row.icon?<i className="icofont-badge fs-5 text-warning"></i>:null

                    }
                </div>
                <div className="d-flex align-items-center">
                    <span className="text-muted small mx-1">{row.orders}</span>
                    <span className="text-muted small mx-1">{row.completion}</span>
                </div>
            </>,
            minWidth:'400px'

        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            minWidth:'50px'
        },
        {
            name: "LIMIT/AVAILABLE",
            selector: (row) => row.executed,
            sortable: true,
            cell: (row) => <>
                <div className="d-flex align-items-center">
                    <span className="text-muted small mx-1 min-width-5">Available</span>
                    <span className="mx-1">{row.availabel}</span>
                </div><br></br>
                <div className="d-flex align-items-center">
                    <span className="text-muted small mx-1 min-width-55">Limit</span>
                    <span className="mx-1">{row.limit}</span>
                </div>
            </>,
            minWidth:'400px'
        },
        {
            name: "PAYMENT",
            selector: (row) => row.executed,
            sortable: true,
            cell: (row) => <>
           
            {
                row.upi?<span className="badge bg-light text-dark mx-1">UPI</span>:null
            }
            {
                row.imps?<span className="badge bg-light color-light-success mx-1">IMPS</span>:null
            }
            {
                row.paytm?<span className="badge bg-light color-santa-fe  mx-1">Paytm</span>:null
            }
            {
                row.phonepay?<span className="badge bg-light color-lavender-purple mx-1">Phonepe</span>:null
            }
            {
                row.gpay?<span className="badge bg-light color-lightblue mx-1">GPay</span>:null
            }
            {
                row.banktransfer?<span className="badge bg-light color-careys-pink mx-1">Bank Transfer</span>:null
            }
            
            </>,
            minWidth:'250px'
        },
        {
            name: "TRADE",
            selector: (row) => row.executed,
            sortable: true,
            cell:()=><button type="button" className="btn btn-light-danger text-uppercase" data-bs-toggle="modal" data-bs-target="#buy">SELL USDT</button>,
            minWidth:'100px'

        },

    ],
    rows: [
        {
            symbol: 'B',
            coinName: 'BHARATH COINS',
            icon:false,
            orders: '333 orders',
            completion: '100% completion',
            price: '3,516,819.99 INR',
            availabel: '527.15 USDT',
            limit: '₹41,296.00 - ₹41,296.93',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:true,
            banktransfer:false
        },
        {
            symbol: 'B',
            coinName: 'BIG SELLER',
            icon:true,
            orders: '154 orders',
            completion: '100% completion',
            price: '3,516,819.99 INR',
            availabel: '599.65 USDT',
            limit: '₹46,976.00 - ₹46,976.58',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:false,
            gpay:false,
            banktransfer:false
        },
        {
            symbol: 'C',
            coinName: 'cryptokumar',
            icon:false,
            orders: '1302 orders',
            completion: '99.54% completion',
            price: '3,516,819.99 INR',
            availabel: '6,892.94 USDT',
            limit: '₹30,000.00 - ₹100,000.58',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:false,
            gpay:false,
            banktransfer:false
        },
        {
            symbol: 'D',
            coinName: 'deadguy',
            icon:true,
            orders: '254 orders',
            completion: '100% completion',
            price: '3,516,819.99 INR',
            availabel: '1,943.47 USDT',
            limit: '₹50,000.00 - ₹152,251.43',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:true,
            banktransfer:false
        },
        {
            symbol: 'F',
            coinName: 'FIRNAS',
            icon:false,
            orders: '324 orders',
            completion: '94.19% completion',
            price: '3,516,819.99 INR',
            availabel: '1,805.00 USDT',
            limit: '₹50,000.00 - ₹141,175.00',
            upi: false,
            imps:false,
            paytm:false,
            phonepay:false,
            gpay:false,
            banktransfer:true
        },
        {
            symbol: 'M',
            coinName: 'MONU SHUKLA',
            icon:true,
            orders: '669 orders',
            completion: '94.49% completion',
            price: '3,516,819.99 INR',
            availabel: '2,236.19 USDT',
            limit: '₹10,000.00 - ₹175,205.48',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:false,
            banktransfer:false
        },
        {
            symbol: 'S',
            coinName: 'Satoshistacker',
            icon:false,
            orders: '541 orders',
            completion: '80.24% completion',
            price: '3,516,819.99 INR',
            availabel: '118.46 USDT',
            limit: '₹9,275.00 - ₹9,275.41',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:true,
            banktransfer:false
        },

    ]
}

export const p2pSellBtcData = {
    columns: [
        {
            name: "ADVERTISER",
            selector: (row) => row.symbol,
            sortable: true,
            cell: (row) => <>
                <div className="d-flex align-items-center">
                    <div className="avatar xs rounded-circle no-thumbnail">{row.symbol}</div>
                    <span className="mx-1 fs-6">{row.coinName}</span>
                    {
                        row.icon?<i className="icofont-badge fs-5 text-warning"></i>:null

                    }
                </div>
                <div className="d-flex align-items-center">
                    <span className="text-muted small mx-1">{row.orders}</span>
                    <span className="text-muted small mx-1">{row.completion}</span>
                </div>
            </>,
            minWidth:'400px'

        },
        {
            name: "PRICE",
            selector: (row) => row.price,
            sortable: true,
            minWidth:'50px'
        },
        {
            name: "LIMIT/AVAILABLE",
            selector: (row) => row.executed,
            sortable: true,
            cell: (row) => <>
                <div className="d-flex align-items-center">
                    <span className="text-muted small mx-1 min-width-5">Available</span>
                    <span className="mx-1">{row.availabel}</span>
                </div><br></br>
                <div className="d-flex align-items-center">
                    <span className="text-muted small mx-1 min-width-55">Limit</span>
                    <span className="mx-1">{row.limit}</span>
                </div>
            </>,
            minWidth:'400px'
        },
        {
            name: "PAYMENT",
            selector: (row) => row.executed,
            sortable: true,
            cell: (row) => <>
           
            {
                row.upi?<span className="badge bg-light text-dark mx-1">UPI</span>:null
            }
            {
                row.imps?<span className="badge bg-light color-light-success mx-1">IMPS</span>:null
            }
            {
                row.paytm?<span className="badge bg-light color-santa-fe  mx-1">Paytm</span>:null
            }
            {
                row.phonepay?<span className="badge bg-light color-lavender-purple mx-1">Phonepe</span>:null
            }
            {
                row.gpay?<span className="badge bg-light color-lightblue mx-1">GPay</span>:null
            }
            {
                row.banktransfer?<span className="badge bg-light color-careys-pink mx-1">Bank Transfer</span>:null
            }
            
            </>,
            minWidth:'250px'
        },
        {
            name: "TRADE",
            selector: (row) => row.executed,
            sortable: true,
            cell:()=><button type="button" className="btn btn-light-danger text-uppercase" data-bs-toggle="modal" data-bs-target="#buy">Buy USDT</button>,
            minWidth:'100px'

        },

    ],
    rows: [
        {
            symbol: 'A',
            coinName: 'Alon',
            icon:true,
            orders: '541 orders',
            completion: '100% completion',
            price: '3,516,819.99 INR',
            availabel: '527.15 USDT',
            limit: '₹41,296.00 - ₹41,296.93',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:true,
            banktransfer:false
        },
        {
            symbol: 'B',
            coinName: 'BHARATH COINS',
            icon:false,
            orders: '154 orders',
            completion: '100% completion',
            price: '3,516,819.99 INR',
            availabel: '599.65 USDT',
            limit: '₹46,976.00 - ₹46,976.58',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:false,
            gpay:false,
            banktransfer:false
        },
        {
            symbol: 'C',
            coinName: 'cryptokumar',
            icon:false,
            orders: '1302 orders',
            completion: '99.54% completion',
            price: '3,516,819.99 INR',
            availabel: '6,892.94 USDT',
            limit: '₹30,000.00 - ₹100,000.58',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:false,
            gpay:false,
            banktransfer:false
        },
        {
            symbol: 'F',
            coinName: 'FIRNAS',
            icon:true,
            orders: '254 orders',
            completion: '100% completion',
            price: '3,516,819.99 INR',
            availabel: '1,943.47 USDT',
            limit: '₹50,000.00 - ₹152,251.43',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:true,
            banktransfer:false
        },
        {
            symbol: 'M',
            coinName: 'MONU SHUKLA',
            icon:true,
            orders: '324 orders',
            completion: '94.19% completion',
            price: '3,516,819.99 INR',
            availabel: '1,805.00 USDT',
            limit: '₹50,000.00 - ₹141,175.00',
            upi: false,
            imps:false,
            paytm:false,
            phonepay:false,
            gpay:false,
            banktransfer:true
        },
        {
            symbol: 'M',
            coinName: 'MONU SHUKLA',
            icon:true,
            orders: '669 orders',
            completion: '94.49% completion',
            price: '3,516,819.99 INR',
            availabel: '2,236.19 USDT',
            limit: '₹10,000.00 - ₹175,205.48',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:false,
            banktransfer:false
        },
        {
            symbol: 'N',
            coinName: 'Navv',
            icon:true,
            orders: '541 orders',
            completion: '80.24% completion',
            price: '3,516,819.99 INR',
            availabel: '118.46 USDT',
            limit: '₹9,275.00 - ₹9,275.41',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:true,
            banktransfer:false
        },
        {
            symbol: 'S',
            coinName: 'Starshig',
            icon:true,
            orders: '541 orders',
            completion: '80.24% completion',
            price: '3,516,819.99 INR',
            availabel: '118.46 USDT',
            limit: '₹9,275.00 - ₹9,275.41',
            upi: true,
            imps:true,
            paytm:false,
            phonepay:true,
            gpay:true,
            banktransfer:false
        },

    ]
}
