import {apiNoteService} from '../services/api-note.service';
import {lockService} from "../services/lock.service";

let loadModule = {
  init: function () {
    lockService.add();

    apiNoteService.getAllNotes().then(() => lockService.remove());
  }
};

export {
  loadModule
};