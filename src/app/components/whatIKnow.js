"use client";
const WhatIKnowPage = () => {
  return (
    <div className="bg-gray-800 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What I Know
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article className="bg-slate-700 p-3 rounded-xl flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <span className="absolute inset-0"></span>
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="border border-indigo-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">HTML</div>
                <div className="border border-green-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">CSS</div>
                <div className="border border-red-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">JavaScript</div>
                <div className="border border-yellow-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Tailwind</div>
                <div className="border border-indigo-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">React Js</div>
                <div className="border border-orange-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">React Native</div>
                <div className="border border-pink-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Next Js</div>
              </div>
            </div>
          </article>
          <article className="bg-slate-700 p-3 rounded-xl flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <span className="absolute inset-0"></span>
                  Backend
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="border border-green-800 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Django</div>
                <div className="border border-indigo-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Python</div>
                <div className="border border-indigo-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Socket IO</div>
              </div>
            </div>
          </article>
          <article className="bg-slate-700 p-3 rounded-xl flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <span className="absolute inset-0"></span>
                  Database
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="border border-blue-800 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Postgresql</div>
              </div>
            </div>
          </article>
          <article className="bg-slate-700 p-3 rounded-xl flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <span className="absolute inset-0"></span>
                  Devops
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="border border-black rounded-md border-1 bg-body text-xs text-primary p-2 text-white">AWS</div>
                <div className="border border-orange-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">GIT</div>
                <div className="border border-orange-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Firebase</div>
                <div className="border border-orange-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Flurry</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
export default WhatIKnowPage;
