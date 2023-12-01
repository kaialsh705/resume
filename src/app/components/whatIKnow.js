"use client";
const WhatIKnowPage = () => {
  return (
    <div class="bg-gray-800 py-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What I Know
          </h2>
        </div>
        <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article class="bg-slate-700 p-3 rounded-xl flex max-w-xl flex-col items-start justify-between">
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <span class="absolute inset-0"></span>
                Frontend
              </h3>
              <div class="flex flex-wrap gap-2 mt-4">
                <div class="border border-indigo-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">HTML</div>
                <div class="border border-green-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">CSS</div>
                <div class="border border-red-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">JavaScript</div>
                <div class="border border-yellow-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Tailwind</div>
                <div class="border border-indigo-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">React Js</div>
                <div class="border border-orange-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">React Native</div>
                <div class="border border-pink-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Next Js</div>
              </div>
            </div>
          </article>
          <article class="bg-slate-700 p-3 rounded-xl flex max-w-xl flex-col items-start justify-between">
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                  <span class="absolute inset-0"></span>
                  Backend
              </h3>
              <div class="flex flex-wrap gap-2 mt-4">
                <div class="border border-green-800 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Django</div>
                <div class="border border-indigo-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Python</div>
                <div class="border border-indigo-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Socket IO</div>
              </div>
            </div>
          </article>
          <article class="bg-slate-700 p-3 rounded-xl flex max-w-xl flex-col items-start justify-between">
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                  <span class="absolute inset-0"></span>
                  Database
              </h3>
              <div class="flex flex-wrap gap-2 mt-4">
                <div class="border border-blue-800 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Postgresql</div>
              </div>
            </div>
          </article>
          <article class="bg-slate-700 p-3 rounded-xl flex max-w-xl flex-col items-start justify-between">
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                  <span class="absolute inset-0"></span>
                  Devops
              </h3>
              <div class="flex flex-wrap gap-2 mt-4">
                <div class="border border-black rounded-md border-1 bg-body text-xs text-primary p-2 text-white">AWS</div>
                <div class="border border-orange-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">GIT</div>
                <div class="border border-orange-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Firebase</div>
                <div class="border border-orange-600 rounded-md border-1 bg-body text-xs text-primary p-2 text-white">Flurry</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
export default WhatIKnowPage;
