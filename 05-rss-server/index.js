import cors from "cors";
import express from "express";
import RSSParser from "rss-parser";



const feedURL = "https://netflixtechblog.com/feed"

const parser = new RSSParser();
let articles = [];

const parse = async url =>{
    const feed = await parser.parseURL(url);

    feed.items.forEach(item =>{
        // console.log(`${item.title}\n${item.link}\n
        // `)

        articles.push({ item })
    })
}

parse(feedURL);

// const express = require('express');


let app = express();

app.get('/', (req,res,next) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
    res.send(articles);
});

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };
app.use(cors(corsOptions));

const server = app.listen("4000", () =>{
    console.log("App is running at http://localhost:4000");
});

export default server;