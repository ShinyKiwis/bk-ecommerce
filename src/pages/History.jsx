import React from 'react'
import {TrackingTable} from "../components"
import HistoryStyles from "../styles/History.module.css"

const History = () => {
    return (
        <div className={HistoryStyles.history}>
            <h1 className={HistoryStyles.page_name}> Purchase History</h1>
            <TrackingTable/>
        </div>
    )
}

export default History
