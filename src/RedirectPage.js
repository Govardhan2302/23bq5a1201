import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const RedirectPage = ({ urls }) => {
  const { shortCode } = useParams();
  const urlData = urls[shortCode];

  useEffect(() => {
    if (urlData && Date.now() <= urlData.expiry) {
      window.location.href = urlData.url;
    }
  }, [urlData]);

  if (!urlData || Date.now() > urlData.expiry) {
    return (
      <Box sx={{ padding: 3, textAlign: 'center', mt: 5 }}>
        <Typography variant="h5" color="error">
          Link expired or invalid
        </Typography>
      </Box>
    );
  }
  return null;
};

export default RedirectPage;