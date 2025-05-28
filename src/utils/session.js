function getSessionId() {
  const sessionId = localStorage.getItem('tmdb_session_id');
  
  if (!sessionId) {
    throw new Error('Session ID not found');
  }
  
  return sessionId;
}

function setSessionId(sessionId) {
  localStorage.setItem('tmdb_session_id', sessionId);
  return sessionId;
}

export { getSessionId, setSessionId };