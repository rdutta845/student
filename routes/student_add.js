var express = require('express');
var router = express.Router();



/////models define//////////////////
var Student = require("../models/student");




/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('add');
});
router.post('/add',function(req,res){ 
	var data =req.body;
	console.log(data);
	var student = new Student(data);

	student.save(function(err,result){
		console.log(err);
		if(err){
			return res.json({error : true , reason : err});

		}
        console.log(result);
		return res.json({error : false});

	});
		
})

router.get('/list/:regNo?', function(req, res, next) {
  

  Student.find({}).exec(function(err,students){
  	if(err){
  		return err;

  	}
  	 //res.json(students);
  	res.render('list',{
  		students : students
  	}); 

  })
router.get('/edit/:studentid', function(req, res, next) {
  Student.findOne({_id : req.params.studentid }).exec(function(err,student){
  return res.render("edit",
  	{student : student });	

  });
});

router.put('/:studentid', function(req, res, next) {
  
  	console.log(req.body.data);
  	console.log(req.params.studentid);
	Student.update({rollNo : req.body.data }).exec(function(err,student){
	
		return res.json(student);		
	});
  
});

router.delete('/:studentid', function(req, res, next) {
	//console.log("inside delete");
	
	//console.log(req.params.studentid);
	Student.remove({_id : req.params.studentid }).exec(function(err,student){
	
		return res.json(student);		
	});
  
});

  
  	
});
module.exports = router;
