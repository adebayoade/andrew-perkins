import { Toaster } from 'react-hot-toast';

export default function Toast() {
  return (
    <Toaster
      toastOptions={{
        position: 'top-right',
        style: {
          fontSize: '16px',
        },
        duration: 3000,

        success: {
          style: {
            background: '#6AA84F',
            color: '#fff',
            padding: '10px 20px',
          },
        },

        error: {
          style: {
            background: '#FEE8E7',
            color: '#FB6161',
            padding: '10px 20px',
          },
        },
      }}
    />
  );
}
