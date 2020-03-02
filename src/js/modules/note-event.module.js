import * as $ from 'jquery';
import {apiNoteService} from '../services/api-note.service';
import {elementNoteService} from "../services/element-note.service";
import {createNoteObject} from '../utils';

let noteEventModule = {
  init: function () {
    this._dragAndDropEventListener();
    this._submitAddFormEventListener();
  },

  _dragAndDropEventListener: function (noteContainer = 'body') {
    $(noteContainer).on('mousedown', '.sticky-note', event => {

      let draggableElem = $(event.target).addClass('sticky-note--draggable');
      let containerElem = $(noteContainer);
      let trashElem = $('.trash-zone');

      let height = draggableElem.outerHeight();
      let width = draggableElem.outerWidth();

      let maxLeftPos = containerElem.offset().left + containerElem.width() - draggableElem.width();
      let maxTopPos = containerElem.offset().top + containerElem.height() - draggableElem.height();
      let minLeftPos = containerElem.offset().left;
      let minTopPos = containerElem.offset().top;

      let topStartPos = draggableElem.offset().top + height - event.pageY;
      let leftStartPos = draggableElem.offset().left + width - event.pageX;

      this._moveNoteToFront(event.target);
      this._saveNoteChanges(event.target);

      $(noteContainer).on('mousemove', event => {
        let resizeAreaSize = 15;

        if (topStartPos > resizeAreaSize && leftStartPos > resizeAreaSize) {
          if (this._isOverlapping(draggableElem, trashElem)) {
            trashElem.addClass('trash-zone--overlapped');
          } else {
            trashElem.removeClass('trash-zone--overlapped');
          }

          let topPos = event.pageY + topStartPos - height;
          let leftPos = event.pageX + leftStartPos - width;

          if (topPos <= minTopPos) topPos = minTopPos;
          if (leftPos <= minLeftPos) leftPos = minLeftPos;
          if (topPos >= maxTopPos) topPos = maxTopPos;
          if (leftPos >= maxLeftPos) leftPos = maxLeftPos;

          draggableElem.offset({top: topPos, left: leftPos});
        }
      }).on('mouseup', () => {
        // reset the values for correct drag and drop operation
        topStartPos = 0;
        leftStartPos = 0;

        if (this._isOverlapping(draggableElem, trashElem)) {
          apiNoteService.removeNote(event.target).then(() => {
            elementNoteService.remove(event.target);
          });
        }

        trashElem.removeClass('trash-zone--overlapped');
        draggableElem.removeClass('sticky-note--draggable');
      });
    });
  },

  _isOverlapping: function (firstElem, secondElem) {
    let firstElemOffsetBottom = $(firstElem).offset().top + $(firstElem).outerHeight();
    let firstElemOffsetRight = $(firstElem).offset().left + $(firstElem).outerWidth();
    let secondElemOffsetBottom = $(secondElem).offset().top + $(secondElem).outerHeight();
    let secondElemOffsetRight = $(secondElem).offset().left + $(secondElem).outerWidth();

    return !(
      (firstElemOffsetBottom < $(secondElem).offset().top)
      || ($(firstElem).offset().top > secondElemOffsetBottom)
      || (firstElemOffsetRight < $(secondElem).offset().left)
      || ($(firstElem).offset().left > secondElemOffsetRight)
    );
  },

  _moveNoteToFront: function (noteElem) {
    $('.sticky-note').css('z-index', 'auto');
    $(noteElem).css('z-index', '1');
  },

  _timerId: null,

  _saveNoteChanges(element) {
    apiNoteService.getNote(element).then(oldValue => {
      $(element).on('mouseup change paste keyup', () => {
        let debounceTime = 100;

        clearTimeout(this._timerId);

        this._timerId = setTimeout(() => {
          this._saveChangesIfNeeded(oldValue, element);
        }, debounceTime);
      });
    });
  },

  _saveChangesIfNeeded: function (oldValue, element) {
    let id = $(element).attr('id');

    let newValue = createNoteObject(id, element);

    if (id && oldValue !== newValue) {
      apiNoteService.saveNote(id, newValue);
    }
  },

  _submitAddFormEventListener() {
    $('.add-form').on('submit', event => {
      event.preventDefault();

      let size = $('.add-form__size .select__control').val();
      let color = $('.add-form__color input:checked').val();
      let text = 'Edit me!';

      elementNoteService.add(size, color, text);
    });
  },
};

export {
  noteEventModule
};
