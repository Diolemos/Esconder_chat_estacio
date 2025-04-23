function hideAiChatElements() {
  const button = document.querySelector('button[data-testid="button_abrir-chat"]');
  if (button) button.style.display = 'none';

  const tooltip = document.querySelector('div.css-15ubn0a');
  if (tooltip) tooltip.style.display = 'none';

  
}

// Run once just in case it's already there
hideAiChatElements();

// Observe for dynamic changes
const observer = new MutationObserver(hideAiChatElements);

observer.observe(document.body, {
  childList: true,
  subtree: true
});