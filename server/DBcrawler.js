const puppeteer = require('puppeteer');
/*爬取数据*/

const crawler =async  function (book) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://read.douban.com/ebooks/?dcs=book-nav&dcm=douban');
    await page.screenshot({path: 'example.png'});
    const list = await page.evaluate(()=>{
      var arr =[]
      $('.shadow-cover img').each(function (index,x) {
        arr.push({src:$(x).attr('src'),title:$(x).attr('alt')})
      })
      return arr
    })
    list.forEach(async function (x,i,a) {
     const b=await new book({
       bookid:i,
       bookname: x.title,
       inventory :999,
       describe:String,
       price:999,
       star:111,
       author:'未知',
       preview:x.src
     })
     await  b.save()
     await  console.log('保存'+i+'成功')
   })
    await browser.close();
    return list
}


module.exports=crawler
