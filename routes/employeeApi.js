const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/empDB');
const Emp = require('../models/employee')

router.get('/', (req, res) => {
    Emp.find().then((data)=>{res.send(data)})
    })

 router.get('/:id', (req, res) => {
        Emp.findOne({_id:req.params.id}).then((data)=>{res.send(data)})
        })
      

 router.post('/',(req, res) => {
    const b=req.body;
            const data  = new Emp({ 
              firstName:b.firstName,lastName:b.lastName,emailId:b.emailId,
              gender:b.gender,city:b.city,state:b.state,phoneNo:b.phoneNo,address:b.address,doj:b.doj,
              dob:b.dob,salary:b.salary,inTime:b.inTime,outTime:b.outTime,empType:b.empType,designation:b.designation,
              dept:b.dept
            });
            data.save().then(() => res.send('Record Save'));
        })

 router.delete('/:id', (req, res) => {
            let id=req.params.id;
            Emp.deleteOne({_id:id}).then((data)=>{res.send(data)})
            })
   
 router.patch('/:id', (req, res) => {
                let id=req.params.id;
                let b=req.body;
                Emp.updateOne({_id:id},{ firstName:b.firstName,lastName:b.lastName,emailId:b.emailId,
                gender:b.gender,city:b.city,state:b.state,phoneNo:b.phoneNo,address:b.address,doj:b.doj,
                  dob:b.dob,salary:b.salary,inTime:b.inTime,outTime:b.outTime,empType:b.empType,designation:b.designation,
                  dept:b.dept
               
                 }).then((data)=>{res.send(data)})

                })

                module.exports=router;
              