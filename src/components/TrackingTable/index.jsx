import React, {useState} from "react"
import TrackingTableStyles from './TrackingTable.module.css'

function TrackingTable ({billList}) {
    return (
        <div className={TrackingTableStyles.tracking_table}>
            <table>
                <tr>
                    <th>ORDER</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>STATUS</th>
                </tr>
                {billList.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.orderCode}</td>
                        <td>{val.orderDate}</td>
                        <td>{val.totalFee}</td>
                        <td>{val.status}</td>
                    </tr>
                )
                })}
            </table>
        </div>
    )
}

export default TrackingTable