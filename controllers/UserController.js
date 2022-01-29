const req = require('express/lib/request');
const res = require('express/lib/response');
const async = require('hbs/lib/async')
const User = require('../models/user')
const allUsers = async (req,res)=>{
    const users = await User.findAll({
        raw:true
    }).catch(e=>console.log(e))
    await  res.render('index', {users});
}

const userForm = async (req,res)=>{
    await  res.render('create');
}
const saveUser = async (req,res)=>{
    const {name, email, phone, department} = await req.body;
    const user = await User.create({
        name, email, phone,department 
    }).catch(e => console.log(e));
 
    res.redirect('/')
    
}

const editUser = async (req, res)=>{
    const {id} = await req.params;
    const user = await User.findOne({
        where:{
            id:id
        },
        raw:true
    }).catch(e=>console.log(e))
    res.render('edit', {user});
}

const updateUser = async (req, res)=>{
    const {id} = req.params;
    const data = req.body
    const selector = {
        where:{
            id:id
        }}
        await User.update(data, selector)
        .catch(e=>console.log(e))
    
        res.redirect('/')
}

const viewUser = async (req, res)=>{
    const {id} = req.params;
    const user = await User.findOne({
        where:{
            id:id
        },
        raw:true
    }).catch(e=>console.log(e))
    res.render('view', {user});
}

const deleteUser = async (req, res)=>{
    const {id} = req.params;
    const user = await User.destroy({
        where:{
            id:id
        },
        raw:true
    }).catch(e=>console.log(e))
  
    res.redirect('/')
}

module.exports ={
    allUsers,
    userForm,
    saveUser,
    editUser,
    updateUser,
    viewUser,
    deleteUser
}