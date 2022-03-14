/**
 * @name selector를 가져오는 함수
 * ```js
 * // 사용방법
 * const $root = getSelector('#root')
 * ```
 */
export const getSelector = (selector) => document.querySelector(selector);

/**
 * @name 이벤트위임 관련 함수
 *
 * ```js
 * // 사용방법
 * addEvent('click', '.digits button', handleClickDigit);
 * ```
 */
export const addEvent = (event, selector, callBackFn) => {
  return document.body.addEventListener(event, (e) => {
    const childEl = e.target.closest(selector);
    if (!childEl) return;
    callBackFn(e.target);
  });
};
