'use client'
import React from 'react'
import { useState,useEffect } from 'react';
import { Avatar } from "@nextui-org/react";
import { Image,Button,Link } from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
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

const trending = () => {
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
    <div className='flex gap-6 justify-center '>
        {articles.filter(article=>article.urlToImage).slice(20,23).map((article,index)=>(
        <Card className="py-4 w-80 h-90 cover" key={index} >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
       <Avatar size="sm" />
        <small className="text-default-500">{article.author}</small>
        <h4 className="font-bold text-large">{article.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={article.urlToImage}
          width={270}
        />
      </CardBody>
      <CardFooter>
      <Button
      href={article.url}
      as={Link}
      showAnchorIcon>
        Click
      </Button>
      </CardFooter>
    </Card>
    ))}
        
    </div>
  )
}
export default trending;