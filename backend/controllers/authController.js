
// controllers/authController.js
/*import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Register function
export const register = async (req, res) => {
  try {
    const { username, email, password, mobile, dob, gender } = req.body;

    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = new User({ username, email, password, mobile, dob, gender });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Register Error:', error); // Added logging
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login function
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login Error:', error); // Added logging
    res.status(500).json({ message: 'Internal server error' });
  }
};
*/



/*without token import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Register function
export const register = async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Log request body for debugging

    const { username, email, password, mobile, dob, gender } = req.body;

    if (!username || !email || !password || !mobile || !dob || !gender) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = new User({ username, email, password, mobile, dob, gender });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login function
export const login = async (req, res) => {
  try {
    console.log('Login Request Body:', req.body); // Log request body for debugging

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
without token */

// src/controllers/authController.js
/*import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Register function
export const register = async (req, res) => {
  try {
    const { username, email, password, mobile, dob, gender } = req.body;

    if (!username || !email || !password || !mobile || !dob || !gender) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = new User({ username, email, password, mobile, dob, gender });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login function
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};*/

/*import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Environment variables (make sure these are set in your .env file)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Replace with your actual secret
const JWT_EXPIRES_IN = '1h'; // Set the token expiration as needed

// Register a new user
export const register = async (req, res) => {
  try {
    const { username, email, password, mobile, dob, gender } = req.body;

    // Validate input
    if (!username || !email || !password || !mobile || !dob || !gender) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).json({ message: 'Username is already taken' });
      }
      if (existingUser.email === email) {
        return res.status(400).json({ message: 'Email is already registered' });
      }
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ username, email, password: hashedPassword, mobile, dob, gender });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Register Error:', error);
    if (error.code === 11000) { // MongoDB duplicate key error code
      res.status(400).json({ message: 'Username or email already exists' });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

// Login a user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Send the token as an HTTP-only cookie
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 3600000 });
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Additional utility function if needed to verify token
export const verifyToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
};
already in use */
/*
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Environment variables (make sure these are set in your .env file)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Replace with your actual secret
const JWT_EXPIRES_IN = '1h'; // Set the token expiration as needed

// Register a new user
export const register = async (req, res) => {
  try {
    const { username, email, password, mobile, dob, gender } = req.body;

    // Validate input
    if (!username || !email || !password || !mobile || !dob || !gender) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      console.log(`Register Error: Existing user details - Username: ${existingUser.username}, Email: ${existingUser.email}, Mobile: ${existingUser.mobile}, DOB: ${existingUser.dob}`);

      if (existingUser.username === username) {
        return res.status(400).json({ message: 'Username is already taken' });
      }
      if (existingUser.email === email) {
        return res.status(400).json({ message: 'Email is already registered' });
      }
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ username, email, password: hashedPassword, mobile, dob, gender });
    await user.save();

    console.log(`User registered successfully - Username: ${username}, Email: ${email}, Mobile: ${mobile}, DOB: ${dob}`);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Register Error:', error);
    if (error.code === 11000) { // MongoDB duplicate key error code
      res.status(400).json({ message: 'Username or email already exists' });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

// Login a user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      console.log('Login Error: User not found for email:', email);
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log('Login Error: Invalid credentials for email:', email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Send the token as an HTTP-only cookie
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 3600000 });
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Additional utility function if needed to verify token
export const verifyToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
};
*/
// src/controllers/authController.js
/*goodimport User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Environment variables (make sure these are set in your .env file)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Replace with your actual secret
const JWT_EXPIRES_IN = '1h'; // Set the token expiration as needed

// Register a new user
export const register = async (req, res) => {
    try {
        const { username, email, password, mobile, dob, gender } = req.body;

        // Validate input
        if (!username || !email || !password || !mobile || !dob || !gender) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            console.log(`Register Error: Existing user details - Username: ${existingUser.username}, Email: ${existingUser.email}, Mobile: ${existingUser.mobile}, DOB: ${existingUser.dob}`);

            if (existingUser.username === username) {
                return res.status(400).json({ message: 'Username is already taken' });
            }
            if (existingUser.email === email) {
                return res.status(400).json({ message: 'Email is already registered' });
            }
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({ username, email, password: hashedPassword, mobile, dob, gender });
        await user.save();

        console.log(`User registered successfully - Username: ${username}, Email: ${email}, Mobile: ${mobile}, DOB: ${dob}`);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Register Error:', error);
        if (error.code === 11000) { // MongoDB duplicate key error code
            res.status(400).json({ message: 'Username or email already exists' });
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

// Login a user
/*export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            console.log('Login Error: User not found for email:', email);
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.log('Login Error: Invalid credentials for email:', email);
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username, email: user.email },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        // Send the token as an HTTP-only cookie
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 3600000 });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Additional utility function if needed to verify token
export const verifyToken = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = decoded;
        next();
    });
};
*/




