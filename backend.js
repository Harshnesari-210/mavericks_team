// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser"; // For cookies
// import database from "./config/db.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import Auth from "./modules/userAuth.js";

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(cookieParser()); // Middleware to parse cookies

// // Signup Route
// // In your authRoutes.js
// app.post("/signup", async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;
//   try {
//     // Check if user already exists
//     const existingUser = await Auth.findOne({ email });
//     if (existingUser) {
//       return res.status(400).send("Email already in use");
//     }

//     // Hash the password
//     const passwordHash = await bcrypt.hash(password, 10);

//     // Create new user
//     const user = new Auth({
//       firstName,
//       lastName,
//       email,
//       password: passwordHash,
//     });

//     // Save the user to the database
//     await user.save();
//     res.send("User signup successfully!");
//   } catch (error) {
//     console.error("Error during signup:", error); // Log the error
//     res.status(500).send("Signup failed");
//   }
// });

// // Login Route
// app.post("/login", async (req, res) => { // Change /login to /login
//   const { email, password } = req.body;

//   try {
//     const user = await Auth.findOne({ email });
//     if (!user) return res.status(404).send("User not registered!");

//     const result = await bcrypt.compare(password, user.password);
//     if (result) {
//       const token = jwt.sign({ _id: user._id }, "hackathon");
//       res.cookie("token", token, { httpOnly: true }); // Secure cookie
//       res.send("Login successfully!");
//     } else {
//       res.status(401).send("Wrong password");
//     }
//   } catch (error) {
//     res.status(500).send("Login failed");
//   }
// });

// // Middleware to protect routes
// const authenticateToken = (req, res, next) => {
//   const token = req.cookies.token; // Getting the token from cookies
//   if (!token) return res.status(401).send("Access Denied");

//   jwt.verify(token, "hackathon", (err, user) => {
//     if (err) return res.status(403).send("Invalid Token");
//     req.user = user; // Attaching user data (from token) to request
//     next();
//   });
// };

// // Get User Profile
// app.post("/profileUpdate", authenticateToken, async (req, res) => {
//   try {
//     const { gender, dob, phone } = req.body;
//       const updatedProfile = await Auth.findByIdAndUpdate(
//         req.user._id, // Only update the logged-in user's profile
//         { gender, dob, phone, profilePic },
//         { new: true }
//       );
//       res.json(updatedProfile);

//   } catch (error) {
//     res.status(500).send("Error fetching profile");
//   }
// });

// // Update User Profile
// app.put("/profile", authenticateToken, async (req, res) => {
//   try {
//     const { gender, dob, phone, profilePic } = req.body;
//     const updatedProfile = await Auth.findByIdAndUpdate(
//       req.user._id, // Only update the logged-in user's profile
//       { gender, dob, phone, profilePic },
//       { new: true }
//     );
//     res.json(updatedProfile);
//   } catch (error) {
//     res.status(500).send("Error updating profile");
//   }
// });

// database().then(() => {
//   console.log("DB connected");
//   app.listen(3000, () => console.log("Listening at port 3000"));
// }).catch(() => {
//   console.log("DB connection failed");
// });

// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser"; // For cookies
// import database from "./src/config/db.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import Auth from "./src/modules/userAuth.js";

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(cookieParser()); // Middleware to parse cookies

// app.post("/signup", async (req, res) => {
//   const { firstName, lastName, email, password, role } = req.body; // Include role
//   try {
//     // Check if user already exists
//     const existingUser = await Auth.findOne({ email });
//     if (existingUser) return res.status(400).send("Email already in use");

//     // Hash the password
//     const passwordHash = await bcrypt.hash(password, 10);

//     // Create new user
//     const user = new Auth({
//       firstName,
//       lastName,
//       email,
//       password: passwordHash,
//       role, // Assign role
//     });

//     // Save user
//     await user.save();
//     res.send("User signup successfully!");
//   } catch (error) {
//     console.error("Error during signup:", error);
//     res.status(500).send("Signup failed");
//   }
// });

// // Login Route
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await Auth.findOne({ email });
//     if (!user) return res.status(404).send("User not registered!");

