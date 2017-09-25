# Electroweb
This project aims to change the color of Philips Hue lamps based on the temperature of the CPU this app is running on.

## Develop
You need to have the latest [node](https://nodejs.org/en/download/current/) and [yarn](https://yarnpkg.com/en/docs/install) installed.

After cloning this repo run the following command in the command line to download all dependencies:
```bash
$ yarn
```

To start the app in **dev mode** with hot reloading of views run:
```bash
$ npm run dev
```

### Additional Dev Tools

To get a `devtron` tab in the developer tools (`ctrl`/`cmd` + `shift` + `i`) execute the following from the Console tab of the running Electron app's developer tools:
```
require('devtron').install()
```

## Licence
MIT License

Copyright (c) 2017 Sebastian Kasanzew

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
