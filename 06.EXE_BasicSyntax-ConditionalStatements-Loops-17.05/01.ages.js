function ages(age) {
   //Determines, whether based on the given age, a person is: baby, child, teenager, adult, elder. The input comes as single number parameter.
   let person = "";
   /* age = age + 1;   //20 = 201
   age = Number(age) + 1;   //20 = 21 */

   if (age === 0 || age <= 2){
       person = "baby";
   } else if (age === 3 || age <= 13) {
       person = "child";
   } else if (age === 14 || age <= 19) {
       person = "teenager";
   } else if (age === 20 || age <= 65) {
       person = "adult";
   } else if (age >= 66) {
       person = "elder";
   }

   console.log(person);
}

ages([20]);   //adult
ages([1]);   //baby
ages([100]);   //elder
