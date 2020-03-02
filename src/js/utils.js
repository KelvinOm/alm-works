import * as $ from 'jquery';

// create object for save to localstorage and comparison with it
export function createNoteObject(id, element) {
  return JSON.stringify({
    id,
    height: $(element).outerHeight(),
    width: $(element).outerWidth(),
    top: $(element).offset().top,
    left: $(element).offset().left,
    transform: $(element).css('transform'),
    backgroundColor: $(element).css('background-color'),
    zIndex: $(element).css('z-index'),
    value: $(element).val()
  });
}