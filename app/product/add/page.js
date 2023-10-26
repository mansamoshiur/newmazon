"use client"
import React, { useState } from "react";

export default function AddProduct(){

    const [productData, setProductData] = useState({
        name: '',
        description: '',
        imageUrl: '',
        price : 0
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setProductData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    }

    return (
        <>
            <section>
                <div className="container mx-auto">

                    <div className="grid grid-cols-1">
                        <form >
                            <div>
                                <h1 className="text-2xl font-bold my-3">Add Product</h1>
                                
                                <div className="form-group my-3">
                                    <input 
                                    type="text" 
                                    placeholder="Name" 
                                    className="input input-bordered w-full" 
                                    name="name"
                                    value={productData.name}
                                    onChange={handleInputChange}

                                    />
                                </div>

                                <div className="form-group my-3">
                                    <textarea 
                                    className="textarea textarea-bordered w-full" 
                                    placeholder="Description"
                                    name="description"
                                    value={productData.description}
                                    onChange={handleInputChange}

                                    ></textarea>
                                </div>

                                <div className="form-group my-3">
                                    <input 
                                    type="text" 
                                    placeholder="Image Url" 
                                    className="input input-bordered w-full" 
                                    name="imageUrl"
                                    value={productData.imageUrl}
                                    onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group my-3">
                                    <input 
                                    type="number" 
                                    placeholder="Price" 
                                    className="input input-bordered w-full" 
                                    name="price"
                                    value={productData.price}
                                    onChange={handleInputChange}
                                    />
                                </div>

                                <button type="submit" className="btn btn-warning w-full">Upload</button>

                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </>
    );
}