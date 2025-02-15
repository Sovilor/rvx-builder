const accentColors = document.querySelectorAll('#themecolor-picker span');
const dElement = document.documentElement;
if (localStorage.getItem('auto-next')) {
  document.getElementById('autoBtn').checked = true;
}
if (localStorage.getItem('black-theme')) {
  document.getElementById('blackBtn').checked = true;
}
if (localStorage.getItem('pre-releases')) {
  document.getElementById('preReleasesBtn').checked = true;
}
if (localStorage.getItem('rip-libs')) {
  document.getElementById('ripLibsBtn').checked = true;
}
if (localStorage.getItem('universal-patches')) {
  document.getElementById('universalPatchesBtn').checked = true;
}

accentColors.forEach((color) => {
  if (
    dElement.style.getPropertyValue('--accentColor') ==
    color.style.getPropertyValue('background-color')
  ) {
    color.classList.add('active');
  }
  color.addEventListener('click', () => {
    accentColors.forEach((el) => el.classList.remove('active'));
    color.classList.add('active');
    const colorNow1 = color.style.getPropertyValue('background-color');
    dElement.style.setProperty('--accentColor', colorNow1);
    localStorage.setItem('theme', colorNow1);
  });
});

document.getElementById('autoBtn').addEventListener('click', function () {
  if (localStorage.getItem('auto-next')) {
    localStorage.removeItem('auto-next');
  } else {
    localStorage.setItem('auto-next', true);
  }
});
document.getElementById('blackBtn').addEventListener('click', function () {
  if (localStorage.getItem('black-theme')) {
    localStorage.removeItem('black-theme');
    dElement.classList.remove('black');
  } else {
    localStorage.setItem('black-theme', true);
    dElement.classList.add('black');
  }
});
document.getElementById('preReleasesBtn').addEventListener('click', function () {
  if (localStorage.getItem('pre-releases')) {
    localStorage.removeItem('pre-releases');
  } else {
    localStorage.setItem('pre-releases', true);
  }
  document.getElementById('set-sources-update').click();
});
document.getElementById('ripLibsBtn').addEventListener('click', function () {
  if (localStorage.getItem('rip-libs')) {
    localStorage.removeItem('rip-libs');
  } else {
    localStorage.setItem('rip-libs', true);
  }
});
document.getElementById('universalPatchesBtn').addEventListener('click', function () {
  if (localStorage.getItem('universal-patches')) {
    localStorage.removeItem('universal-patches');
  } else {
    localStorage.setItem('universal-patches', true);
  }
});
