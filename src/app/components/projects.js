"use client";
const ProjectsPage = () => {
  return (
    <div className="bg-gray-800 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects
          </h2>
        </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <a href="#" target="_blank">
              <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-t-lg" src='https://www.ymgrad.com/static/bundles/media/logo_rectangle.adb2778e.png' alt="" />
                  <div className="p-5">
                      <div className="flex font-bold dark:text-white">YMGrad Web</div>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Your Gateway to Study Abroad</p>
                  </div>
              </div>
            </a>
            <a href="#" target="_blank">
              <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-t-lg" src='https://www.ymgrad.com/static/bundles/media/logo_rectangle.adb2778e.png' alt="" />
                  <div className="p-5">
                      <div className="flex font-bold dark:text-white">YMGrad Andoid App</div>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Your Gateway to Study Abroad</p>
                  </div>
              </div>
            </a>
            <a href="#" target="_blank">
              <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-t-lg" src='https://www.ymgrad.com/static/bundles/media/logo_rectangle.adb2778e.png' alt="" />
                  <div className="p-5">
                      <div className="flex font-bold dark:text-white">YMGrad IOS App</div>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Your Gateway to Study Abroad</p>
                  </div>
              </div>
            </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
