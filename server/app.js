import bcrypt from "bcrypt";


const password = "Riyaz@000";



bcrypt.hash(password, 10, (err, hash) => {
  
  if (err) throw err;
  console.log("Hashed Password:", hash);


  bcrypt.compare(password, hash, (err, result) => {
    console.log("Password Match:", result);
  });
});