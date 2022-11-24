class Course{
    startCourse():void{
        console.log("Course has started");
    }
}
class Trainer{
    startTraining():void{
        let course = new Course();
        course.startCourse();
        console.log("training has started");
    }
}
let training = new Trainer();
training.startTraining();