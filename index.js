const quotes=document.getElementById("quotes");
        const author=document.getElementById("author");
        const newq=document.getElementById("newq");
        const tweetme=document.getElementById("tweetme");
        const facebook=document.getElementById("facebook");
        const instagram=document.getElementById("instagram");


        let realdata="";
        let quotesdata="";
        const tweetnow=()=>{
        let tweetpost="https://twitter.com/intent/tweet";
        window.open(tweetpost);
        }
        const fb=()=>{

        let postfb="https://www.facebook.com/{post-id}"
        window.open(postfb);
        }
        const insta=()=>{

            let instagram="https://www.instagram.com"
            window.open(instagram);
            }
        const getnewquotes=()=>{
            let rnum=Math.floor(Math.random()*1000);
            quotesdata=realdata[rnum];
            quotes.innerText=`${quotesdata.text}`;
            if(quotesdata.author==null){
                author.innerText="unknown"
            }else{
                author.innerText=`${quotesdata.author}`

            }
         


        };
        const getQuotes=async()=>{

        const api="https://type.fit/api/quotes";
    try {
        let data =await fetch(api);
        realdata = await data.json();
        getnewquotes();
        console.log(realdata[0].author);
    } catch (error) {
        
    }};
            tweetme.addEventListener("click",tweetnow);
            facebook.addEventListener("click",fb);
            instagram.addEventListener("click",insta);


            newq.addEventListener("click",getnewquotes);
            getQuotes();