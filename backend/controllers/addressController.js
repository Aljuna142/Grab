/*const Address = require('../models/addressModel');

// Save Address
exports.saveAddress = async (req, res) => {
  try {
    const { userId, name, mobile, street, area, landmark, city, district, country, postalCode } = req.body;

    const newAddress = new Address({
      userId,
      name,
      mobile,
      street,
      area,
      landmark,
      city,
      district,
      country,
      postalCode
    });

    await newAddress.save();

    res.status(201).json({ message: 'Address saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save address', error });
  }
};

// Fetch Addresses by User
exports.getUserAddresses = async (req, res) => {
  try {
    const { userId } = req.params;

    const addresses = await Address.find({ userId });

    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch addresses', error });
  }
};
*/
/*import Address from '../models/addressModel.js';

// Controller for adding a new address
export const addAddress = async (req, res) => {
  try {
    const address = new Address({
      user: req.body.user,
      name: req.body.name,
      mobile: req.body.mobile,
      street: req.body.street,
      area: req.body.area,
      nearbyLandmark: req.body.nearbyLandmark,
      city: req.body.city,
      district: req.body.district,
      country: req.body.country,
      postalCode: req.body.postalCode,
    });

    await address.save();
    res.status(201).json({ message: 'Address added successfully', address });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Controller for getting addresses
export const getAddress = async (req, res) => {
  try {
    const addresses = await Address.find({ user: req.query.userId });
    res.status(200).json({ addresses });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
*/


/*pakka import mongoose from 'mongoose';

import Address from '../models/addressModel.js';

export const addAddress = async (req, res) => {
  try {
    const address = new Address({
      name: req.body.name,
      mobile: req.body.mobile,
      street: req.body.street,
      area: req.body.area,
      nearbyLandmark: req.body.nearbyLandmark,
      city: req.body.city,
      district: req.body.district,
      country: req.body.country,
      postalCode: req.body.postalCode,
    });

    await address.save();
    res.status(201).json({ message: 'Address added successfully', address });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getAddress = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json({ addresses });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};




// Update address by ID
/*export const updateAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }
    res.status(200).json({ message: 'Address updated successfully', address });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
*/
// Delete address by ID
/*export const deleteAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }
    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};*/

// Delete address by ID
/*export const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid address ID' });
    }

    const address = await Address.findByIdAndDelete(id);

    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


// Update address by ID
export const updateAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }
    res.status(200).json({ message: 'Address updated successfully', address });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete address by ID
export const deleteAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }
    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};old pakka */



// addressController.js
import Address from '../models/addressModel.js';

// Function to add a new address
export const addAddress = async (req, res) => {
  try {
    const { customerName, mobileNumber, email, street, city, country, postalCode } = req.body;

    const newAddress = new Address({
      customerName,
      mobileNumber,
      email,
      street,
      city,
      country,
      postalCode,
    });

    await newAddress.save();
    res.status(201).json({ message: 'Address added successfully', address: newAddress });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Function to get all addresses
export const getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json({ addresses });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Function to get an address by ID
export const getAddressById = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await Address.findById(id);

    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.status(200).json({ address });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Function to update an address by ID
/*export const updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const { customerName, mobileNumber, email, street, city, country, postalCode } = req.body;

    const updatedAddress = await Address.findByIdAndUpdate(
      id,
      { customerName, mobileNumber, email, street, city, country, postalCode },
      { new: true }
    );

    if (!updatedAddress) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.status(200).json({ message: 'Address updated successfully', address: updatedAddress });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};*/


export const updateAddress = async (req, res) => {
  try {
    console.log('Request Params:', req.params);
    console.log('Request Body:', req.body);

    const { id } = req.params;
    const { customerName, mobileNumber, email, street, city, country, postalCode } = req.body;

    const updatedAddress = await Address.findByIdAndUpdate(
      id,
      { customerName, mobileNumber, email, street, city, country, postalCode },
      { new: true }
    );

    if (!updatedAddress) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.status(200).json({ message: 'Address updated successfully', address: updatedAddress });
  } catch (error) {
    console.error('Error updating address:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};


// Function to delete an address by ID
export const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAddress = await Address.findByIdAndDelete(id);

    if (!deletedAddress) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

