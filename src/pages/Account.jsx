import React from 'react'
import AccountStyles from "../styles/Account.module.css"

const dummyData = { name: "abc", address: "123 ly thuong kiet", email: "abc@gmail.com", phone: "123456789"}

const Account = () => {
    return (
        <div className={AccountStyles.Account}>
            <h1 className={AccountStyles.page_name}>Personal Information</h1>

            <ul>
                <li>
                    <p className={AccountStyles.tittle}>Name:</p>
                    <p className={AccountStyles.content}>{dummyData.name}</p>
                </li>
                <li>
                    <p className={AccountStyles.tittle}>Address:</p>
                    <p className={AccountStyles.content}>{dummyData.address}</p>
                </li>
                <li>
                    <p className={AccountStyles.tittle}>Email:</p>
                    <p className={AccountStyles.content}>{dummyData.email}</p>
                </li>
                <li>
                    <p className={AccountStyles.tittle}>Phone:</p>
                    <p className={AccountStyles.content}>{dummyData.phone}</p>
                </li>
            </ul>
        </div>
    )
}

export default Account