# presentation

Quick and dirty client/admin slide-show style presentation software in PHP

## How to use

There are two entrypoints to the application: client.php and admin.php.

Send viewers to client.php. The presenter uses admin.php. The presenter changes the slide with a number input.

To make new slides, add them as HTML files to `/slides`. Make sure the file has a reference to `/js/presenter.js`. Otherwise I think you can put whatever you want in.


