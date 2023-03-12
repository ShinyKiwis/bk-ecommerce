import TrackingTableStyles from './TrackingTable.module.css'

const data = [
    { orderCode: "#ABCDE", orderDate: "19/6/2022", totalFee: "$323", status: "completed" },
    { orderCode: "#12AV", orderDate: "1/9/2022", totalFee: "$42.3", status: "completed" },
    { orderCode: "#36GT3", orderDate: "25/2/2023", totalFee: "$124", status: "shippng" },
    { orderCode: "#SD45", orderDate: "2/3/2023", totalFee: "$12", status: "preparing" },
]

function TrackingTable () {
    return (
        <div className={TrackingTableStyles.tracking_table}>
            <table>
                <tr>
                    <th>ORDER</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>STATUS</th>
                </tr>
                {data.map((val, key) => {
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
