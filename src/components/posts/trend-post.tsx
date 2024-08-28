
'use client'
import { useEffect, useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
type Article = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

const Trending = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  
  useEffect(() => {
    async function fetchArticles() {
      const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
      if (!apiKey) {
        console.error('API key is missing');
        return;
      }
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=blogs&apiKey=${apiKey}`);
        if (!response.ok) {
          console.error(`Error fetching data: ${response.statusText}`);
          return;
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchArticles();
  }, []);

  return (
    <div className=''>
      <h1 className="text-xl sm:text-3xl font-bold mb-6 flex">Trending Articles</h1>
      {articles.length > 0 ? (
        <div className="space-y-8">
          {articles.slice(0, 10).map((article, index) => (
            <div className='' key={index}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-start sm:pb-4 sm:mb-4"
              >
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    // className="w-[32%] h-[32%] object-cover sm:mr-6"
                    className='w-full h-[16%] sm:w-[32%] sm:h-[32%] object-cover sm:mr-6 mb-4 sm:mb-0'
                  />
                )}
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold sm:text-2xl sm:font-bold mb-2 sm:inline block">{article.title}</h2>
                  <p className="text-sm sm:text-lg text-gray-700 mb-2 line-clamp-3 sm:line-clamp-none">
                    {article.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {article.author ? `By ${article.author}` : 'Unknown author'}, {new Date(article.publishedAt).toLocaleDateString()}
                  </p>
                </div>
                
              </a>
              <div><BookmarkBorderIcon/></div>
              {index < articles.slice(0, 10).length - 1 && <hr className="border-gray-300" />}
            
            </div>
          
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Trending;

