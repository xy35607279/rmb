import { Loading } from 'element-ui';

let loadingCount = 0;
let loadingInstance;

function closeLoading() {
  loadingInstance.close();
}

function startLoading(text = 'loading...') {
  loadingInstance = Loading.service({
    text,
    lock: true,
    background: 'rgba(0, 0, 0, 0.3)'
  });
  setTimeout(closeLoading, 10000);
}

export function showLoading(text) {
  if (loadingCount === 0) {
    startLoading(text);
  }
  loadingCount += 1;
}

export function hideLoading(text) {
  if (loadingCount <= 0) {
    return;
  }
  loadingCount -= 1;
  if (loadingCount === 0) {
    closeLoading();
  }
}
