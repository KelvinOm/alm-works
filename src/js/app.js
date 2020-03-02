import * as $ from 'jquery';
import {loadModule} from './modules/load.module';
import {noteEventModule} from './modules/note-event.module';

function bootstrapModule(module) {
  $(function() {
    if (module.init) {
      module.init();
    }
  });
  return module;
}

bootstrapModule(function() {
  return {
    init: () => {
      loadModule.init();
      noteEventModule.init();
    }
  };
}());