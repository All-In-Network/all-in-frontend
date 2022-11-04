import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Routes, useNavigate } from 'react-router-dom';
import { onModalOpen, onChangeDarkMode, onChangeHighcontrast, OnchangeRTLmode } from '../Redux/Actions/Actions';
import Header from '../Component/Comman/Header';
import Dashboard from './Dashboard/Dashboard';
import NewModal from '../Component/Comman/NewModal';
import Exchange from './Exchange/Exchange';
import Market from './Market/Market';
import Ico from './ICO/Ico';
import Future from './Future/Future';
import P2pPage from './P2P/P2pPage';
import Battel from './Battel/Battel';
import ConvertTrade from './Trade/ConvertTrade';
import MarginTrade from './Trade/MarginTrade';
import CryptoLoan from './Finace/CryptoLoan';
import CryptoPay from './Finace/CryptoPay';
import Calendar from './App/Calender';
import Chat from './App/Chat';
import BootStrapForm from './FormInput/BootStrapForm';
import CustomeForm from './FormInput/CustomeForm';
import VizardForm from './FormInput/VizardForm';
import WidgetExample from './Widget/WidgetExample/WidgetExample';
import ChartsExample from './Widget/ChartsExample/ChartsExample';
import PricePlane from './Widget/PricePlane/PricePlane';
import ProfilePage from './Widget/Profile Page/ProfilePage';
import TableExample from './Widget/TableExample/TableExample';
import Help from './Help/Help';
import SalarySlip from './SalarySlip/SalarySlip';
import Documentation from './Documentation/Documentation';
import Expenses from './Expenses/Expenses';
import Changelog from './Changelog/Changelog';
import Invoice from './Invoice/Invoice';
import StaterPage from './Stater Page/StaterPage';
import Alerts from './Ui Component/Alerts';
import Badges from './Ui Component/Badge';
import Breadcrumb from './Ui Component/Breadcrumb';
import Buttons from './Ui Component/Buttons';
import Cards from './Ui Component/Card';
import Carousel from './Ui Component/Carousel';
import Collapse from './Ui Component/Collapse';
import Dropdowns from './Ui Component/Dropdowns';
import ListGroup from './Ui Component/ListGroup';
import ModalUI from './Ui Component/Modal';
import NavbarUI from './Ui Component/Navbar';
import NavsUI from './Ui Component/Navs';
import PaginationUI from './Ui Component/Pagination';
import PopoversUI from './Ui Component/Popovers';
import ProgressUI from './Ui Component/Progress';
import Scrollspy from './Ui Component/Scrollspy';
import SpinnersUI from './Ui Component/Spinners';
import ToastsUI from './Ui Component/Toasts';
import Icons from './FontIcon/Icon';
import BootStrapIcon from './FontIcon/BootStrapIcon';
import FontAwesomeIcon from './FontIcon/FontAwesomeIcon';
import ToDoList from './Widget/ToDoList/ToDoList';
import WalletPage from './WalletPage/WalletPage';
import Reward from './Reward/Reward';
import SecurityPage from './SecurityPage/SecurityPage';
import Identification from './Identification/Identification';
import ReferalPage from './ReferalPage/ReferalPage';

