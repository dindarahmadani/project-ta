import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

function UserDashboard() {
    return (
        <div className="navbar bg-yellow-500 px-4">
            <div className="flex-1">
                <img src='/img/logo.jpg' alt="" class="h-14 ml-5" />
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FiShoppingCart size={24} color='white' />
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-72 bg-base-100 shadow">
                        <div className="card-body">
                            <div className='flex justify-between'> 
                                <span className="font-bold text-lg">Wagyu Steak</span>
                                <span className="font-bold text-lg">Rp. 100.000</span>
                            </div>
                            <span className="text-info text-end">Subtotal: $999</span>
                            <div className="card-actions justify-end">
                                <button className="btn btn-warning btn-block">Orders</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard