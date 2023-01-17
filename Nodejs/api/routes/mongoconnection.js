let mongoClient = require('mongodb').MongoClient;

let dbUrl = 'mongodb://localhost:27017/studentsDB'

// mongoClient.connect(dbUrl,(error,databaseAck) =>{
//     if(error) throw error;
//     console.log("Database has been created");
//     databaseAck.close();
// })

//create a collection
mongoClient.connect(dbUrl, (error, databaseAck) => {
    if (error) throw error;
    let dbObject = databaseAck.db("studentsDB");
    //creating collection
    /* dbObject.createCollection("students",(err,responseFromDB) => {
         if(err) throw err;
         console.log("Collection has been created--",responseFromDB)
         databaseAck.close();
     })  */
    // let student = {studentId:6,studentName:"Krishna",studentMarks:500};
    // dbObject.collection('students').insertOne(student,(error,responseFromDB)=>{
    //    if(error) throw error;
    //    console.log("document is inserted");
    //    databaseAck.close();
    // })
   /* let student = [{ studentId: 2, studentName: "Rama", studentMarks: 350 },
                   { studentId: 3, studentName: "Kiran", studentMarks: 450 },
                   { studentId: 4, studentName: "Kushal", studentMarks: 567 },
                   { studentId: 5, studentName: "Radha", studentMarks: 234 },
                   ];
    dbObject.collection('students').insertMany(student, (error, responseFromDB) => {
        if (error) throw error;
        console.log("document is inserted ",responseFromDB.insertedCount);
        databaseAck.close();
    })*/
    // find One() method
    // dbObject.collection('students').findOne({studentName:"Krishna"},(error,responseFromDB)=>{
    //    if(error) throw error;
    //    console.log(responseFromDB);
    // })
    // find methos
    // dbObject.collection('students').find({studentName:"Krishna"}).toArray((error,responseFromDB)=>{
    //     if(error) throw error;
    //     console.log(responseFromDB);
    //  })
    // dbObject.collection('students').find().sort({studentMarks:1}).limit(3).toArray((error,responseFromDB)=>{
    //     if(error) throw error;
    //     console.log(responseFromDB);
    //  })

    //Update method
    // let condition = {"_id": 1}
    // let newValues = {$set : {"studentName":"Ajay","studentMarks":600}}
    //  dbObject.collection('students').updateOne(condition,newValues,(error,responseFromDB)=>{
    //    if(error) throw error;
    //    console.log(responseFromDB.modifiedCount," documents are modified");
    //    databaseAck.close();
    //  })

    //  dbObject.collection('students').updateMany({},{$set: {studentName:"Ajay Kumar"}},(error,responseFromDB)=>{
    //     if(error) throw error;
    //     console.log(responseFromDB.modifiedCount," documents are modified");
    //     databaseAck.close();
    //   })

    dbObject.collection('students').deleteOne({"studentMarks":450},(error,responseFromDB)=>{
        if(error) throw error;
        console.log(responseFromDB.deletedCount," documents are deleted");
        databaseAck.close();
      })
})
