document.addEventListener('DOMContentLoaded', function() {
  // Create iframe element
  const iframe = document.createElement('iframe');
  iframe.src = 'https://buildmyagent.io/shared/vykRJUrrMm?embed=true';
  iframe.width = '100%';
  iframe.height = '600';
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.minHeight = '400px';
  iframe.style.height = '600px';
  iframe.style.maxHeight = '90vh';
  iframe.allowFullscreen = true;
  iframe.loading = 'lazy';

  // Append iframe to the body or a specific container
  const container = document.body; // or document.getElementById('iframe-container') if you have a specific div
  container.appendChild(iframe);
});
