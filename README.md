# ESGST - Enhanced SteamGifts & SteamTrades

A script that adds some cool features to SteamGifts and SteamTrades.

If you find any bugs or have any feature requests, please file an issue [here](https://github.com/revilheart/ESGST/issues).

---

## Compatibility

Tested and confirmed as working:

* Chrome (since v55)
* Firefox (since v52)

Not tested but should be working:

* Opera (since v42)

Not tested and may not be working (if it works please let me know so I can move it above):

* Edge
* Safari (since v10.1)

---

## Installation

There are two different ways to use ESGST: extension or userscript. You can choose which one you want to use, but the extension is reported to be a lot faster and have a better peformance than the userscript, although there is no major difference between them.

### Option 1 - Extension

* Firefox -> Download [this file](https://github.com/revilheart/ESGST/raw/master/Extension/esgst.xpi) and drag it into "about:addons".
* Chrome -> Download [this zip](https://github.com/revilheart/ESGST/archive/master.zip), extract it to a folder on your computer, go to "chrome://extensions/", tick "Developer mode" in the top right corner, click "Load unpacked extension" and select the "Extensions" folder where you extracted the zip to. Using the extension on Chrome might be a nuisance, since every time you open the browser you will get a message saying that using extensions in developer mode can be unsafe, and every time a new version is released you will have to download the zip again, extract it to the same folder, replacing the previous files, go to the extensions page and click "Reload" under ESGST.

Other browsers might work with the extension, especially Opera, since I believe it uses the same extension system as Chrome, but only Firefox and Chrome have been tested and confirmed as working.

### Option 2 - Userscript

To install the script, you must install [Greasemonkey](http://www.greasespot.net/), [Tampermonkey](https://tampermonkey.net/), or some other userscript manager first. Then [click here](https://github.com/revilheart/ESGST/raw/master/ESGST.user.js) and you should be prompted to install it.

You can also install the script in your Android through Firefox with Violentmonkey or USI. Though some features might not work.

### Upgrade/Downgrade

To upgrade from the script to the extension or downgrade from the extension to the script, all you have to do is export all your data from the one you're uninstalling, install the other one and import all the data you had exported.

* [Changelog](#changelog)

---

## Features

To learn more about each feature you have to install ESGST.

### General

* Attached Image Carousel
* Attached Image Loader
* Avatar Popout
* Accurate Timestamp
* Endless Scrolling
* Embedded Videos
* Fixed Footer
* Fixed Header
* Fixed Main Page Heading
* Fixed Sidebar
* Giveaway/Discussion/Ticket/Trade Tracker
* Hidden Blacklist Stats
* Hidden Community Poll
* Header Refresher
* Image Borders
* Last Page Link
* Level Progress Visualizer
* Multi-Tag
* Notification Merger
* Pagination Navigation On Top
* Quick Inbox View
* Same Tab Opener
* Scroll To Bottom Button
* Scroll To Top Button
* Search Magnifying Glass Button
* Shortcut Keys
* Time To Point Cap Calculator
* Table Sorter
* URL Redirector
* Visible Attached Images

### Giveaways

* Advanced Giveaway Search
* Archive Searcher
* Blacklist Giveaway Loader
* Comment/Entry Checker
* Created/Entered/Won Giveaway Details
* Community Wishlist Search Link
* Delete Key Confirmation
* Enter/Leave Giveaway Button
* Entry Tracker
* Giveaway Bookmarks
* Giveaway Copy Highlighter
* Giveaway Country Loader
* Giveaway Encrypter/Decrypter
* Giveaway Error Search Links
* Giveaway Extractor
* Giveaway Filters
* Giveaway Group Loader
* Giveaway Manager
* Giveaway Recreator
* Giveaway Popup
* Giveaway Templates
* Giveaway Winners Link
* Giveaway Winning Chance
* Giveaway Winning Ratio
* Giveaways Sorter
* Grid View
* Hidden Featured Container
* Hidden Game Remover
* Hidden Game's Enter Button Disabler
* Hidden Pinned Giveaways
* IsThereAnyDeal Info
* Multiple Giveaway Creator
* Next/Previous Train Hotkeys
* One-Click Hide Giveaway Button
* Pinned Giveaways Button
* Quick Giveaway Browsing
* Quick Giveaway Search
* Real CV Calculator
* Sent Key Searcher
* Steam Activation Links
* Stickied Giveaway Countries
* Stickied Giveaway Groups
* Time To Enter Calculator
* Unfaded Entered Giveaway
* Unhide Giveaway Button
* Unsent Gift Sender

### Discussions

* Active Discussions On Top/Sidebar
* Close/Open Discussion Button
* Discussion Edit Detector
* Discussion Filters
* Discussion Highlighter
* Discussions Sorter
* Main Post Popup
* Main Post Skipper
* Old Active Discussions Design
* Puzzle Marker
* Quick Discussion Browsing
* Refresh Active Discussions Button

### Trades

* Trade Bumper

### Comments

* Collapse/Expand Reply Button
* Comment Formatting Helper
* Comment History
* Comment Reverser
* Comment Searcher
* Comment Tracker
* Multi-Reply
* Received Reply Box Popup
* Reply Box On Top
* Reply Box Popup
* Reply From Inbox
* Reply Mention Link

### Users

* Inbox Winner Highlighter
* Level Up Calculator
* Not Activated/Multiple Win Checker
* Not Received Finder
* Real Won/Sent CV Link
* Sent/Won Ratio
* Shared Group Checker
* SteamGifts Profile Button
* SteamTrades Profile Button
* User Filters
* User Giveaway Data
* User Notes
* User Stats
* User Suspension Tracker
* User Tags
* Username History
* Whitelist/Blacklist Checker
* Whitelist/Blacklist Highlighter
* Whitelist/Blacklist Manager
* Whitelist/Blacklist Sorter

### Groups

* Group Highlighter
* Group Library/Wishlist Checker
* Group Stats

### Games

* Entered Game Highlighter
* Game Categories
* Game Tags

### Others

* Automatically add no CV games to the database when searching for games in the new giveaway page.
* Automatically backup your data every specified number of days.
* Automatically sync games/groups when syncing through SteamGifts.
* Automatically update whitelist/blacklist when adding/removing a user to/from those lists.
* Calculate and show data sizes when opening the delete menu.
* Calculate and show data sizes when opening the export menu.
* Calculate and show data sizes when opening the import menu.
* Check whether or not you are on the current version when visiting the ESGST discussion.
* Check whether or not you are on the current version when visiting the main discussions page if the ESGST discussion is in the current page.
* Collapse sections in the settings menu by default.
* Enable ESGST for SteamTrades.
* Enable new features and functionalities by default.
* Hide buttons at the left/right sides of the main page heading to reduce the used space.
* Lock giveaway columns so that they are not draggable (they will remain in the set order).
* Make popups static (they are fixed at the top left corner of the page instead of being automatically centered).
* Open settings menu in a separate tab.
* Open the automatic sync in a new tab.
* Show changelog from the new version when updating.
* Show the feature number in the tooltips of elements added by ESGST.

---

### Other Info

* All requests from `Whitelist/Blacklist Checker`, `Not Activated/Multiple Win Checker`, `Not Received Finder` and `Archive Searcher` are limited to 2 per second, to prevent a stress on the SteamGifts servers.
* If you try to leave the page while `Whitelist/Blacklist Checker`, `Not Activated/Multiple Win Checker`, `Not Received Finder` and `Archive Searcher` are running, you will get a confirmation dialog asking you if you want to leave the page. Additionally, while these features are running, their buttons are faded out.

---

## Changelog

**7.14.4 (February 16, 2018):**

<ul>
    <li><a href="https://github.com/revilheart/ESGST/issues/338">#338</a> Cache Level Progress Visualizer prediction after giveaways end</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/486">#486</a> Fix a bug that does not go to a permalink when using Collapse/Expand Replies Button with the automatic collapse enabled</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/487">#487</a> Fix a bug that does not decrypt giveaways</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/488">#488</a> Fix a bug that does not open the Quick Inbox View popout after a header refresh</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/489">#489</a> Fix a bug that does not run Discussion Filters and Discussions Sorter on page load</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/490">#490</a> Prevent Discussions Highlighter and Puzzle Marker buttons from switching places</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/491">#491</a> Fix a bug that happens when checking suspensions in Not Activated/Multiple Wins Checker</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/492">#492</a> Fix a bug that happens when checking groups in Unsent Gifts Sender</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/493">#493</a> Allow users to update the "No CV Games" database</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/494">#494</a> Fix a bug that auto focus text areas with Comment Formatting Helper enabled</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/496">#496</a> Fix a bug that does not connect wagons when creating trains</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/498">#498</a> Implement a Button class</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/499">#499</a> Fix features that retrieve a user's wishlist from Steam</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/500">#500</a> Fix a bug that happens when sending a ticket with User Suspension Tracker</li>
</ul>

**7.14.3 (February 12, 2018):**

<ul>
    <li><a href="https://github.com/revilheart/ESGST/issues/471">#471 Fix a bug that happens when using the Comment Tracker buttons from the main discussions page</a></li>
    <li><a href="https://github.com/revilheart/ESGST/issues/472">#472 Open discussion in a new tab when middle-clicking the button to go to its first unread comment</a></li>
    <li><a href="https://github.com/revilheart/ESGST/issues/473">#473 Fix a bug that happens when hiding discussions</a></li>
    <li><a href="https://github.com/revilheart/ESGST/issues/477">#477 Fix a bug that happens when using Group/Library Wishlist Checker</a></li>
    <li><a href="https://github.com/revilheart/ESGST/issues/475">#475 Fix a bug in Quick Inbox View</a></li>
    <li><a href="https://github.com/revilheart/ESGST/issues/474">#474 Fix a bug that happens when syncing wishlisted games</a></li>
    <li><a href="https://github.com/revilheart/ESGST/issues/476">#476 Change saving popup to a message next to the switch</a></li>
    <li><a href="https://github.com/revilheart/ESGST/issues/483">#483 Also open features in a new tab when middle-clicking them</a></li>
    <li><a href="https://github.com/revilheart/ESGST/issues/480">#480 Remove the option to notify errors</a></li>
    <li><a href="https://github.com/revilheart/ESGST/issues/484">#484 Fix a bug that does not load features correctly in ESGST-generated pages</a></li>
    <li><a href="https://github.com/revilheart/ESGST/issues/479">#479 Fix a bug in Collapse/Expand Replies Button that happens if the option to automatically collapse is enabled</a></li>
    <li><a href="https://github.com/revilheart/ESGST/issues/482">#482 Make the extension compatible with Firefox Containers</a></li>
    <li><a href="https://github.com/revilheart/ESGST/issues/485">#485 Fix a bug that happens when visiting discussions if the auto option for Discussions Sorter is enabled</a></li>
</ul>

**7.14.2 (February 7, 2018):**

<ul>
    <li><a href="https://github.com/revilheart/ESGST/issues/443">#443</a>Add option to check for whitelists/blacklists between page range</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/445">#445</a>Fix a bug that filters games without a release date even if the option is disabled</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/447">#447</a>Identify dev versions in the header menu</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/448">#448</a>Enhancements to Quick Inbox View</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/451">#451</a>Add option to set fixed width for static popups</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/452">#452</a>Fix a bug that does not save inclusions/exclusions for some features correctly</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/453">#453</a>Fix a bug that happens when using User Giveaways Data</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/454">#454</a>Check if AudioContext can be constructed</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/455">#455</a>Fix a bug that reorders categories when Header Refresher refreshes</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/456">#456</a>Fix a bug that happens when loading Group Stats with Endless Scrolling</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/457">#457</a>Add user count to Group Stats</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/461">#461</a>Fade options that don't contain the query when filtering features in the settings menu</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/462">#462</a>Fix the table headers order in Created/Entered/Won Giveaway Details</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/463">#463</a>Display additional information when hovering over some game categories</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/464">#464</a>Add option to prevent giveaway columns from being movable</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/465">#465</a>Show wishlist category for packages if any of the apps in the package is wishlisted</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/466">#466</a>Fix a bug that moves the enter button when entering a giveaway or upon a header refresh</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/467">#467</a>Fix a bug that detects the status incorrectly in Blacklist Giveaway Loader</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/468">#468</a>Fix a bug that shows negative price for Giveaway Info in Game Categories</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/469">#469</a>Only construct AudioContext when necessary</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/470">#470</a>Add Comments and Invite Only filters to Giveaway Filters</li>
</ul>

**7.14.1 (February 3, 2018):**

<ul>
    <li>Hotfix for v7.14.0</li>
</ul>

**7.14.0 (February 3, 2018):**

<ul>
    <li><a href="https://github.com/revilheart/ESGST/issues/406">#406</a> Add option to play sound with notifications</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/407">#407</a> Allow users to specify where they want features to run</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/410">#410</a> Fix a bug that shows a notification for new wishlist giveaways when there are not any</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/411">#411</a> Fix a bug that duplicates encrypted giveaways when editing a comment</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/413">#413</a> Fix a bug that happens when checking if the user is already a member of the Steam group</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/414">#414</a> Detect all errors</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/415">#415</a> Extend Table Sorter to tables posted in comments</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/418">#418</a> Decrypt encrypted giveaways on page load</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/420">#420</a> Fix a bug in Discussions Highlighter that prevents the page from loading correctly</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/421">#421</a> Fix a bug that happens when filtering giveaways/discussions</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/422">#422</a> Only hide basic filters if the user made an advanced search in Giveaway Filters</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/423">#423</a> Fix a bug that happens when sending unsent gifts</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/424">#424</a> Fix some typos in Unsent Gifts Sender</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/425">#425</a> Fix a bug that notifies about errors even if the option is disabled</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/427">#427</a> Allow users to move the enter button and chance/ratio around like Game Categories does</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/428">#428</a> Fix a bug that happens when clicking the Manage User Tags button in the settings menu</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/430">#430</a> Add Release Date game category</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/431">#431</a> Add missing game categories to Giveaway Filters</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/432">#432</a> Add option to remove all games to Hidden Games Remover</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/433">#433</a> Fix a bug that shows 2 hide giveaway buttons if One-Click Hide Giveaway Button is enabled</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/434">#434</a> Fix a bug that happens when showing notifications in Header Refresher</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/435">#435</a> Change the donation site, since Pledgie is closing down</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/436">#436</a> Separate grid view from normal view when dragging categories</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/437">#437</a> Speed up page load with Reply From Inbox > "Save replies" enabled</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/438">#438</a> Fix a bug that happens when deleting all color settings for the rating category</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/440">#440</a> Bypass Steam's age and mature check when retrieving game categories</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/441">#441</a> Fix a bug that happens when saving settings</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/444">#444</a> Add a feature: Quick Inbox View</li>
</ul>

**7.13.1 (January 14, 2018):**

<ul>
    <li><a href="https://github.com/revilheart/ESGST/issues/399">#399</a> Remove !important rule from colors in Game Categories</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/398">#398</a> Add more information about requesting to join the Steam group</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/401">#401</a> Hide button to request access to the ESGST Steam group if the user is already a member</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/400">#400</a> Add options to customize what happens when clicking on notifications</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/402">#402</a> Fix a bug that happens when syncing with Avatar Popout (Click) enabled</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/403">#403</a> Fix a bug that does not load Puzzle Marker in discussion pages</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/404">#404</a> Fix a bug that does not allow moving categories to the default place if no other categories are present</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/405">#405</a> Add option to only close notifications manually</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/396">#396</a> Fix a style issue with the last item of menu dropdowns</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/353">#353</a> Convert all callback functions into promises and use async/await to deal with them (Fixes a lot of bugs) (Ongoing)</li>
</ul>

**7.13.0 (January 13, 2018):**

<ul>
    <li><a href="https://github.com/revilheart/ESGST/issues/251">#251</a> Fix a bug that does not save encrypted giveaways posted by the user sometimes</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/285">#285</a> Apply discussion filters in the main page</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/331">#331</a> Add options to limit search by date and pages to Sent Keys Searcher</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/348">#348</a> Check for replies to a comment before replying in Reply From Inbox</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/349">#349</a> Add link to reload extension to the update popup</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/362">#362</a> Fix a bug that keeps loading the auto sync</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/367">#367</a> Fix a style compatibility issue between Discussions Highlighter and Puzzle Marker</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/369">#369</a> Initialize filterPresets for new users</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/370">#370</a> Fix a bug that happens when checking users with return options enabled in Whitelist/Blacklist Checker</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/372">#372</a> Add a loading popup when opening the import/export/delete menus until the data sizes are calculated</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/373">#373</a> Fix a bug in Giveaways Manager when unbookmarking giveaways</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/374">#374</a> Add option to save current reply to Saved Replies</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/375">#375</a> Add a feature: URL Redirector</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/376">#376</a> Add a feature: Notification Merger</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/377">#377</a> Fix a bug that updates the last sync date for all data when syncing games/groups</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/378">#378</a> Use name + description to identify a saved reply</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/379">#379</a> Fix a bug that happens when retrieving DLC base information in Game Categories</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/380">#380</a> Add shortcut keys to undo/redo and support for saved replies in Comment Formatting Helper</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/381">#381</a> Fix a bug that opens the description popup even if the option is disabled in Enter/Leave Giveaway Button</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/382">#382</a> Fix a bug in User Giveaways Data that does not retrieve giveaways</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/383">#383</a> Fix a typo in the Game Categories code</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/384">#384</a> Add support for Avatar Popout to the avatar in the header</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/385">#385</a> Add options to calculate data sizes when opening the import/export/delete menus</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/386">#386</a> Add a tool to generate next/previous/counter formats to Multiple Giveaways Creator</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/387">#387</a> Turn Header Refresher notifications into links</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/388">#388</a> Add an option to notify errors</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/389">#389</a> Fix a typo in the counter when performing some checks</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/390">#390</a> Prevent Giveaways Extractor from stopping if there is a badly formatted giveaway link</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/391">#391</a> Fix a conflict with SteamGifts Steam Ratings</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/392">#392</a> Allow winners to be updated when syncing giveaways or using Created/Entered/Won Giveaway Details</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/393">#393</a> Fix a bug that happens when importing from OneDrive</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/394">#394</a> Fix a bug that does not filter giveaways in the created/entered/won pages correctly</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/395">#395</a> Allow more customization for Game Categories</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/353">#353</a> Convert all callback functions into promises and use async/await to deal with them (Fixes a lot of bugs) (Ongoing)</li>
</ul>

**7.12.2 (January 7, 2018):**

<ul>
    <li><a href="https://github.com/revilheart/ESGST/issues/363">#363</a> Fix a bug that does not auto backup all data</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/364">#364</a> Fix a bug that happens when checking for a user's not activated/multiple wins</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/353">#353</a> Convert all callback functions into promises and use async/await to deal with them (Fixes a lot of bugs) (Ongoing)</li>
</ul>

**7.12.1 (January 6, 2018):**

<ul>
    <li><a href="https://github.com/revilheart/ESGST/issues/350">#350</a> Fix a bug that does not highlight discussions</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/351">#351</a> Fix a bug that does not go to the first unread comment correctly</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/352">#352</a> Fix a bug that does not load Quick Discussion Browsing unless Quick Giveaway Browsing is enabled</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/354">#354</a> Fix a bug that does not load User Suspension Tracker in the main tickets page unless Giveaways/Discussions/Tickets/Trades Tracker is enabled</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/355">#355</a> Fix a bug that does not calculate real CV</li>
    <li><a href="https://github.com/revilheart/ESGST/issues/353">#353</a> Convert all callback functions into promises and use async/await to deal with them (Fixes a lot of bugs) (Ongoing)</li>
</ul>