const site = 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox';

  chrome.action.onClicked.addListener(async (tab) => {
      if (tab.url.startsWith(site)) {
          chrome.scripting.executeScript({
              target: { tabId: tab.id },
              files: ['content.js']
          });
      }
  });