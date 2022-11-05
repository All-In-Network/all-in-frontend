import React, { useCallback, useState } from 'react';
import { useActions } from '../../hooks/wallet';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router';

function ProfileSetting() {

    const [loading, setLoading] = useState(false)

    const [nick, setNick] = useState("")

    const { faucet, purchaseSoulbound } = useActions()

    const onChange = (event) => {
        setNick(event.target.value);
      };

    const _faucet = useCallback(()=> {
        setLoading(true)
        faucet().finally(()=>setLoading(false))
    },[faucet])


    const _purchaseSoulbound = useCallback(async ()=> {
        setLoading(true)
        try {
            if (nick.length < 8) {
                setLoading(false)
                return alert("Nickname should be Greater than 8 characters");
            }
            await purchaseSoulbound({ nick });
           
          } catch (error) {
            console.log(error)
          }finally {
            setLoading(false)
          }
    },[nick, purchaseSoulbound])

    return (
        <div className="card mb-3">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Register</h6>
            </div>
            <div className="card-body">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="form-label">Nickname</label>
                                <input className="form-control" type="text" placeholder="Nickname" value={nick} onChange={onChange}/>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                        <Button variant="primary" onClick={_faucet} disabled={loading}>
        {loading && 
        <React.Fragment>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        </React.Fragment>}
        Faucet
      </Button>
                        </div>
                        <div className="col-12 mt-4">
                        <Button variant="primary" onClick={_purchaseSoulbound} disabled={loading}>
        {loading && 
        <React.Fragment>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        </React.Fragment>}
        Get Soulbound
      </Button>
                        </div>
            </div>
        </div>
    )
}
export default ProfileSetting;