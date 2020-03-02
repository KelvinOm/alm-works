import * as $ from 'jquery';
import {apiNoteService} from './api-note.service';

let elementNoteService = {
  add: function(size = 'medium', color = 'yellow', textValue = '') {
    let sizeClass = `sticky-note--${size}`;
    let colorClass = `sticky-note--${color}`;

    let noteTemplate = $(`
        <textarea class='sticky-note ${sizeClass} ${colorClass}'
                  name='text'>${textValue}</textarea>
      `);

    $('body').append(noteTemplate);
    apiNoteService.addNewNote(noteTemplate);
  },

  addSavedNote: function(noteProperties) {
    let noteTemplate = $(`
        <textarea class='sticky-note'
                  name='text'></textarea>
      `);
    noteTemplate.css(this._getStylesForNote(noteProperties));
    noteTemplate.attr('id', noteProperties.id);
    noteTemplate.val(noteProperties.value);
    $('body').append(noteTemplate);
  },

  addWelcomeNote: function() {
    let size = 'large';
    let color = 'yellow';
    let welcomeText = 'Hello!\n\n' +
                      'This is «Awesome Sticky Notes».\n\n' +
                      'You can add new notes using the «Add note» button below and you can delete them using the «shredder» in the lower right corner. Enjoy!';
    this.add(size, color, welcomeText);
  },

  remove: function(element) {
    $(element).removeAttr('id'); // necessary for the correct saving to storage
    $(element).remove();
  },

  _getStylesForNote: function({height, width, top, left, backgroundColor, zIndex}) {
    return {
      height,
      width,
      top,
      left,
      backgroundColor,
      zIndex
    };
  }
};

export {
  elementNoteService
};
