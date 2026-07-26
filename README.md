# GoodSociety Character Web

A browser-based character relationship map for *Good Society*. This project displays character portraits in a circular layout, lets you search by name, and shows relationship lines between characters. Clicking a character opens a popup with their details and optional extra information.

## Features

* Search characters by name
* Show or clear all relationship lines
* Click a character to view their details
* View relationship types visually by color
* Responsive layout that repositions characters on window resize

## Project Structure

* `index.html` — main page structure
* `styles.css` — layout, typography, and visual styling
* `scripts.js` — main UI behavior and character layout
* `characters.js` — character data used to render the map
* `connections.js` — relationship data and line colors
* `popup.js` — popup behavior for character details
* `images/` — portrait and character image assets
* `data/` — supporting data files, if used

## Getting Started

This is a static front-end project. To run it locally, open it through a local web server.

## How the App Works

When the page loads, the app imports the character list and relationship list, lays out the portraits in a circle, and draws connection lines between related characters. Hovering and clicking update what is visible on the page. The search box dims characters that do not match the current search term. The “Show All Connections” button toggles all relationship lines on and off.

## Editing Characters

Character data lives in `characters.js`.

Each character object uses the following fields:

* `id` — unique identifier used in the UI and in connections
* `name` — display name
* `image` — path to the portrait image
* `peerage` — title or rank
* `address` — spoken form of address
* `age` — age text or number
* `faceclaim` — actor or faceclaim name
* `hasInfo` — whether the “More Info” button should appear
* `playedBy` — player or creator name

To add a character:

1. Add a new object to the `characters` array.
2. Add the image to the `images/` folder.
3. Make sure the `id` is unique.
4. Use that same `id` in `connections.js` if the character should be linked to others.

## Editing Relationships

Relationship data lives in `connections.js`.

Each connection uses:

* `from` — character id on one end of the line
* `to` — character id on the other end of the line
* `lineId` — unique line identifier
* `type` — relationship category such as `Platonic`, `Familial`, `Romantic`, or `Other`
* `subtype` — more specific description of the relationship

Relationship colors are controlled separately in `relationshipColors`.

To add a new relationship:

1. Add a new object to the `connections` array.
2. Make sure both `from` and `to` match existing character ids.
3. Give it a unique `lineId`.
4. Add or reuse a color category in `relationshipColors` if needed.

## Popup Details

The popup is handled in `popup.js`. It pulls information from the character list and fills in:

* name
* image
* peerage
* spoken address
* age
* faceclaim
* playedBy
* optional extra info

If `hasInfo` is `true`, the “More Info” button appears. If it is `false`, the button is hidden.

## Notes for Contributors

### Character images should be stored in folder titled 'images', character information should be stored in text documents in folder titled 'data'. Both folders should be in the same directory as the other scripts.

### IMPORTANT
If using for Good Society, the only things that need to be edited are 'characters.js' and 'connections.js'. If you're using this for another system/purpose and want to change the information that appears in the popup box, you'll also need to edit 'popup.js'.


* Keep character ids consistent across all data files.
* Use the existing data shape so the UI continues to work.
* Keep image file names simple and predictable.
* Test the page after adding or editing any character or connection.
* If you change layout behavior, also test the window resize behavior.

## Troubleshooting

### Images are not showing

Check that the file path in `characters.js` matches the file in `images/`.

### A relationship line is missing

Check that both character ids exist and that the `lineId` is unique.

### Search is not working

Make sure the character label text matches the name you expect people to search for (currently returns any character that has the searched term in any part of the name).

### The page looks broken when opened directly

Use a local web server instead of opening the HTML file directly.

## License

This project is licensed under the GPL-3.0 License.
