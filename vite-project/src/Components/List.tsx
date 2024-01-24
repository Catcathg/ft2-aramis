import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import DataSetStockVente from '../../data/aramis-auto/stock-vente.json'
import StockIcon from '@/assets/Images/purchase-icon.svg'
import './List.css'

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const StyledIconDiv = styled('div')(({ nbStock }) => ({
    backgroundColor: nbStock < 10 ? 'red' : 'green',
}));

export default function SimpleListWithIcons() {
    const ModelsStockVente = DataSetStockVente.reduce((acc, item) => {
        if (item.VEHICULE_MARQUE === item.VEHICULE_MARQUE) {
            acc[item.VEHICULE_MODELE] = (acc[item.VEHICULE_MODELE] || 0) + 1;
        } return acc;
    }, {});

    console.log(ModelsStockVente)

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 235 }}>
            <Demo> 
                <List sx={{ height: 360, overflow: 'auto' }}>
                    {Object.entries(ModelsStockVente).map(([model, nbStock], index) => (
                        <ListItem className="itemList" key={index}>
                            <StyledIconDiv nbStock={nbStock}>
                                <ListItemIcon>
                                    {nbStock < 10 ? (
                                        <img className="icon" src={StockIcon} alt="Stock icon" />
                                    ) : (
                                        <img className="icon" src={StockIcon} alt="Entretien icon" />
                                    )}
                                </ListItemIcon>
                            </StyledIconDiv>
                            <ListItemText primary={`${model}`} />
                        </ListItem>
                    ))}
                </List>
            </Demo>
        </Box>
    );
}