// Login a user
/*goodexport const login = async (req, res) => {
  try {
      const { email, password } = req.body;

      // Validate input
      if (!email || !password) {
          console.log('Login Error: Missing email or password');
          return res.status(400).json({ message: 'Email and password are required' });
      }

      console.log('Login Attempt:', { email, password });

      // Find user by email
      const user = await User.findOne({ email });

      if (!user) {
          console.log('Login Error: User not found for email:', email);
          return res.status(404).json({ message: 'User not found' });
      }

      // Compare the provided password with the hashed password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
          console.log('Login Error: Password does not match for email:', email);
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Generate JWT token
      const token = jwt.sign(
          { id: user._id, username: user.username, email: user.email },
          JWT_SECRET,
          { expiresIn: JWT_EXPIRES_IN }
      );

      console.log('Login Successful: User logged in with email:', email);

      // Send the token as an HTTP-only cookie
      res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 3600000 });
      res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};
*/

/*import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Environment variables (make sure these are set in your .env file)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Replace with your actual secret
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h'; // Set the token expiration as needed

// Register a new user
export const register = async (req, res) => {
    try {
        const { username, email, password, mobile, dob, gender } = req.body;

        // Validate input
        if (!username || !email || !password || !mobile || !dob || !gender) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            console.log(`Register Error: Existing user details - Username: ${existingUser.username}, Email: ${existingUser.email}, Mobile: ${existingUser.mobile}, DOB: ${existingUser.dob}`);

            if (existingUser.username === username) {
                return res.status(400).json({ message: 'Username is already taken' });
            }
            if (existingUser.email === email) {
                return res.status(400).json({ message: 'Email is already registered' });
            }
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({ username, email, password: hashedPassword, mobile, dob, gender });
        await user.save();

        console.log(`User registered successfully - Username: ${username}, Email: ${email}, Mobile: ${mobile}, DOB: ${dob}`);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Register Error:', error);
        if (error.code === 11000) { // MongoDB duplicate key error code
            res.status(400).json({ message: 'Username or email already exists' });
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

// Login a user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            console.log('Login Error: Missing email or password');
            return res.status(400).json({ message: 'Email and password are required' });
        }

        console.log('Login Attempt:', { email });

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            console.log('Login Error: User not found for email:', email);
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.log('Login Error: Password does not match for email:', email);
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username, email: user.email },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        console.log('Login Successful: User logged in with email:', email);

        // Send the token as an HTTP-only cookie
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 3600000 });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Verify JWT token middleware
export const verifyToken = (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({ message: 'Access denied' });
        }

        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }
            req.user = decoded;
            next();
        });
    } catch (error) {
        console.error('Token Verification Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};*/


/*import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

// Register a new user
export const register = async (req, res) => {
    try {
        const { username, email, password, mobile, dob, gender } = req.body;

        // Validate input
        if (!username || !email || !password || !mobile || !dob || !gender) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            return res.status(400).json({ message: 'Username or email is already registered' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({ username, email, password: hashedPassword, mobile, dob, gender });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Register Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const login = async (req, res) => {
  try {
      const { email, password } = req.body;

      // Validate input
      if (!email || !password) {
          return res.status(400).json({ message: 'Email and password are required' });
      }

      console.log('Login Request:', { email, password });

      // Find user by email
      const user = await User.findOne({ email });

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      console.log('User Found:', user);

      // Compare the provided password with the hashed password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      console.log('Password Matched');

      // Generate JWT token
      const token = jwt.sign(
          { id: user._id, username: user.username, email: user.email },
          JWT_SECRET,
          { expiresIn: JWT_EXPIRES_IN }
      );

      // Send the token as an HTTP-only cookie
      res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 3600000 });
      res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};*/

/*normalimport User from '../models/User.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

// Register a new user
export const register = async (req, res) => {
    try {
        const { username, email, password, mobile, dob, gender } = req.body;

        // Validate input
        if (!username || !email || !password || !mobile || !dob || !gender) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            return res.status(400).json({ message: 'Username or email is already registered' });
        }

        // Create a new user
        const user = new User({ username, email, password, mobile, dob, gender });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Register Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Login a user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        console.log('Login Request:', { email, password });

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('User Found:', user);

        // Compare the provided password with the stored password
        if (password !== user.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        console.log('Password Matched');

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username, email: user.email },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        // Send the token as an HTTP-only cookie
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 3600000 });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
normal*/



