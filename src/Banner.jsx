export default function Banner() {
    return (
      <div className="py-20 sm:py-28 ">
       <div className="box">
    <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">Understand User Flow.</h1>
        <span className="text-3xl font-extrabold text-red-700 sm:text-5xl">Increase Conversion.</span>
        <p className="mt-4 sm:text-xl/relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Nesciunt illo tenetur fuga ducimus numquam ea!</p>
    <div className="mt-8 flex justify-center gap-4">
    <button className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white">Get Started</button>
    <button className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-red-600">Learn More</button>
    </div>
</div>
</div> 
      </div>
    );
  }