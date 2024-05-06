import React from 'react'

const Mens = () => {
    const girls = [
        {name: "Nimali", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facere? Veniam ratione", img: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1714988150~exp=1714991750~hmac=e1d2db921ee318bd0e8ffd7b7bd6a5021809718f5199a0e4044919a05cba8821&w=740", age: "24"},
        {name: "Kamala", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facere? Veniam ratione", img: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1714988150~exp=1714991750~hmac=e1d2db921ee318bd0e8ffd7b7bd6a5021809718f5199a0e4044919a05cba8821&w=740", age: "24"},
        {name: "Perera", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facere? Veniam ratione", img: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1714988150~exp=1714991750~hmac=e1d2db921ee318bd0e8ffd7b7bd6a5021809718f5199a0e4044919a05cba8821&w=740", age: "24"},
        {name: "Amara", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facere? Veniam ratione", img: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1714988150~exp=1714991750~hmac=e1d2db921ee318bd0e8ffd7b7bd6a5021809718f5199a0e4044919a05cba8821&w=740", age: "24"},
        {name: "Sara", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facere? Veniam ratione", img: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1714988150~exp=1714991750~hmac=e1d2db921ee318bd0e8ffd7b7bd6a5021809718f5199a0e4044919a05cba8821&w=740", age: "24"},
    ]

  return (
    <div className=''>
        <h1 className="text-5xl love-title text-pink-500 my-4 text-center">Boys</h1>
        <div className="lg:grid grid-cols-3 gap-4">
            {
                girls.map((girl) => {
                    return (
                        <div className="bg-pink-200 rounded-md shadow-md py-8 px-12 lg:my-0 my-4">
                            <div className="flex justify-between">
                                <div className="">
                                    <img src={girl.img} alt="" className='h-40 w-auto rounded' />
                                </div>
                                <div className="">
                                    <h1 className="">Name: {girl.name}</h1>
                                    <h1 className="">Age: {girl.age}</h1>
                                </div>
                            </div>
                            <p className="my-6"><span className="font-semibold">Bio:</span> <br /> {girl.desc}</p>

                            <div className="my-4">
                                <button className='bg-pink-500 text-white font-semibold py-2 px-8 rounded duration-500 hover:bg-pink-600 hover:ml-2'>View More</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Mens