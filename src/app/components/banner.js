"use client";
import './banner.css'
const BannerPage = () =>{
    return(
        <div class="relative isolate px-6 lg:px-8 bg-slate-700">
            <div class="mx-auto max-w-2xl py-10">
            <div class="text-center">
                {/* <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Software Devloper </h1> */}
                <div class="wrapper">
                    <svg>
                        <text class="lg:text-6xl md:text-4xl sm:text-4xl" x="50%" y="50%" dy=".35em" text-anchor="middle">
                            Software Devloper
                        </text>
                    </svg>
                </div>
                <p class="mt-6 text-lg leading-8 text-gray-300">
                    I specialize in the dynamic synergy of React and Django, sculpting modern web applications with a blend of responsive frontend components and robust backend structures.
                </p>
            </div>
            </div>
        </div>
    )
}
export default BannerPage