import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const showDeleteConfirmation = (onConfirm) => {
  MySwal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
      MySwal.fire(
        'Deleted!',
        'Your item has been deleted.',
        'success'
      );
    }
  });
};

export const showCartSuccess = () => {
  MySwal.fire({
    title: 'Success!',
    text: 'Navigating to cart details.',
    icon: 'success',
    confirmButtonText: 'Cool'
  });
};

export const showCheckoutSuccess = () => {
  MySwal.fire({
    title: 'Success!',
    text: 'Navigating to checkout.',
    icon: 'success',
    confirmButtonText: 'Cool'
  });
};

export const addToCartSuccess = () => {
  MySwal.fire({
    icon: "success",
    title: "The item has been added to your cart",
    showConfirmButton: false,
    timer: 1500
  });
};
