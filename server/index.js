const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = 8000;


const partialPath = path.join(__dirname, "../temp/partials");
const staticPath = path.join(__dirname , "../public");

hbs.registerPartials(partialPath);


//setting template engine for calling dynamic web pages data
app.set("view engine", "hbs");

//setting custom path for template engine
app.set("views", path.join(__dirname, "../temp/views"));


// static web pages middle ware
app.use(express.static(staticPath));


app.get("/", (req,res)=>{
    // res.send("responsive web using express JS");
    res.render("index", {
        name: "talha wahid",
    });
});

app.get("/about", (req,res)=>{
    // console.log(req.query);
    res.render("about", {
        name:req.query.name,
        time: req.query.time,
    });
});

app.get("/about/*", (req,res)=>{
    res.send("<h1>Error 404 no section found</h1>");
});


app.get("*", (req,res)=>{
    res.send("<h1>Error 404 no page found</h1>")
});


app.listen(port, ()=>{
    console.log(`app is running at port ${port}`);
});
