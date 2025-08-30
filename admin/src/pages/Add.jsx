import React from 'react'
import { assets } from '../assets/admin_assets/assets'

const Add = () => {
    return (
        <form className='flex flex-col w-full gap-5 p-5'>
            <div >
                <h1>Upload Image</h1>

                <div className='flex gap-3'>
                    <label htmlFor='image1'>
                        <img className='w-20' src={assets.upload_area} alt="" />
                        <input type="file" id='image1' />
                    </label>
                    <label htmlFor='image2'>
                        <img className='w-20' src={assets.upload_area} alt="" />
                        <input type="file" id='image1' />
                    </label>
                    <label htmlFor='image3'>
                        <img className='w-20' src={assets.upload_area} alt="" />
                        <input type="file" id='image1' />
                    </label>
                    <label htmlFor='image4'>
                        <img className='w-20' src={assets.upload_area} alt="" />
                        <input type="file" id='image1' />
                    </label>
                </div>
            </div>
            <div>
                <p>Product Name</p>
                <input type='text' className='w-full border-2 border-gray-300 rounded-md p-2' />
            </div>
            <div>
                <p>Product Description</p>
                <input type='text' className='w-full border-2 border-gray-300 rounded-md p-2' />
            </div>
            <div className='flex gap-5'>
                <div>
                    <p>Product category</p>
                    <select name="category">
                        <option value="Men"></option>
                        <option value="Woman"></option>
                        <option value="Kids"></option>
                    </select>
                </div>
                <div>
                    <p>Sub category</p>
                    <select name="subcategory">
                        <option value="Topwear"></option>
                        <option value="Bottomwear"></option>
                        <option value="Winterwear"></option>
                    </select>
                </div>
                <div>
                    <p>Product price</p>
                    <input type='number' className='w-full border-2 border-gray-300 rounded-md p-2' />
                </div>
            </div>
            <div>
                <p>Product Size</p>
                <div className='flex gap-5'>
                    <div className='size-4 flex items-center justify-center'>
                        <p className='bg-slate-200 px-3 py-1 cursor-pointer'>S</p>
                    </div>
                    <div className='size-4 flex items-center justify-center'>
                        <p className='bg-slate-200 px-3 py-1 cursor-pointer'>M</p>
                    </div>
                    <div className='size-4 flex items-center justify-center'>
                        <p className='bg-slate-200 px-3 py-1 cursor-pointer'>L</p>
                    </div>
                    <div className='size-4 flex items-center justify-center'>
                        <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XL</p>
                    </div>
                    <div className='size-4 flex items-center justify-center'>
                        <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XXL</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-3 mt-2'>
                <input type="checkbox" id='bestseller' />
                <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
            </div>
            <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
        </form>
    )
}

export default Add
