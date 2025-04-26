import { useState, useEffect } from "react";
import { useLazyGetSummaryQuery } from "../services/article";
import { copy, loader, tick } from "../assest";
const Hero = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [allArticles, setAllArticles] = useState([]);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState("");
  const handleReadMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    const existingArticle = allArticles.find(
      (item) => item.url === article.url
    );

    if (existingArticle) return setArticle(existingArticle);
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setArticle({ url: "", summary: data.summary });
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="px-6 md:px-12 ml-8 mr-8 pt-8">
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-center w-full">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <form
            onSubmit={handleSubmitClick}
            className="flex justify-between p-4 border-2 border-[#c5172e] shadow-[-6px_6px_0px_rgba(252,242,89,0.8)] hover:shadow-[-6px_-6px_0px_rgba(244,62,11,0.8)] transition-all duration-300"
          >
            <input
              type="url"
              placeholder="Enter an URL to Article"
              value={article.url}
              onChange={(e) => setArticle({ ...article, url: e.target.value })}
              required
              className="w-full h-16 text-xl px-6 py-3 placeholder:text-background/50 focus:placeholder:text-foreground focus:border-[#fcf259] focus:ring-2 focus:ring-[#fcf259] focus:outline-none bg-transparent border-2 border-[#c5172e] transition-all duration-500 ease-in-out"
            />
            <button
              type="submit"
              className="flex items-center gap-2 text-2xl underline text-background hover:text-foreground transition-all duration-500 ease-in-out transform hover:scale-105 ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fcf259"
                className="w-8 h-8 hidden md:block hover:translate-x-2 transition-all duration-300"
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

          {/* URL History */}
          <div className="flex flex-col gap-1 max-h-60 overflow-y-auto mt-5">
            {allArticles.map((item, index) => (
              <div
                key={`link-${index}`}
                onClick={() => setArticle(item)}
                className="link_card cursor-pointer hover:bg-muted/30 p-2 rounded-lg transition"
              >
                <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                  <img
                    src={copied === item.url ? tick : copy}
                    alt="copy_icon"
                    className="w-[40%] h-[40%] object-contain"
                  />
                </div>
                <p className="flex-1 font-medium text-lg truncate pl-3 hover:text-[#c5172e] transition-colors duration-300">
                  {item.url}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-right">
          {/* Loader, Error, and Summary Display */}
          <div className="my-10 max-w-full flex justify-center items-center">
            {isFetching ? (
              <img
                src={loader}
                alt="loader"
                className="w-20 h-20 object-contain"
              />
            ) : error ? (
              <p className="font-extrabold text-2xl text-[#c5172e] text-center border rounded-2xl p-3">
                Well, that wasn't supposed to happen...
                <br />
                <span className="font-normal text-white">
                  {error?.data?.error}
                </span>
              </p>
            ) : (
              article.summary && (
                <div className="rounded-lg p-6 transition-all duration-300 cursor-pointer border-[#c5172e] w-full">
                  <p
                    className={`text-lg leading-6 overflow-hidden ${
                      !isExpanded ? "truncate-summary" : ""
                    }`}
                    style={{
                      WebkitLineClamp: isExpanded ? "unset" : 4,
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {article.summary}
                  </p>

                  {!isExpanded && article.summary.split(" ").length > 20 && (
                    <button
                      onClick={handleReadMoreClick}
                      className="text-xl text-[#fcf259] underline mt-2 hover:text-[#c5172e]"
                    >
                      Read More
                    </button>
                  )}
                </div>
              )
            )}
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-[#85193c] bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-full max-w-lg relative opacity-100 transition-all duration-300">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-3 left-4 text-2xl text-[#c5172e] hover:text-[#85193c]"
                >
                  <div className="font-extrabold text-3xl">&times;</div>
                </button>
                <h2 className="text-xl font-bold mb-4 text-[#c5172e]">
                  Full Summary
                </h2>
                <div className="overflow-y-auto max-h-108">
                  {" "}
                  <p className="text-xl leading-8 text-[#85193c]">
                    {article.summary}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
