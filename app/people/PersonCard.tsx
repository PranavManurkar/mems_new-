"use client"
import React from "react"
import { Person } from "./type";


export default function PersonCard({ person, onMore }: { person: Person; onMore: (p: Person) => void }) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 border-4 border-primary hover:shadow-xl hover:border-accent group" >
            <div className="h-72 bg-gray-100 relative flex items-center justify-center p-4" >
                <div className="w-full h-full flex items-center justify-center" >
                    <img src={person.image || "/placeholder.svg"} alt={person.name} className="max-h-full max-w-full object-contain" />
                </div>
                < div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" > </div>
            </div>


            < div className="p-6" >
                <h3 className="text-xl font-bold text-primary mb-1" > {person.name} </h3>
                < p className="text-gray-600 font-semibold mb-1 text-sm" > {person.title} </p>
                < p className="text-gray-700 mb-4 text-sm" > {person.specialization} </p>


                < div className="flex gap-2 flex-wrap mb-4" >
                    <span className="text-xs bg-blue-100 text-primary px-3 py-1 rounded-full font-semibold" > {person.category} </span>
                    {person.field ? (
                        <span className="text-xs bg-amber-100 text-amber-900 px-3 py-1 rounded-full font-semibold">{person.field}</span>
                    ) : null}
                </div>


                < div className="flex gap-2" >
                    <button onClick={() => onMore(person)} className="flex-1 text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-900 transition-all duration-300 font-semibold" >
                        More info
                    </button>
                </div>
            </div>
        </div>
    )
}