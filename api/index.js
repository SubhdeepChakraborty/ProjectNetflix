const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./routes/Auth");
const userRouter = require("./routes/User");
const movieRouter = require("./routes/Movie");
const listRouter = require("./routes/List");

dotenv.config();
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Succesful"))
  .catch((err) => console.log(err));
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/lists", listRouter);

app.listen(8000, () => {
  console.log("Backend Server is running....");
});

// // TODO: Register

// app.post("/register", async function (req, res) {
//   const newUser = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: CryptoJS.AES.encrypt(
//       req.body.password,
//       process.env.SECRET_KEY
//     ).toString(),
//   });
//   console.log(newUser);
//   try {
//     const user = await newUser.save();
//     res.status(201).json(user);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //TODO Finished Here..... UserSchema

// //TODO Login.. for finding the user

// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
//     const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
//     // if (!user || originalPassword !== req.body.password) {
//     //   res.status(401).json("Wrong password or username!");
//     // } else {
//     const accessToken = jwt.sign(
//       { id: user._id, isAdmin: user.isAdmin },
//       process.env.SECRET_KEY,
//       { expiresIn: "5d" }
//     );
//     const { password, ...info } = user._doc;

//     res.status(200).json({ ...info, accessToken });
//     // }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // TODO Login thing finished

// //TODO fun to verify the token.. the acesstoken we created

// function verify(req, res, next) {
//   const authHeader = req.headers.token;
//   if (authHeader) {
//     const token = authHeader.split(" ")[1];

//     jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//       if (err) res.status(403).json("Token is not valid!");
//       req.user = user;
//       next();
//     });
//   } else {
//     return res.status(401).json("You are not authenticated!");
//   }
// }

// //Update...... //
// app.put("/:id", verify, async (req, res) => {
//   if (req.user.id === req.params.id || req.user.isAdmin) {
//     if (req.body.password) {
//       req.body.password = CryptoJS.AES.encrypt(
//         req.body.password,
//         process.env.SECRET_KEY
//       ).toString();
//     }

//     try {
//       const updatedUser = await User.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: req.body,
//         },
//         { new: true }
//       );
//       res.status(200).json(updatedUser);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("You can update only your account!");
//   }
// });

// //Update finished

// //Delete...

// app.delete("/:id", verify, async (req, res) => {
//   if (req.user.id === req.params.id || req.user.isAdmin) {
//     try {
//       await User.findByIdAndDelete(req.params.id);
//       res.status(200).json("User have been deleted");
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("You can delete only your account!");
//   }
// });

// //Delete finished

// //Get only one  Method.....

// app.get("/find/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     const { password, ...info } = user._doc;
//     res.status(200).json(info);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //Get only one finished

// app.get("/", verify, async (req, res) => {
//   const query = req.query.new;
//   if (req.user.isAdmin) {
//     try {
//       const users = query ? await User.find().limit(10) : await User.find();
//       res.status(200).json(users);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("You are not allow to see all the users!");
//   }
// });

// //get All method ....

// app.get("/users/limit", verify, async (req, res) => {
//   const query = req.query.new;
//   if (req.user.isAdmin) {
//     try {
//       const users = query
//         ? await User.find().sort({ _id: -1 }).limit(5)
//         : await User.find();
//       res.status(200).json(users);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("You are not allowed to see all users!");
//   }
// });

// //get All method finished...

// //useRStats Find

// app.get("/user/stats", async (req, res) => {
//   const today = new Date();
//   const latYear = today.setFullYear(today.setFullYear() - 1);

//   try {
//     const data = await User.aggregate([
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // TODO: This is for user only ........ ended here

// // TODO: MusicSchema starts from here...

// //** Create Method

// app.post("/movie", verify, async (req, res) => {
//   if (req.user.isAdmin) {
//     const newMovie = new Movie(req.body);
//     try {
//       const savedMovie = await newMovie.save();
//       res.status(201).json(savedMovie);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("You are not allowed !");
//   }
// });

// //** Update Movie  */

// app.put("/:id", verify, async (req, res) => {
//   if (req.user.isAdmin) {
//     try {
//       const updatedMovie = await Movie.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: req.body,
//         },
//         {
//           new: true,
//         }
//       );
//       res.status(201).json(updatedMovie);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("You are not allowed!");
//   }
// });

// // ** Delete

// app.delete("/:id", verify, async (req, res) => {
//   if (req.user.isAdmin) {
//     try {
//       await Movie.findByIdAndDelete(req.params.id);
//       res.status(200).json("The movie have been deleted");
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("You are not allowed!");
//   }
// });

// //* GET */

// app.get("/:id", verify, async (req, res) => {
//   try {
//     const movie = await Movie.findById(req.params.id);
//     res.status(200).json(movie);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //* GET RANDOM

// app.get("/random/movie", verify, async (req, res) => {
//   const type = req.query.type;
//   let movie;
//   try {
//     if (type === "series") {
//       movie = await Movie.aggregate([
//         { $match: { isSeries: true } },
//         { $sample: { size: 1 } },
//       ]);
//     } else {
//       movie = await Movie.aggregate([
//         { $match: { isSeries: false } },
//         { $sample: { size: 1 } },
//       ]);
//     }
//     res.status(200).json(movie);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //* GET ALL

// app.get("/movie/all", verify, async (req, res) => {
//   if (req.user.isAdmin) {
//     try {
//       const movies = await Movie.find();
//       res.status(200).json(movies.reverse());
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("You are not allowed!");
//   }
// });

// // TODO: Movie Finished

// //TODO: LIST HERE

// //*CREATE

// app.post("/", verify, async (req, res) => {
//   if (req.user.isAdmin) {
//     const newList = new List(req.body);
//     try {
//       const savedList = await newList.save();
//       res.status(201).json(savedList);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("You are not allowed!");
//   }
// });

// //*DELETE

// app.delete("/:id", verify, async (req, res) => {
//   if (req.user.isAdmin) {
//     try {
//       await List.findByIdAndDelete(req.params.id);
//       res.status(201).json("The list has been delete...");
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("You are not allowed!");
//   }
// });

// //*GET

// app.get("/all/movie", verify, async (req, res) => {
//   const typeQuery = req.query.type;
//   const genreQuery = req.query.genre;
//   let list = [];
//   try {
//     if (typeQuery) {
//       if (genreQuery) {
//         list = await List.aggregate([
//           { $sample: { size: 10 } },
//           { $match: { type: typeQuery, genre: genreQuery } },
//         ]);
//       } else {
//         list = await List.aggregate([
//           { $sample: { size: 10 } },
//           { $match: { type: typeQuery } },
//         ]);
//       }
//     } else {
//       list = await List.aggregate([{ $sample: { size: 10 } }]);
//     }
//     res.status(200).json(list);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //TODO: LIST FINISHED
