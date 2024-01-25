import React, { useState } from 'react';
import VO from '@/assets/Images/VO.svg'
import VN from '@/assets/Images/VN.svg'
import PurchaseOrder from '@/assets/Images/PurchaseOrder.svg'
import './HistoricItems.css'

const HistoricItemsTableau = () => {
    const data = [
        /*{ id: 1, colonne1: '03/10/2023', colonne2: '5x Peugeot', colonne3: '@Duval', colonne4: 'VN' },
        { id: 2, colonne1: '03/10/2023', colonne2: '5x Peugeot', colonne3: '@Duval', colonne4: 'VO' },
        { id: 3, colonne1: '03/10/2023', colonne2: '5x Peugeot', colonne3: '@Duval', colonne4: 'VO' },
        { id: 4, colonne1: '03/10/2023', colonne2: '5x Peugeot', colonne3: '@Duval', colonne4: 'VO' },
        { id: 5, colonne1: '03/10/2023', colonne2: '5x Peugeot', colonne3: '@Duval', colonne4: 'VO' },
        { id: 6, colonne1: '03/10/2023', colonne2: '5x Peugeot', colonne3: '@Duval', colonne4: 'VO' },
        { id: 7, colonne1: '03/10/2023', colonne2: '5x Peugeot', colonne3: '@Duval', colonne4: 'VO' },
        { id: 8, colonne1: '03/10/2023', colonne2: '5x Peugeot', colonne3: '@Duval', colonne4: 'VO' }, { id: 1, colonne1: '03/10/2023', colonne2: '5x Citroën C1', colonne3: '@Duval', colonne4: 'VO' },
        { id: 9, colonne1: '03/10/2023', colonne2: '5x Citroën C1', colonne3: '@Duval', colonne4: 'VN' },
        { id: 10, colonne1: '03/10/2023', colonne2: '5x Citroën C1', colonne3: '@Duval', colonne4: 'VO' },
        { id: 11, colonne1: '03/10/2023', colonne2: '5x Citroën C1', colonne3: '@Duval', colonne4: 'VO' },
        { id: 12, colonne1: '03/10/2023', colonne2: '5x Citroën C1', colonne3: '@Duval', colonne4: 'VO' },
        { id: 13, colonne1: '03/10/2023', colonne2: '5x Citroën C1', colonne3: '@Duval', colonne4: 'VO' },
        { id: 14, colonne1: '03/10/2023', colonne2: '5x Citroën C1', colonne3: '@Duval', colonne4: 'VO' },
        { id: 15, colonne1: '03/10/2023', colonne2: '5x Citroën C1', colonne3: '@Duval', colonne4: 'VO' },
        { id: 16, colonne1: '03/10/2023', colonne2: '5x Citroën C1', colonne3: '@Duval', colonne4: 'VO' },
        { id: 17, colonne1: '03/10/2023', colonne2: '5x Renault', colonne3: '@Duval', colonne4: 'VO' },
        { id: 18, colonne1: '03/10/2023', colonne2: '5x Renault', colonne3: '@Duval', colonne4: 'VN' },
        { id: 19, colonne1: '03/10/2023', colonne2: '5x Renault', colonne3: '@Duval', colonne4: 'VO' },
        { id: 20, colonne1: '03/10/2023', colonne2: '5x Renault', colonne3: '@Duval', colonne4: 'VO' },
        { id: 21, colonne1: '03/10/2023', colonne2: '5x Renault', colonne3: '@Duval', colonne4: 'VO' },
        { id: 22, colonne1: '03/10/2023', colonne2: '5x Renault', colonne3: '@Duval', colonne4: 'VO' },
        { id: 23, colonne1: '03/10/2023', colonne2: '5x Renault', colonne3: '@Duval', colonne4: 'VO' },
        { id: 24, colonne1: '03/10/2023', colonne2: '5x Renault', colonne3: '@Duval', colonne4: 'VO' },*/
        { id: 25, colonne1: '03/10/2023', colonne2: '5x SD', colonne3: '@Duval', colonne4: 'VO' },
        { id: 26, colonne1: '03/10/2023', colonne2: '5x SD', colonne3: '@Duval', colonne4: 'VN' },
        { id: 27, colonne1: '03/10/2023', colonne2: '5x SD', colonne3: '@Duval', colonne4: 'VO' },
        { id: 28, colonne1: '03/10/2023', colonne2: '5x SD', colonne3: '@Duval', colonne4: 'VO' },
        { id: 29, colonne1: '03/10/2023', colonne2: '5x SD', colonne3: '@Duval', colonne4: 'VO' },
        { id: 30, colonne1: '03/10/2023', colonne2: '5x SD', colonne3: '@Duval', colonne4: 'VO' },
        { id: 31, colonne1: '03/10/2023', colonne2: '5x SD', colonne3: '@Duval', colonne4: 'VO' },
        { id: 32, colonne1: '03/10/2023', colonne2: '5x SD', colonne3: '@Duval', colonne4: 'VO' },
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
                            {item.colonne2}
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