/*token good but not place the order import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

// Register a new user
export const register = async (req, res) => {
    try {
        const { username, email, password, mobile, dob, gender } = req.body;

        // Validate input
        if (!username || !email || !password || !mobile || !dob || !gender) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            return res.status(400).json({ message: 'Username or email is already registered' });
        }

        // Create a new user with plain text password
        const user = new User({ username, email, password, mobile, dob, gender });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Register Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Login a user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the stored password (plain text comparison for now)
        if (password !== user.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username, email: user.email },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        // Send the token and user details in the response
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                username: user.username,
                email: user.email,
            }
        });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
// Logout a user
export const logout = async (req, res) => {
    try {
        // If you're using a token-based system, you might not need to do anything server-side.
        // However, you can perform any necessary cleanup or session invalidation here.
        
        // For example, if you want to invalidate the JWT token, you would need to implement token blacklisting.
        // If you're using sessions, you would destroy the session here.

        // Sending a success response
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Logout Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};token good but not place */


/*import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

// Register a new user
export const register = async (req, res) => {
    try {
        const { username, email, password, mobile, dob, gender } = req.body;

        // Validate input
        if (!username || !email || !password || !mobile || !dob || !gender) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            return res.status(400).json({ message: 'Username or email is already registered' });
        }

        // Create a new user with plain text password
        const user = new User({ username, email, password, mobile, dob, gender });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Register Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Login a user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the stored password (plain text comparison for now)
        if (password !== user.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username, email: user.email },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );
        console.log('Generated Token:', token);
        // Send the token and user details in the response
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                username: user.username,
                email: user.email,
            }
        });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Logout a user
export const logout = async (req, res) => {
    try {
        // If you're using a token-based system, you might not need to do anything server-side.
        // However, you can perform any necessary cleanup or session invalidation here.
        
        // For example, if you want to invalidate the JWT token, you would need to implement token blacklisting.
        // If you're using sessions, you would destroy the session here.

        // Sending a success response
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Logout Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};good*/




/*import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Load secret key from environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

// Register a new user
export const register = async (req, res) => {
    try {
        const { username, email, password, mobile, dob, gender } = req.body;

        // Validate input
        if (!username || !email || !password || !mobile || !dob || !gender) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            return res.status(400).json({ message: 'Username or email is already registered' });
        }

        // Create a new user with plain text password
        const user = new User({ username, email, password, mobile, dob, gender });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Register Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Login a user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the stored password (plain text comparison for now)
        if (password !== user.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username, email: user.email },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        // Send the token and user details in the response
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                username: user.username,
                email: user.email,
            }
        });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Logout a user
export const logout = async (req, res) => {
  try {
      // Log the request body and headers for debugging
      console.log('Logout request received');
      console.log('Headers:', req.headers);

      // No need to check token for logout, but log if token is present
      const authHeader = req.headers['authorization'];
      if (!authHeader) {
          console.log('No Authorization header present');
      } else {
          const token = authHeader.split(' ')[1];
          console.log('Token present:', token);
      }

      // Sending a success response, as token invalidation is typically handled client-side
      console.log('Logout successful');
      res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
      console.error('Logout Error:', error.message); // Log the exact error message
      res.status(500).json({ message: 'Internal server error during logout' });
  }
};

// Logout a user
export const logout = async (req, res) => {
    try {
        // If you're using a token-based system, you might not need to do anything server-side.
        // However, you can perform any necessary cleanup or session invalidation here.

        // Sending a success response
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Logout Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};*/


import User from '../models/User.js';  // Assuming you have a User model defined
import jwt from 'jsonwebtoken';

// Load secret key from environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

// Register a new user
export const register = async (req, res) => {
  try {
    const { username, email, password, mobile, dob, gender } = req.body;

    // Validate input
    if (!username || !email || !password || !mobile || !dob || !gender) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      return res.status(400).json({ message: 'Username or email is already registered' });
    }

    // Create a new user (no password hashing for now)
    const user = new User({ username, email, password, mobile, dob, gender });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login a user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the stored password (no hashing, plain text for now)
    if (password !== user.password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Send the token and user details in the response
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        username: user.username,
        email: user.email,
      }
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Logout a user
export const logout = async (req, res) => {
  try {
    // Log the request body and headers for debugging
    console.log('Logout request received');
    console.log('Headers:', req.headers);

    // No need to check token for logout, but log if token is present
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      console.log('No Authorization header present');
    } else {
      const token = authHeader.split(' ')[1];
      console.log('Token present:', token);
    }

    // Sending a success response, as token invalidation is typically handled client-side
    console.log('Logout successful');
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Logout Error:', error.message); // Log the exact error message
    res.status(500).json({ message: 'Internal server error during logout' });
  }
};
