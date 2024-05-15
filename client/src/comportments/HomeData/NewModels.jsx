import React from 'react'

const NewModels = () => {
    const girls = [
        {name: "Nimali", email: "texting@123.com", mobile: "07xxxxxxx", job: "Software Engineer", img: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1714988150~exp=1714991750~hmac=e1d2db921ee318bd0e8ffd7b7bd6a5021809718f5199a0e4044919a05cba8821&w=740", age: "24"},
        {name: "Kamala", email: "texting@123.com", mobile: "07xxxxxxx", job: "Software Engineer", img: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1714988150~exp=1714991750~hmac=e1d2db921ee318bd0e8ffd7b7bd6a5021809718f5199a0e4044919a05cba8821&w=740", age: "24"},
        {name: "Perera", email: "texting@123.com", mobile: "07xxxxxxx", job: "Software Engineer", img: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1714988150~exp=1714991750~hmac=e1d2db921ee318bd0e8ffd7b7bd6a5021809718f5199a0e4044919a05cba8821&w=740", age: "24"},
        {name: "Amara", email: "texting@123.com", mobile: "07xxxxxxx", job: "Software Engineer", img: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1714988150~exp=1714991750~hmac=e1d2db921ee318bd0e8ffd7b7bd6a5021809718f5199a0e4044919a05cba8821&w=740", age: "24"},
        {name: "Sara", email: "texting@123.com", mobile: "07xxxxxxx", job: "Software Engineer", img: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?t=st=1714988150~exp=1714991750~hmac=e1d2db921ee318bd0e8ffd7b7bd6a5021809718f5199a0e4044919a05cba8821&w=740", age: "24"},
    ]
  return (
    <div className=''>
        <h1 className="text-5xl love-title text-pink-500 my-4 text-center">Boys</h1>
        <div className="lg:grid grid-cols-4 gap-4 my-8">
            {
                girls.map((girl) => {
                    return (
                        <div className="text-center bg-pink-200 rounded-md shadow-md py-8 px-12 lg:my-0 my-4">
                            <div className="flex justify-center items-center ">
                                <img src={girl.img} alt="" className='lg:my-0 my-24 object-cover rounded-full lg:w-[60%] w-[100%] h-auto'/>
                            </div>
                            <h1 className="my-2 font-semibold">{girl.name}</h1>
                            <h1 className="bg-pink-400 py-1 rounded-2xl text-sm text-white mt-1 mb-3">{girl.job}</h1>
                            <div className="mt-4">
                                <h1 className="">{girl.mobile}</h1>
                                <h1 className="font-semibold text-pink-500">{girl.email}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default NewModels