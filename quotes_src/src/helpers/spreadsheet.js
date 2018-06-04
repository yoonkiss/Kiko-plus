import { orderBy } from 'lodash';
import { hash } from './utils';
import { get } from './localStorage';

import config from '../config';

/**
 * Get the user authentication status
 */
export function checkAuth(immediate, callback) {
  window.gapi.auth.authorize({
    'client_id': config.clientId,
    'scope': config.scope,
    'immediate': immediate
  }, callback);
}

/**
 * Load the quotes from the spreadsheet
 * Embellish them with user own likes
 */
export function load(sheet, callback) {
  let userLikes = get('likes') || [];

  window.gapi.client.load('sheets', 'v4', () => {
    window.gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: config.spreadsheetId,
      range: sheet+'!A2:E'
    }).then((response) => {
      var range = response.result;

      const data = response.result.values || [],
            categories = [];

      let items = data.map((cell, i) => {
        let row = i + 2, // Save row ID fore later update
            question = cell[0].split('\n'),
            answer = cell[1].split('\n'),
            category = cell[2],
            keywords = (typeof cell[3] !== "undefined" && cell[3] !== null) ? cell[3].split('\n') : [] ,
            likes = parseInt(cell[4], 10) || 0,
            id = hash(question), // Generate an ID by hashing the quote
            liked = userLikes.indexOf(id) > -1 ? true : false;
        // Save an array of unique authors for the filters
        if (categories.indexOf(category) === -1) {
          categories.push(category);
        }

        return {
          row,
          question,
          answer,
          category,
          keywords,
          likes,
          liked
        }
      });

      // Initially order quotes by date, most recent first
      //rows = orderBy(rows, ['date'], ['desc']);
      // And authors alphabetically
      //rows.sort();

      callback({
        items,
        categories
      });
    }, (response) => {
      callback(false, response.result.error);
    });
  });
}

/**
 * Update a single cell value
 */
export function updateCell(sheet, column, row, value, successCallback, errorCallback) {
  window.gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: config.spreadsheetId,
    range: sheet+'!' + column + row,
    valueInputOption: 'USER_ENTERED',
    values: [ [value] ]
  }).then(successCallback, errorCallback);
}
