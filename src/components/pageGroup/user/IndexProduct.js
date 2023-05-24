import React from 'react'

function IndexProduct() {
    return (
        <div>
            {/* Foods Sction */}
            <h1 class="text-4xl font-bold text-black p-2 ml-5">Foods</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4 md:p-12 md:p-16 gap-x-7 gap-y-5">
                <div className="card card-compact w-54 bg-base-100 shadow-xl">
                    <figure><img src="/img/makanan.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wagyu Steak</h2>
                        <p>Rp. 100.000</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-warning btn-sm">Add</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-54 bg-base-100 shadow-xl">
                    <figure><img src="/img/makanan.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wagyu Steak</h2>
                        <p>Rp. 100.000</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-warning btn-sm">Add</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-54 bg-base-100 shadow-xl">
                    <figure><img src="/img/makanan.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wagyu Steak</h2>
                        <p>Rp. 100.000</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-warning btn-sm">Add</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-54 bg-base-100 shadow-xl">
                    <figure><img src="/img/makanan.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wagyu Steak</h2>
                        <p>Rp. 100.000</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-warning btn-sm">Add</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-54 bg-base-100 shadow-xl">
                    <figure><img src="/img/makanan.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wagyu Steak</h2>
                        <p>Rp. 100.000</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-warning btn-sm">Add</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Drink Section */}
            <h1 class="text-4xl font-bold text-black p-2 ml-5">Drink</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4 md:p-12 md:p-16 gap-x-7 gap-y-5">
                <div className="card card-compact w-54 bg-base-100 shadow-xl">
                    <figure><img src="/img/makanan.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wagyu Steak</h2>
                        <p>Rp. 100.000</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-warning btn-sm">Add</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dessert Section */}
            <h1 class="text-4xl font-bold text-black p-2 ml-5">Dessert</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4 md:p-12 md:p-16 gap-x-7 gap-y-5">
                <div className="card card-compact w-54 bg-base-100 shadow-xl">
                    <figure><img src="/img/makanan.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wagyu Steak</h2>
                        <p>Rp. 100.000</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-warning btn-sm">Add</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>

    )
}

export default IndexProduct