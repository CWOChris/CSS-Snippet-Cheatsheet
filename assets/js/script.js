const copyToClipboard = (text) => {
    const input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  };
  
  const button = document.querySelector('#copyButton1');
  button.addEventListener('click', () => {
    const textToCopy = 'Text to be copied';
    copyToClipboard(textToCopy);
  });









// $(document).ready(function() {
//     $('#copyButton').click(function() {
//         var textToCopy = $('#textToCopy1').text();
//         var tempTextArea = $('<textarea>');
//         tempTextArea.val(textToCopy);
//         tempTextArea.select();

//         try {
//             document.execCommand('copy');
//             alert('Text copied');
//         } catch (err) {
//             alert('Unable to copy text');
//         } finally {
//             tempTextArea.remove();
//         }
//     });
// });
