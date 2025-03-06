export default function Example() {
  return (
    <div className="">
      <div className="relative isolate lg:px-8 h-svh">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl   sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 70% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#46d693] to-[#08fa65] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <p className="text-balance text-6xl font-medium tracking-tight text-zinc-700 ">
              Bienvenido a{" "}
              <span className="bg-gradient-to-r from-green-500 transform text-transparent bg-clip-text to-green-500 ">
                DataFast
              </span>
            </p>
            <p className="mt-5  text-md font-light text-balance text-zinc-600 ">
              FastData es una innovadora aplicación web diseñada para ofrecer
              una lectura de datos eficiente y visualmente atractiva, construida
              con la potente biblioteca de JavaScript, React.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-3">
              <a
                href="#"
                className="rounded-md text-white bg-green-400  hover:bg-green-500 duration-200 px-5 py-2 font-medium "
              >
                Empezar
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold text-zinc-600 border px-5 py-2 border-zinc-200  duration-200 rounded-md"
              >
                Leer mas <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#21992b] to-[#4fff9e] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
