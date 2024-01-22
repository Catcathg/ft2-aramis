import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import DataSetStockVente from '../../data/aramis-auto/stock-vente.json'
import './List.css'

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function SimpleListWithIcons() {
    const ModelsStockVente = DataSetStockVente.reduce((acc, item) => {
        if (item.VEHICULE_MARQUE === 'Citroën') {
            acc[item.VEHICULE_MODELE] = (acc[item.VEHICULE_MODELE] || 0) + 1;
        } return acc;
    }, {});

    console.log(ModelsStockVente)

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 250 }}>
            <Demo>
                <List sx={{ height: 440, overflow: 'auto' }}>
                    {Object.entries(ModelsStockVente).map(([model, nbStock], index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Modèle: ${model} (${nbStock})`}/>
                        </ListItem>
                    ))}
                </List>
            </Demo>
        </Box>
    );
}