function MainIndex(props) {
    const { modalopen, darkMode, highcontrast, rtlmode } = props.Mainreducer;
    const { activekey, GotoChangeMenu } = props;
    const navigate = useNavigate();
    const baseUrl = process.env.PUBLIC_URL;
    return (
        <div className='main px-lg-4 px-md-4'>
            {activekey === "/chat" || activekey === "/documentation" ? "" :
                <Header
                    onModalOpen={(val) => { props.onModalOpen(true) }}
                    GotoChangeMenu={(val) => { GotoChangeMenu(val) }}
                />
            }
            <NewModal
                show={modalopen}
                highcontrast={highcontrast}
                darkMode={darkMode}
                onHide={(val) => { props.onModalOpen(false) }}
                onChangeDarkMode={() => { props.onChangeDarkMode(darkMode === 'dark' ? 'light' : 'dark') }}
                onChangeHighcontrast={() => { props.onChangeHighcontrast(highcontrast === 'high-contrast' ? 'light' : 'high-contrast') }}
                OnchangeRTLmode={() => { props.OnchangeRTLmode(rtlmode === 'rtl_mode' ? true : false) }}
            />
            <div className="body d-flex py-3 ">
                <Routes>
                    <Route exact path={baseUrl + '/'} element={<Dashboard />} />
                    <Route exact path={baseUrl + '/exchange'} element={<Exchange />} />
                    <Route exact path={baseUrl + '/market'} element={<Market />} />
                    <Route exact path={baseUrl + '/ico'} element={<Ico />} />
                    <Route exact path={baseUrl + '/future'} element={<Future />} />
                    <Route exact path={baseUrl + '/p2p'} element={<P2pPage />} />
                    <Route exact path={baseUrl + '/battel'} element={<Battel />} />
                    <Route exact path={baseUrl + '/convert'} element={<ConvertTrade />} />
                    <Route exact path={baseUrl + '/margin-trade'} element={<MarginTrade />} />
                    <Route exact path={baseUrl + '/crypto-loan'} element={<CryptoLoan />} />
                    <Route exact path={baseUrl + '/crypto-pay'} element={<CryptoPay />} />
                    <Route exact path={baseUrl + '/calender'} element={<Calendar />} />
                    <Route exact path={baseUrl + '/chat'} element={<Chat />} />
                    <Route exact path={baseUrl + '/bootstrap-from'} element={<BootStrapForm />} />
                    <Route exact path={baseUrl + '/custome-form'} element={<CustomeForm />} />
                    <Route exact path={baseUrl + '/vizard-form'} element={<VizardForm />} />
                    <Route exact path={baseUrl + '/widget-example'} element={<WidgetExample />} />
                    <Route exact path={baseUrl + '/chart-example'} element={<ChartsExample />} />
                    <Route exact path={baseUrl + '/price-plane'} element={<PricePlane />} />
                    <Route exact path={baseUrl + '/profile-page'} element={<ProfilePage />} />
                    <Route exact path={baseUrl + '/table-example'} element={<TableExample />} />
                    <Route exact path={baseUrl + '/help'} element={<Help />} />
                    <Route exact path={baseUrl + '/salary-slip'} element={<SalarySlip />} />
                    <Route exact path={baseUrl + '/documentation'} element={<Documentation />} />
                    <Route exact path={baseUrl + '/expenses'} element={<Expenses />} />
                    <Route exact path={baseUrl + '/changelog'} element={<Changelog />} />
                    <Route exact path={baseUrl + '/invoice'} element={<Invoice />} />
                    <Route exact path={baseUrl + '/stater-page'} element={<StaterPage />} />
                    <Route exact path={baseUrl + '/icofont-icon'} element={<Icons />} />
                    <Route exact path={baseUrl + '/bootstrap-icon'} element={<BootStrapIcon />} />
                    <Route exact path={baseUrl + '/font-awesome-icon'} element={<FontAwesomeIcon />} />
                    <Route exact path={baseUrl + '/todo-list'} element={<ToDoList />} />
                    <Route exact path={baseUrl + '/wallet-page'} element={<WalletPage />} />
                    <Route exact path={baseUrl + '/reward-page'} element={<Reward />} />
                    <Route exact path={baseUrl + '/security-page'} element={<SecurityPage />} />
                    <Route exact path={baseUrl + '/identification'} element={<Identification />} />
                    <Route exact path={baseUrl + '/refer-page'} element={<ReferalPage />} />
                    <Route exact path={baseUrl + '/ui-alerts'} element={<Alerts />} />
                    <Route exact path={baseUrl + '/ui-badge'} element={<Badges />} />
                    <Route exact path={baseUrl + '/ui-breadcrumb'} element={<Breadcrumb />} />
                    <Route exact path={baseUrl + '/ui-buttons'} element={<Buttons />} />
                    <Route exact path={baseUrl + '/ui-card'} element={<Cards />} />
                    <Route exact path={baseUrl + '/ui-carousel'} element={<Carousel />} />
                    <Route exact path={baseUrl + '/ui-collapse'} element={<Collapse />} />
                    <Route exact path={baseUrl + '/ui-dropdowns'} element={<Dropdowns />} />
                    <Route exact path={baseUrl + '/ui-listgroup'} element={<ListGroup />} />
                    <Route exact path={baseUrl + '/ui-modalui'} element={<ModalUI />} />
                    <Route exact path={baseUrl + '/ui-navbarui'} element={<NavbarUI />} />
                    <Route exact path={baseUrl + '/ui-navsui'} element={<NavsUI />} />
                    <Route exact path={baseUrl + '/ui-paginationui'} element={<PaginationUI />} />
                    <Route exact path={baseUrl + '/ui-popoversui'} element={<PopoversUI />} />
                    <Route exact path={baseUrl + '/ui-progressui'} element={<ProgressUI />} />
                    <Route exact path={baseUrl + '/ui-Scrollspyui'} element={<Scrollspy />} />
                    <Route exact path={baseUrl + '/ui-spinnersui'} element={<SpinnersUI />} />
                    <Route exact path={baseUrl + '/ui-toastsui'} element={<ToastsUI />} />
                </Routes>
            </div>
        </div>
    )
}
const mapStateToProps = ({ Mainreducer }) => ({
    Mainreducer
})
export default connect(mapStateToProps, {
    onModalOpen,
    onChangeDarkMode,
    onChangeHighcontrast,
    OnchangeRTLmode
})(MainIndex);