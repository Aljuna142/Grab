async function simulatePayment(orderId) {
    // Simulate a successful payment response
    const paymentResponse = {
      id: 'mock-payment-id-12345',
      status: 'Paid',
      update_time: new Date().toISOString(),
      email_address: 'test@example.com'
    };
  
    // Send payment details to the backend
    const response = await fetch(`/api/v1/orders/${orderId}/pay`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paymentResponse)
    });
  
    if (!response.ok) {
      throw new Error('Failed to update order');
    }
  
    const updatedOrder = await response.json();
    console.log('Order updated successfully:', updatedOrder);
  }
  
  // Example usage
  simulatePayment('66b4cff46a63582ac8719a9a');
  


  //this is frontend update oreder
  // Update order to paid
await fetch(`/api/v1/orders/${orderId}/pay`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(paymentDetails), // Include necessary payment details
});

// Update order to delivered
await fetch(`/api/v1/orders/${orderId}/deliver`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
});
