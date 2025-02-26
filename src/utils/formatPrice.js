export const formatPrice = (price) => {
  try {
    // Handle null, undefined, or invalid input
    if (!price && price !== 0) return 'Rp. 0';
    
    // Convert to number if it's a string
    const numPrice = typeof price === 'string' 
      ? parseFloat(price.replace(/[^\d]/g, ''))
      : Number(price);

    // Check if valid number
    if (isNaN(numPrice)) return 'Rp. 0';

    // Format the number with thousand separator
    return `Rp. ${numPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  } catch (error) {
    console.warn('Error formatting price:', error);
    return 'Rp. 0';
  }
};