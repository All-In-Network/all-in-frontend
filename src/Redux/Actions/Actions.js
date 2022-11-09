export const onModalOpen = (val) => (dispatch) => {
  dispatch({
    type: 'MODAL_OPEN',
    payload: val,
  });
};
export const onChangeDarkMode = (val) => (dispatch) => {
  if (val === 'dark') {
    window.document.children[0].setAttribute('data-theme', 'dark');
  } else if (val === 'high-contrast') {
  } else {
    window.document.children[0].setAttribute('data-theme', 'light');
  }
  dispatch({
    type: 'DARK_MODE',
    payload: val,
  });
  dispatch({
    type: 'HIGH_CONTRAST',
    payload: val,
  });
};
export const onChangeHighcontrast = (val) => (dispatch) => {
  if (val === 'high-contrast') {
    window.document.children[0].setAttribute('data-theme', 'high-contrast');
  } else if (val === 'dark') {
    window.document.children[0].setAttribute('data-theme', 'light');
  } else {
    window.document.children[0].setAttribute('data-theme', 'light');
  }
  dispatch({
    type: 'HIGH_CONTRAST',
    payload: val,
  });
  dispatch({
    type: 'DARK_MODE',
    payload: val,
  });
};

export const OnchangeRTLmode = (val) => (dispatch) => {
  if (document.body.classList.contains('rtl_mode')) {
    document.body.classList.remove('rtl_mode');
  } else {
    document.body.classList.add('rtl_mode');
  }

  dispatch({
    type: 'rtl_mode',
    payload: val,
  });
};

export const onMenuData = (val) => (dispatch) => {
  dispatch({
    type: 'MENUDATA',
    payload: val,
  });
};
