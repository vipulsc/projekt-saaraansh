import { useState, useEffect } from "react";

const Search = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmitClick = async (e) => {
    alert("Submitted");
  };

  return (
    <div>
      <section className="mt-16 w-full max-w-xl">
        <div className="flex flex-col">
          <form
            onSubmit={handleSubmitClick}
            className="flex flex-row justify-between p-4 border-2 border-background shadow-[-6px_6px_0px_rgba(252,242,89,0.8)] hover:shadow-[-6px_-6px_0px_rgba(244,62,11,0.8)] transition-all duration-300"
          >
            <input
              type="url"
              placeholder="Enter an URL to Article"
              value={article.url}
              onChange={(e) => setArticle({ ...article, url: e.target.value })}
              required
              className="w-full h-16 text-xl px-6 py-3 placeholder:text-background/50 focus:placeholder:text-foreground focus:border-[#fcf259] focus:ring-2 focus:ring-[#fcf259] focus:outline-none  transition-all duration-500 ease-in-out bg-transparent border-2 border-[#c5172e]"
            />
            <button
              type="submit"
              className="flex gap-2 text-2xl px-1 flex-center underline text-background hover:text-foreground transition-all duration-500 ease-in-out transform hover:scale-105 my-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fcf259"
                className="w-8 h-8 my-auto hidden md:block hover:translate-x-2 transition-all duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#c5172e"
                className="w-6 h-6 md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </button>
          </form>
          {/* BROWSE URL HISTORY */}

          <p>sldknalsd</p>
          <p>sldknalsd</p>
          <p>sldknalsd</p>
          <p>sldknalsd</p>
        </div>
      </section>
    </div>
  );
};

export default Search;
