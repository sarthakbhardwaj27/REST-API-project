const Express = require('express');
const fs = require('fs');

const app = new Express();
const PORT = 8000;

let users = require('./MOCK_DATA.json');

app.use(Express.urlencoded({ extended: false}))

// home route
app.get('/',(req,res)=>{
  res.send("Home page");
})

//get all users
app.get('/api/getusers',(req,res)=>{
  // res.send(users)
  return res.json(users);
})

//get user with id
app.get('/api/getusers/:id',(req,res)=>{
  let id = Number(req.params.id);
  let user = users.find((user) => user.id === id)
  console.log(user)
  res.send(user);
})

// add a user to users
app.post('/api/adduser',(req,res)=>{
  const body = req.body;
  users.push({...body , id: users.length+1});
  fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    if(err){
      console.log(err)
    }
  })
  return res.json({status: "success", id: users.length})
})

app.patch('/api/users/:id',(req,res)=>{
  const id = Number(req.params.id);
  const body = req.body
  users = users.map((user)=>{
    if(user.id === id){
      user = {...user,...body}
      console.log(user)
    }
    return user;
  })
  
  fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    if(err){
      console.log(err)
    }
    res.json({status: "success", message: `${id} is updated`})
  })
})

app.delete('/api/users/:id',(req,res)=>{
  let id = Number(req.params.id);
  users = users.filter((user) => user.id!== id)
  fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    if(err){
      console.log(err)
    }
    res.json({status: "success", message: `${id} is deleted`})
  })


})

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
})