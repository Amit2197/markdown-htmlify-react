# markdown-htmlify-react

A React component to convert Markdown to HTML, supporting input from URL, local file, or string.

## Installation

You can install the package using npm:

```bash
npm install markdown-htmlify-react
```

Or using yarn:

```bash
yarn add markdown-htmlify-react
```

## Usage

Here is a simple example of how to use the `MarkdownConverter` component in your React application:

```jsx
import React from "react";
import { MarkdownConverter } from "markdown-htmlify-react";
const App = () => {
  const markdownInput = "# Hello World\nThis is a sample markdown text.";

  return (
    <div>
      <MarkdownConverter markdown={markdownInput} />
    </div>
  );
};

export default App;
```

### Using URL Input

```jsx
import React from "react";
import { MarkdownConverter } from "markdown-htmlify-react";

const App = () => {
  const markdownUrl =
    "https://raw.githubusercontent.com/username/repository/branch/README.md";

  return (
    <div>
      <MarkdownConverter url={markdownUrl} />
    </div>
  );
};

export default App;
```

### Using Local File Input

```jsx
import React, { useState } from 'react';
import { MarkdownConverter } from 'markdown-htmlify-react';

const App = () => {
      const [file, setFile] = useState(null);

      const handleFileChange = (e) => {
            setFile(e.target.files[0]);
        };

        return (
            <div>
                <input type=\"file\" accept=\".md\" onChange={handleFileChange} />      {file && <MarkdownConverter localFile={file} />}
            </div>
        );
    };

export default App;
```

## API

### `MarkdownConverter`

#### Props

- `markdown` (string): The markdown string to be converted to HTML.
- `url` (string): The URL of the markdown file to be fetched and converted to HTML.
- `localFile` (File): The local markdown file to be read and converted to HTML.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Repository

- [GitHub Repository](https://github.com/Amit2197/markdown-htmlify-react)
- [Issues](https://github.com/Amit2197/markdown-htmlify-react/issues)

## Author

- **Amit Kumar** - [hi@devamit.in](mailto:hi@devamit.in)

## Keywords

- react
- markdown
- html
- converter
- markdown-to-html
- react-component
