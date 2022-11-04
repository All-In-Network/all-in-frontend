import React from "react";
import BalanceDetail from "../../Component/DashboardOne/BalanceDetail";
import BalanceDetails from "../../Component/WalletPage/BalanceDetails";
import Deposit from "../../Component/WalletPage/Deposit";
import Transaction from "../../Component/WalletPage/Transaction";
import Transfer from "../../Component/WalletPage/Transfer";
import WithdrawCrypto from "../../Component/WalletPage/WithdrawCrypto";

function WalletPage() {
    return (
        <div className="container-xxl">
            <div className="row g-3 mb-3 row-deck">
                <BalanceDetails />
                <WithdrawCrypto />
            </div>
            <div className="row g-3 mb-3 row-deck">
                <Deposit />
                <Transfer/>
            </div>
            <div className="row">
<Transaction/>
            </div>
        </div>
    )
}
export default WalletPage;