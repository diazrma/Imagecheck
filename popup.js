chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  const tab = tabs[0];
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getImageInfo,
  });
});

function getImageInfo() {
  let images = document.querySelectorAll('img');

  images.forEach(function (image, index) {
    let info = {
      width: image.width,
      height: image.height,
    };

    let resolutionDiv = document.createElement('div');
    resolutionDiv.textContent = `${info.width}x${info.height}`;
    resolutionDiv.style.position = 'absolute';
    resolutionDiv.style.top = '0';
    resolutionDiv.style.left = '0';
    resolutionDiv.style.padding = '2px';
    resolutionDiv.style.background = 'red';
    resolutionDiv.style.color = 'white';
    resolutionDiv.style.fontSize = '13px';
    resolutionDiv.style.zIndex = "999";

    image.parentNode.style.position = 'relative';
    image.parentNode.appendChild(resolutionDiv);

    console.log(`Imagem ${index + 1} - URL: ${image.src}`);
    console.log(`Tamanho: Largura - ${info.width}px, Altura - ${info.height}px`);
    console.log('Resolução: ' + info.width * info.height + ' pixels\n');
    console.log('todos os direitos do lobo pidão')
    console.log('https://www.youtube.com/shorts/08-33fbI-uU?feature=share')
  });

}
