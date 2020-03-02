import * as $ from 'jquery';

let lockService = {
  add: function() {
    let loaderTemplate = `
         <div class="loader">
            <div class="loader__dots"></div>
         </div>
      `;

    $('body').append($(loaderTemplate));
  },

  remove: function() {
    $('.loader').remove();
  }
};

export {
  lockService
};
