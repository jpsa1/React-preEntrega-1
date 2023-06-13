import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartWidget = () => {

    return (
        <div>
            <ShoppingCartOutlinedIcon color='success' fontSize='large' sx={{color: 'white'}} />
            <span>1</span>
        </div>
    )
}

export default CartWidget