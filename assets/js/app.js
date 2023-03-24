console.log("hellllllllllllo js");
let cl=console.log;

let users = [
    {
      userId: 1,
      it: 2,
      title: "who is being",
      body: "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of the pleasure; nor will there be any trouble to reject them; we shall not be open to them; we shall not be able to do so, but there is nothing."
    },
  ]

  let usersinfo=document.getElementById("usersinfo");
  let result = `<div class="col-mb-4 bg-secondary">`;
  users.forEach(function(user,i){
    result += `
               <div class="card-header fs-4 text-uppercase text-white">${user.title}</div>
               <div class="card-body bg-light">${user.body}</div>
               <div class="card-footer text-white">userId: ${user.userId}, it: ${user.it}</div>
               `
    

  })

  result += '</div>';
  
  usersinfo.innerHTML=result;

   let users1 =[
    {
        userId: 1,
        it: 3,
        title: "she repels troubles as if she were training, whoever she is",
        body: "and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared"
      }
   ]  
   
   let userinfo = document.getElementById("userinfo");
   let result1 = `<div class="col-mb-4 bg-secondary">`;
   users1.forEach(function(use,i){
                    result1 += `
                    <div class="card-header fs-4 text-uppercase text-white">${use.title}</div>
                    <div class="card-body bg-light">${use.body}</div>
                    <div class="card-footer text-white">userId: ${use.userId}, it: ${use.it}</div>
        
                    `
   })
   result1 += '</div>';
   userinfo.innerHTML=result1;

   

   let users2 = [
     {
    userId: 1,
    it: 4,
    title: "and he is blinded",
    body: "by rejecting any and often to gain pleasure\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things"
  }
]
let user=document.getElementById("user");
  let result2 = `<div class="col-mb-4 bg-secondary">`;
  users2.forEach(function(us,i){
    result2 += `
               <div class="card-header fs-4 text-uppercase text-white">${us.title}</div>
               <div class="card-body bg-light">${us.body}</div>
               <div class="card-footer text-white">userId: ${us.userId}, it: ${us.it}</div>
               `
    

  })

  result2 += '</div>';
  
  user.innerHTML=result2;


  let users3=[
    {
      userId: 1,
      it: 5,
      title: "they don't know what they hate",
      body: "Let him seek forgiveness for repudiation, but there are other things, or let him flee, but it is, but there is pleasure, we can all be pleasures; there is no pain, nor is it held"
    }
  ]

  let infouser=document.getElementById("infouser");
  let result3 = `<div class="col-mb-4 bg-secondary">`;
  users3.forEach(function(u,i){
    result3 += `
               <div class="card-header fs-4 text-uppercase text-white">${u.title}</div>
               <div class="card-body bg-light">${u.body}</div>
               <div class="card-footer text-white">userId: ${u.userId}, it: ${u.it}</div>
               `
  })

  result3 += '</div>';
  
  infouser.innerHTML=result3;