import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import { log } from './logging';

const UrlShortener = ({ urls, setUrls }) => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeShortCode = Math.random().toString(36).substr(2, 5);
    const newShortUrl = `http://short.me/${fakeShortCode}`;
    log('frontend', 'info', 'component', `URL shortened: ${longUrl} to ${newShortUrl}`);
    setShortUrl(newShortUrl);
    setUrls(prevUrls => ({
      ...prevUrls,
      [fakeShortCode]: { url: longUrl, expiry: Date.now() + 30 * 60 * 1000 }
    }));
  };

  return (
    <Box
      sx={{
        padding: 3,
        maxWidth: '600px',
        margin: 'auto',
        textAlign: 'center',
        bgcolor: '#fff',
        borderRadius: 2,
        boxShadow: 3,
        mt: 5,
      }}
    >
      <Typography variant="h3" gutterBottom color="primary">
        URL Shortener
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter long URL"
          sx={{ mb: 2, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          sx={{ mb: 2, borderRadius: 2 }}
        >
          Shorten URL
        </Button>
      </form>
      {shortUrl && (
        <Typography variant="h6" color="secondary">
          Shortened URL: <Link href={`/redirect/${shortUrl.split('/').pop()}`} target="_blank" rel="noopener" underline="hover">{shortUrl}</Link>
        </Typography>
      )}
    </Box>
  );
};

export default UrlShortener;