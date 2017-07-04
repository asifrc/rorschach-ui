import $ from 'webpack-zepto'

export default class ResponseAPI {
  getAllResponses(cb) {
    $.get('/responses', cb);
  }
  saveResponse(response, cb) {
    var data = {
      response: {
        image: response.url,
        description: response.description
      }
    };
    $.post('responses/', data, cb);
  }
};

