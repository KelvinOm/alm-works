import * as $ from 'jquery';
import {elementNoteService} from './element-note.service';
import {createNoteObject} from '../utils';

const APP_CODE_WORD = 'sticky-note-id';

let apiNoteService = {
  getNote: function(element) {
    return new Promise(function(resolve) {
      setTimeout(resolve);
    }).then(function() {
      return localStorage.getItem($(element).attr('id'));
    });
  },

  saveNote: function(id, element) {
    return new Promise(function(resolve) {
      setTimeout(resolve);
    }).then(function() {
      return localStorage.setItem(id, element);
    });
  },

  removeNote: function(element) {
    return new Promise(function(resolve) {
      setTimeout(resolve);
    }).then(function() {
      return localStorage.removeItem($(element).attr('id'));
    });
  },

  addNewNote: function(element) {
    let numeralSystem = 16;
    let id = `${APP_CODE_WORD}:${(+new Date).toString(numeralSystem)}`;
    let note = createNoteObject(id, $(element));

    $(element).attr('id', id);
    this.saveNote(id, note);
  },

  getAllNotes: function() {
    return new Promise(function(resolve) {
      // 2000 — for demonstrate initial download
      let delayTime = 2000;
      setTimeout(resolve, delayTime);
    }).then(function() {
      let keys = Object.keys(localStorage);
      let isNoteExist = false;

      keys.forEach(key => {
        if (key.includes(APP_CODE_WORD)) {
          isNoteExist = true;
          elementNoteService.addSavedNote(JSON.parse(localStorage.getItem(key)));
        }
      });

      if (!isNoteExist) {
        elementNoteService.addWelcomeNote();
      }
    });
  }
};

export {
  apiNoteService
};
