import React, { useContext } from 'react'
import { Button } from 'reactstrap'
import { accountContext } from '../utils/context'

const newData={
    accountCode:'eubraidot@gmail.com',
    balance:'1000.00'
}

export default function GenericButton() {
    const {setData} = useContext(accountContext)
    return (
        <div>
            <Button  onClick={()=>{
                setData(newData);
            }}>clickHereToChange</Button>
        </div>
    )
}
