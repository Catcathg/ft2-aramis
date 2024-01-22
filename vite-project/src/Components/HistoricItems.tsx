import React, { useState } from 'react';
import VO from '@/assets/Images/VO.svg'
import VN from '@/assets/Images/VN.svg'
import PurchaseOrder from '@/assets/Images/PurchaseOrder.svg'
import './HistoricItems.css'

const HistoricItemsTableau = () => {
    const data = [
        { id: 1, colonne1: '03/10/2023', colonne2: 'PurchaseOrder', colonne3: '@Duval', colonne4: 'VO' },
        { id: 2, colonne1: '03/10/2023', colonne2: 'PurchaseOrder', colonne3: '@Duval', colonne4: 'VN' },
        { id: 3, colonne1: '03/10/2023', colonne2: 'PurchaseOrder', colonne3: '@Duval', colonne4: 'VO' },
        { id: 4, colonne1: '03/10/2023', colonne2: 'PurchaseOrder', colonne3: '@Duval', colonne4: 'VO' },
        { id: 5, colonne1: '03/10/2023', colonne2: 'PurchaseOrder', colonne3: '@Duval', colonne4: 'VO' },
        { id: 6, colonne1: '03/10/2023', colonne2: 'PurchaseOrder', colonne3: '@Duval', colonne4: 'VO' },
        { id: 7, colonne1: '03/10/2023', colonne2: 'PurchaseOrder', colonne3: '@Duval', colonne4: 'VO' },
        { id: 8, colonne1: '03/10/2023', colonne2: 'PurchaseOrder', colonne3: '@Duval', colonne4: 'VO' },

    ];

    const [tableauData, setTableauData] = useState(data);
    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Purchase order</th>
                    <th>Buyer</th>
                    <th>Pole</th>
                </tr>
            </thead>
            <tbody>
                {tableauData.map(item => (
                    <tr key={item.id}>
                        <td>{item.colonne1}</td>
                        <td>
                            {item.colonne2 === 'PurchaseOrder' && <img src={PurchaseOrder} alt="PurchaseOrder" />}
                        </td>
                        <td>{item.colonne3}</td>
                        <td>
                            {item.colonne4 === 'VO' && <img src={VO} alt="VO" />}
                            {item.colonne4 === 'VN' && <img src={VN} alt="VN" />}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default HistoricItemsTableau;