import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({
  open,
  getSnackbarState,
  result,
  data,
}) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    getSnackbarState(false);
  };

  const resultText = {
    success: `${data} 가 복사되었습니다.`,
    error: '복사에 실패했습니다.',
  };

  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={result} sx={{ width: '100%' }}>
        {result !== 'undefined' && resultText[result]}
      </Alert>
    </Snackbar>
  );
}
