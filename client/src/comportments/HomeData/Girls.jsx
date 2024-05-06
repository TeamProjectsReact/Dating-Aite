import React from 'react'

const Girls = () => {
    const girls = [
        {name: "Nimali", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facere? Veniam ratione", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D", age: "24"},
        {name: "Kamala", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facere? Veniam ratione", img: "", age: "24"},
        {name: "Perera", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facere? Veniam ratione", img: "", age: "24"},
        {name: "Amara", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facere? Veniam ratione", img: "", age: "24"},
        {name: "Sara", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facere? Veniam ratione", img: "", age: "24"},
    ]

  return (
    <div className=''>
        <div className="lg:grid grid-cols-3 gap-4">
            {
                girls.map((girl) => {
                    return (
                        <div className="bg-pink-200 rounded-md shadow-md py-8 px-12 lg:my-0 my-4">
                            <img src={girl.img} alt="" className='h-40 w-auto rounded' />
                            <h1 className="">Name: {girl.name}</h1>
                            <p className="">Bio: {girl.desc}</p>

                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Girls