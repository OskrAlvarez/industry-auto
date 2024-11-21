import { SearchForm } from "./SearchForm";

export function Info() {
  return (
    <section className="max-w-[1000px] p-6 mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex-[50%]">
        <h1 className="text-2xl md:text-3xl text-center md:text-left uppercase font-bold py-4">
          Welcome to <span className="text-red-700">Industry</span> Auto
        </h1>
        <p className="pb-4">
          Industry Auto: Where every drive is different. Explore our wide
          variety of vehicles, tailored financing, and dedicated customer
          service.
        </p>
      </div>
      <div className="flex-[50%]">
        <SearchForm />
      </div>
    </section>
  );
}