//     const result = await bcrypt.compare(password, user.password);
//     if (result) {
//       const token = jwt.sign({ _id: user._id }, "hackathon");
//       res.cookie("token", token, { httpOnly: true }); // Secure cookie
//       res.send("Login successfully!");
//     } else {
//       res.status(401).send("Wrong password");
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Login failed");
//   }
// });

// // Middleware to protect routes
// const authenticateToken = (req, res, next) => {
//   const token = req.cookies.token; // Getting the token from cookies
//   if (!token) return res.status(401).send("Access Denied");

//   jwt.verify(token, "hackathon", (err, user) => {
//     if (err) return res.status(403).send("Invalid Token");
//     req.user = user; // Attaching user data (from token) to request
//     next();
//   });
// };

// // Get User Profile (can stay as is, for viewing profile)
// app.get("/profile", authenticateToken, async (req, res) => {
//   try {
//     const user = await Auth.findById(req.user._id).select("-password"); // Use user._id from token
//     res.json(user); // Send the profile data of the logged-in user
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Error fetching profile");
//   }
// });

// // Update User Profile (new route for updating profile)
// app.put("/update-profile", authenticateToken, async (req, res) => {
//   try {
//     const { gender, dob, phone, profilePic } = req.body;

//     // Validation checks if needed (optional)
//     if (!gender || !dob || !phone) {
//       return res.status(400).send("Missing required fields");
//     }

//     const updatedProfile = await Auth.findByIdAndUpdate(
//       req.user._id, // Only update the logged-in user's profile
//       { gender, dob, phone, profilePic },
//       { new: true } // Return the updated user
//     );

//     res.json(updatedProfile);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Error updating profile");
//   }
// });

// database()
//   .then(() => {
//     console.log("DB connected");
//     app.listen(3000, () => console.log("Listening at port 3000"));
//   })
//   .catch(() => {
//     console.log("DB connection failed");
//   });

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; // For cookies
import database from "./src/config/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Auth from "./src/modules/userAuth.js";
import path from "path";
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser()); // Middleware to parse cookies

// Root route to respond to GET requests to "/"
// app.get("/", (req, res) => {
//   res.send();
// });

// Signup Route
app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
  try {
    const existingUser = await Auth.findOne({ email });
    if (existingUser) return res.status(400).send("Email already in use");

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new Auth({
      firstName,
      lastName,
      email,
      password: passwordHash,
      role, // Assign role
    });

    console.log(user);

    await user.save(); // Save the user to the database
    res.send("User signup successfully!");
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send("Signup failed");
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Auth.findOne({ email });
    if (!user) return res.status(404).send("User not registered!");

    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const token = jwt.sign({ _id: user._id }, "hackathon");
      res.cookie("token", token, { httpOnly: true }); // Secure cookie
      res.send("Login successfully!");
    } else {
      res.status(401).send("Wrong password");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Login failed");
  }
});

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const token = req.cookies.token; // Getting the token from cookies
  if (!token) return res.status(401).send("Access Denied");

  jwt.verify(token, "hackathon", (err, user) => {
    if (err) return res.status(403).send("Invalid Token");
    req.user = user; // Attaching user data (from token) to request
    next();
  });
};

// Get User Profile
app.get("/profile", authenticateToken, async (req, res) => {
  try {
    const user = await Auth.findById(req.user._id).select("-password"); // Use user._id from token
    res.json(user); // Send the profile data of the logged-in user
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching profile");
  }
});

// Update User Profile
app.put("/update-profile", authenticateToken, async (req, res) => {
  try {
    const { gender, dob, phone, profilePic } = req.body;

    if (!gender || !dob || !phone) {
      return res.status(400).send("Missing required fields");
    }

    const updatedProfile = await Auth.findByIdAndUpdate(
      req.user._id, // Only update the logged-in user's profile
      { gender, dob, phone, profilePic },
      { new: true } // Return the updated user
    );

    res.json(updatedProfile);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating profile");
  }
});

const __dirname = path.resolve(); // Resolving the current directory

// Serve static files from the React app's `build` folder
app.use(express.static(path.join(__dirname, "dist")));

// Catch-all route to handle React routing (non-API routes)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Database connection
database()
  .then(() => {
    console.log("DB connected");
    app.listen(3000, () => console.log("Listening at port 3000"));
  })
  .catch(() => {
    console.log("DB connection failed");
  });
