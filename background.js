chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: hideAiChatButton
    });
  });
  
  function hideAiChatButton() {
    const button = document.querySelector('button[data-testid="button_abrir-chat"]');
    if (button) {
      button.style.display = 'none';
    }
  }
  