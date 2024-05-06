import React from 'react'

const Girls = () => {
    const girls = [
        {name: "Nimali", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facere? Veniam ratione", img: "", age: "24"},
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
                        <div className="bg-pink-200 rounded-md shadow-md py-8 px-12">
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