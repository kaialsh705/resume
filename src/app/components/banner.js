"use client";
import './banner.css'
const BannerPage = () =>{
    return(
        <div className="relative isolate px-6 lg:px-8 bg-slate-700">
            <div className="mx-auto max-w-2xl py-10">
            <div className="text-center">
                <div className="wrapper">
                    <svg>
                        <text className="lg:text-6xl md:text-4xl sm:text-4xl" x="50%" y="50%" dy=".35em" text-anchor="middle">
                            Software Devloper
                        </text>
                    </svg>
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    I specialize in the dynamic synergy of React and Django, sculpting modern web applications with a blend of responsive frontend components and robust backend structures.
                </p>
            </div>
            </div>
        </div>
    )
}
export default BannerPage