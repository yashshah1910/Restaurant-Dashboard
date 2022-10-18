const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Map = require('../models/Map');


router.post('/', (req, res)=>{
    console.log(req.body);
    const map = Map(req.body);
    map.save();
    res.send(req.body);
})

router.get('/fetchallmaps',async(req,res)=>{
    const maps = await Map.find({userName: "user1"});
    res.json(maps);
})

router.put('/updatemap/:id', async(req,res)=>{
    const {userName,resName,bookmark} = req.body;
    const newMap = {};
    if(userName){newMap.userName=userName};
    if(resName){newMap.resName=resName};
    if(bookmark){newMap.bookmark=bookmark};
    let maps=await Map.findById(req.params.id);
    maps = await Map.findByIdAndUpdate(req.params.id, {$set: newMap}, {new:true})
    res.json({maps});
})

router.delete('/deletemap/:id',async(req,res)=>{
    const maps = await Map.findByIdAndDelete(req.params.id);
    res.json({"success":"Map has been deleted", maps:maps});
})

module.exports = router