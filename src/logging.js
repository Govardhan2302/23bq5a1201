const logToServer = async (stack, level, pkg, message) => {
  try {
    const response = await fetch('http://20.244.56.144/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2JxNWExMjAxQHZ2aXQubmV0IiwiZXhwIjoxNzU0MDMxNzMxLCJpYXQiOjE3NTQwMzA4MzEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJlMTU4ZGZjZi05YTYxLTQ2YzQtODg4NS1hN2M3Njc2ZWE0MDIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJiZWxsYW1rb25kYSBnb3ZhcmRoYW4gc2l2YSBzYWkiLCJzdWIiOiI1MWNlMjU3ZS1kNGIzLTQwNWEtYjA5MC1iZmZiYWFlNzVmMDkifSwiZW1haWwiOiIyM2JxNWExMjAxQHZ2aXQubmV0IiwibmFtZSI6ImJlbGxhbWtvbmRhIGdvdmFyZGhhbiBzaXZhIHNhaSIsInJvbGxObyI6IjIzYnE1YTEyMDEiLCJhY2Nlc3NDb2RlIjoiUG5WQkZWIiwiY2xpZW50SUQiOiI1MWNlMjU3ZS1kNGIzLTQwNWEtYjA5MC1iZmZiYWFlNzVmMDkiLCJjbGllbnRTZWNyZXQiOiJUWnhSc05DVFhnYlZrS2dmIn0.oNRv5Kr7L6NNSe1-WBjO3oibiXfjnzduAD5m6IBZKMk'
      },
      mode: 'no-cors',
      body: JSON.stringify({ stack, level, pkg, message })
    });
    if (response.ok) {
      console.log('Log sent successfully (no response details due to CORS)');
    } else {
      console.log('Log send failed with status:', response.status);
    }
  } catch (error) {
    console.error('Logging failed:', error);
  }
};

export const log = (stack, level, pkg, message) => {
  logToServer(stack, level, pkg, message);
};