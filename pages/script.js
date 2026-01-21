function downloadCV() {
  const link = document.createElement('a');
  link.href = 'Albornoz_Diego_CV_SW.pdf';
  link.download = 'Diego_Albornoz_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
