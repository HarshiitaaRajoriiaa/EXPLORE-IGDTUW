import React from "react";
import './Card.css'
function card({ name, about }) {
    return (
        <>
            <div class="relative h-[400px] w-[300px] rounded-lg perspective">
                <div class="absolute h-full w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* <!-- Front side --> */}
                    <div class="absolute inset-0 z-10 h-full w-full rounded-md backface-hidden">
                        <img src="https://images.pexels.com/photos/460295/pexels-photo-460295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="AirMax Pro"
                            class="h-full w-full rounded-md object-cover"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-left">
                            <h1 class="text-lg font-semibold text-white">Delba</h1>
                            <p class="mt-2 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                            </p>
                            <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                                View Profile →
                            </button>
                        </div>
                    </div>
                    {/* <!-- Back side --> */}
                    <div class="absolute inset-0 z-10 h-full w-full rounded-md backface-hidden bg-gray-800 p-4 overflow-y-auto transform rotate-y-180">
                        <p class="mt-2 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}
export default card