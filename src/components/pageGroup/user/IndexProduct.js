import React from 'react'

function IndexProduct() {
    return (
        <div>
            {/* Foods Section */}
            <h1 class="text-4xl font-bold text-black p-4 ml-5">Foods</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 md:px-16  md:mb-6  gap-x-7 gap-y-5">
                <div className="card card-compact w-54 bg-base-100 shadow-xl">
                    <figure><img src="/img/makanan.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wagyu Steak</h2>
                        <p>Rp. 100.000</p>
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-5" className="btn btn-warning btn-sm">Add</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                        <div className="modal ">
                            <div className=" modal-box w-11/12 max-w-2xl grid grid-cols-1 md:grid-cols-2">
                                <img src="/img/makanan.jpg" alt="foods" className='mx-6 py-2' />
                                <div>
                                    <h3 className="font-bold text-lg">Wagyu Steak</h3>
                                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                    <p className="py-4">Quantity</p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal-5" className="btn btn-warning btn-sm">Cancel</label>
                                        <label htmlFor="my-modal-5" className="btn btn-warning btn-sm">Add</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>

            {/* Drink Section */}
            <h1 class="text-4xl font-bold text-black p-4 ml-5">Drinks</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 md:px-16 mb-6  gap-x-7 gap-y-5">
                <div className="card card-compact w-54 bg-base-100 shadow-xl">
                    <figure><img src="/img/makanan.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wagyu Steak</h2>
                        <p>Rp. 100.000</p>
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-5" className="btn btn-warning btn-sm">Add</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                        <div className="modal ">
                            <div className=" modal-box w-11/12 max-w-2xl grid grid-cols-1 md:grid-cols-2">
                                <img src="/img/makanan.jpg" alt="foods" className='mx-6 py-2' />
                                <div>
                                    <h3 className="font-bold text-lg">Wagyu Steak</h3>
                                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                    <p className="py-4">Quantity</p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal-5" className="btn btn-warning btn-sm">Cancel</label>
                                        <label htmlFor="my-modal-5" className="btn btn-warning btn-sm">Add</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>

            {/* Desert Section */}
            <h1 class="text-4xl font-bold text-black p-4 ml-5">Desert</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 md:px-16 mb-6  gap-x-7 gap-y-5">
                <div className="card card-compact w-54 bg-base-100 shadow-xl">
                    <figure><img src="/img/makanan.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wagyu Steak</h2>
                        <p>Rp. 100.000</p>
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-5" className="btn btn-warning btn-sm">Add</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                        <div className="modal ">
                            <div className=" modal-box w-11/12 max-w-2xl grid grid-cols-1 md:grid-cols-2">
                                <img src="/img/makanan.jpg" alt="foods" className='mx-6 py-2' />
                                <div>
                                    <h3 className="font-bold text-lg">Wagyu Steak</h3>
                                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                    <p className="py-4">Quantity</p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal-5" className="btn btn-warning btn-sm">Cancel</label>
                                        <label htmlFor="my-modal-5" className="btn btn-warning btn-sm">Add</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
        </div>

    )
}

export default IndexProduct