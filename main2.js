const express = require('express')
const router = express.Router()
const mysql = require('mysql')
// const app = express('express')
const con = require("./keyDb/db")
const db = mysql.createConnection(con)

router.get('/', (req, res)=>{
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main/mainPage.css">
    <title>Document</title>
  </head>
  <body>
    <div id="root">
      <header>
        <a class="logo" href="/">Way Home</a>
        <div class="sign">
            <a href="/login" class="signIn"><div>로그인</div></a>
            <a href="/signup" class="sign-up"><div>회원가입</div></a>
        </div>
    </header>
      <main>
        <div id="pageSector">
          <a href="/board2" id="selectPage">
            <img src="pngegg (3).png" alt="" id="mainImg">
            <div id="abandonment">유기 동물</div>
          </a>
          <a href="/board" id="selectPage">
            <img src="pngegg (3).png" alt="" id="mainImg">
            <div id="missing">실종 동물</div>
          </a>
        </div>
        <div id="introduce">
          저희 사이트는 아프고 안타까운 동물들을 보호하고<br>
          새로운 인연을 맺어주기 위해 만들어졌으며<br>
          잃어버린 소중한 반려동물을 찾기위해 만들어졌습니다.<br>
        </div>
      </main>
    </div>
  </body>
  </html>`)
})
module.exports = router