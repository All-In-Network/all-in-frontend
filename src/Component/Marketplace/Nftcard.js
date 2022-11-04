import React, { useState } from 'react';
import { ProfileData } from '../Data/WidgetExampleData/ProfileData/ProfileData';
import { Modal } from 'react-bootstrap';

function NftCard() {
    const [ismodal, setIsmodal] = useState(false)
    return (
        <div className="card profile-card flex-column mb-3">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Soulbound Nft</h6>
            </div>
            <div className="card-body d-flex profile-fulldeatil flex-column">
                <div className="profile-block text-center w220 mx-auto">
                    <img
                        src={`https://gateway.pinata.cloud/ipfs/QmPHXvMi5ebs3ZDe42z8fZsRGqRj83UZ3MJovVyoVuoSHB`}
                        alt="Nft soulbound"
                        className=" rounded img-thumbnail shadow-sm"
                    />
                </div>
            </div>
        </div>
    )
}

export default NftCard;