import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CombineCard = () => {
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch("/json/combine.json")
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className="max-w-screen-xl md:mx-auto mx-10 my-20">
            <div className="grid justify-items-center grid-cols-3 gap-1">
                {
                    cards.map(card=>(
                        <div key={card.id} className="rounded-xl overflow-hidden w-96 hover:shadow-2xl">
                            <div>
                                <img src={card.image} alt="" />
                            </div>
                            <div className="text-center py-5 bg-[#FC5640] bg-opacity-70 text-white">
                                <div className="">
                                    <h1 className="text-xl font-mono">{card.title}</h1>
                                    <h1 className="text-2xl uppercase">{card.subtitle}</h1>
                                </div>
                                <div>
                                    <Link to={`/${card.route}`}>
                                        <button className="bg-gray-100 px-4 py-2 mt-4 rounded-lg text-black text-lg">
                                            See More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CombineCard;